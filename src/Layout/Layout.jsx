import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";



const Layout = () => {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;