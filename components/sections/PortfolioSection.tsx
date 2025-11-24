import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../../content';

const categories = [
  { id: 'all', label: '全部' },
  { id: 'mythology', label: '神话与脑洞' },
  { id: 'atmospheric', label: '唯美情绪' },
  { id: 'restoration', label: '复原与传统' },
];

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="w-full h-full overflow-y-auto px-6 py-12 md:px-12 md:py-20 scrollbar-hide">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <h2 className="text-4xl font-serif text-paper mb-2">作品集</h2>
          <p className="text-imperial text-sm tracking-widest uppercase">Portfolio Gallery</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-6 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-sm md:text-base tracking-widest transition-colors pb-1 border-b-2 ${
                filter === cat.id 
                  ? 'text-vermilion border-vermilion' 
                  : 'text-gray-500 border-transparent hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid (Simulated with CSS Columns) */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="relative overflow-hidden border border-white/10 bg-ink">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-xl font-serif text-paper mb-1">{item.title}</h3>
                    <p className="text-xs text-imperial">{item.color}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};