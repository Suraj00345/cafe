import React, { useState, useEffect, useRef } from "react";

import Banner3 from "../../assets/banner3.jpg";
import Banner4 from "../../assets/banner4.jpg";
import Food3 from "../../assets/food3.jpg";
import Food6 from "../../assets/food6.jpg";
import Food7 from "../../assets/food7.jpg";
import Food8 from "../../assets/food8.jpg";
import Food9 from "../../assets/food9.jpg";
import Food11 from "../../assets/food11.jpg";
import Food12 from "../../assets/food12.jpg";
import Food13 from "../../assets/food13.jpg";
import Food14 from "../../assets/food14.jpg";
import Food15 from "../../assets/food15.jpg";
import Food16 from "../../assets/food16.jpg";
import Food17 from "../../assets/food17.jpg";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Res1 from "../../assets/res1.jpg";
import Res3 from "../../assets/res3.jpg";
import Res6 from "../../assets/res6.jpg";
import Res7 from "../../assets/res7.jpg";

const LazyImage = ({ src, alt, className, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Skeleton loader */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] rounded-lg transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />
      
      {/* Main image */}
      <img
        src={isInView ? src : ''}
        alt={alt}
        onLoad={handleLoad}
        className={`w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 ease-out ${
          isInView && isLoaded 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-8 scale-95'
        }`}
      />
      
      {/* Shimmer effect overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
          isInView && isLoaded 
            ? 'translate-x-full' 
            : '-translate-x-full'
        }`}
      />
    </div>
  );
};

const GridImages = () => {
  return (
    <div className="grid grid-rows-1 bg-gray-950 min-w-full">
      {/* First Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 p-2 sm:p-4">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Banner3}
            alt="Banner 3"
            index={0}
          />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Banner4}
            alt="Banner 4"
            index={1}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Food3}
            alt="Food 3"
            index={2}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Food6}
            alt="Food 6"
            index={3}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Food7}
            alt="Food 7"
            index={4}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Food8}
            alt="Food 8"
            index={5}
          />
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <LazyImage
            className="h-24 sm:h-28 lg:h-32"
            src={Food9}
            alt="Food 9"
            index={6}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 px-2 sm:px-4">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Food11}
            alt="Food 11"
            index={7}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Food12}
            alt="Food 12"
            index={8}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Profile1}
            alt="Profile 1"
            index={9}
          />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Food13}
            alt="Food 13"
            index={10}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Profile2}
            alt="Profile 2"
            index={11}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Food16}
            alt="Food 16"
            index={12}
          />
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <LazyImage
            className="h-28 sm:h-32 lg:h-38"
            src={Food17}
            alt="Food 17"
            index={13}
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 p-2 sm:p-4">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-32 sm:h-36 lg:h-42"
            src={Res1}
            alt="Restaurant 1"
            index={14}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-32 sm:h-36 lg:h-42"
            src={Res3}
            alt="Restaurant 3"
            index={15}
          />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <LazyImage
            className="h-32 sm:h-36 lg:h-42"
            src={Food14}
            alt="Food 14"
            index={16}
          />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <LazyImage
            className="h-32 sm:h-36 lg:h-42"
            src={Food15}
            alt="Food 15"
            index={17}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-32 sm:h-36 lg:h-42"
            src={Res6}
            alt="Restaurant 6"
            index={18}
          />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <LazyImage
            className="h-32 sm:h-36 lg:h-42"
            src={Res7}
            alt="Restaurant 7"
            index={19}
          />
        </div>
      </div>
    </div>
  );
};

export default GridImages;