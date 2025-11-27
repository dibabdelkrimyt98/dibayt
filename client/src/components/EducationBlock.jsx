// src/components/EducationBlock.jsx
import { FaGraduationCap, FaLink } from 'react-icons/fa';

const EducationBlock = ({ entry }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-accent space-y-4">
      <div className="flex items-start gap-4">
        <FaGraduationCap size={24} className="text-accent flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-bold text-primary">{entry.degree}</h3>
          <p className="text-secondary italic">{entry.institution} | {entry.dates}</p>
        </div>
      </div>

      {entry.thesisTitle && (
        <div className="border-l-4 border-gray-200 pl-4 ml-2">
          <p className="font-semibold text-primary">Thesis/Project:</p>
          <p className="text-gray-600">{entry.thesisTitle}</p>
        </div>
      )}

      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
        {entry.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      {entry.thesisLink && (
        <a 
          href={entry.thesisLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-medium hover:underline pt-2"
        >
          View Thesis/Document <FaLink size={12} />
        </a>
      )}
    </div>
  );
};

export default EducationBlock;