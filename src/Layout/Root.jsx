import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import { Footer } from "antd/es/layout/layout";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;