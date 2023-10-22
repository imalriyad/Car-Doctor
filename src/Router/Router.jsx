import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AboutUs from "../Components/AboutUs";
import Services from "../Services/Services";
import ServiceDetails from "../Services/ServiceDetails";

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
      {
        path:'/ServiceDetails/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:()=> fetch('https://api.npoint.io/8d701c9baa305ec8910f')
      }
    ],
  },
]);

export default router;
