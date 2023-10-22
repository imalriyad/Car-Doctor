/* eslint-disable react/no-unescaped-entities */

const AboutUs = () => {
  return <div>
     <div className="flex lg:flex-row flex-col px-4 items-start justify-between my-20 mb-36 gap-20 ">
      <div className="relative lg:max-w-xl md:mx-auto mx-0 w-9/12 lg:mx-0 md:h-[400px]">
        <img
          src="https://i.ibb.co/r2yYqK2/person.jpg"
          className=" rounded-[10px] object-cover h-full"
          alt=""
        />
        <img
          src="https://i.ibb.co/9vp3kBz/parts.jpg"
          alt=""
          className="rounded-[10px] object-cover w-[200px] md:w-4/6 md:h-4/6 absolute bg-white p-2 -right-16 -bottom-16"
        />
      </div>

      <div className="space-y-5 lg:max-w-3xl">
        <p className="text-[#FF3811] font-bold text-xl">About Us</p>
        <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
        <p className="text-[#737373]">
        While there exist numerous versions of Lorem Ipsum passages, most have undergone some degree of alteration, either through the inclusion of humorous elements or the insertion of random words that lack any semblance of credibility.
        </p>
        <p className="text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="md:px-6 text-xs md:text-sm md:py-3 px-2 py-2 text-white rounded bg-[#FF3811] font-semibold">
          Get More Info
        </button>
      </div>
    </div>
  </div>

};

export default AboutUs;
