// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from '../data/socials'; // Import the social data

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection to change background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Welcome', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'Academic Career', path: '/academic_career' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-lg py-3' // bg-primary is Dark Blue
          : 'bg-primary/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        
        {/* --- LOGO --- */}
        <Link to="./" className="text-2xl font-bold tracking-tight flex items-center gap-2 group">
           <span className="w-3 h-3 bg-accent rounded-full inline-block group-hover:scale-125 transition-transform"></span>
           Dib-Dev
        </Link>

        {/* --- DESKTOP MENU --- */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              // Set link color based on active path
              className={`text-sm font-medium hover:text-accent transition-colors relative ${
                location.pathname === link.path ? 'text-accent' : 'text-gray-300'
              }`}
            >
              {link.name}
              {/* Active state underline */}
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* --- SOCIALS & CTA (Desktop) --- */}
        <div className="hidden md:flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaGithub size={20}/></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaLinkedin size={20}/></a>
          
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition-transform transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMobileMenuOpen && (
        // FIX: Added 'text-white' here so items default to white instead of dark blue
        <div className="md:hidden bg-primary border-t border-gray-700 absolute w-full left-0 top-full shadow-xl text-white">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                // FIX: Changed 'text-gray-300' to 'text-white' to guarantee visibility
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-accent' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-700 my-2"/>
            <div className="flex gap-6 justify-center py-2">
               <a href={socialLinks.github} className="text-white hover:text-accent"><FaGithub size={24}/></a>
               <a href={socialLinks.linkedin} className="text-white hover:text-accent"><FaLinkedin size={24}/></a>
               <a href={socialLinks.x} className="text-white hover:text-accent"><FaTwitter size={24}/></a>
            </div>
            <Link to="/contact" className="bg-accent text-center text-white py-3 rounded-md font-bold">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;