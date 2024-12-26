import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src="/logo5.png" alt="Greylink Logo" className="h-8 mb-4" />
              <p className="text-gray-400 mb-4">
                Building excellence across industries with innovation and dedication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/drilling" className="text-gray-400 hover:text-white transition">
                    Borehole Drilling
                  </Link>
                </li>
                <li>
                  <Link to="/construction" className="text-gray-400 hover:text-white transition">
                    Construction
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="text-gray-400 hover:text-white transition">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/tours" className="text-gray-400 hover:text-white transition">
                    Tours & Travel
                  </Link>
                </li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  +1234567890
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  info@greylink.com
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  123 Main Street, Business District
                </li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} Greylink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export { Footer };
  