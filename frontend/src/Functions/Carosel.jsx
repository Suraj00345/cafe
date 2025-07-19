import React, { useState, useEffect } from "react";
import Food1 from "../assets/food1.jpg";
import Food2 from "../assets/food14.jpg";
import Food3 from "../assets/food3.jpg";

const VerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Replace these with your actual image URLs
  const slides = [
    {
      id: 1,
      image: `${Food1}`,
    },
    {
      id: 2,
      image: `${Food2}`,
    },
    {
      id: 3,
      image: `${Food3}`,
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Content visibility animation
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden ">
        {/* Carousel Container */}
        <div
          className="flex flex-col w-full transition-transform duration-700 ease-in-out"
          style={{
            height: `${slides.length * 100}vh`,
            transform: `translateY(-${currentSlide * 100}vh)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalCarousel;
