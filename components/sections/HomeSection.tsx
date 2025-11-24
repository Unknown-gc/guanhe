import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, HERO_IMAGE } from '../../content';

export const HomeSection: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image with slow zoom effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <img 
          src={HERO_IMAGE} 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-row-reverse items-start gap-6 md:gap-12 p-8 border border-imperial/30 bg-ink/30 backdrop-blur-sm"
        >
          {/* Vertical Name */}
          <h1 className="text-6xl md:text-8xl font-serif text-paper vertical-text font-bold tracking-widest drop-shadow-lg">
            {BRAND.name}
          </h1>
          
          <div className="flex flex-col h-full justify-between py-4 text-right">
             <div className="w-[1px] h-20 bg-vermilion ml-auto mb-4" />
             <div>
               <h2 className="text-xl md:text-2xl text-imperial font-serif mb-2">{BRAND.englishTagline}</h2>
               <p className="text-gray-300 font-sans tracking-widest text-sm md:text-base max-w-xs ml-auto">
                 {BRAND.tagline}
               </p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};