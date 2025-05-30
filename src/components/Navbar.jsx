import React, { useState } from "react";
import { LINKS } from "../constant";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const handleMenu = () => {
    setmenuOpen(!menuOpen);
  };
  const handleNavigation = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setmenuOpen(false);
    }
  };
  
  
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center h-16
      max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl
      backdrop-blur-lg"
      >
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">Sayyed Samar Abbas</a>
        </div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={handleMenu}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden p-3 bg-stone-950/30 backdrop-blur-lg 
        rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto"
        >
          {LINKS.map((link, index) => (
            <a
              
              key={index}
              className="text-white hover:text-stone-400 transition duration-50"
              onClick={() => handleNavigation(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
