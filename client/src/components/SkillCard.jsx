// src/components/SkillCard.jsx
import { motion } from 'framer-motion';

const SkillCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      // Updated class names to use the Tailwind v4 setup
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-accent"
    >
      <Icon className="text-accent mb-4" size={36} />
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </motion.div>
  );
};

export default SkillCard;