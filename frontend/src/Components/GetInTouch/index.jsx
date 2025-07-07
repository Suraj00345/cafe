import React from "react";
import Flower2 from "../../assets/flower2.png";
import Food1 from "../../assets/res1.jpg";
import Food2 from "../../assets/res2.jpg";
import Food3 from "../../assets/food3.jpg";
import Food4 from "../../assets/food4.jpg";
import Food5 from "../../assets/res6.jpg";
import Food6 from "../../assets/food6.jpg";
import Food7 from "../../assets/food7.jpg";
import Food8 from "../../assets/food8.jpg";

const GetInTouch = () => {
  return (
    <div className="pt-10 flex items-center pb-10">
      <div className="grid grid-flow-col-dense grid-rows-2 gap-4 m-10 h-100 w-200">
        <img src={`${Food1}`} alt="" />
        <img src={`${Food2}`} alt="" />
        <img src={`${Food3}`} alt="" />
        <img src={`${Food4}`} alt="" />
        <img src={`${Food5}`} alt="" />
        <img src={`${Food6}`} alt="" />
        <img src={`${Food7}`} alt="" />
        <img src={`${Food8}`} alt="" />
      </div>

      <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-sm ">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-light text-amber-600 mb-2"
            style={{ fontFamily: "serif" }}
          >
            Get
          </h1>
          <h2 className="text-4xl font-black text-black tracking-wide">
            IN TOUCH
          </h2>

          {/* Decorative element */}
          <div className="flex justify-center mt-4 mb-6">
            <img className="opacity-20" src={`${Flower2}`} alt="" />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <div className="block text-gray-700 text-sm font-medium mb-2">
              Your name
            </div>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
            />
          </div>

          {/* Email Field */}
          <div>
            <div className="block text-gray-700 text-sm font-medium mb-2">
              Your email
            </div>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
            />
          </div>

          {/* Message Field */}
          <div>
            <div className="block text-gray-700 text-sm font-medium mb-2">
              Your message (optional)
            </div>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button className="bg-orange-400 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
