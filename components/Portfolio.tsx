import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { PortfolioItem, Category } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(PORTFOLIO_ITEMS);
  const location = useLocation();

  // Handle query parameters for filtering
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cat = searchParams.get('cat');
    if (cat) {
        setActiveCategory(cat as Category);
    } else {
        setActiveCategory('All');
    }
  }, [location]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(PORTFOLIO_ITEMS);
    } else {
      setFilteredItems(PORTFOLIO_ITEMS.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-deep-ink w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-rice-paper mb-4 tracking-widest">作品集</h2>
          <div className="w-16 h-[2px] bg-vermilion mb-6"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {['All', 'Mythology', 'Portrait', 'Restoration'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as Category)}
                className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 pb-1 border-b border-transparent hover:text-vermilion ${
                  activeCategory === cat ? 'text-vermilion border-vermilion' : 'text-rice-paper/50'
                }`}
              >
                {cat === 'All' ? '全部 All' : 
                 cat === 'Mythology' ? '神话 Mythology' : 
                 cat === 'Portrait' ? '唯美 Portrait' : 
                 '复原 Restoration'}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                key={item.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-sm">
                    <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-auto transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                        <h3 className="text-xl font-serif text-rice-paper mb-2 tracking-widest border-b border-vermilion pb-2">{item.title}</h3>
                        <p className="text-imperial-gold text-xs uppercase tracking-wider mb-4">{item.category}</p>
                        <p className="text-rice-paper/80 text-xs font-light max-w-[200px]">{item.description}</p>
                    </div>

                    {/* Corner Accents (Neo-Chinese element) */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-imperial-gold/0 group-hover:border-imperial-gold/50 transition-all duration-500"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-imperial-gold/0 group-hover:border-imperial-gold/50 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;