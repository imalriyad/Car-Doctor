/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Googlelogin from "./Googlelogin";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import toast from "react-hot-toast";
import axios from "axios";

const Signin = () => {
  const { SigniniWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SigniniWithEmail(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };

        // get access token
        axios
          .post("https://car-doctor-server-seven-red.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              toast.success("Login Successfull!");
              navigate(state ? state : "/");
            }
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex gap-10 items-center md:flex-row flex-col-reverse justify-center mx-auto max-w-screen-xl">
      <div>
        <img
          src="https://i.ibb.co/qNBXJvk/login.png"
          className="mx-auto md:w-full w-[70%]"
          alt=""
        />
      </div>
      <div className="w-full max-w-md">
        <form onSubmit={handleLogin} className="card-body mx-auto">
          <h1 className="text-4xl font-bold mb-5 text-[#FF3811]">Sign In</h1>
          <div className="form-control">
            <label className="label mt-3">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="focus:outline-none text-sm input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="focus:outline-none text-sm input input-bordered"
              required
            />
            <span className="my-4 text-sm hover:underline gap-2 flex items-center">
              Forgot password?
            </span>
          </div>

          <input
            type="submit"
            className="btn text-white hover:bg-[#FF3811] bg-[#FF3811]"
            value="Sign In"
          />
        </form>
        <Googlelogin></Googlelogin>
        <p className="text-center mt-4">
          {" "}
          Don't have an account?{" "}
          <span className="text-[#FF3811] font-medium">
            <Link to={"/Signup"}>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
