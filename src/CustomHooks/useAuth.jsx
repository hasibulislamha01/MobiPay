import { useContext } from "react";
import { AuthContext } from "../Components/SharedComponents/Navbar/Auth/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;