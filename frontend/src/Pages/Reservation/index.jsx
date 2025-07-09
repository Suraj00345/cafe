import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import OurLocation from "../../Components/OurLocation";
import Banner from "../../assets/food10.jpg";
import Footer from "../../Components/Footer";

const ReserveTableComponent = () => {
  const [language, setLanguage] = useState("English");
  const [formData, setFormData] = useState({
    adults: "",
    children: "",
    bookingDate: "",
    time: "",
    area: "",
    comments: "",
  });

  const languages = [
    { code: "EN", label: "English" },
    { code: "FR", label: "French" },
    { code: "ES", label: "Spanish" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              Do Reserve
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              FOR SPECIAL ONE
            </h1>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl font-bold bg-gray-50 pt-10 underline ">
        Let's Book Your Table
      </p>
      <div className="min-h-20 px-40 p-10  gap-5 flex flex-col md:flex-row bg-gray-50">
        {/* Left Image Section */}
        <div className="pt-10 relative overflow-hidden">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c07873a-7ac9-45f5-b023-617db21b45b8.png"
            alt="Elegant dining set with a soft glowing lamp, glasses on a wooden table with blurred warm background"
            onError={(e) => (e.target.style.display = "none")}
            className="w-200 h-150 rounded-2xl object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2  md:p-12 flex flex-col justify-center">
          {/* Heading */}
          <div>
            <p className="text-xs uppercase text-gray-600 tracking-widest mb-2 border-b border-gray-300 pb-2">
              MAKE A RESERVATION.
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Reserve a Table
            </h2>
          </div>

          {/* Language Selector */}
          <div className="relative inline-block mb-6">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white cursor-pointer"
              aria-label="Select language"
            >
              {languages.map(({ code, label }) => (
                <option key={code} value={label}>
                  {label}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
              ▼
            </span>
          </div>

          {/* Booking Info */}
          <div className="mb-6">
            <p className="text-lg font-semibold mb-1 text-gray-900">
              Book now at Mr User
            </p>
            <p className="text-gray-700 mb-4">Mr User</p>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Adults */}
                <input
                  type="number"
                  name="adults"
                  min="0"
                  placeholder="Adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  aria-label="Number of adults"
                />
                {/* Children */}
                <input
                  type="number"
                  name="children"
                  min="0"
                  placeholder="Children"
                  value={formData.children}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  aria-label="Number of children"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Booking Date */}
                <input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  aria-label="Booking date"
                />
                {/* Time */}
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  aria-label="Booking time"
                />
              </div>

              {/* Area */}
              <input
                type="text"
                name="area"
                placeholder="Area"
                value={formData.area}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none w-full"
                aria-label="Preferred area"
              />

              {/* Comments */}
              <textarea
                name="comments"
                placeholder="Leave a comment or special request"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none w-full resize-none"
                aria-label="Special requests or comments"
              ></textarea>

              {/* Next Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                  aria-label="Next step"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OurLocation />
      <Footer />
    </>
  );
};

export default ReserveTableComponent;
