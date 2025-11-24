import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, HERO_IMAGES } from '../constants';
import { Page } from '../types';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={HERO_IMAGES[0]} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-4">
        
        {/* Vertical Chinese Text Layout */}
        <div className="flex flex-row-reverse items-start gap-8 md:gap-16 h-[60vh]">
          
          {/* Name Column - Applied text-gold-shimmer here */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="writing-vertical-rl text-6xl md:text-8xl font-serif border-l-2 border-vermilion pl-4 md:pl-8 py-4 tracking-widest drop-shadow-2xl text-gold-shimmer"
          >
            {BRAND.name}
          </motion.div>

          {/* Tagline Column - Explicit text-gold for Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="writing-vertical-rl text-xl md:text-2xl font-light text-gold-light/90 tracking-widest mt-16"
          >
            {BRAND.tagline}
          </motion.div>
          
        </div>

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={() => setPage(Page.PORTFOLIO)}
          className="mt-12 px-8 py-3 border border-gold-light text-gold-light hover:bg-vermilion hover:border-vermilion hover:text-white transition-all duration-500 uppercase tracking-[0.3em] text-sm font-medium"
        >
          Enter Portfolio
        </motion.button>
      </div>

      {/* Custom CSS for vertical writing */}
      <style>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </div>
  );
};

export default Hero;