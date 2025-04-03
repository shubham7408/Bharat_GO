import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        if (res.data) {
          setProducts(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    console.log(products);
  }, []);
  const value = {
    products,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
