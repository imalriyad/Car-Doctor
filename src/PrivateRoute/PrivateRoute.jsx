/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (isLoading) {
    return <div className="mx-auto text-center my-[10%] max-w-screen-2xl"><span className="loading loading-spinner loading-lg"></span></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to={"/SignIn"}></Navigate>;
};

export default PrivateRoute;
