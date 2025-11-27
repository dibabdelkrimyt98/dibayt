// src/components/BlogCard.jsx
import { FaClock, FaTag } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-gray-100">
      
      {/* Image Placeholder */}
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/4B5563/F3F4F6?text=Blog+Post"; }}
      />
      
      <div className="p-6">
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-secondary mb-3">
          <span className="flex items-center font-medium text-accent">
            <FaTag className="mr-2" size={12} />
            {post.tag}
          </span>
          <span className="flex items-center text-gray-500">
            <FaClock className="mr-1" size={12} />
            {post.readTime}
          </span>
        </div>
        
        {/* Title and Summary */}
        <h3 className="text-xl font-bold text-primary mb-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-secondary mb-4 line-clamp-3">
          {post.summary}
        </p>
        
        {/* Read More Link */}
        <a 
          href={post.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
        >
          Read Article &rarr;
        </a>
      </div>
    </div>
  );
};

export default BlogCard;