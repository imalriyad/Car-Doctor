import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Sider = () => {
  const carServiceTitles = [
    "Affordable Price For Car Servicing",
    "Quality Tire Replacement Services",
    "Professional Brake Repair Solutions",
    "Expert Oil Change Packages",
  ];

  const descriptions = [
    "There are many variations of passages of text available, but the majority have suffered alteration in some form.",
    "Countless versions of text passages exist, yet most have undergone some degree of modification.",
    "Numerous textual passages exhibit differences, though the majority have been subject to alterations in some way.",
    "Various text excerpts show variances, with most having experienced some form of alteration.",
  ];

  const sliderImg = [
    'https://i.ibb.co/dm0YhMH/5.jpg',
    "https://i.ibb.co/KW6x7S9/1.jpg",
    "https://i.ibb.co/DLxFD7Z/2.jpg",
    "https://i.ibb.co/ScGpPfF/6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handalePrev = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = Math.abs(
      isFirstIndex ? sliderImg.length - 1 : currentIndex - 1
    );
    setCurrentIndex(newIndex);
  };

  const handaleNext = () => {
    const isLastIndex = currentIndex === sliderImg.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div
        className="md:h-[700px] h-[370px] relative  rounded-lg"
        style={{
          backgroundImage: `url(${sliderImg[currentIndex]})`,
          objectFit: "contain",
          backgroundSize: "cover",
        }}
      >
        
        <div className="absolute md:w-2/4 py-[10%] p-4 md:pl-16 space-y-5 md:space-y-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full rounded-lg">
        {/* <div className="absolute md:top-[30%] top-14 px-4 max-w-xl md:ml-16 space-y-5 md:space-y-7 text-white"> */}
          <h1 className="md:text-6xl text-2xl font-bold">
            {carServiceTitles[currentIndex]}
          </h1>
          <p className="text-[#f4ededfc] md:text-base text-sm">
            {descriptions[currentIndex]}
          </p>
          <button className="md:px-6 text-xs md:text-sm md:py-3 px-2 py-2 text-white rounded bg-[#FF3811] font-semibold">
          Discover More
          </button>
          <button className="md:px-6 text-xs md:text-sm ml-5 md:py-3 px-2 py-2 border hover:bg-[#FF3811] text-white rounded hover:border-none font-bold hover:duration-300">Latest Project</button>
        </div>
        <div className="flex items-center gap-5 justify-end absolute right-10 bottom-10 ">
          <span
            onClick={handalePrev}
            className="md:w-14 md:h-14 w-11 h-11 relative bg-[#2b2a2ab4] hover:bg-[#FF3811] rounded-full text-white cursor-pointer hover:duration-300"
          >
            {" "}
            <BsArrowLeftShort className="md:text-5xl text-4xl right-1 top-1 absolute md:bottom-1 md:right-1"></BsArrowLeftShort>
          </span>
          <span
            onClick={handaleNext}
            className="md:w-14 md:h-14 w-11 h-11 relative bg-[#2b2a2ab4] hover:bg-[#FF3811] rounded-full text-white cursor-pointer hover:duration-300"
          >
            {" "}
            <BsArrowRightShort className="md:text-5xl text-4xl right-1 top-1 absolute md:bottom-1 md:right-1"></BsArrowRightShort>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sider;
