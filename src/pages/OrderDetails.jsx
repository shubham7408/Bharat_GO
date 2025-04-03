import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const { orders } = useContext(cartContext);
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [currentOrder, setCurrentOrder] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const order = orders.find((o) => o.id == orderId);
    setCurrentOrder(order);
  }, [orderId, orders]);

  if (!currentOrder?.items?.length)
    return <p>No items found for this order.</p>;

  console.log(currentOrder);

  return (
    <div className="relative">
      <div className="flex flex-col mt-20 items-center">
        <div className="flex items-center justify-center w-80 relative text-xl">
          <p
            className="absolute font-bold mr-3 top-1 left-0 text-2xl cursor-pointer"
            onClick={goBack}
          >
            {"<"}
          </p>
          <h1>MyOrders</h1>
        </div>
      </div>
      <div className="flex flex-col mt-5 items-center">
        {currentOrder.items &&
          currentOrder.items.map((item, index) => (
            <OrderItem key={index} product={item} />
          ))}
      </div>
    </div>
  );
};

export default OrderDetails;

const OrderItem = ({ product }) => {
  return (
    <div className="flex justify-between items-center p-4 border border-b-gray-200 w-[400px]">
      <div className="flex items-center gap-2">
        <div className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div>
          <p className="text-sm font-light">{product.title}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <div className="flex gap-3 items-center mt-2">
            <div className="bg-gray-300 w-8 flex justify-center rounded-md">
              <p className="select-none">{product.quantity}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2"></div>
    </div>
  );
};
