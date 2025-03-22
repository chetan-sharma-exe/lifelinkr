"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="h-25 z-101 w-full fixed top-0 shadow-sm bg-[#f0ecec] flex items-center justify-between px-10 sm:px-15">
      <Image src="/logo.png" height={200} width={200} alt="logo" />
      <div className="flex items-center gap-5">
        <p className="nav-item hidden sm:block">Home</p>
        <p className="nav-item hidden sm:block">Why Choose Us</p>
        <p className="nav-item hidden sm:block">Benefits</p>
        <p className="nav-item hidden sm:block">FAQs</p>
        <div className="h-10 hidden sm:flex bg-white rounded-full items-center px-10">
          <p className="text-blue-700">WhatsApp Us</p>
        </div>
      </div>
      {/* for small devices */}
      <div
        className="flex sm:hidden flex-col cursor-pointer z-50"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-black my-0.5 transition-all duration-300 ${
            isMenuOpen ? "transform rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black my-0.5 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black my-0.5 transition-all duration-300 ${
            isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      <div
        className={`absolute left-0 w-full bg-white transition-all duration-500 z-0 ${
          isMenuOpen ? "top-25" : "-top-150"
        }`}
      >
        <ul className="flex flex-col items-center">
          <li>
            <a href="#" className="block px-4 py-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-4">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-4">
              Benefits
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-4">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-4">
              WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
