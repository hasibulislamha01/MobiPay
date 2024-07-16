import { FiSend } from "react-icons/fi";
import useGetUserRole from "./useGetUserRole";
import { BsCashCoin } from "react-icons/bs";
import { MdHistory, MdInstallMobile } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { Link } from "react-router-dom";

const useNavigationOptions = () => {
    
    const userRole = useGetUserRole()
    console.log(userRole)

    const options1 = [
        {
            label: <Link to="/send-money">Send Money</Link>,
            key: 'nav1',
            icon: <FiSend />,
        },
        {
            label: <Link to="/cash-out">Cash Out</Link>,
            key: 'nav2',
            icon: <BsCashCoin />,
        },
        {
            label: <Link to="/cash-in">Cash In</Link>,
            key: 'nav3',
            icon: <MdInstallMobile />,
        },
        {
            label: <Link to="/balance-inquiry">Balance Inquiry</Link>,
            key: 'nav4',
            icon: <CiWallet />,
        },
        {
            label: <Link to="/history">History</Link>,
            key: 'nav5',
            icon: <MdHistory />,
        },
    ]

    
    const options2 = [
        {
            label: <Link to="/transaction-management">Transaction Management</Link>,
            key: 'nav21',
            icon: <FiSend />,
        },
        {
            label: <Link to="/balance-inquiry">Balance Inquiry</Link>,
            key: 'nav24',
            icon: <CiWallet />,
        },
        {
            label: <Link to="/transactions-history">Transactions History</Link>,
            key: 'nav25',
            icon: <MdHistory />,
        },
    ];

    
    const options3 = [
        {
            label: <Link to='user-management'>Manage Users</Link>,
            key: 'nav21',
            icon: <FiSend />,
        },
        
        {
            label: <Link to='system-monitoring'>System Monitoring</Link>,
            key: 'nav35',
            icon: <MdHistory />,
        },
    ]

    let navOptions 
    if(userRole === "User"){
        navOptions = options1
    } else if(userRole === 'Agent'){
        navOptions = options2
    } else if(userRole === "Admin"){
        navOptions = options3
    }

    console.log(navOptions)

   
    return navOptions


};



export default useNavigationOptions;