import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const CrudFrom = ({ targetData }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { title, description, price, img } = targetData;
  const handleCheackOut = (e) => {
    e.preventDefault();
    const serviceName = e.target.serviceName.value;
    const paidPrice = e.target.paidPrice.value;
    const customerName = e.target.yourName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const customerEmail = e.target.customerEmail.value;
    const location = e.target.location.value;
    const order = {
      serviceName,
      paidPrice,
      customerName,
      customerEmail,
      phoneNumber,
      location,
      img,
    };

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    const isAM = hour < 12;
    let hour12 = hour % 12;
    if (hour12 === 0) {
      hour12 = 12;
    }
    const ampm = isAM ? "AM" : "PM";
    const time = `${hour12}:${minute}${ampm} ${day}-${month}-${year}`;

    fetch("https://cardoctor-server-pi.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...order, ordeRtime: time }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Order hase placed Successfully");
        }
      });
  };
  return (
    <div className="w-full mx-auto bg-base-200 my-10 md:p-10 p-5 rounded-e-lg">
      <button
        onClick={goBack}
        className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white"
      >
        <AiOutlineArrowLeft className="text-2xl" />
        Back
      </button>
      <form
        onSubmit={handleCheackOut}
        className="md:grid grid-cols-2 md:space-y-0 space-y-4  mx-auto max-w-2xl gap-6"
      >
        <input
          type="text"
          defaultValue={title}
          placeholder="Service Name"
          name="serviceName"
          className="focus:outline-none w-full text-sm input input-bordered"
          required
        />
        <input
          type="number"
          placeholder="Total Pay"
          name="paidPrice"
          defaultValue={price}
          className="focus:outline-none text-sm w-full input input-bordered"
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          defaultValue={user?.displayName}
          name="yourName"
          className="focus:outline-none text-sm w-full input input-bordered"
          required
        />
        <input
          type="number"
          placeholder="Your Phone"
          name="phoneNumber"
          className="focus:outline-none text-sm w-full input input-bordered"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          name="customerEmail"
          defaultValue={user?.email}
          className="focus:outline-none text-sm w-full input input-bordered"
          required
        />
        <input
          type="text"
          placeholder="Your location"
          name="location"
          className="focus:outline-none text-sm w-full input input-bordered"
          required
        />
        <textarea
          placeholder="Write down your car problem"
          rows="7"
          defaultValue={description}
          className="textarea textarea-bordered textarea-md md:col-span-2 focus:outline-none w-full"
        ></textarea>

        <input
          type="submit"
          className="btn w-full col-span-2 bg-[#FF3811] hover:bg-[#FF3811] text-white "
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default CrudFrom;
