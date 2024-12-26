import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, PhoneCall, Mail, MapPin, Building, Droplets, Home, Car, Hotel } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'sonner';

const ServiceCard = ({ icon: Icon, title, description, imagePath }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative h-64 overflow-hidden rounded-lg shadow-lg group"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Borehole Drilling",
      description: "Professional water solutions for residential and commercial properties",
      imagePath: "/borehole.webp"
      },
      {
        icon: Car,
        title: "Tours & Travel",
        description: "Unforgettable travel experiences and professional tour services",
        imagePath: "/bus2.jpg"
      },
      {
        icon: Car,
        title: "Bread & Breakfast",
        description: "Unforgettable Bread and Breakfast experiences with poolside views",
        imagePath: "/lodge1.jpeg"
      },
      {
        icon: Hotel,
        title: "Accommodation",
        description: "Comfortable stays at our carefully curated properties",
        imagePath: "/lodge.jpeg"
      },
    {
      icon: Building,
      title: "Construction",
      description: "Expert construction services with attention to detail and quality",
      imagePath: "/constrution.png"
    },
    {
      icon: Home,
      title: "Property Development",
      description: "Creating modern, sustainable living spaces for communities",
      imagePath: "/prop.jpg"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to meet your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};


const Hero = () => {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="/borehole.webp"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Building Dreams, Creating Experiences
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              From construction to hospitality, we deliver excellence across industries
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </Link>
              <Link to="/services" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  
  const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      toast.success('Message sent successfully!');
    };
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <PhoneCall className="text-gray-600" />
                  <span>+1234567890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-600" />
                  <span>contact@greylink.co.zw</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-gray-600" />
                  <span>Waterfalls, Harare, Zimbabwe</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-md h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};
  
export { Hero, Services, Contact };
  