import { useEffect } from "react";
import RouterBanner from "../Components/RouterBanner";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { useState } from "react";
import Table from "../Components/Table";
import swal from "sweetalert";
import axios from "axios";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://car-doctor-server-seven-red.vercel.app/orders?customerEmail=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => setOrders(res.data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://car-doctor-server-seven-red.vercel.app/orders/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Yay!", "Your order has been deleted!", {
                icon: "success",
              });
              const remainingOrder = myOrders?.filter(
                (order) => order._id !== _id
              );
              setOrders(remainingOrder);
            }
          });
      }
    });
  };

  const handleStatus = (_id) => {
    swal({
      title: "Are you sure?",
      text: "You cant undo after confirming",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://car-doctor-server-seven-red.vercel.app/orders/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Approved" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              const remainingOrder = myOrders?.filter(
                (order) => order._id !== _id
              );
              const updatedOrder = myOrders?.find((order) => order._id === _id);
              updatedOrder.status = "Approved";
              const order = [...remainingOrder, updatedOrder];
              swal("Yay!", "Order Approved!", {
                icon: "success",
              });
              setOrders(order);
            }
          });
      }
    });
  };

  return (
    <div>
      <RouterBanner></RouterBanner>
      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl p-0">Action</th>
              <th className="text-2xl">No</th>
              <th className="text-2xl">Image</th>
              <th className="text-2xl">Service Name</th>
              <th className="text-2xl">Due Payment</th>
              <th className="text-2xl">Location</th>
              <th className="text-2xl">Date And Time</th>
              <th className="text-2xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((orders, idx) => (
              <Table
                key={orders._id}
                idx={idx}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
                orders={orders}
              ></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
