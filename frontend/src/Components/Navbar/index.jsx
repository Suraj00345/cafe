import { ChevronDown } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="pt-10 flex justify-around items-center text-white">
      <div className="logo">
        <h3 className="font-bold text-3xl -mb-7">THE REX</h3>
        <br />
        <h5 className="tracking-widest text-xl font-semibold">Restaurant</h5>
      </div>
      <div className="flex justify-evenly items-center">
        <a href="/" className="m-5 font-semibold hover:text-amber-400">
          Home
        </a>
        <a
          href="#"
          className="m-5 font-semibold flex items-center hover:text-amber-400 justify-self-center"
        >
          Menus <ChevronDown />
        </a>
        <a href="/about" className="m-5 font-semibold hover:text-amber-400">
          About Us
        </a>
        <a href="/our_service" className="m-5 font-semibold hover:text-amber-400">
          Our Service
        </a>
         <a href="#" className="m-5 font-semibold hover:text-amber-400">
          Contact Us
        </a>
        <button className="ml-18 pl-5 pr-5 pt-2 pb-2 rounded-md w-auto  border border-black-600 font-semibold hover:bg-yellow-700">
          Reservation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
