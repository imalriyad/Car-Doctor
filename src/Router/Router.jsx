import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ServiceDetails from "../Services/ServiceDetails";
import Signup from "../Form/Signup";
import Signin from "../Form/Signin";
import Cheakout from "../Components/Cheakout";
import AboutUs from "../Components/AboutUs";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Info from "../Components/Info";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrders from "../Pages/MyOrders";

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
        path: "/Service",
        element: <Services></Services>,
      },
      {
        path: "/Testimonial",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/MyOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/Contact",
        element: <Info></Info>,
      },

      {
        path: "/ServiceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>,
          </PrivateRoute>
        ),
        loader: () => fetch("https://cardoctor-server-pi.vercel.app/services"),
      },
      {
        path: "/Cheakout/:id",
        element: <Cheakout></Cheakout>,
        loader: ({ params }) =>
          fetch(`https://cardoctor-server-pi.vercel.app/services/${params.id}`),
      },
      {
        path: "/Signup",
        element: <Signup></Signup>,
      },
      {
        path: "/SignIn",
        element: <Signin></Signin>,
      },
    ],
  },
]);

export default router;
