import React from 'react';
import { Page } from '../types';
import { NAV_ITEMS, BRAND } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  
  const handleNavClick = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-xuan/90 backdrop-blur-md border-b border-ink/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 py-2 md:py-0">
          
          {/* Logo Section - High End Look */}
          <div 
            className="flex flex-col items-center md:items-start cursor-pointer group mb-2 md:mb-0 pt-2 md:pt-0"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <div className="flex items-baseline">
              {/* Applied text-gold-shimmer here */}
              <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-[0.15em] drop-shadow-sm transition-colors duration-500 text-gold-shimmer">
                {BRAND.name}
              </h1>
              <div className="w-2 h-2 rounded-full bg-vermilion ml-2 mb-1 animate-pulse hidden md:block"></div>
            </div>
            <span className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase font-light border-t border-gold/30 pt-1 mt-1 w-full text-center md:text-left">
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

          {/* Mobile Navigation - Persistent Horizontal Scroll (No Hamburger) */}
          <div className="w-full md:hidden mt-2 border-t border-ink/5">
            <div className="flex overflow-x-auto no-scrollbar py-3 px-2 space-x-6 items-center justify-start sm:justify-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex flex-col items-center flex-shrink-0 whitespace-nowrap px-2 transition-colors duration-300
                    ${currentPage === item.page ? 'text-vermilion' : 'text-ink-light'}
                  `}
                >
                  <span className={`text-base font-serif tracking-widest ${currentPage === item.page ? 'font-bold border-b border-vermilion pb-0.5' : ''}`}>
                    {item.label}
                  </span>
                  <span className="text-[8px] opacity-50 uppercase tracking-wider mt-0.5">
                    {item.enLabel}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;