import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Googlelogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfull!");
        navigate(`${state ? state : "/"}`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-xs md:max-w-sm px-4 mx-auto">
      <div className="flex flex-col">
        <div className="divider mt-0">OR</div>
      </div>
      <button onClick={handleGoogle} className="btn flex w-full ">
        <img
          src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
          className="w-[20px]"
          alt=""
        />
        Google
      </button>
    </div>
  );
};

export default Googlelogin;
