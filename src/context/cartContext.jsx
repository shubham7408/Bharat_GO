import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];

  const [cart, setCart] = useState(initialCart);
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const incrementItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = () => {
    if (cart.length > 0) {
      const newOrder = {
        id: new Date().getTime(),
        items: cart,
        totalAmount,
        orderDate: new Date().toISOString(),
      };
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      clearCart();
      alert("Order placed successfully!");
    } else {
      alert("Cart is empty!");
    }
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <cartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cart,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        clearCart,
        placeOrder,
        orders,
        cartCount,
        totalAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
