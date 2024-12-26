import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Coffee, Wifi, Car, Key, Home, Building, UtensilsCrossed, Clock, Utensils, Star } from 'lucide-react';
import { ParallaxSection } from './boreholes';

// Stays Page (Greylink Inn)
const Stays = () => {
  const amenities = [
    { icon: Wifi, title: "Free WiFi" },
    { icon: Car, title: "Free Parking" },
    { icon: Coffee, title: "Breakfast Included" },
    { icon: Bath, title: "En-suite Bathroom" }
  ];

  const rooms = [
    {
      title: "Executive Suite",
      price: "199",
      features: ["King Size Bed", "City View", "Mini Bar", "Work Desk"],
      image: "/bed1.jpg"
    },
    {
      title: "Deluxe Room",
      price: "149",
      features: ["Queen Size Bed", "Garden View", "Tea/Coffee Station", "Lounge Area"],
      image: "/bed3.jpg"
    },
    {
      title: "Standard Room",
      price: "99",
      features: ["Twin Beds", "Courtyard View", "Air Conditioning", "TV"],
      image: "/bed4.jpg"
    }
  ];

  return (
    <div className="pt-16">
      <ParallaxSection
        imgSrc="/bed2.jpg"
        title="Greylink Inn"
        subtitle="Your Home Away From Home"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Accommodations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience comfort and luxury in our carefully designed rooms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                  <p className="text-gray-900 text-2xl font-bold mb-4">${room.price}/night</p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Star size={16} className="mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => window.open('YOUR_GOOGLE_FORM_URL', '_blank')}
                    className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <amenity.icon size={32} className="mx-auto mb-4 text-gray-900" />
                <h3 className="font-semibold">{amenity.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Properties Page
const Properties = () => {
  const properties = [
    {
      title: "Modern Apartment Complex",
      location: "City Center",
      price: "Starting from $250,000",
      status: "Under Construction",
      features: ["2-3 Bedrooms", "Secure Parking", "Swimming Pool", "Gym"],
      image: "/apart.webp"
    },
    {
      title: "Luxury Villas",
      location: "Suburban Area",
      price: "Starting from $450,000",
      status: "Ready for Occupancy",
      features: ["4 Bedrooms", "Garden", "Double Garage", "Smart Home"],
      image: "/villa.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      <ParallaxSection
        imgSrc="/villa1.jpg"
        title="Greylink Properties"
        subtitle="Premium Real Estate Development"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-full">
                    {property.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-gray-900 font-bold mb-4">{property.price}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {property.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <Key size={16} className="mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open('YOUR_GOOGLE_FORM_URL', '_blank')}
                    className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Request Information
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Restaurants = () => {
  const menuCategories = [
    {
      name: "Breakfast",
      items: [
        { name: "Continental Breakfast", price: "15", description: "Selection of pastries, fruits, and coffee" },
        { name: "English Breakfast", price: "18", description: "Eggs, bacon, sausage, beans, and toast" }
      ]
    },
    {
      name: "Main Course",
      items: [
        { name: "Grilled Salmon", price: "25", description: "Fresh salmon with seasonal vegetables" },
        { name: "Beef Tenderloin", price: "30", description: "Premium cut with mushroom sauce" }
      ]
    }
  ];

  return (
    <div className="pt-16">
      <ParallaxSection
        imgSrc="/api/placeholder/1920/1080"
        title="Greylink Restaurant"
        subtitle="Fine Dining Experience"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>Open 7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center">
                <Utensils size={20} className="mr-2" />
                <span>Reservations Recommended</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-bold">${item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.open('YOUR_GOOGLE_FORM_URL', '_blank')}
              className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Make a Reservation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { Stays, Properties, Restaurants };