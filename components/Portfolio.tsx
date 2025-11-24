import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { Page } from '../types';

interface PortfolioProps {
  setPage: (page: Page) => void;
}

const categories = [
  { id: 'all', label: '全部', en: 'All' },
  { id: 'mythology', label: '神话与脑洞', en: 'Mythology' },
  { id: 'portrait', label: '唯美情绪', en: 'Portrait' },
  { id: 'restoration', label: '复原与传统', en: 'Restoration' },
];

const Portfolio: React.FC<PortfolioProps> = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-ink mb-2">精选作品</h2>
        <p className="text-gold tracking-[0.2em] uppercase text-sm">Selected Works</p>
        <div className="w-12 h-[1px] bg-ink/20 mx-auto mt-6"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-sm transition-all duration-300 flex flex-col items-center group ${
              activeCategory === cat.id 
                ? 'text-vermilion' 
                : 'text-ink-light/60 hover:text-ink'
            }`}
          >
            <span className="font-serif text-lg">{cat.label}</span>
            <span className="text-[10px] uppercase tracking-wider opacity-60 group-hover:opacity-100">{cat.en}</span>
            {activeCategory === cat.id && (
              <motion.div 
                layoutId="underline" 
                className="w-full h-[1px] bg-vermilion mt-1" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            key={item.id}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm border border-ink/5 shadow-sm"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 group-hover:opacity-95"
            />
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-serif text-gold-light">{item.title}</h3>
              <p className="text-xs text-gray-300 mt-1">{item.description}</p>
            </div>
            
            {/* Ornamental Border on Hover */}
            <div className="absolute inset-0 border border-gold-light/0 group-hover:border-gold-light/50 transition-colors duration-300 pointer-events-none m-2"></div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-ink-light">
          <p>暂无此类作品展示</p>
          <p className="text-xs mt-2 uppercase">No items in this category</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;