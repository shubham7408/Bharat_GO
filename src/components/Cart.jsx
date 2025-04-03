import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { cartContext } from "../context/cartContext";
import CartItem from "./UI/CartItem";

const Cart = () => {
  const { totalAmount, isCartOpen, cart, placeOrder, setIsCartOpen } =
    useContext(cartContext);

  if (!isCartOpen) return;
  return (
    <div className="fixed top-[70px] right-2 md:-right-1 z-50 flex items-center justify-center h-full w-[90%] md:w-[40%] lg:w-[30%] ">
      <div className="relative w-full max-w-lg bg-white border border-black rounded-lg h-full">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">My Cart</h2>
          <div>
            <AiOutlineClose
              className="h-6 w-6 text-black cursor-pointer animate-pulse"
              onClick={() => setIsCartOpen(false)}
            />
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh] px-4">
          {cart.length > 0 ? (
            cart.map((item, index) => <CartItem key={index} product={item} />)
          ) : (
            <p className="text-center py-4">Your cart is empty!</p>
          )}
        </div>

        <div className="fixed w-[90%] md:w-[40%] lg:w-[30%] mx-auto bottom-0  bg-white checkout-section border border-t-slate-400 border-l-black-400 p-2 rounded-sm">
          <p className="flex justify-between w-full">
            <span className="font-medium  select-none">Total: </span>
            <span className="text-lg font-bold">${totalAmount}</span>
          </p>

          <button
            className="w-full border border-slate-600 pb-1 rounded-md text-white font-medium bg-black active:bg-white active:text-black hover:bg-slate-900 hover:text-slate-100"
            onClick={placeOrder}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
