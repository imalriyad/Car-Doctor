import { Link } from "react-router-dom";
import {FiArrowRightCircle} from 'react-icons/fi'
/* eslint-disable react/prop-types */
const ServiceCard = ({service}) => {
    const {title,img,price,_id}= service
  return (
    <div>
      <div className="bg-base-100  border p-4 rounded-md">
        <img
          src={img}
          alt=""
          className="w-full md:h-[300px] h-[200px] object-cover mb-5 rounded-md"
        />
        <h1 className="text-xl mb-2 font-bold">{title}</h1>
       <div className="flex items-center justify-between"> 
        <h1 className="text-lg text-[#FF3811] font-bold">Price : ${price}</h1>
        <Link state={`/ServiceDetails/${_id}`} to={`/ServiceDetails/${_id}`} className="md:px-4 text-xs md:text-sm md:py-2 px-2 py-2 text-white rounded bg-[#FF3811] font-semibold gap-2 items-center flex">See Details <FiArrowRightCircle className="md:text-xl text-lg" /></Link>
       </div>
      </div>
    </div>
  );
};

export default ServiceCard;
