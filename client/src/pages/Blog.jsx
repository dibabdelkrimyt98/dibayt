// src/pages/Blog.jsx
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import BlogCard from '../components/BlogCard';
import { allTags, blogPosts } from '../data/blogData';

const Blog = () => {
  const { t } = useTranslation(); // HOOK
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  // Logic to filter posts based on both search term and active tag
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => {
        // 1. Filter by Search Term (case-insensitive on Title)
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        
        // 2. Filter by Tag
        const matchesTag = activeTag === 'All' || post.tag === activeTag;

        return matchesSearch && matchesTag;
      })
      // Sorting: Newest first (assuming data array is ordered by ID/date)
      .sort((a, b) => b.id - a.id); 
  }, [searchTerm, activeTag]);


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
          Engineering Insights
        </h1>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Deep dives into Rust, Python, Java, and scalable system design.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-6 mb-12">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-6">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-primary border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-accent focus:border-accent transition-all"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {['All', ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTag(tag);
                setSearchTerm(''); // Clear search when changing tags
              }}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 
                ${activeTag === tag
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-gray-200 text-primary hover:bg-gray-300'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>


      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl text-secondary">No blog posts found matching your criteria.</h2>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveTag('All');
              }}
              className="mt-4 bg-accent text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors"
            >
              Show All Posts
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Blog;