import React, { useContext } from "react";
import { authContext } from "../context/authContext";

const Account = () => {
  const { logout } = useContext(authContext);
  return (
    <div>
      <div className="flex flex-col mt-20 items-center">
        <p className="text-2xl font-semibold m-4">My Account</p>
        <div className="flex flex-col items-center justify-center w-3/4 md:w-2/4 h-auto border border-black rounded-lg p-8">
          <figure className="flex flex-col items-center">
            <p className="mb-5 mt-5 font-medium text-lg">Created by:</p>
            <img
              src="https://avatars.githubusercontent.com/u/90741749?v=4"
              alt="EdCenten0"
              className="border border-gray-800 rounded-full w-32 h-32"
            />
            <p className="font-bold text-xl mt-2 mb-2">Abhishek Yadav</p>
            <a
              href="https://github.com/Abhivanya"
              className="font-light underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Abhivanya 👈
            </a>
          </figure>
        </div>
        <button
          className="mt-2 bg-black px-3 py-2 font-bold text-white rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
