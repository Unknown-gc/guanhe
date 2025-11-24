import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../content';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setSection: (s: Section) => void;
}

const navItems: { id: Section; label: string; en: string }[] = [
  { id: 'home', label: '首页', en: 'HOME' },
  { id: 'portfolio', label: '作品集', en: 'PORTFOLIO' },
  { id: 'about', label: '关于摄影师', en: 'ABOUT' },
  { id: 'services', label: '约拍详情', en: 'SERVICES' },
  { id: 'contact', label: '联系我', en: 'CONTACT' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close mobile menu on selection
  const handleSelect = (s: Section) => {
    setSection(s);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 bg-ink/80 border border-imperial text-imperial rounded-full backdrop-blur-sm"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar / Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 h-full bg-ink/95 border-r border-white/10 w-64 z-40 flex flex-col justify-between py-12 px-8 transition-transform duration-500 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Brand */}
        <div className="text-center md:text-left cursor-pointer" onClick={() => handleSelect('home')}>
          <div className="border-2 border-vermilion p-2 inline-block mb-4">
            <h1 className="text-3xl font-serif text-paper writing-vertical-rl md:writing-mode-horizontal">{BRAND.name}</h1>
          </div>
          <p className="text-xs text-imperial tracking-widest uppercase mt-2">{BRAND.englishName}</p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-8 mt-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className="group text-left relative pl-4"
            >
              {activeSection === item.id && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-vermilion"
                />
              )}
              <span className={`block text-lg font-serif transition-colors ${activeSection === item.id ? 'text-vermilion font-bold' : 'text-paper group-hover:text-imperial'}`}>
                {item.label}
              </span>
              <span className="block text-[10px] text-gray-500 tracking-widest uppercase group-hover:text-gray-400">
                {item.en}
              </span>
            </button>
          ))}
        </div>

        {/* Footer info in nav */}
        <div className="text-xs text-gray-600">
          <p>{BRAND.location}</p>
          <p className="mt-2">{BRAND.copyright}</p>
        </div>
      </motion.nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};