import React, { useContext, useState } from "react";
import { CiLogout } from "react-icons/ci";
import {
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineArchiveBox,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { authContext } from "../context/authContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useContext(cartContext);
  const { isLoggedIn, user, logout } = useContext(authContext);

  const linkStyles = ({ isActive }) =>
    isActive ? "underline underline-offset-8" : "";

  return (
    <nav className="bg-white border-b-2 flex justify-between items-center fixed top-0 z-10 w-full py-5 px-3 md:px-8 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg md:inline hidden">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={linkStyles}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/cloths" className={linkStyles}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={linkStyles}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={linkStyles}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={linkStyles}>
            Toys
          </NavLink>
        </li>
      </ul>

      {isLoggedIn ? (
        <ul className="items-center gap-4 hidden md:flex">
          <li>
            <p className="text-gray-500">{user.email}</p>
          </li>
          <li>
            <NavLink to="/my-orders" className={linkStyles}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-account" className={linkStyles}>
              My Account
            </NavLink>
          </li>
          <li>
            <p className="flex gap-2" onClick={() => setIsCartOpen(true)}>
              <HiOutlineShoppingCart
                size={24}
                className="text-black-500 cursor-pointer"
              />
              {cartCount}
            </p>
          </li>
        </ul>
      ) : (
        <NavLink className="hidden md:inline" to={"/login-signup"}>
          Login
        </NavLink>
      )}

      {/* mobile menu */}
      {isLoggedIn ? (
        <ul className="md:hidden relative">
          <FaUserCircle
            size={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black-500 cursor-pointer"
          />
          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } w-64 h-44 absolute bg-white border border-black rounded-lg right-0 p-2`}
          >
            <ul className="flex flex-col items-center h-full w-full justify-around">
              <li className="flex gap-2 w-full">
                <HiOutlineUserCircle
                  size={24}
                  className="text-black-500 cursor-pointer"
                />
                <p className="text-black/60">{user.email}</p>
              </li>
              <li className="flex gap-2 w-full">
                <HiOutlineArchiveBox size={24} className="text-black-500" />
                <NavLink to="/my-orders" className={linkStyles}>
                  My Orders
                </NavLink>
              </li>
              <li className="flex gap-2 w-full">
                <HiOutlineDevicePhoneMobile
                  size={24}
                  className="text-black-500"
                />
                <NavLink to="/my-account" className={linkStyles}>
                  My Account
                </NavLink>
              </li>
              <li className="w-full" onClick={() => setIsCartOpen(true)}>
                <p className="flex gap-2">
                  <HiOutlineShoppingCart
                    size={24}
                    className="text-black-500 cursor-pointer"
                  />
                  {cartCount}
                </p>
              </li>
              <li className="w-full" onClick={logout}>
                <p className="flex gap-2">
                  <CiLogout size={20} className="font-bold" /> Logout
                </p>
              </li>
            </ul>
          </div>
        </ul>
      ) : (
        <NavLink to={"/login-signup"}>Login</NavLink>
      )}
    </nav>
  );
};

export default Navbar;
