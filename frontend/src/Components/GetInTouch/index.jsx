import React from "react";
import Flower2 from "../../assets/flower2.png";
import Food1 from "../../assets/res1.jpg";
import res2 from "../../assets/res2.jpg";
import res3 from "../../assets/res3.jpg";
import Food3 from "../../assets/food3.jpg";
import Food4 from "../../assets/food4.jpg";
import Food5 from "../../assets/food5.jpg";
import Food6 from "../../assets/food6.jpg";
import Food7 from "../../assets/food7.jpg";
import Food8 from "../../assets/food8.jpg";
import Food9 from "../../assets/food9.jpg";
import res7 from "../../assets/res7.jpg";

const GetInTouch = () => {
  return (
    <div className=" min-h-100 bg-gray-50 p-20 pb-30">
      <div className="max-w-8xl mx-auto ">
        <div className="flex justify-start items-center">
          {/* Left side - Image grid */}
          <div className="grid grid-cols-2 gap-4 h-155 w-150 relative left-60">
            {/* Bottom row - 3 images */}
            <div className="col-span-2 grid grid-cols-4 gap-4">
              {/* Person dining */}
              <div className="bg-gray-600 rounded-md overflow-hidden">
                <img
                  src={`${Food1}`}
                  alt="Person dining"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pizza with vegetables */}
              <div className="bg-red-100 rounded-md overflow-hidden">
                <img
                  src={`${res3}`}
                  alt="Pizza with vegetables"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dessert */}
              <div className="bg-blue-900 rounded-md overflow-hidden col-span-2">
                <img
                  src={`${res7}`}
                  alt="Dining set"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom left - Fine dining room */}
            <div className="bg-gray-700 rounded-md overflow-hidden">
              <img
                src={`${res2}`}
                alt="Fine dining room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right - Gourmet salad */}
            <div className="bg-blue-100 rounded-md overflow-hidden">
              <img
                src={`${Food7}`}
                alt="Gourmet salad"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom row - 3 images */}
            <div className="col-span-2 grid grid-cols-4 gap-4">
              {/* Person dining */}
              <div className="bg-gray-600 rounded-md overflow-hidden">
                <img
                  src={`${Food9}`}
                  alt="Person dining"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pizza with vegetables */}
              <div className="bg-red-100 rounded-md overflow-hidden col-span-2">
                <img src={`${Food8}`} className="w-full h-full object-cover" />
              </div>

              {/* Dessert */}
              <div className="bg-blue-900 rounded-md overflow-hidden">
                <img
                  src={`${Food5}`}
                  alt="Dessert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-md p-8 shadow-lg h-155 w-110 flex flex-col justify-center relative left-55 top-2">
            <div className="text-center">
              <h2 className="text-5xl font-light mb-2">
                <span className="text-yellow-600  italic">get</span>
              </h2>
              <h1 className="text-5xl  font-bold text-gray-900 mb-4">
                IN TOUCH
              </h1>
              <img
                className="justify-self-center h-5 opacity-35"
                src={`${Flower2}`}
                alt=""
              />
            </div>
            <div>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-colors resize-none"
                />
              </div>
              <button className=" bg-yellow-600 hover:bg-yellow-800 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
