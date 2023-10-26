/* eslint-disable react/no-unescaped-entities */
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import RouterBanner from "../Components/RouterBanner";
import Facilitys from "./Facilitys";

const ServiceDetails = () => {
  const loadedService = useLoaderData();
  
  const { id } = useParams();
  const targetData = loadedService?.find((item) => item._id === id);
  const {_id,title, img, description, price } = targetData;

  return (
    <div className="max-w-screen-2xl px-4">
      <RouterBanner></RouterBanner>
      <div className="md:flex mt-10 gap-10 h-[500px]">
        <div className="md:w-3/4 space-y-8">
          <img
            src={img}
            alt=""
            className="object-fill rounded-lg w-full h-full mb-10"
          />

          <h1 className="md:text-4xl font-bold text-3xl ">{title}</h1>
          <p className="text-[#737373] ">{description}</p>

{/* Facilitys */}
          <div className="grid md:grid-cols-2 gap-10 ">
            {targetData.facility.map((facilitys) => (
              <Facilitys facilitys={facilitys} key={facilitys.name}></Facilitys>
            ))}
          </div>

{/* processs */}
          <div className="space-y-10">
            <h1 className="md:text-4xl mt-20 font-bold text-3xl">
              3 Simple Steps to Process
            </h1>
            <p className="text-[#737373]">{description}</p>

            <div className="grid md:grid-cols-3 gap-10 text-center ">
              <div className="border drop-shadow bg-base-100 p-7 rounded-md space-y-2">
                <img
                  src="https://i.ibb.co/d5tG07m/Group-38667.png"
                  alt=""
                  className="mx-auto mb-4"
                />
                <h1 className="font-bold text-xl">Step One</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="border drop-shadow bg-base-100 p-7 rounded-md space-y-2">
                <img
                  src="https://i.ibb.co/6HS1vCm/Group-38667-1.png"
                  alt=""
                  className="mx-auto mb-4"
                />
                <h1 className="font-bold text-xl">Step Two</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="border drop-shadow bg-base-100 p-7 rounded-md space-y-2">
                <img
                  src="https://i.ibb.co/5LDbKCh/Group-38667-2.png"
                  alt=""
                  className="mx-auto mb-4"
                />
                <h1 className="font-bold text-xl">Step Three</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
          </div>

{/* youtube video */}
          <div>
            <iframe
              className="w-full rounded-lg my-10"
              width="560"
              height="500"
              src="https://www.youtube.com/embed/Y3jcQCdeJAs?si=sSbTpFGMbrGYsduc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

        </div>

{/* side menu */}
        <div className="md:w-2/6">
          <div className="p-5 bg-base-200 h-[450px]  space-y-3 rounded-md">
            <h1 className="font-bold text-2xl">Services</h1>
            {loadedService?.map((item) => (
              <div key={item._id} className="sideMenu ">
                <NavLink
                  to={`/ServiceDetails/${item._id}`}
                  className="btn bg-white w-full "
                >
                  {item.title}{" "}
                  <IoMdArrowForward className="text-xl"></IoMdArrowForward>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="bg-[#151515] my-10 p-8 rounded-lg">
            <h1 className="font-bold text-2xl text-white ">Download</h1>
            <div className="mt-4 flex justify-between">
              {" "}
              <span className="flex flex-col">
                {" "}
                <h1 className="font-bold md:text-lg flex gap-2 text-white ">
                  <img src="https://i.ibb.co/ZNqRw34/Frame.png" alt="" />
                  Our Brochure
                </h1>
                <p className="font-light text-[#A2A2A2] ml-10">Download</p>
              </span>
              <button className="btn hover:bg-[#FF3811] border-none bg-[#FF3811] btn-sm">
                <IoMdArrowForward className="text-xl text-white " />
              </button>
            </div>

            <div className="mt-4 flex justify-between">
              {" "}
              <span className="flex flex-col">
                {" "}
                <h1 className="font-bold md:text-lg flex gap-2 text-white ">
                  <img src="https://i.ibb.co/ZNqRw34/Frame.png" alt="" />
                  Company Details
                </h1>
                <p className="font-light text-[#A2A2A2] ml-10">Download</p>
              </span>
              <button className="btn btn-sm hover:bg-[#FF3811] border-none bg-[#FF3811]">
                <IoMdArrowForward className="text-xl text-white" />
              </button>
            </div>
          </div>

          <div className="bg-[#151515] my-10 p-8 rounded-lg">
            <img
              src="https://i.ibb.co/FxdV691/logo.png"
              alt=""
              className="mx-auto"
            />
            <p className="text-white text-center mt-4 w-52 mx-auto font-semibold">
              Need Help? We Are Here To Help You
            </p>
            <div className="bg-base-100 rounded-md h-[160px] md:p-10 p-6 text-center relative">
              <h1 className="md:text-xl font-bold">
                <span className="text-[#FF3811]">Car Doctor</span> Special
              </h1>
              <p>
                Save up to{" "}
                <span className="text-[#FF3811] font-medium mt-2 ">
                  60% off
                </span>
              </p>
              <button className="btn text-white normal-case bg-[#FF3811] hover:bg-[#FF3811] w-[80%] absolute -bottom-[15px] right-[10%] border-none">
                Get A Quote
              </button>
            </div>
          </div>
          <div>
            <h1 className="md:text-4xl font-bold text-3xl">Price ${price}</h1>
            <Link to={`/Cheakout/${_id}`} className="btn w-full mt-5 bg-[#FF3811] hover:bg-[#FF3811] text-white">
              Proceed Checkout{" "}
              <MdOutlineShoppingCartCheckout className="text-xl" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ServiceDetails;
