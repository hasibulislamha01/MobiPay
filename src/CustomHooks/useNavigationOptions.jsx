import { FiSend } from "react-icons/fi";
import useGetUserRole from "./useGetUserRole";
import { BsCashCoin } from "react-icons/bs";
import { MdHistory, MdInstallMobile } from "react-icons/md";
import { CiWallet } from "react-icons/ci";

const useNavigationOptions = () => {
    
    const userRole = useGetUserRole()
    console.log(userRole)

    const options1 = [
        {
            label: 'Send Money',
            key: 'nav1',
            icon: <FiSend />,
        },
        {
            label: 'Cash Out',
            key: 'nav2',
            icon: <BsCashCoin />,
        },
        {
            label: 'Cash In',
            key: 'nav3',
            icon: <MdInstallMobile />,
        },
        {
            label: 'Balance inquery',
            key: 'nav4',
            icon: <CiWallet />,
        },
        {
            label: 'History',
            key: 'nav5',
            icon: <MdHistory />,
        },
    ]

    
    const options2 = [
        {
            label: 'Transaction Management',
            key: 'nav21',
            icon: <FiSend />,
        },
        
        {
            label: 'Balance inquery',
            key: 'nav24',
            icon: <CiWallet />,
        },
        {
            label: 'Transactions History',
            key: 'nav25',
            icon: <MdHistory />,
        },
    ]

    
    const options3 = [
        {
            label: 'User Management',
            key: 'nav21',
            icon: <FiSend />,
        },
        
        {
            label: 'System Monitoring',
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