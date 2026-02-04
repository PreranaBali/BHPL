import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Import your page components
import Home from './Home';
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';
import Geotechnical from './Geotechnical';
import LayoutPlanning from './LayoutPlanning';

// --- FLUID CURSOR COMPONENT ---
const FluidCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 500, mass: 0.1 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#0B2E33] rounded-full z-[99999] pointer-events-none"
        style={{ translateX: mouseX, translateY: mouseY, x: "-50%", y: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-[#4F7C82] rounded-full z-[99998] pointer-events-none opacity-60 mix-blend-difference"
        style={{ translateX: ringX, translateY: ringY, x: "-50%", y: "-50%" }}
      />
    </>
  );
};

// --- SCROLL TO TOP HELPER ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- NAVBAR COMPONENT (Fixed: No White Haze on Desktop) ---
const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
    { name: 'Geotechnical', path: '/Geotechnical' },
    { name: 'Layout Planning', path: '/LayoutPlanning' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#93B1B5]/20 shadow-sm transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-12">
        <Link to="/" className="flex items-center gap-2 group cursor-none">
          <img
            src="img/icons/BHPL-logo.png"
            alt="BHPL Logo"
            className="h-[60px] w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="block lg:hidden rounded border border-[#4F7C82] p-2 text-[#0B2E33] focus:outline-none hover:bg-[#B8E3E9] transition-colors cursor-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block h-0.5 w-6 bg-current mb-1"></span>
          <span className="block h-0.5 w-6 bg-current mb-1"></span>
          <span className="block h-0.5 w-6 bg-current"></span>
        </button>

        {/* Desktop & Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } absolute left-0 top-full w-full 
            bg-white/95 backdrop-blur-md shadow-xl lg:shadow-none lg:bg-transparent lg:backdrop-blur-none
            lg:static lg:block lg:w-auto border-t border-[#93B1B5]/20 lg:border-none`}
        >
          <div className="flex flex-col p-4 lg:flex-row lg:items-center lg:gap-8 lg:p-0 font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    py-3 lg:py-0 transition-all font-bold relative group cursor-none
                    ${isActive 
                      ? "text-[#0B2E33]" // Active: Deep Dark Teal
                      : "text-[#4F7C82] hover:text-[#0B2E33]" // Inactive: Muted Teal
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  
                  {/* Underline Effect */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#4F7C82] transition-all duration-300 hidden lg:block
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"} 
                    `}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <Router>
      <ScrollToTop />
      <FluidCursor />

      {/* Main Container */}
      <div className="font-sans text-[#0B2E33] antialiased overflow-x-hidden min-h-screen bg-[#B8E3E9] selection:bg-[#4F7C82] selection:text-white cursor-none">
        
        {/* Render the Fixed Navbar */}
        <Navbar />

        <div className="min-h-[calc(100vh-400px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Geotechnical" element={<Geotechnical />} />
            <Route path="/LayoutPlanning" element={<LayoutPlanning />} />
          </Routes>
        </div>

        {/* Footer Start */}
        <div className="mt-0 bg-[#0B2E33] pt-20 text-[#93B1B5] border-t border-[#4F7C82]/30">
          <div className="container mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Address */}
              <div>
                <h3 className="mb-6 text-xl font-bold text-[#B8E3E9]">Address</h3>
                <p className="mb-2 flex items-center group cursor-none">
                  <i className="fa fa-map-marker-alt mr-3 text-[#4F7C82] group-hover:text-[#B8E3E9] transition-colors"></i> Bangalore, India
                </p>
                <p className="mb-2 flex items-center group cursor-none">
                  <i className="fa fa-phone-alt mr-3 text-[#4F7C82] group-hover:text-[#B8E3E9] transition-colors"></i> +91 99646 66544
                </p>
                <p className="mb-2 flex items-center group cursor-none">
                  <i className="fa fa-envelope mr-3 text-[#4F7C82] group-hover:text-[#B8E3E9] transition-colors"></i> support@bhpl.club
                </p>
                <div className="mt-4 flex gap-2">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded border border-[#4F7C82] text-[#93B1B5] transition hover:bg-[#B8E3E9] hover:text-[#0B2E33] hover:border-[#B8E3E9] cursor-none">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded border border-[#4F7C82] text-[#93B1B5] transition hover:bg-[#B8E3E9] hover:text-[#0B2E33] hover:border-[#B8E3E9] cursor-none">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-6 text-xl font-bold text-[#B8E3E9]">Services</h3>
                <div className="flex flex-col space-y-2">
                  {['Architecture', '3D Animation', 'House Planning', 'Interior Design', 'Construction'].map(item => (
                    <Link key={item} to="/service" className="hover:text-[#B8E3E9] hover:translate-x-2 transition-all inline-block duration-300 cursor-none">{item}</Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-6 text-xl font-bold text-[#B8E3E9]">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  <Link to="/about" className="hover:text-[#B8E3E9] hover:translate-x-2 transition-all duration-300 cursor-none">About Us</Link>
                  <Link to="/contact" className="hover:text-[#B8E3E9] hover:translate-x-2 transition-all duration-300 cursor-none">Contact Us</Link>
                  <Link to="/service" className="hover:text-[#B8E3E9] hover:translate-x-2 transition-all duration-300 cursor-none">Our Services</Link>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="mb-6 text-xl font-bold text-[#B8E3E9]">Newsletter</h3>
                <p className="mb-4 text-sm">Join our community to reach new heights together.</p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="w-full rounded bg-[#082428] border border-[#4F7C82] py-3 pl-4 pr-20 text-[#B8E3E9] focus:border-[#B8E3E9] focus:outline-none focus:ring-1 focus:ring-[#B8E3E9] placeholder-[#4F7C82] cursor-none"
                  />
                  <button className="absolute right-1 top-1 rounded bg-[#4F7C82] px-4 py-2 text-sm font-bold text-white hover:bg-[#B8E3E9] hover:text-[#0B2E33] transition-colors cursor-none">
                    SignUp
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-[#4F7C82]/30 py-6 bg-[#082428]">
            <div className="container mx-auto px-4 text-center md:text-left">
              &copy; <Link to="/" className="text-[#B8E3E9] hover:text-white transition-colors font-semibold cursor-none">BHPL.CLUB</Link>, All Rights Reserved.
            </div>
          </div>
        </div>
        {/* Footer End */}

      </div>
    </Router>
  );
}

export default App;