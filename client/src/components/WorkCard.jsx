// src/components/WorkCard.jsx
import { FaExternalLinkAlt, FaGithub, FaTag } from 'react-icons/fa';

const WorkCard = ({ entry }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      
      {/* Title and Category */}
      <div className="mb-4">
        <div className="flex items-center text-sm font-semibold text-accent mb-1">
          <FaTag className="mr-1" size={12} />
          {entry.category}
        </div>
        <h3 className="text-xl font-bold text-primary">{entry.title}</h3>
      </div>
      
      {/* Summary */}
      <p className="text-secondary mb-4 flex-grow text-sm">{entry.summary}</p>
      
      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {entry.techStack.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs bg-background-light text-primary py-1 px-3 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 border-t pt-4">
        {entry.githubLink && (
          <a 
            href={entry.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            <FaGithub size={18} /> Code
          </a>
        )}
        {entry.demoLink && (
          <a 
            href={entry.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            <FaExternalLinkAlt size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;