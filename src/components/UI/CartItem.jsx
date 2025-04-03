import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { cartContext } from "../../context/cartContext";
const CartItem = ({ product }) => {
  const { removeFromCart, incrementItem, decrementItem } =
    useContext(cartContext);
  return (
    <div className="flex justify-between items-center p-4 border border-b-gray-200">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.images[0]}
            alt={product.title}
          />
        </figure>
        <div>
          <p className="text-sm font-light">{product.title}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <div className="flex gap-3 items-center mt-2">
            <button
              className="bg-red-200 rounded-lg h-6 w-6 flex items-center justify-center cursor-pointer"
              onClick={() => decrementItem(product.id)}
              aria-label="Decrease Quantity"
            >
              <AiOutlineMinus className="text-black-500" />
            </button>

            {/* Quantity Display */}
            <div className="bg-gray-300 w-8 flex justify-center rounded-md">
              <p className="select-none">{product.quantity}</p>
            </div>

            {/* Increase Quantity Button */}
            <button
              className="bg-green-200 rounded-lg h-6 w-6 flex items-center justify-center cursor-pointer"
              onClick={() => incrementItem(product.id)}
              aria-label="Increase Quantity"
            >
              <AiOutlinePlus className="text-black-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="h-6 w-6 flex items-center justify-center text-black-500 cursor-pointer animate-pulse"
          onClick={() => removeFromCart(product.id)}
          aria-label="Remove Product"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
