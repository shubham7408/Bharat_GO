import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/productContext";
import ProductList from "../components/home/ProductList";

const Home = ({ category }) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { products } = useContext(productContext);

  const applyFilter = () => {
    let productCopy = products.slice();
    if (category !== "all") {
      productCopy = productCopy.filter((item) =>
        item.category.name.toLowerCase().includes(category.toLowerCase())
      );
    }
    if (search) {
      productCopy = productCopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterProducts(productCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, products, search]);

  return (
    <div className="flex flex-col mt-20 items-center">
      <div className="flex items-center justify-center  relative w-80 mb-4">
        Home
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
      />
      <ProductList productList={filterProducts} />
    </div>
  );
};

export default Home;
