import React, { useContext } from "react";
import { HiArrowRight, HiCalendar, HiShoppingBag } from "react-icons/hi";
import { cartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";
const Orders = () => {
  const { orders } = useContext(cartContext);
  console.log(orders);
  return (
    <div>
      <div className="flex flex-col mt-20 items-center">
        <div className="flex items-center justify-center w-80 relative">
          <h1>MyOrders</h1>
        </div>
      </div>
      {orders.length > 0 ? (
        <div>
          {orders.map((order) => (
            <NavLink
              to={`/my-orders/${order.id}`}
              key={order.id}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center w-96 p-4 border border-black m-2 rounded-md">
                <div className="grid grid-cols-2 w-full">
                  <div className="grid grid-rows-2">
                    <span className="flex items-center gap-2 font-light text-md">
                      <HiCalendar className="h-4 w-4 text-black" />
                      {order.orderDate.slice(0, 10)}
                    </span>
                    <span className="text-md flex items-center gap-2">
                      <HiShoppingBag className="h-4 w-4 text-black" />1
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="font-bold text-xl">
                      ${order.totalAmount}
                    </span>
                    <HiArrowRight className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center flex-col p-4">
          <figure className="w-20">
            <svg
              viewBox="0 0 1024 1024"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M660 103.2l-149.6 76 2.4 1.6-2.4-1.6-157.6-80.8L32 289.6l148.8 85.6v354.4l329.6-175.2 324.8 175.2V375.2L992 284.8z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M180.8 737.6c-1.6 0-3.2 0-4-0.8-2.4-1.6-4-4-4-7.2V379.2L28 296c-2.4-0.8-4-4-4-6.4s1.6-5.6 4-7.2l320.8-191.2c2.4-1.6 5.6-1.6 8 0l154.4 79.2L656 96c2.4-1.6 4.8-0.8 7.2 0l332 181.6c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2l-152.8 88v350.4c0 3.2-1.6 5.6-4 7.2-2.4 1.6-5.6 1.6-8 0l-320-174.4-325.6 173.6c-1.6 0.8-2.4 0.8-4 0.8z"
                  fill="#6A576D"
                ></path>
                <path
                  d="M510.4 550.4L372 496 180.8 374.4v355.2l329.6 196 324.8-196V374.4L688.8 483.2z"
                  fill="#D6AB7F"
                ></path>
              </g>
            </svg>
          </figure>

          <div className="text-center mt-4">
            <p className="font-semibold text-lg">
              Nothing yet, add some products and check them out :)
            </p>
          </div>
        </div>
      )}

      {/* ordres */}
    </div>
  );
};

export default Orders;
