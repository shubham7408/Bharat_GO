import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Cart from "./components/Cart";
import LoginSignup from "./pages/LoginSignup";
import OrderDetails from "./pages/OrderDetails";
import { authContext } from "./context/authContext";

const App = () => {
  const { isLoggedIn } = useContext(authContext);

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login-signup" />;
  };

  return (
    <Router>
      <Navbar />
      <div className="relative">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home category="all" />} />
          <Route
            path="/login-signup"
            element={isLoggedIn ? <Navigate to="/" /> : <LoginSignup />}
          />
          <Route path="/cloths" element={<Home category="cloths" />} />
          <Route path="/electronics" element={<Home category="fabo" />} />
          <Route path="/furnitures" element={<Home category="furniture" />} />
          <Route path="/toys" element={<Home category="Toys" />} />

          {/* Protected Routes */}
          <Route
            path="/my-account"
            element={<ProtectedRoute element={<Account />} />}
          />
          <Route
            path="/my-orders"
            element={<ProtectedRoute element={<Orders />} />}
          />
          <Route
            path="/my-orders/:orderId"
            element={<ProtectedRoute element={<OrderDetails />} />}
          />
        </Routes>
        <Cart />
      </div>
    </Router>
  );
};

export default App;
