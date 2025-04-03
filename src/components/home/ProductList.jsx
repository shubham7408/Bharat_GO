import React, { useState } from "react";
import Card from "../UI/Card";
import ProductDetail from "./ProductDetails";

const ProductList = ({ productList }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeDetail = () => setSelectedProduct(null);

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  if (!productList || productList.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        <p>No products available</p>
      </div>
    );
  }

  return (
    <div className="relative grid place-items-center justify-center xl:gap-4 md:gap-3 sm:gap-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full max-w-screen-lg">
      {productList.map((product) => (
        <Card
          key={product.id}
          product={product}
          viewDetails={handleViewDetail}
        />
      ))}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={closeDetail} />
      )}
    </div>
  );
};

export default ProductList;
