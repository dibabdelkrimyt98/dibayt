// src/components/ResearchCard.jsx
import { FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const ResearchCard = ({ entry }) => {
  return (
    <a 
      href={entry.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-400"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-primary leading-tight hover:text-blue-600 transition-colors">
          {entry.title}
        </h4>
        <FaFileAlt size={18} className="text-blue-400 flex-shrink-0 ml-3" />
      </div>
      <p className="text-xs text-secondary mb-2">{entry.summary}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="font-semibold uppercase">{entry.type}</span>
        <span className="flex items-center gap-1">
          <FaCalendarAlt size={10} /> {entry.date}
        </span>
      </div>
    </a>
  );
};

export default ResearchCard;