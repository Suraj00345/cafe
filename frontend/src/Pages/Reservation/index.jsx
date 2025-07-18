import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import OurLocation from "../../Components/OurLocation";
import Banner from "../../assets/food10.jpg";
import Flower from "../../assets/flower2.png";
import Footer from "../../Components/Footer";


const ReserveTableComponent = () => {
  const [formData, setFormData] = useState({
    adults: "",
    children: "",
    bookingDate: "",
    time: "",
    area: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-116 sm:h-80 md:h-96 lg:h-116 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black-500">
          <img
            src={`${Banner}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30 bg-blend-darken"></div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute left-0 right-0 z-20">
          <Navbar />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 text-amber-400">
              Do Reserve
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              FOR SPECIAL ONE
            </h1>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-gray-50 px-4 py-6 sm:py-8 lg:py-10">
        <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold underline">
          Let's Book Your Table
        </p>
      </div>

      {/* Main Content */}
      <div className="min-h-20 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 py-6 sm:py-8 lg:py-10 gap-5 flex flex-col lg:flex-row bg-gray-50">
        {/* Left Image Section */}
        <div className="shadow-lg shadow-gray-500/50 rounded-2xl w-full lg:w-1/2 relative overflow-hidden mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
            alt="Elegant dining set with a soft glowing lamp, glasses on a wooden table with blurred warm background"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-157 rounded-2xl object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="shadow-lg shadow-gray-500/50 w-full lg:w-1/2 lg:pl-8 xl:pl-12 flex flex-col justify-center bg-white rounded-xl p-5">
          {/* Heading */}
          <div className="mb-2 justify-items-center">
            <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold mb-6 text-amber-600 underline">
              Reserve a Table
            </h2>
            <img className="h-8" src={`${Flower}`} alt="" />
          </div>

          {/* Booking Info */}
          <div className="mb-6">
            <p className="text-lg font-semibold mb-1 text-gray-900">
              Book now at Mr User
            </p>
            <p className="text-gray-700 mb-4">Mr User</p>

            {/* Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Adults */}
                <input
                  type="number"
                  name="adults"
                  min="0"
                  placeholder="Adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none w-full"
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
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none w-full"
                  aria-label="Number of children"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Booking Date */}
                <input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none w-full"
                  aria-label="Booking date"
                />
                {/* Time */}
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-gray-500 focus:outline-none w-full"
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
                  className="bg-amber-600 text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto"
                  aria-label="Next step"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurLocation />
      <Footer />
    </>
  );
};

export default ReserveTableComponent;
