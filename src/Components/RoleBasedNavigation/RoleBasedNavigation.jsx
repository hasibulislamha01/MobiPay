import { Menu } from "antd";
import { useState } from "react";
import useNavigationOptions from "../../CustomHooks/useNavigationOptions";

const RoleBasedNavigation = () => {

    const navOptions = useNavigationOptions()
    console.log(navOptions)




    const [current, setCurrent] = useState(); 
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }

    return (

        <Menu
            className="flex justify-center"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={navOptions}
        />

    )

};

export default RoleBasedNavigation;