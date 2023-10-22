import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AboutUs from "../Components/AboutUs";
import Services from "../Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
    ],
  },
]);

export default router;
