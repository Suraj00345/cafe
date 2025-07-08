import React from 'react'
import Flower2 from "../../assets/flower2.png";
import { ArrowRight } from 'lucide-react';

const locations = [
  {
    name: "Grand Paragon",
    address: "732/21 Second Street, Manchester",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
  {
    name: "Grand Center",
    address: "78/31 Third Street, Liverpool",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
  {
    name: "Grand Zen",
    address: "78/31 Third Street, Liverpool",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
  {
    name: "Grand Place",
    address: "78/31 Third Street, Liverpool",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
];


const OurLocation = () => {
    
  return (
     <div className="min-h-100 bg-gray-50 pb-23 pt-13">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center justify-items-center mb-16">
            <h2 className="text-2xl md:text-3xl text-amber-400 mb-2">Our</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tighter pb-5 ">
              LOCATIONS
            </h1>
            <img className="opacity-40 size-6" src={`${Flower2}`} alt="" />
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {locations.map((location, index) => (
              <div key={index} className="text-center space-y-1">
                {/* Location Name */}
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  {location.name}
                </h3>

                {/* Address Details */}
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">
                    {location.address}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    {location.city}
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    T: {location.phone}
                  </p>
                </div>

                {/* Get Directions Button */}
                <button className="group inline-flex items-center text-amber-400 hover:text-amber-500 transition-colors duration-200 mt-6">
                  <span className="text-sm md:text-base font-medium tracking-wide">
                    GET DIRECTIONS
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default OurLocation;