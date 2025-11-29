import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm'; // Keep this import

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-16 text-center"
      >
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Whether you have a project idea, a research collaboration, or just want to discuss Rust performance, my inbox is open!
        </p>
      </motion.div>

      {/* Contact Grid: Form (Left) and Details (Right) */}
      <div className="container mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        
        {/* Contact Form (Spans 2 columns) */}
        <div className="md:col-span-2">
          <ContactForm /> {/* Clean component usage */}
        </div>

        {/* Contact Details (Spans 1 column) */}
        <motion.div 
          className="md:col-span-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-primary border-b pb-2">My Details</h2>
          
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center gap-3 text-secondary">
              <FaMapMarkerAlt size={20} className="text-accent" />
              <p>Blida, Algeria</p>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3 text-secondary">
              <FaEnvelope size={20} className="text-accent" />
              <p>dibabdelkrimyt98@gmail.com</p>
            </div>

            {/* Mobile Phone */}
            <div className="flex items-center gap-3 text-secondary">
              <FaPhone size={20} className="text-accent" />
              <p>+213 560 138 750</p> 
            </div>

            {/* WhatsApp (Clickable) */}
            <div className="flex items-center gap-3 text-secondary">
              <FaWhatsapp size={20} className="text-accent" />
              <a 
                href="https://wa.me/213560138750" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary border-b pb-2 pt-4">Connect Online</h3>
          
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/dibabdelkrimyt98/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/dibabdelkrimyt98/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FaGithub size={30} />
            </a>
            <a href="https://wa.me/213560138750" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors">
              <FaWhatsapp size={30} />
            </a>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;