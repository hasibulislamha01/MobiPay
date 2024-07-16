import GuestVies from "./GuestVies";
import useAuth from "../../CustomHooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import UserView from "./UserView";
import AgentView from "./AgentView";
import AdminHome from "./AdminHome";
import { Toaster } from "react-hot-toast";

const Home = () => {

    const server = import.meta.env.VITE_SERVER_LINK
    const { user } = useAuth()
    const [userInfo, setUserInfo] = useState()
    console.log(userInfo)
    const userRole = userInfo?.role?.value;
    console.log(user?.email, userRole)


    // const [showableComponent, setShowableComponent] = useState(null);
    // console.log(showableComponent)

    // useEffect(() => {
    //     if (userRole === "User") {
    //         setShowableComponent(<UserView />);
    //     } else if (userRole === "Agent") {
    //         setShowableComponent(<AgentView />);
    //     }
    // }, [userRole]);

    useEffect(() => {
        axios.get(`${server}/users/pending/${user?.email}`)
            .then(res => {
                setUserInfo(res?.data)
            }).catch(err => {
                console.error(err?.message)
            })
    }, [user, server])

    console.log(user)
    return (
        <div className="min-h-screen">
            <Toaster></Toaster>
            {
                user ?
                    userRole === 'User' ?
                        <UserView></UserView> :
                        userRole === "Agent" ?
                            <AgentView></AgentView> : <AdminHome></AdminHome>
                            :
                            <GuestVies></GuestVies>

            }
        </div>
    );
};

export default Home;