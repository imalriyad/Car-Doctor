import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const RouterBanner = () => {
  const [routertitle, setRouteTittle] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const title = pathname.split("/");
    if (title.length >= 3) {
      const textBetweenSlashes = title[1];
      setRouteTittle(textBetweenSlashes);
    }
  }, [pathname]);
  return (
    <div>
      <div className="relative w-full md:h-auto h-[50vh]">
        <img
          src="https://i.ibb.co/M7LHn1J/checkout.png"
          className="w-full h-full"
          alt=""
        />
        <h1 className="absolute p-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
         top-[40%] left-[20%] md:left-[25%] lg:left-[38%] text-2xl md:text-5xl font-bold text-white ">
          {routertitle?routertitle:pathname.replace('/','')}
        </h1>
        <div className="absolute bottom-0 md:p-3 p-1 bg-[#FF3811] left-[25%] lg:left-[44%] md:left-[37%] text-sm  text-white">
          Home/{routertitle?routertitle:pathname.replace('/','')}
        </div>
      </div>
    </div>
  );
};

export default RouterBanner;
