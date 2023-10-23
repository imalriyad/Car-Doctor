import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from"../Components/Footer"


const Layout = () => {
    return (
        <>
        <div className="mx-auto max-w-screen-2xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Layout;