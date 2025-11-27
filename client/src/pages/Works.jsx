// src/pages/Works.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WorkCard from '../components/WorkCard';
import { worksEntries } from '../data/worksData';

const Works = () => {
  const { t } = useTranslation(); // HOOK
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12 text-center"
      >
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Technical Works & Projects
        </h1>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Showcasing my core competencies in system programming, network architecture, and modern web development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <WorkCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Works;