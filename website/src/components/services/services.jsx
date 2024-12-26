import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Droplets, Building, Home, Bus, Coffee, Star, Settings, Calendar, Shield, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceLogo = ({ type }) => {
  const commonClasses = "p-3 mb-4 backdrop-blur-sm";
  const rectangularClasses = "w-16 h-12 bg-gray-900/90";
  const roundClasses = "w-16 h-16 rounded-full bg-amber-600/90";
  
  return (
    <div className={`${commonClasses} ${type === 'bnb' ? roundClasses : rectangularClasses} 
      absolute -top-8 left-6 flex items-center justify-center transform hover:scale-110 transition-transform`}>
      {type === 'bnb' ? (
        <Coffee className="text-white" size={32} />
      ) : type === 'drilling' ? (
        <Droplets className="text-white" size={28} />
      ) : type === 'construction' ? (
        <Building className="text-white" size={28} />
      ) : type === 'properties' ? (
        <Home className="text-white" size={28} />
      ) : (
        <Bus className="text-white" size={28} />
      )}
    </div>
  );
};

const EnhancedServices = () => {
  const services = [
    {
      title: "Borehole Drilling",
      description: "Professional water solutions for residential and commercial properties",
      image: "/borehole3.jpg",
      link: "/drilling",
      logoType: "drilling",
      features: ["Site Assessment", "Professional Drilling", "Water Testing", "Maintenance"],
      icons: [Settings, Map, Star, Calendar]
    },
    {
      title: "Bread and Breakfast",
      description: "Providing comfort and excellence with precision and innovation",
      image: "/bed3.jpg",
      link: "/constrution",
      logoType: "bnb",
      features: ["Luxury Rooms", "Gourmet Dining", "24/7 Service", "Events Hosting"],
      icons: [Home, Coffee, Star, Calendar]
    },
    {
      title: "Properties",
      description: "Premium real estate development and investments",
      image: "/prop.jpg",
      link: "/properties",
      logoType: "properties",
      features: ["Residential", "Commercial", "Property Management", "Investment"],
      icons: [Building, Shield, Settings, Star]
    },
    {
      title: "Tours & Travel",
      description: "Unforgettable travel experiences and professional tour services",
      image: "/bus1.jpg",
      link: "/tours",
      logoType: "tours",
      features: ["Guided Tours", "Custom Packages", "Transport", "Activities"],
      icons: [Map, Star, Bus, Calendar]
    },
    {
      title: "Construction",
      description: "Building excellence with precision and innovation",
      image: "/constrution.png",
      link: "/constrution",
      logoType: "construction",
      features: ["Commercial", "Residential", "Industrial", "Renovations"],
      icons: [Building, Settings, Shield, Star]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden relative"
            >
              <ServiceLogo type={service.logoType} />
              <div className="relative group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={service.link}
                    className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform -translate-y-4 group-hover:translate-y-0"
                  >
                    Explore Service
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                      {React.createElement(service.icons[i], { size: 18, className: "text-gray-500" })}
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;