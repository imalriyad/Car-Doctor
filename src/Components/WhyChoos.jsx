/* eslint-disable react/no-unescaped-entities */

const WhyChoos = () => {
  return (
    <div className="px-4">
      <div className="max-w-screen-sm mx-auto text-center px-4 my-14 space-y-3">
        <p className="text-[#FF3811] font-bold text-sm md:text-base group-hover:text-white mt-3">
          Core Features
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">Why Choose Us</h1>
        <p className="text-[#737373] text-sm md:text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-5">
        <div className="border hover:bg-[#FF3811]  hover:duration-700 group text-center p-5 md:p-10 rounded-lg flex flex-col cursor-pointer">
          <img
            src="https://i.ibb.co/nD4FR14/group.png"
            className="h-[50px] mx-auto"
            alt=""
          />
          <h1 className="text-[#444] text-sm md:text-base group-hover:text-white mt-3 font-bold">
            Expert Team
          </h1>
        </div>
        <div className="border text-center p-5 md:p-10 rounded-lg flex flex-col hover:bg-[#FF3811] hover:duration-700 group cursor-pointer">
          <img
            src="https://i.ibb.co/SxVMXdz/Group-38729.png"
            className="h-[50px] mx-auto rounded-full"
            alt=""
          />
          <h1 className="text-[#444] text-sm md:text-base group-hover:text-white mt-3 font-bold">
            Timely Delivery
          </h1>
        </div>
        <div className="border text-center p-5 md:p-10 rounded-lg flex flex-col hover:bg-[#FF3811] hover:duration-700 group cursor-pointer">
          <img
            src="https://i.ibb.co/n1Sbt5j/person.png"
            className="h-[50px] mx-auto"
            alt=""
          />
          <h1 className="text-[#444] text-sm md:text-base group-hover:text-white mt-3 font-bold">
            24/7 Support
          </h1>
        </div>
        <div className="border text-center p-5 md:p-10 rounded-lg flex flex-col hover:bg-[#FF3811] hover:duration-700 group cursor-pointer">
          <img
            src="https://i.ibb.co/6WhFc17/check.png"
            className="h-[50px] mx-auto "
            alt=""
          />
          <h1 className="text-[#444] text-sm md:text-base group-hover:text-white mt-3 font-bold">
            100% Guranty
          </h1>
        </div>
        <div className="border text-center p-5 md:p-10 rounded-lg flex flex-col hover:bg-[#FF3811] hover:duration-700 group cursor-pointer">
          <img
            src="https://i.ibb.co/xMfz9XN/Wrench.png"
            className="h-[50px] mx-auto"
            alt=""
          />
          <h1 className="text-[#444] text-sm md:text-base group-hover:text-white mt-3 font-bold">
            Best Equipment
          </h1>
        </div>
        <div className="border text-center p-5 md:p-10 rounded-lg flex flex-col hover:bg-[#FF3811] hover:duration-700 group cursor-pointer">
          <img
            src="https://i.ibb.co/80B3CYM/deliveryt.png"
            className="h-[50px] mx-auto"
            alt=""
          />
          <h1 className="text-[#444] text-sm md:text-base group-hover:text-white mt-3 font-bold">
            Timely Delivery
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhyChoos;
