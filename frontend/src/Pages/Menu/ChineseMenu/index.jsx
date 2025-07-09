import React from "react";
import Navbar from "../../../Components/Navbar";
import Banner from "../../../assets/momo.jpg";
import Food5 from "../../../assets/food5.jpg";
import Food6 from "../../../assets/res9.jpg";
import Food7 from "../../../assets/res8.jpg";
import Food12 from "../../../assets/food12.jpg";
import Food13 from "../../../assets/food13.jpg";
import HomeMenus from "../../../Components/HomeMenus";
import Footer from "../../../Components/Footer";

const dishes = [
  {
    name: "Kung Pao Chicken",
    description: "Chicken / Peanuts / Chili Peppers",
    img: `${Food5}`,
    price: "₹350",
  },
  {
    name: "Vegetable Hakka Noodles",
    description: "Noodles / Vegetables / Soy Sauce",
    img: `${Food6}`,
    price: "₹240",
  },
  {
    name: "Sweet and Sour Pork",
    description: "Pork / Pineapple / Bell Peppers",
    img: `${Food12}`,
    price: "₹390",
  },
  {
    name: "Spring Rolls",
    description: "Crispy Rolls / Veg Filling / Dip",
    img: `${Food13}`,
    price: "₹180",
  },
];

const Chinese = () => {
  return (
    <>
      <div className="relative w-full h-120 overflow-hidden ">
        {/* Background Image */}
        <div className="absolute  inset-0 bg-black-500">
          <img
            src={`${Banner}`}
            alt="Delicious soup with garnish"
            className="w-screen h-full object-cover bg-black-500"
          />
          <div class="absolute inset-0 bg-black opacity-30 bg-blend-darken"></div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute  left-0 right-0 z-20">
          <Navbar />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-5xl font-light mb-2 -ml-15 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato" }}
            >
              Check out
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              OUR Chinese CUISINE
            </h1>
          </div>
        </div>
      </div>
      {/* signature dish section */}
      <div className="items-center my-13">
        <h1 className="font-bold text-4xl text-center underline underline-offset-4 pb-5">
          Signature Dishes
        </h1>
        <div className="max-w-150 mx-auto p-4">
          <ul className="space-y-4">
            {dishes.map((dish, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <img
                  src={`${dish.img}`}
                  className="h-15 w-15 rounded-full"
                  alt="Dish Image"
                />
                <div className="px-3">
                  <h2 className="text-lg font-semibold">{dish.name}</h2>
                  <p className="text-sm text-gray-600">
                    {dish.description}{" "}
                    ..............................................................................................
                  </p>
                </div>
                <span className="font-bold">{dish.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* chef special */}
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${Food7}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-20"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-5xl font-light mb-2 -ml-15 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato" }}
            >
              Chef
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              RECOMMENDED
            </h1>
          </div>
        </div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <HomeMenus />
      <Footer />
    </>
  );
};

export default Chinese;
