import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useGetUserRole = () => {

    const server = import.meta.env.VITE_SERVER_LINK
    const { user } = useAuth()
    const [userInfo, setUserInfo] = useState()
    console.log(userInfo)
    const userRole = userInfo?.role?.value;
    const userEmail = user?.email
    console.log("Server link is", server,  "email", userEmail, "role", userRole)


    useEffect(() => {
        axios.get(`${server}/users/${userEmail}`)
            .then(res => {
                setUserInfo(res?.data)
            }).catch(err => {
                console.error(err?.message)
            })
    }, [userEmail, server])

    return userRole &&  userRole
};

export default useGetUserRole;