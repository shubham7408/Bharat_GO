import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed top-[70px] -right-1 z-40 flex items-center justify-center h-full ">
      <div className="relative w-11/12 max-w-lg bg-white border border-black rounded-lg h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-medium text-xl">Product Details</h2>
          <AiOutlineClose
            size={24}
            className="text-black cursor-pointer hover:text-red-500"
            onClick={onClose}
            aria-label="Close product details"
          />
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <img
            className="w-4/5 h-64 object-cover rounded-lg"
            src={product.images[0]}
            alt={product?.name || "Product Image"}
            onError={(e) => (e.target.src = "/fallback-image.png")}
          />
          <p className="flex flex-col items-center p-4">
            <span className="font-medium text-2xl mb-4">${product.price}</span>
            <span className="font-medium text-md">{product.name}</span>
            <span className="font-light text-sm text-center">
              {product.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
