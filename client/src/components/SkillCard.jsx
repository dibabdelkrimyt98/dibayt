// src/components/SkillCard.jsx
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const defaultOptions = {
	reverse: false,  // reverse the tilt direction
	max: 8,     // max tilt rotation (degrees)
	perspective: 1000,   // Transform perspective, the lower the more extreme the tilt will get
	scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc.
	speed: 1000,   // Speed of the enter/exit transition
	transition: true,   // Set a transition on enter/exit.
	axis: null,   // What axis should be disabled. Can be 'x' or 'y'
	reset: true,    // If the tilt effect has to be reset on exit
	easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit
}

const SkillCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <Tilt options={defaultOptions} className="h-full">
        {/* Card Body - Now includes a glowing hover effect */}
        <div 
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center transition-all duration-300 h-full
                       relative group overflow-hidden 
                       hover:shadow-2xl hover:border-accent"
        >
          {/* Animated Glow Border */}
          <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none 
                          border-2 border-transparent group-hover:border-accent/50 transition-all duration-500
                          shadow-accent/40 group-hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]">
          </div>

          <Icon className="text-accent mx-auto mb-5 relative z-10" size={40} />
          
          <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">
            {title}
          </h3>
          <p className="text-secondary text-base relative z-10">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SkillCard;