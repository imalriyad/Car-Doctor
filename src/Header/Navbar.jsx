import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
const Navbar = () => {
  const menuItems = ["Home", "About", "Services", "Blog", "Contact"];
  const menu = menuItems.map((item) => (
    <NavLink
      to={item === "Home" ? "/" : "/" + item}
      className="font-semibold ml-10 text-[#444] text-base"
      key={item}
    >
      {item}
    </NavLink>
  ));
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-lg space-y-3 dropdown-content mt-4 z-[1] p-4 shadow bg-base-100 rounded-box w-52 "
            >
              {menu}
            </ul>
          </div>
          <Link className="">
            <img
              src="https://i.ibb.co/FxdV691/logo.png"
              className="h-16"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <FiShoppingBag className="text-2xl mr-4 cursor-pointer"></FiShoppingBag>
          <PiMagnifyingGlassBold className="text-2xl mr-4 cursor-pointer"/>
          <Link className="md:px-6 md:py-3 px-2 py-2 border hover:bg-[#FF3811] hover:text-white rounded border-[#FF3811] text-[#FF3811] font-bold hover:duration-300">
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
