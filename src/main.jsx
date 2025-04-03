import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import CartContextProvider from "./context/cartContext.jsx";
import ProductContextProvider from "./context/productContext.jsx";
createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </AuthContextProvider>
);
