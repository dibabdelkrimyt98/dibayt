// src/components/Footer.jsx
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../data/socials'; // Import the social data

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 mb-8">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Your Portfolio <span className="text-accent">•</span>
            </h3>
            <p className="text-sm">
              Computer Science Graduate focused on building better connected systems.
            </p>
          </div>

          {/* Social Icons using the data file */}
          <div className="flex space-x-6 text-white">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <FaTwitter size={24} /> 
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href={socialLinks.email} className="hover:text-accent transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-700">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;