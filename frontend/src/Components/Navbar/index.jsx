import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-amber-400" : "";

  return (
    <div className="pt-10 flex justify-around items-center text-white">
      <a href="/" className="logo">
        <h3 className="font-bold text-3xl -mb-7">THE REX</h3>
        <br />
        <h5 className="tracking-widest text-xl font-semibold">Restaurant</h5>
      </a>
      <div className="flex justify-evenly items-center">
        <a
          href="/"
          className={`m-5 font-semibold ${isActive("/")} hover:text-orange-400`}
        >
          Home
        </a>
        <div className="p-8 flex font-semibold justify-center items-center hover:text-orange-400">
          <button
            className="flex items-center"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Menus
            <ChevronDown />
          </button>
          {isServicesOpen && (
            <div className="absolute mt-40 w-45 bg-neutral-900 opacity-90 italic rounded-md shadow-lg z-20">
              <a
                href="/menu/indian"
                className={`block px-4 py-2 text-white hover:bg-gray-600 hover:rounded-md hover:text-orange-300 ${isActive(
                  "/menu/indian"
                )}`}
              >
                Indian Delicacy
              </a>
              <a
                href="/menu/continental"
                className={`block px-4 py-2 text-white hover:bg-gray-600 hover:rounded-md hover:text-orange-300 ${isActive(
                  "/menu/continental"
                )}`}
              >
                Continental Cuisine
              </a>
              <a
                href="/menu/chinese"
                className={`block px-4 py-2 text-white hover:bg-gray-600 hover:rounded-md hover:text-orange-300 ${isActive(
                  "/menu/chinese"
                )}`}
              >
                Chinese Cuisine
              </a>
            </div>
          )}
        </div>
        <a
          href="/about"
          className={`m-5 font-semibold ${isActive(
            "/about"
          )} hover:text-orange-400`}
        >
          About Us
        </a>
        <a
          href="/our_service"
          className={`m-5 font-semibold ${isActive(
            "/our_service"
          )} hover:text-orange-400`}
        >
          Our Service
        </a>
        <a
          href="/contact_us"
          className={`m-5 font-semibold ${isActive(
            "/contact_us"
          )} hover:text-orange-400`}
        >
          Contact Us
        </a>
        <a
          href="/reservation"
          className={` m-5 font-semibold ${isActive(
            "/reservation"
          )} ml-18 pl-5 pr-5 pt-2 pb-2 rounded-md w-auto border border-black-600 font-semibold hover:bg-yellow-700`}
        >
          Reservation
        </a>
      </div>
    </div>
  );
};

export default Navbar;
