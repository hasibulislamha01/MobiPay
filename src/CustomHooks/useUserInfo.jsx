import { useEffect, useState } from "react";

const useUserInfo = (value, email) => {

    // console.log('key:', value, 'Email:', email)
    const serverLink = import.meta.env.VITE_SERVER_LINK

    const infoQuery = { 
        askingKey: value ,
        askingEmail: email
    }
    const queryString = new URLSearchParams(infoQuery).toString()
    const url = `${serverLink}/userInfo/?${queryString}`

    console.log(url);

    const [info, setInfo] = useState({})

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [url])

    return info
};

export default useUserInfo;