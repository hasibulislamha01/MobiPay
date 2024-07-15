import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;