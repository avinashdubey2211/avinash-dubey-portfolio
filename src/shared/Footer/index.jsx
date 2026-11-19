import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FiCode,
  FiHome,
  FiUser,
  FiGrid,
  FiFolder,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiUser /> },
    { name: "Services", path: "/services", icon: <FiGrid /> },
    { name: "Projects", path: "/projects", icon: <FiFolder /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "API Integration",
    "Web Application Development",
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080D1A] text-white border-t border-white/10">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND SECTION */}
          <div>
            <div
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FiCode className="text-white text-2xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Dev<span className="text-blue-400">Studio</span>
                </h2>
                <p className="text-gray-400 text-[10px] tracking-[3px] uppercase">
                  Creative Solutions
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-7 mt-6">
              Building modern, responsive and user-friendly web applications
              with clean code and creative ideas.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-[#121D32] border border-white/10 flex items-center justify-center text-lg hover:bg-blue-600 transition"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-[#121D32] border border-white/10 flex items-center justify-center text-lg hover:bg-blue-600 transition"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-7">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                    <FiArrowUpRight className="text-xs" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold mb-7">My Services</h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 text-sm hover:text-blue-400 transition cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-7">Get In Touch</h3>

            <p className="text-gray-400 text-sm leading-7 mb-5">
              Have a project or opportunity? Let's connect and create something
              amazing together.
            </p>

            <button
              onClick={() => handleNavigation("/contact")}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm hover:scale-105 transition duration-300"
            >
              Contact Me
              <FiArrowUpRight />
            </button>
          </div>
        </div>

        {/* NEWSLETTER / CTA */}
        <div className="mt-16 p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Let's Work Together!
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Have an idea? Let's turn it into reality.
            </p>
          </div>

          <button
            onClick={() => handleNavigation("/contact")}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-[#080D1A] font-bold hover:bg-blue-500 hover:text-white transition"
          >
            Let's Talk
            <FiArrowUpRight />
          </button>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} DevStudio. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with
            <FiHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl bg-[#121D32] border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
