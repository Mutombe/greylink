import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/nav/nav';
import ContactPage from './components/contact/contact';
import { BoreholeDrilling, Tours } from './components/services/boreholes';
import { Stays, Properties, Restaurants } from './components/services/stays';
import EnhancedServices from './components/services/services';
import { Footer } from './components/footer/footer';
import { Hero, Services, Contact } from './components/home/home';
import { Toaster, toast } from 'sonner';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/services" element={<EnhancedServices />} />
          <Route path="/drilling" element={<BoreholeDrilling />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/restaurant" element={<Restaurants />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;