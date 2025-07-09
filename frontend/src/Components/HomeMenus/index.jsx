import React from "react";
import Food6 from "../../assets/food6.jpg";
import Flower2 from "../../assets/flower3.png";

const HomeMenus = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-5 pb-13 bg-white">
        {/* Decorative Element */}
        <div className="flex justify-center m-7">
          <img className="opacity-20 h-7" src={`${Flower2}`} alt="" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Starters Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Starters
              </h2>

              {/* New Item */}
              <div className="max-w-lg mx-auto bg-white border-2 border-gray-900 pb-5 rounded-lg overflow-hidden">
                <div className="bg-black text-white px-6 py-3">
                  <h2 className="text-xl font-bold">New</h2>
                </div>
                <div className="flex justify-between items-start pl-5 pt-2 pr-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Baked Potato Pizza
                    </h3>
                    <p className="text-sm text-gray-600">
                      Potato / Bread / Cheese
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$12.0</span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Pork Tenderloin marinated in Yogurt
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pork / Tenderloin / Yogurt
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$20.0</span>
                  </div>
                </div>
              </div>

              {/* Recommended Item */}
              <div className="max-w-lg mx-auto bg-white border-2 border-gray-900 pb-4 rounded-lg overflow-hidden">
                <div className="bg-black text-white px-6 py-3">
                  <h2 className="text-xl font-bold"> Recommended</h2>
                </div>
                <div className="flex justify-between items-start pl-6 pr-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Grilled Pork with Preserved Lemons
                    </h3>
                    <p className="text-sm text-gray-900">
                      Pork / Lemons / Onions
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$22.0</span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Lemon-Rosemary Chicken
                    </h3>
                    <p className="text-sm text-gray-600">
                      Chicken / Rosemary / Lemon
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$19.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sea Food Section */}
            <div className="p-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Sea Food
              </h2>

              {/* Regular Item */}
              <div className="py-4  border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">Spicy Crab Ramen</h3>
                    <p className="text-sm text-gray-600">
                      Crab / Veggie / Soup
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$20.0</span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Fresh Crab With Lemon
                    </h3>
                    <p className="text-sm text-gray-600">
                      Crab / Lemon / Garlic
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$24.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-2">
            {/* Main Course Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Main Course
              </h2>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Pork with Italian Salsa Verde
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pork / Tomatoes / Veggies
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$19.9</span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Imported Oysters Grill (5 Pieces)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Oysters / Veggie / Ginger
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$15.5</span>
                  </div>
                </div>
              </div>

              {/* Recommended Item */}
              <div className="max-w-lg mx-auto bg-white border-2 border-gray-900 pb-4 rounded-lg overflow-hidden">
                <div className="bg-black text-white px-6 py-3">
                  <h2 className="font-bold text-xl">Recommended</h2>
                </div>
                <div className="flex justify-between items-start pl-6 pr-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      Grilled Pork with Preserved Lemons
                    </h3>
                    <p className="text-sm text-gray-900">
                      Pork / Lemons / Onions
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-gray-900 text-lg">
                      $22.0
                    </span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Lemon-Rosemary Chicken
                    </h3>
                    <p className="text-sm text-gray-600">
                      Chicken / Rosemary / Lemon
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$19.9</span>
                  </div>
                </div>
              </div>

              {/* Recommended Item */}
              <div className="max-w-lg mx-auto bg-white border-2 border-gray-900 pb-4 rounded-lg overflow-hidden">
                <div className="bg-black text-white px-6 py-3">
                  <h2 className="font-bold text-xl">Recommended</h2>
                </div>
                <div className="flex justify-between items-start pl-6 pr-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      Apple Smoked Chicken with White Sauce
                    </h3>
                    <p className="text-sm text-gray-900">
                      Chicken / Apple / Tomatos
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-gray-900 text-lg">
                      $18.9
                    </span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Meatloaf with Black Pepper-Honey BBQ
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pepper / Chicken / Honey
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$19.9</span>
                  </div>
                </div>
              </div>

              {/* Regular Item */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Prawn Sausage Cassoulet
                    </h3>
                    <p className="text-sm text-gray-600">
                      Prawn / Sausage / Potatos
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div
                      className="flex-1 border-b border-dotted border-gray-400 mx-3"
                      style={{ minWidth: "80px" }}
                    ></div>
                    <span className="font-semibold text-lg">$30.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMenus;
