import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';
import { NAV_ITEMS, BRAND } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-xuan/95 backdrop-blur-md border-b border-ink/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo Section - High End Look */}
          <div 
            className="flex flex-col items-start cursor-pointer group"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <div className="flex items-baseline">
              {/* Applied text-gold-shimmer here */}
              <h1 className="text-2xl md:text-4xl font-serif font-bold tracking-[0.15em] drop-shadow-sm transition-colors duration-500 text-gold-shimmer">
                {BRAND.name}
              </h1>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-vermilion ml-2 mb-1 animate-pulse hidden md:block"></div>
            </div>
            <span className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase font-light border-t border-gold/30 pt-1 mt-1 w-full text-left">
              {BRAND.enName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 group
                    ${currentPage === item.page ? 'text-vermilion' : 'text-ink-light hover:text-vermilion'}
                  `}
                >
                  <div className="flex flex-col items-center">
                    <span className={`font-serif text-lg tracking-widest ${currentPage === item.page ? 'font-bold' : 'font-normal'}`}>
                      {item.label}
                    </span>
                    <span className="text-[9px] opacity-40 uppercase tracking-widest group-hover:opacity-80 transition-opacity">
                      {item.enLabel}
                    </span>
                  </div>
                  {/* Active Indicator Line */}
                  {currentPage === item.page && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-vermilion to-transparent"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink hover:text-vermilion transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-xuan border-t border-ink/5 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-4 py-8 space-y-6 items-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex flex-col items-center flex-shrink-0 whitespace-nowrap px-2 transition-colors duration-300 w-full
                    ${currentPage === item.page ? 'text-vermilion' : 'text-ink-light'}
                  `}
                >
                  <span className={`text-xl font-serif tracking-[0.3em] ${currentPage === item.page ? 'font-bold' : 'font-normal'}`}>
                    {item.label}
                  </span>
                  <span className="text-[10px] opacity-50 uppercase tracking-widest mt-1 text-gold">
                    {item.enLabel}
                  </span>
                  {currentPage === item.page && (
                     <div className="w-8 h-[1px] bg-vermilion mt-2"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;