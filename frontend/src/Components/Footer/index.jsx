import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Globe,
  Star,
  Phone,
  Mail,
  Globe2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold">
              THE REX
              <span className="block text-sm font-normal tracking-widest">
                RESTAURANT
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dolor church-key veniam, fap Bushwick mumblecore irure Vice
              consectetur 3 wolf moon sapiente literally quinoa.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Star size={20} />
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              OVERVIEW
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Food Menus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Service
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Location */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold tracking-wide">
                CONTACT INFO
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400">+65.4566743</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400">
                    info@grandrestauranttheme.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe2 size={16} className="text-gray-400" />
                  <span className="text-gray-400">
                    grandrestauranttheme.com
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold tracking-wide">
                LOCATION
              </h3>
              <div className="text-gray-400 text-sm leading-relaxed">
                <p>732/21 Second Street,</p>
                <p>Manchester, King Street,</p>
                <p>Kingston United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
