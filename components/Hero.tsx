import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const heroImages = [
  'https://picsum.photos/seed/feisheng/1920/1080',
  'https://picsum.photos/seed/jingwei/1920/1080',
  'https://picsum.photos/seed/luocha/1920/1080',
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-deep-ink">
      {/* Background Slider */}
      {heroImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentImage ? 0.4 : 0,
            scale: index === currentImage ? 1 : 1.1
          }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ink/30 via-transparent to-deep-ink"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Description */}
        <div className="hidden md:block w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="space-y-6 border-l border-imperial-gold/30 pl-8"
          >
            <p className="text-imperial-gold font-serif tracking-[0.2em] text-sm">合肥独立女摄</p>
            <p className="text-rice-paper/80 text-xs leading-loose max-w-xs">
              以光影为笔，绘古韵今风。<br/>
              Capturing the eternal soul through the lens of tradition.
            </p>
          </motion.div>
        </div>

        {/* Center/Right: Vertical Title */}
        <div className="flex-1 flex justify-center md:justify-end h-[60vh] items-center md:mr-20">
          <div className="flex space-x-8 md:space-x-12 h-full writing-vertical-rl items-center">
             <motion.h1 
              initial={{ opacity: 0, height: '0%' }}
              animate={{ opacity: 1, height: '100%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-serif text-6xl md:text-8xl text-rice-paper tracking-[0.15em] font-bold drop-shadow-2xl border-l-2 border-transparent"
            >
              <span className="text-vermilion">关</span>河未冷
            </motion.h1>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 1 }}
               className="h-full flex flex-col justify-between py-4"
            >
               <span className="text-imperial-gold tracking-[0.3em] text-xs uppercase">Photography Portfolio</span>
               <span className="w-[1px] h-32 bg-imperial-gold/50 block mx-auto mt-4"></span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
