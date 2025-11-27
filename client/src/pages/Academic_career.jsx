import { motion } from 'framer-motion';
import EducationBlock from '../components/EducationBlock'; // Make sure this component exists
import ResearchCard from '../components/ResearchCard'; // Make sure this component exists
import { educationEntries, researchEntries } from '../data/academicData'; // Make sure this file exists

const Academic = () => {
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
          Academic Career & Research
        </h1>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Detailed overview of my formal education, thesis work, and published research in Computer Science.
        </p>
      </motion.div>

      {/* Main Content Grid (3 columns desktop, stacked on mobile) */}
      <div className="container mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left/Main Column: Education Blocks (Spans 2 columns) */}
        <div className="md:col-span-2 space-y-12">
          
          <h2 className="text-3xl font-bold text-primary border-b pb-2">Formal Education</h2>
          {educationEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <EducationBlock entry={entry} />
            </motion.div>
          ))}
          
        </div>

        {/* Right Column: Research Papers & Projects (Spans 1 column) */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-3xl font-bold text-primary border-b pb-2">Publications & Reports</h2>
          
          {researchEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ResearchCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic; // <-- Essential export