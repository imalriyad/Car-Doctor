const Info = () => {
  return (
   <div className="px-4">
     <div className="bg-[#151515] my-10 p-4 md:p-10 rounded-xl md:flex items-center justify-around">
      <div className="flex gap-4 h-[120px]  items-center text-white">
        <img src="https://i.ibb.co/9W7fGR4/001-timetable.png" className="w-[30px]" alt="" />
        <span>
          <h1 className="font-light text-sm">We are open monday-friday</h1>
          <h1 className="text-xl mt-1 font-bold">7:00 am - 9:00 pm</h1>
        </span>
      </div>

      <div className="flex gap-4  h-[100px]  items-center text-white">
        <img src="https://i.ibb.co/8KRLMf6/Group-34.png" className="w-[30px]" alt="" />
        <span>
          <h1 className="font-light text-sm">Have a question?</h1>
          <h1 className="text-xl mt-1 font-bold">+2546 251 2658</h1>
        </span>
      </div>

      <div className="flex gap-4  h-[100px]  items-center text-white">
        <img src="https://i.ibb.co/QKw4DVB/Group-35.png" className="w-[30px]" alt="" />
        <span>
          <h1 className="font-light text-sm">Need a repair? our address</h1>
          <h1 className="text-xl mt-1 font-bold">Liza Street, New York</h1>
        </span>
      </div>
    </div>
   </div>
  );
};

export default Info;
