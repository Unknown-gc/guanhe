import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, HERO_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 relative"
      >
        <div className="relative aspect-[3/4] overflow-hidden border border-ink/10 p-2 bg-white shadow-md">
           {/* Decorative Border */}
           <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold"></div>
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold"></div>
           
           <img 
            src={HERO_IMAGES[1]} 
            alt="Photographer" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </motion.div>

      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-8"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-2">{BRAND.name}</h2>
          <p className="text-gold tracking-widest uppercase text-sm">{BRAND.enName}</p>
        </div>

        <div className="space-y-6 text-ink-light leading-loose text-justify font-light">
          <p>
            {BRAND.tagline}。
          </p>
          <p>
            常驻安徽合肥。热爱中国传统文化，致力于将汉服复原与现代审美相结合，创作出具有故事感和情绪张力的影像作品。
          </p>
          <p>
            无论是神话传说中的精卫填海，还是历史长河里的汉宫秋月，镜头不仅是记录，更是一种“飞升”般的艺术表达。
          </p>
          <p>
            擅长：神话脑洞、唯美情绪、复原传统。
          </p>
        </div>

        <div className="pt-8 border-t border-ink/10">
          <p className="text-vermilion font-serif italic text-lg">"Let's try different themes and styles together."</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;