import React, { useEffect, useRef, useState } from "react";
import Flower2 from "../../assets/flower2.png";
import Food1 from "../../assets/res1.jpg";
import res2 from "../../assets/res2.jpg";
import res3 from "../../assets/res3.jpg";
import Food5 from "../../assets/food5.jpg";
import Food7 from "../../assets/food7.jpg";
import Food8 from "../../assets/food8.jpg";
import Food9 from "../../assets/food9.jpg";
import res7 from "../../assets/res7.jpg";

const GetInTouch = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          // Optional: Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the form is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the form is fully in view
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
     <div className="min-h-screen lg:min-h-100 bg-gray-50 p-4 sm:p-8 lg:p-20 pb-8 sm:pb-16 lg:pb-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16">
          {/* Left side - Image grid */}
          <div className="w-full lg:w-auto order-2 lg:order-1">
            {/* Mobile/Tablet: Simple 2x2 grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
              <div className="bg-gray-600 rounded-md overflow-hidden aspect-square">
                <img
                  src={Food1}
                  alt="Person dining"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-red-100 rounded-md overflow-hidden aspect-square">
                <img
                  src={res3}
                  alt="Pizza with vegetables"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="bg-gray-700 rounded-md overflow-hidden aspect-square">
                <img
                  src={res2}
                  alt="Fine dining room"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="bg-blue-100 rounded-md overflow-hidden aspect-square">
                <img
                  src={Food7}
                  alt="Gourmet salad"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            {/* Desktop: Original complex grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4 h-155 w-150">
              {/* Top row - 4 images */}
              <div className="col-span-2 grid grid-cols-4 gap-4">
                <div className="bg-gray-600 rounded-md overflow-hidden">
                  <img
                    src={Food1}
                    alt="Person dining"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="bg-red-100 rounded-md overflow-hidden">
                  <img
                    src={res3}
                    alt="Pizza with vegetables"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="bg-blue-900 rounded-md overflow-hidden col-span-2">
                  <img
                    src={res7}
                    alt="Dining set"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              {/* Middle row - 2 images */}
              <div className="bg-gray-700 rounded-md overflow-hidden">
                <img
                  src={res2}
                  alt="Fine dining room"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="bg-blue-100 rounded-md overflow-hidden">
                <img
                  src={Food7}
                  alt="Gourmet salad"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Bottom row - 4 images */}
              <div className="col-span-2 grid grid-cols-4 gap-4">
                <div className="bg-gray-600 rounded-md overflow-hidden">
                  <img
                    src={Food9}
                    alt="Person dining"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="bg-red-100 rounded-md overflow-hidden col-span-2">
                  <img 
                    src={Food8} 
                    alt="Food dish"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  />
                </div>
                <div className="bg-blue-900 rounded-md overflow-hidden">
                  <img
                    src={Food5}
                    alt="Dessert"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Animated Contact form */}
          <div 
            ref={formRef}
            className={`w-full max-w-md lg:max-w-none lg:w-110 order-1 lg:order-2 transform transition-all duration-1000 ease-out ${
              isFormVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="bg-white rounded-md p-6 sm:p-8 shadow-lg lg:h-155 flex flex-col justify-center">
              <div className="text-center mb-6 lg:mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2">
                  <span className="text-yellow-600 italic">get</span>
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  IN TOUCH
                </h1>
                <img
                  className="mx-auto h-4 lg:h-5 opacity-35"
                  src={Flower2}
                  alt="Decorative flower"
                />
              </div>
              
              <div className="space-y-4 lg:space-y-3">
                <div>
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
                
                <div>
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
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-800 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;