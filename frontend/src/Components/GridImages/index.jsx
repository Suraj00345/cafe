import React, { useState, useEffect, useRef } from "react";
import Food4 from "../../assets/food4.jpg";
import Food7 from "../../assets/food7.jpg";
import Food9 from "../../assets/food9.jpg";
import Food19 from "../../assets/food-19.jpg";
import Food20 from "../../assets/food-20.jpg";
import Profile3 from "../../assets/profile3.jpg";

const LazyImage = ({ src, alt, className, index, title, category, date }) => {
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
        rootMargin: "50px",
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
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Skeleton loader */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] rounded-lg transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
        }`}
      />

      {/* Main image */}
      <img
        src={isInView ? src : ""}
        alt={alt}
        onLoad={handleLoad}
        className={`w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 ease-out group-hover:scale-105 ${
          isInView && isLoaded
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-8 scale-95"
        }`}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content overlay */}
      {title && (
        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {date && (
            <div className="flex items-center gap-2 mb-2 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                {date}
              </span>
              {category && (
                <span className="text-xs uppercase tracking-wider opacity-75">
                  {category}
                </span>
              )}
            </div>
          )}
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
        </div>
      )}

      {/* Shimmer effect overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
          isInView && isLoaded ? "translate-x-full" : "-translate-x-full"
        }`}
      />
    </div>
  );
};

const GridImages = () => {
  return (
    <div className="bg-gray-950 max-w-full p-4">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen mx-auto">
        
        {/* Large Featured Card */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2">
          <LazyImage
            className="h-96 lg:h-[500px]"
            src={Food4}
            alt="Black Spaghetti with Rock Shrimp"
            title="Black Spaghetti with Rock Shrimp"
            category="ITALIAN"
            date="20 APR"
            index={0}
          />
        </div>

        {/* Top Right Card */}
        <div className="lg:col-span-1">
          <LazyImage
            className="h-48 lg:h-60"
            src={Food7}
            alt="Cooking Food With Love"
            title="Cooking Food With Love"
            category="RECIPE"
            date="18 APR"
            index={1}
          />
        </div>

        {/* Second Right Card */}
        <div className="lg:col-span-1">
          <LazyImage
            className="h-48 lg:h-60"
            src={Profile3}
            alt="Modern Fusion Cuisine"
            title="Modern Fusion Cuisine"
            category="RECIPE"
            date="17 APR"
            index={2}
          />
        </div>

        {/* Bottom Left Card */}
        <div className="md:col-span-1">
          <LazyImage
            className="h-48 lg:h-60"
            src={Food9}
            alt="Amazing Dining Experience Begins"
            title="Amazing Dining Experience Begins"
            category="COOKING"
            date="16 APR"
            index={3}
          />
        </div>

        {/* Bottom Middle Card */}
        <div className="md:col-span-1">
          <LazyImage
            className="h-48 lg:h-60"
            src={Food20}
            alt="Our Premium Food Recipe"
            title="Our Premium Food Recipe"
            category="ASIAN"
            date="09 APR"
            index={4}
          />
        </div>

        {/* Bottom Right Card */}
        <div className="md:col-span-1">
          <LazyImage
            className="h-48 lg:h-60"
            src={Food19}
            alt="Life is a combination of cooking"
            title="Life is a combination of cooking"
            category="COOKING"
            date="05 APR"
            index={5}
          />
        </div>
      </div>
    </div>
  );
};

export default GridImages;
