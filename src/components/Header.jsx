import React, { useState } from "react";
import logo from "../assets/LogoLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full bg-[#181e38]">
        <div className="flex items-center justify-between px-4 py-2 mx-auto">
          <div className="flex items-center space-x-8">
            <img src={logo} alt="" className="h-8" />
          </div>

          <div className="text-white lg:flex hidden space-x-8 items-center">
            <a
              className="text-sm text-gray-100 font-semibold hover:text-gray-300 duration-200"
              href="/"
            >
              My Account
            </a>
            <button
              type="submit"
              className="bg-[#FE405C] rounded px-3 py-2 text-sm font-semibold text-white hover:bg-black duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Menu button */}
          <div className="lg:hidden">
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer text-gray-100"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>

          {/* Dropdown div */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-20 right-4  bg-white p-4 rounded-md">
              <a
                className="block text-gray-800 font-semibold mb-2 hover:text-gray-900"
                href="/"
              >
                My Account
              </a>
              <button
                type="submit"
                className="block rounded-md bg-[#FE405C] px-3 py-2 text-sm font-semibold text-white hover:bg-black duraton-300"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
