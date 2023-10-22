/* eslint-disable react/prop-types */
const ServiceCard = ({service}) => {
    const {title,img,price}= service
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
        <button className="md:px-6 text-xs md:text-sm md:py-3 px-2 py-2 text-white rounded bg-[#FF3811] font-semibold">See Details</button>
       </div>
      </div>
    </div>
  );
};

export default ServiceCard;
