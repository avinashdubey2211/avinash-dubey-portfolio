import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiHome,
  FiUser,
  FiGrid,
  FiMail,
  FiCode,
} from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiUser /> },
    { name: "Services", path: "/services", icon: <FiGrid /> },
    { name: "Projects", path: "/projects", icon: <FiCode /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 ">
      <nav className="max-w-8xl mx-auto bg-[#10172a]/95 backdrop-blur-xl border border-white/10  shadow-[0_8px_40px_rgba(59,130,246,0.15)]">
        <div className="h-20 px-5 sm:px-8 flex justify-between items-center">
          {/* LOGO */}
          <div
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <FiCode className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-white text-xl font-bold tracking-wide">
                Dev<span className="text-blue-400">Studio</span>
              </h1>
              <p className="text-gray-400 text-[10px] tracking-[3px] uppercase">
                Creative Solutions
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => handleNavigation("/contact")}
            className="hidden lg:flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#10172a] font-semibold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Let's Talk
            <FiArrowUpRight className="text-lg" />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 p-4 space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}

            <button
              onClick={() => handleNavigation("/contact")}
              className="w-full flex justify-center items-center gap-2 bg-white text-[#10172a] font-semibold rounded-xl py-3 mt-3"
            >
              Let's Talk
              <FiArrowUpRight />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
