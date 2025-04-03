import React, { useContext, useState } from "react";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupCPassword, setSignupCPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const { login, signup, isLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupPassword !== signupCPassword) {
      alert("Password not match");
      return;
    }
    signup(signupEmail, signupPassword);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 flex-col p-4 rounded-md py-10">
      <h1 className="text-2xl font-bold mt-10 mb-10">Shopi</h1>

      <div className="w-full max-w-4xl shadow-2xl rounded-2xl flex justify-between gap-5 md:gap-3 flex-col md:flex-row">
        {/* Login Form */}
        <div className="flex-1 p-8 transition-all bg-white duration-500 rounded-md">
          <h2 className="text-3xl font-semibold text-black mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full p-3 border border-black rounded-lg mb-4 focus:outline-black"
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-3 border border-black rounded-lg mb-4 focus:outline-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-white hover:text-black border border-black transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Signup Form */}
        <div className="rounded-md p-8 flex-1 bg-white transition-all duration-500">
          <h2 className="text-3xl font-semibold text-black mb-6">Signup</h2>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full p-3 border border-black rounded-lg mb-4 focus:outline-black"
            />
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-3 border border-black rounded-lg mb-4 focus:outline-black"
            />
            <input
              type="password"
              value={signupCPassword}
              onChange={(e) => setSignupCPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full p-3 border border-black rounded-lg mb-4 focus:outline-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-white hover:text-black border border-black transition"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
