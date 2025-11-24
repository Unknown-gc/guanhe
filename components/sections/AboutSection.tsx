import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT, BRAND } from '../../content';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto p-6 md:p-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-4xl font-serif text-paper mb-6">关于摄影师</h2>
          <h3 className="text-vermilion text-xl font-serif mb-6">{BRAND.name} / {BRAND.englishName}</h3>
          
          <div className="space-y-6 text-gray-300 leading-relaxed font-sans text-justify">
            <p className="border-l-2 border-imperial pl-4 italic">
              "{BRAND.tagline}"
            </p>
            <p>{ABOUT_CONTENT.intro}</p>
            <p>{ABOUT_CONTENT.description}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex gap-8">
            <div>
              <span className="block text-imperial text-xs uppercase tracking-wider">Location</span>
              <span className="text-paper">{BRAND.location}</span>
            </div>
            <div>
              <span className="block text-imperial text-xs uppercase tracking-wider">Style</span>
              <span className="text-paper">汉服 / 情绪 / 脑洞</span>
            </div>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          <div className="absolute inset-0 border-2 border-imperial transform translate-x-4 translate-y-4 z-0"></div>
          <img 
            src={ABOUT_CONTENT.image} 
            alt="Photographer" 
            className="w-full h-[500px] object-cover relative z-10 shadow-2xl filter brightness-90 contrast-110"
          />
        </motion.div>

      </div>
    </div>
  );
};