import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useGetUserData = () => {

    const server = import.meta.env.VITE_SERVER_LINK
    const { user } = useAuth()
    const userEmail = user?.email

    const [userInfo, setUserInfo] = useState()


    useEffect(() => {
        axios.get(`${server}/users/${userEmail}`)
            .then(res => {
                setUserInfo(res?.data)
            }).catch(err => {
                console.error(err?.message)
            })
    }, [server, userEmail])

    return userInfo
    
};

export default useGetUserData;