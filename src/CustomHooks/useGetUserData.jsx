import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useGetUserData = () => {

    const server = import.meta.env.VITE_SERVER_LINK
    // console.log(server)
    const { user } = useAuth()
    const userEmail = user?.email

    const [userInfo, setUserInfo] = useState()
    // console.log(userInfo)


    useEffect(() => {
        axios.get(`${server}/users/${userEmail}`)
            .then(res => {
                setUserInfo(res?.data)
                // console.log(res?.data)
            }).catch(err => {
                console.error(err?.message)
            })
    }, [server, userEmail])

    if(userInfo){
        console.log(userInfo)
        return userInfo
    }
    
};

export default useGetUserData;