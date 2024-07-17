import axios from "axios";
import { useEffect, useState } from "react";
import PendingUsersCard from "./PendingUsersCard";

const ManageUsers = () => {

    const server = import.meta.env.VITE_SERVER_LINK
    const [pendingUsers, setPendingUsers] = useState([])
    useEffect(() => {
        axios.get(`${server}/pendingUsers`)
            .then(res => {
                setPendingUsers(res?.data)
                console.log(res?.data)
            }).catch(error => {
                console.error(error?.message)
            })
    }, [server])

    console.log(pendingUsers)

    return (
        <div className="min-h-screen pt-12 lg:pt-32">
            <h1 className="text-3xl text-center">Pending Users</h1>
            <div className="mt-12 flex flex-col gap-6">
                {
                    pendingUsers?.map(pendingUser =>
                        <PendingUsersCard
                            key={pendingUser?._id}
                            pendingUser={pendingUser}
                        ></PendingUsersCard>
                    )
                }
            </div>
        </div>
    );
};

export default ManageUsers;