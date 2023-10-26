import { Link, useLocation, useNavigate } from "react-router-dom";
import Googlelogin from "./Googlelogin";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const signupHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const cheack = form.checkbox.checked;
    if (!cheack) {
      return toast.error("Accept terms and conditions to procced");
    }
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Profile updated!");
          })
          .catch((error) => {
            console.log(error);
          });

        toast.success("registration succefull");
        form.reset();
        navigate(`${state ? state : "/"}`);
      })
      .catch((error) => toast.error(error));
  };

  return (
    <div className="flex gap-10 items-center md:flex-row flex-col-reverse  mx-auto max-w-screen-xl">
      <div>
        <img
          src="https://i.ibb.co/qNBXJvk/login.png"
          className="mx-auto md:w-full w-[70%]"
          alt=""
        />
      </div>
      <div className="w-full max-w-md">
        <form onSubmit={signupHandle} className="card-body mx-auto ">
          <h1 className="text-4xl font-bold mb-5 text-[#FF3811]">Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold ">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="focus:outline-none  text-sm input input-bordered"
              required
            />
            <label className="label mt-3">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
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
            <span className="my-4 gap-2 flex items-center">
              {" "}
              <input
                type="checkbox"
                name="checkbox"
                className=" checkbox checkbox-sm "
                id=""
              />
              Accept terms & conditions
            </span>
          </div>

          <input
            type="submit"
            className="btn text-white hover:bg-[#FF3811] bg-[#FF3811]"
            value="Sign Up"
          />
        </form>
        <Googlelogin></Googlelogin>
        <p className="text-center mt-4">
          {" "}
          Already have an account?{" "}
          <span className="text-[#FF3811] font-medium">
            <Link to={"/Signin"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
