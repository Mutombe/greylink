import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
//import { Card, CardContent } from '@/components/ui/card';
import 'leaflet/dist/leaflet.css';

const ContactPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Company locations data
  const locations = [
    {
      id: 1,
      name: "Greylink Head Office",
      type: "Corporate Office",
      address: "123 Main Street, Business District",
      phone: "+1234567890",
      email: "info@greylink.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      coordinates: [-26.2041, 28.0473],
      services: ["Corporate Services", "Project Management", "Client Relations"]
    },
    {
      id: 2,
      name: "Greylink Inn & Restaurant",
      type: "Hospitality",
      address: "456 Hospitality Road, Resort Area",
      phone: "+1234567891",
      email: "stay@greylinkinn.com",
      hours: "24/7",
      coordinates: [-26.1052, 28.0560],
      services: ["Accommodation", "Fine Dining", "Events"]
    },
    {
      id: 3,
      name: "Greylink Tours Office",
      type: "Tourism Services",
      address: "789 Tourism Avenue",
      phone: "+1234567892",
      email: "tours@greylink.com",
      hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
      coordinates: [-26.1241, 28.0473],
      services: ["Tour Packages", "Travel Planning", "Transport Services"]
    },
    {
      id: 4,
      name: "Greylink Construction & Drilling",
      type: "Construction Services",
      address: "321 Industrial Park",
      phone: "+1234567893",
      email: "construction@greylink.com",
      hours: "Monday - Friday: 7:00 AM - 4:00 PM",
      coordinates: [-26.1841, 28.0373],
      services: ["Construction", "Borehole Drilling", "Site Assessment"]
    }
  ];

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: '/fav.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
  

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-gray-300 max-w-2xl mx-auto"
          >
            Find the nearest Greylink location and get in touch with our team
          </motion.p>
        </div>
      </motion.div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`cursor-pointer transition-all ${
                      selectedLocation?.id === location.id
                        ? 'border-gray-900 shadow-lg'
                        : 'hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <Building className="text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{location.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{location.type}</p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{location.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={16} />
                              <span>{location.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>{location.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-2 h-[600px] rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                center={[-26.2041, 28.0473]}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.coordinates}
                    icon={customIcon}
                    eventHandlers={{
                      click: () => setSelectedLocation(location),
                    }}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">Send us a message and we'll get back to you shortly</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;