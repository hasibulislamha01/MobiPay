import GuestVies from "./GuestVies";
import useAuth from "../../CustomHooks/useAuth";

import UserView from "./UserView";
import AgentView from "./AgentView";
import AdminHome from "./AdminHome";
import { Toaster } from "react-hot-toast";
import useGetUserRole from "../../CustomHooks/useGetUserRole";
import RoleBasedNavigation from "../../Components/SharedComponents/Navbar/RoleBasedNavigation/RoleBasedNavigation";

const Home = () => {

    const { user } = useAuth()
    const userRole = useGetUserRole()




    console.log(user)
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Toaster></Toaster>
            <div>
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
            <RoleBasedNavigation></RoleBasedNavigation>
        </div>
    );
};

export default Home;