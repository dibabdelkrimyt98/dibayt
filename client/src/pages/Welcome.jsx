import { motion } from 'framer-motion';
import { FaCloud, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'; // Icons for the cards
import { Link } from 'react-router-dom';

import ProfilePic from '../assets/pimagep.png'; // Import your image (adjust path if needed)
import SkillCard from '../components/SkillCard';

const skillsData = [
  { 
    title: "Rust & Low-Level Performance", 
    description: "Focusing on memory safety and high-performance computing in systems development.", 
    icon: FaLaptopCode,
    delay: 0.3
  },
  { 
    title: "Wireless & Networks", 
    description: "Investigating mobile technologies (5G/6G) and future wireless protocols.", 
    icon: FaMobileAlt,
    delay: 0.5
  },
  { 
    title: "Full-Stack & Backend", 
    description: "Building reliable services and dynamic applications using Java/Python.", 
    icon: FaCloud,
    delay: 0.7
  },
];


const Welcome = () => {
  return (
    <div className="bg-primary min-h-screen text-white pt-20">
      
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="container mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Computer Science & Research
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Architecting robust software and <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              exploring future wireless connectivity.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Specialized in low-level performance (Rust/C++) and scalables (Java/Python). 
            Passionate about mobile network infrastructure and wireless protocols.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/works">
              <button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/20">
                View My Works
              </button>
            </Link>
            <Link to="/blog">
              <button className="border border-gray-500 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Read the Blog
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          {/* Decorative Circle Background */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-75"></div>
          
          {/* Profile Image Container - Using the PIC DIB.jpg you provided */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl z-10">
             <img 
               src={ProfilePic} 
               alt="Profile" 
               className="object-cover w-full h-full" 
             />
          </div>
        </motion.div>
      </section>

      {/* -------------------- SKILLS / BRIDGING THEORY SECTION -------------------- */}
      <section className="bg-slate-50 py-20 text-slate-900 -mt-20 relative z-10">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-primary">
                Bridging Theory and Implementation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Merging academic rigor in **wireless networks** with practical, performance-driven software engineering.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {skillsData.map((skill, index) => (
                <SkillCard 
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  delay={skill.delay}
                />
              ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Welcome;     