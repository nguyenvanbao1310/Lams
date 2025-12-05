"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      scrolled ? "bg-white shadow-lg py-3" : "bg-white/95 backdrop-blur-sm py-4"
    }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="" className="flex items-center group">
          <div className="h-12 w-36 bg-linear-to-r from-amber-600 to-amber-700 flex items-center justify-center rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <span className="text-white font-bold text-2xl tracking-wider">
              LAMS
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center space-x-1.5">
          {["About Us", "Programs", "Contact Us", "News"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative px-4 py-2 text-gray-700 font-medium transition-colors duration-300 hover:text-amber-600 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover: w-full"></span>
            </a>
          ))}
        </nav>

        {/*Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6I12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="lg-hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {["About Us", "Programs", "Contact Us", "News"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
export default Header;
