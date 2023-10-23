/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("services.json").then((data) => setServices(data.data));
  }, []);

  return (
    <div>
      <div className="max-w-screen-sm mx-auto text-center px-4 space-y-3">
        <p className="text-[#FF3811] font-bold text-xl">Service</p>
        <h1 className="font-bold text-2xl md:text-4xl">Our Service Area</h1>
        <p className="text-[#737373] text-sm md:text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 px-4 mt-10 gap-10 md:grid-cols-2 grid-cols-1 ">
      {
        services?.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default Services;
