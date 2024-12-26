import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigationLinks = [
    { path: "/services", label: "Services" },
    { path: "/drilling", label: "Borehole Drilling" },
    { path: "/properties", label: "Properties" },
    { path: "/tours", label: "Travel" },
    { path: "/stays", label: "Greylink Inn" },
    { path: "/contact", label: "Contact Us", isButton: true }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="/logo2.png"
                alt="Greylink Logo"
                className="h-8 w-auto sm:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  ${link.isButton 
                    ? "bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                    : `${isActive(link.path)
                        ? "text-gray-900 font-semibold border-b-2 border-gray-900"
                        : "text-gray-700 hover:text-gray-900"
                    }`
                  } transition duration-200
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-2 space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-3 py-2 rounded-md
                    ${link.isButton
                      ? "bg-gray-900 text-white"
                      : `${isActive(link.path)
                          ? "bg-gray-100 text-gray-900 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    } transition duration-200
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;