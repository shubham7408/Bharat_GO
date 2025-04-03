import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const firebaseAPIKey = "AIzaSyCfCgvvuVkbD99FqCINPGFxoA-T2xvSaXY";

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && email) {
      setUser({ email, token });
      setIsLoggedIn(true);
    }
  }, []);

  const signup = async (email, password) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseAPIKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      const { idToken, email: userEmail } = response.data;

      localStorage.setItem("token", idToken);
      localStorage.setItem("email", userEmail);

      setUser({ email: userEmail, token: idToken });
      setIsLoggedIn(true);
      alert("Signup successful");
    } catch (error) {
      console.error("Signup Error: ", error);
      alert("Signup failed. Please try again.");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseAPIKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      const { idToken, email: userEmail } = response.data;

      // Store data in localStorage
      localStorage.setItem("token", idToken);
      localStorage.setItem("email", userEmail);

      setUser({ email: userEmail, token: idToken });
      setIsLoggedIn(true);
      alert("Login successful");
    } catch (error) {
      console.error("Login Error: ", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const logout = () => {
    if (confirm("Are you sure you want to logout")) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      setUser(null);
      setIsLoggedIn(false);
      alert("Logout successful");
    }
  };

  return (
    <authContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
