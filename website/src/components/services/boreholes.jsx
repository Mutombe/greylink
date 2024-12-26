import React from 'react';
import { motion } from 'framer-motion';
import { Drill, Building2, Home, Compass, Hotel, ChevronRight, Star, Users, Calendar, Shield } from 'lucide-react';

// Shared animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Parallax Section Component
export const ParallaxSection = ({ imgSrc, title, subtitle }) => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
};

// Borehole Drilling Page
const BoreholeDrilling = () => {
  const services = [
    { title: "Site Assessment", description: "Comprehensive evaluation of ground conditions" },
    { title: "Drilling Services", description: "Professional drilling with modern equipment" },
    { title: "Water Testing", description: "Quality analysis and testing services" },
    { title: "Maintenance", description: "Regular maintenance and support" }
  ];

  return (
    <div className="pt-16">
      <ParallaxSection
        imgSrc="/borehole4.jpg"
        title="Greylink Borehole Drilling"
        subtitle="Professional Water Solutions"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Drilling Solutions</h2>
              <p className="text-gray-600 mb-8">
                With years of experience and state-of-the-art equipment, we provide reliable water solutions for residential and commercial properties.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <ChevronRight className="text-gray-400" />
                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.img
                src="/borehole2.jpg"
                alt="Drilling Equipment"
                className="rounded-lg shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Tours Page
const Tours = () => {
  const features = [
    { icon: Compass, title: "Guided Tours", description: "Expert-led experiences" },
    { icon: Calendar, title: "Flexible Scheduling", description: "Choose your perfect dates" },
    { icon: Users, title: "Group Travel", description: "Perfect for families & friends" },
    { icon: Shield, title: "Safe Travel", description: "Your security is our priority" }
  ];

  return (
    <div className="pt-16">
      <ParallaxSection
        imgSrc="/bus2.jpg"
        title="Greylink Tours"
        subtitle="Unforgettable Travel Experiences"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-3xl font-bold mb-4"
            >
              Discover Our Popular Tours
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/bus3.jpg"
                  alt={`Tour ${tour}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Adventure Tour {tour}</h3>
                  <p className="text-gray-600 mb-4">Experience the beauty of nature with our guided tours.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">$299</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-4 inline-block">
                  <feature.icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { BoreholeDrilling, Tours };