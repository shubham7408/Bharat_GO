import React, { useContext, useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { cartContext } from "../../context/cartContext";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Card = ({ viewDetails, product }) => {
  const { images, title, price } = product;
  const { addToCart, setIsCartOpen, cart } = useContext(cartContext);
  const { isLoggedIn } = useContext(authContext);
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const itemInCart = cart.some((item) => item.id === product.id);
    if (isLoggedIn) {
      setIsAdded(itemInCart);
    }
  }, [cart, product.id]);

  const handleAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/login-signup");
      return;
    }
    if (!isAdded) {
      addToCart(product);
      setIsCartOpen(true);
      setIsAdded(true);
    }
  };

  return (
    <div
      className="Card bg-white cursor-pointer w-56 h-60 rounded-lg active:scale-110 transition ease-in-out duration-150"
      onClick={() => viewDetails(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
          fabo
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images?.[0] || "/fallback-image.png"}
          alt={title || "Product Image"}
          onError={(e) => (e.target.src = "/fallback-image.png")}
        />
        <button
          className={`absolute m-2 top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full`}
          aria-label={`${
            isAdded ? `${title} already in cart` : `Add ${title} to cart`
          }`}
          onClick={handleAdd}
        >
          {isAdded ? (
            <AiOutlineCheck className="h-5 w-5 text-white bg-black rounded-full" />
          ) : (
            <AiOutlinePlus className="h-5 w-5 rounded-full bg-white text-black" />
          )}
        </button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light truncate w-3/4">{title}</span>
        <span className="text-lg font-medium">{price}$</span>
      </p>
    </div>
  );
};

export default Card;
