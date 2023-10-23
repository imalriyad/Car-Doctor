/* eslint-disable react/no-unescaped-entities */
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const loadedService = useLoaderData();
  const { id } = useParams();

  const targetData = loadedService?.find((item) => item._id === id);
  const { title, img, description, price } = targetData;
  console.log(targetData);
  return (
    <div className="max-w-screen-2xl px-4">
      <div className="relative w-full md:h-auto h-[50vh]">
        <img
          src="https://i.ibb.co/M7LHn1J/checkout.png"
          className="w-full h-full"
          alt=""
        />
        <h1 className="absolute top-[40%] left-[20%] md:left-[25%] lg:left-[38%] text-2xl md:text-5xl font-bold text-white ">
          Service Details
        </h1>
        <div className="absolute bottom-0 md:p-3 p-1 bg-[#FF3811] left-[25%] lg:left-[44%] md:left-[37%] text-sm  text-white">
          Home/Service Details
        </div>
      </div>

      <div className="md:flex mt-10 gap-10 h-[500px]">
        <div className="md:w-3/4 space-y-8">
          <img
            src={img}
            alt=""
            className="object-fill rounded-lg w-full h-full mb-10"
          />

          <h1 className="md:text-4xl font-bold text-3xl">{title}</h1>
          <p className="text-[#737373]">{description}</p>

          <div className="grid md:grid-cols-2 gap-10 ">
            {targetData.facility.map((facilitys) => (
              <div
                key={facilitys.name}
                className="bg-base-200 p-8 rounded-md border-t-2 border-[#FF3811]"
              >
                <h1 className="font-bold text-xl mb-3">{facilitys.name}</h1>
                <p className="font-light text-[#737373]">{facilitys.details}</p>
              </div>
            ))}
          </div>

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

          <div>
            <iframe
            className="w-full rounded-lg my-10"
              width="560"
              height="500"
              src="https://www.youtube.com/embed/Y3jcQCdeJAs?si=sSbTpFGMbrGYsduc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="md:w-2/6">
          <div className="p-5 bg-base-200 h-[450px]  space-y-3 rounded-md">
            <h1 className="font-bold text-2xl">Services</h1>
            {loadedService?.map((item) => (
              <div key={item._id} className="sideMenu ">
                <NavLink to={`/ServiceDetails/${item._id}`} className="btn bg-white w-full ">
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
            <button className="btn w-full mt-5 bg-[#FF3811] hover:bg-[#FF3811] text-white">
              Proceed Checkout{" "}
              <MdOutlineShoppingCartCheckout className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
