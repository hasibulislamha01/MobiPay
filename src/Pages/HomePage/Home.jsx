import GuestVies from "./GuestVies";
import useAuth from "../../CustomHooks/useAuth";

import UserView from "./UserView";
import AgentView from "./AgentView";
import AdminView from "./AdminView";
import { Toaster } from "react-hot-toast";
import RoleBasedNavigation from "../../Components/SharedComponents/Navbar/RoleBasedNavigation/RoleBasedNavigation";
import useGetUserData from "../../CustomHooks/useGetUserData";

const Home = () => {

    const { user } = useAuth()
    const userInfo = useGetUserData()
    const userRole = userInfo?.role?.value;
    const userStatus = userInfo?.status;
    console.log(userStatus, 'role is', userRole)



    console.log(user)
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <Toaster></Toaster>
            <div>
                {
                    user ?
                        userRole === 'User' ?
                            <UserView></UserView> :
                            userRole === "Agent" ?
                                <AgentView></AgentView> : <AdminView></AdminView>
                        :
                        <GuestVies></GuestVies>

                }
            </div>

            <div className="w-full">
                {
                    userStatus === 'pending' ?
                        <h1 className="text-center text-lg font-medium text-orange-500 ">Your membership request is in process</h1>
                        : <RoleBasedNavigation></RoleBasedNavigation>
                }
            </div>
        </div>
    );
};

export default Home;