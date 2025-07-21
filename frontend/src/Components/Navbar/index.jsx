import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ isScrolled }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  console.log(location);

  // Handle scroll if isScrolled prop is not passed
  useEffect(() => {
    if (isScrolled === undefined) {
      const handleScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setScrolled(scrollTop > 50);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Check initial position

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isScrolled]);

  // Use prop or internal state
  const isNavbarScrolled = isScrolled !== undefined ? isScrolled : scrolled;

  const isActive = (path) =>
    location.pathname === path ? "text-amber-400" : "";

  // Check if any menu item is active
  const isMenuActive = () => {
    const menuPaths = ["/menu/indian", "/menu/continental", "/menu/chinese"];
    return menuPaths.includes(location.pathname);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services dropdown when mobile menu toggles
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isNavbarScrolled
          ? "bg-white shadow-lg pt-3 lg:pt-2"
          : "bg-transparent pt-6 lg:pt-10"
      } px-2 lg:px-4`}
    >
      {/* Desktop and Tablet Layout */}
      <div className="flex justify-between lg:justify-around items-center">
        {/* Logo */}
        <a href="/" className="logo flex-shrink-0 p-1 lg:p-3">
          <h3
            className={`font-bold text-xl md:text-2xl lg:text-3xl -mb-5 lg:-mb-7 transition-colors duration-300 ${
              isNavbarScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            THE REX
          </h3>
          <br />
          <h5
            className={`tracking-widest md:text-lg lg:text-xl font-semibold transition-colors duration-300 ${
              isNavbarScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Restaurant
          </h5>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-evenly items-center">
          <a
            href="/"
            className={`m-5 font-semibold transition-colors duration-200 ${
              isActive("/") ||
              (isNavbarScrolled
                ? "text-gray-900 hover:text-amber-600"
                : "text-white hover:text-orange-300")
            }`}
          >
            Home
          </a>

          {/* Services Dropdown with Smooth Drawer Animation */}
          <div className="relative">
            <button
              className={`m-5 font-semibold flex items-center transition-colors duration-200 ${
                isMenuActive()
                  ? "text-amber-400"
                  : isNavbarScrolled
                  ? "text-gray-900 hover:text-amber-600"
                  : "text-white hover:text-orange-300"
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Menus
              <ChevronDown
                className={`ml-1 transform transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                size={16}
              />
            </button>

            {/* Smooth Drawer Slider */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-opacity-95 rounded-md shadow-lg z-20 overflow-hidden transition-all duration-300 ease-in-out transform-gpu ${
                isServicesOpen
                  ? "opacity-100 scale-y-100 translate-y-0"
                  : "opacity-0 scale-y-0 -translate-y-2"
              }`}
              style={{ transformOrigin: "top" }}
            >
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isNavbarScrolled
                    ? "bg-white border border-gray-200"
                    : "bg-black opacity-90"
                } ${isServicesOpen ? "translate-y-0" : "-translate-y-4"}`}
              >
                <a
                  href="/menu/indian"
                  className={`block px-4 py-3 transition-colors duration-200 ${
                    isActive("/menu/indian") ||
                    (isNavbarScrolled
                      ? "text-gray-900 hover:bg-gray-100 hover:text-amber-600"
                      : "text-white hover:bg-gray-500 hover:text-orange-300")
                  }`}
                  onClick={() => setIsServicesOpen(false)}
                >
                  Indian Delicacy
                </a>
                <a
                  href="/menu/continental"
                  className={`block px-4 py-3 transition-colors duration-200 ${
                    isActive("/menu/continental") ||
                    (isNavbarScrolled
                      ? "text-gray-900 hover:bg-gray-100 hover:text-amber-600"
                      : "text-white hover:bg-gray-500 hover:text-orange-300")
                  }`}
                  onClick={() => setIsServicesOpen(false)}
                >
                  Continental Cuisine
                </a>
                <a
                  href="/menu/chinese"
                  className={`block px-4 py-3 transition-colors duration-200 ${
                    isActive("/menu/chinese") ||
                    (isNavbarScrolled
                      ? "text-gray-900 hover:bg-gray-100 hover:text-amber-600"
                      : "text-white hover:bg-gray-500 hover:text-orange-300")
                  }`}
                  onClick={() => setIsServicesOpen(false)}
                >
                  Chinese Cuisine
                </a>
              </div>
            </div>
          </div>

          <a
            href="/about"
            className={`m-5 font-semibold transition-colors duration-200 ${
              isActive("/about") ||
              (isNavbarScrolled
                ? "text-gray-900 hover:text-amber-600"
                : "text-white hover:text-orange-300")
            }`}
          >
            About Us
          </a>
          <a
            href="/our_service"
            className={`m-5 font-semibold transition-colors duration-200 ${
              isActive("/our_service") ||
              (isNavbarScrolled
                ? "text-gray-900 hover:text-amber-600"
                : "text-white hover:text-orange-300")
            }`}
          >
            Our Service
          </a>
          <a
            href="/contact_us"
            className={`m-5 font-semibold transition-colors duration-200 ${
              isActive("/contact_us") ||
              (isNavbarScrolled
                ? "text-gray-900 hover:text-amber-600"
                : "text-white hover:text-orange-300")
            }`}
          >
            Contact Us
          </a>
          <a
            href="/reservation"
            className={`m-5 font-semibold px-5 py-2 rounded-md border border-amber-400 transition-all duration-200 ${
              isActive("/reservation") ||
              (isNavbarScrolled
                ? "text-amber-600 hover:bg-amber-600 hover:text-white hover:border-amber-600"
                : "text-white hover:bg-amber-600 hover:border-amber-600")
            }`}
          >
            Reservation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
            isNavbarScrolled
              ? "text-gray-900 hover:bg-gray-200"
              : "text-white hover:bg-gray-800"
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MUI-Style Drawer for Mobile */}
      <>
        {/* Backdrop/Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMobileMenu}
        />

        {/* Drawer - Modified to slide from right */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-neutral-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="logo">
              <h3 className="font-bold text-xl text-white -mb-3">THE REX</h3>
              <h5 className="tracking-widest text-sm mt-2 font-semibold text-gray-300">
                Restaurant
              </h5>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="py-4 overflow-y-auto h-full">
            <a
              href="/"
              className={`block px-6 py-4 font-semibold ${isActive(
                "/"
              )} hover:text-orange-300 hover:bg-gray-800 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                isActive("/") ? "text-amber-400" : "text-white"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </a>

            {/* Mobile Services Dropdown in Drawer */}
            <div className="relative">
              <button
                className={`w-full text-left px-6 py-4 font-semibold flex items-center justify-between hover:text-orange-300 hover:bg-gray-800 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                  isMenuActive()
                    ? "text-amber-400 border-amber-400"
                    : "text-white"
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Menus
                <ChevronDown
                  className={`transform transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-gray-800 bg-opacity-30">
                  <a
                    href="/menu/indian"
                    className={`block px-10 py-3 text-sm text-white hover:bg-gray-600 hover:text-orange-300 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                      isActive("/menu/indian")
                        ? "text-amber-400 border-amber-400"
                        : "text-white"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Indian Delicacy
                  </a>
                  <a
                    href="/menu/continental"
                    className={`block px-10 py-3 text-sm text-white hover:bg-gray-600 hover:text-orange-300 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                      isActive("/menu/continental")
                        ? "text-amber-400 border-amber-400"
                        : "text-white"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Continental Cuisine
                  </a>
                  <a
                    href="/menu/chinese"
                    className={`block px-10 py-3 text-sm text-white hover:bg-gray-600 hover:text-orange-300 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                      isActive("/menu/chinese")
                        ? "text-amber-400 border-amber-400"
                        : "text-white"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Chinese Cuisine
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/about"
              className={`block px-6 py-4 font-semibold ${isActive(
                "/about"
              )} hover:text-orange-300 hover:bg-gray-800 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                isActive("/about") ? "border-amber-400" : "text-white"
              }`}
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a
              href="/our_service"
              className={`block px-6 py-4 font-semibold ${isActive(
                "/our_service"
              )} hover:text-orange-300 hover:bg-gray-800 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                isActive("/our_service") ? "border-amber-400" : "text-white"
              }`}
              onClick={closeMobileMenu}
            >
              Our Service
            </a>
            <a
              href="/contact_us"
              className={`block px-6 py-4 font-semibold ${isActive(
                "/contact_us"
              )} hover:text-orange-300 hover:bg-gray-800 transition-colors duration-200 border-l-4 border-transparent hover:border-orange-300 ${
                isActive("/contact_us") ? "border-amber-400" : "text-white"
              }`}
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>

            {/* Reservation Button in Drawer */}
            <div className="px-6 py-4 mt-4">
              <a
                href="/reservation"
                className={`block w-full px-5 py-3 font-semibold ${isActive(
                  "/reservation"
                )}
                text-center rounded-md border hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 
                ${isActive("/reservation") ? "border-amber-400" : "text-white"}
                `}
                onClick={closeMobileMenu}
              >
                Reservation
              </a>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
