/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function TeamSlider() {
  return (
    <div className="px-4">
     <div className="max-w-screen-sm mx-auto text-center px-4 my-14 space-y-3">
        <p className="text-[#FF3811] font-bold text-xl">Team</p>
        <h1 className="font-bold text-2xl md:text-4xl">Meet Our Team</h1>
        <p className="text-[#737373] text-sm md:text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <Swiper
        slidesPerView={2} // Set the default slidesPerView (for mobile devices)
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3, // Set slidesPerView for larger devices (e.g., screens wider than 768px)
            spaceBetween:30,
          },
        }}
      >
        <SwiperSlide className="mx-auto">
          <div className="md:p-5 p-2 text-center bg-base-100 border rounded-lg md:h-[450px] md:w-[400px]">
            <img
              src="https://i.ibb.co/xjKCppZ/1.jpg"
              className="rounded-lg "
              alt=""
            />
            <h1 className="md:text-2xl text-sm font-bold mt-6">Car Engine Plug</h1>
            <p className="text-[#737373] mt-1 md:text-base text-xs">Engine Expert</p>
            <div className="flex justify-center mt-5 gap-2 items-center">
              <img
                src="https://i.postimg.cc/PxRsZjBy/fb.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/qM8Bftfd/insta.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:p-5 p-2 text-center bg-base-100 border rounded-lg md:h-[450px] md:w-[400px]">
            <img
              src="https://i.ibb.co/zH3Ynt4/3.jpg"
              className="rounded-lg"
              alt=""
            />
            <h1 className="md:text-2xl text-sm font-bold mt-6">Car Engine Plug</h1>
            <p className="text-[#737373] mt-1 md:text-base text-xs">Engine Expert</p>
            <div className="flex justify-center mt-5 gap-2 items-center">
              <img
                src="https://i.postimg.cc/PxRsZjBy/fb.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/qM8Bftfd/insta.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:p-5 p-2 text-center bg-base-100 border rounded-lg md:h-[450px] md:w-[400px]">
            <img
              src="https://i.ibb.co/vv3WK8z/2.jpg"
              className="rounded-lg"
              alt=""
            />
            <h1 className="md:text-2xl text-sm font-bold mt-6">Car Engine Plug</h1>
            <p className="text-[#737373] mt-1 md:text-base text-xs">Engine Expert</p>
            <div className="flex justify-center mt-5 gap-2 items-center">
              <img
                src="https://i.postimg.cc/PxRsZjBy/fb.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/qM8Bftfd/insta.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:p-5 p-2 text-center bg-base-100 border rounded-lg md:h-[450px] md:w-[400px]">
            <img
              src="https://i.ibb.co/DLxFD7Z/2.jpg"
              className="rounded-lg"
              alt=""
            />
            <h1 className="md:text-2xl text-sm font-bold mt-6">Car Engine Plug</h1>
            <p className="text-[#737373] mt-1 md:text-base text-xs">Engine Expert</p>
            <div className="flex justify-center mt-5 gap-2 items-center">
              <img
                src="https://i.postimg.cc/PxRsZjBy/fb.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/qM8Bftfd/insta.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:p-5 p-2 text-center bg-base-100 border rounded-lg md:h-[450px] md:w-[400px]">
            <img
              src="https://i.ibb.co/yXk9GcG/2.jpg"
              className="rounded-lg"
              alt=""
            />
            <h1 className="md:text-2xl text-sm font-bold mt-6">Car Engine Plug</h1>
            <p className="text-[#737373] mt-1 md:text-base text-xs">Engine Expert</p>
            <div className="flex justify-center mt-5 gap-2 items-center">
              <img
                src="https://i.postimg.cc/PxRsZjBy/fb.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
              <img
                src="https://i.postimg.cc/qM8Bftfd/insta.png"
                className="md:w-[40px]  w-[20px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
