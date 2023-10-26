import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  const location = useLocation();

  // Determine whether to show or hide the footer based on the current route
  const isServiceDetailsPage = location.pathname.includes('/ServiceDetails');
  const showFooter = !isServiceDetailsPage;

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      {
       showFooter && <Footer></Footer>
      }
    </>
  );
};

export default Layout;
