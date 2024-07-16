import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useGetUserRole = () => {

    const server = import.meta.env.VITE_SERVER_LINK
    const { user } = useAuth()
    const [userInfo, setUserInfo] = useState()
    console.log(userInfo)
    const userRole = userInfo?.role?.value;
    console.log(user?.email, userRole)


    useEffect(() => {
        axios.get(`${server}/users/pending/${user?.email}`)
            .then(res => {
                setUserInfo(res?.data)
            }).catch(err => {
                console.error(err?.message)
            })
    }, [user, server])

    return userRole
};

export default useGetUserRole;