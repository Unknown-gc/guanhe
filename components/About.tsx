import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section className="bg-stone-gray py-24 relative overflow-hidden flex-grow flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="30" />
            </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 z-10">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[500px] relative">
                <div className="absolute top-4 left-4 w-full h-full border border-vermilion/30 z-0"></div>
                <div className="absolute inset-0 bg-gray-800 overflow-hidden z-10">
                     <img src={ABOUT_INFO.imageUrl} alt="Photographer" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"/>
                </div>
            </div>
            
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                >
                    <h2 className="text-imperial-gold text-xs tracking-[0.3em] uppercase mb-4">{ABOUT_INFO.titleEN}</h2>
                    <h3 className="text-3xl md:text-4xl font-serif text-rice-paper mb-8 tracking-widest">{ABOUT_INFO.titleCN}</h3>
                    
                    <div className="space-y-6 text-rice-paper/80 text-base leading-relaxed font-light text-justify">
                        <p>{ABOUT_INFO.intro1}</p>
                        <p>{ABOUT_INFO.intro2}</p>
                        <p>{ABOUT_INFO.intro3}</p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                         <div>
                             <h4 className="text-rice-paper font-serif text-2xl mb-1">{ABOUT_INFO.expNumber}</h4>
                             <span className="text-xs text-gray-500 uppercase tracking-wider">{ABOUT_INFO.expLabel}</span>
                         </div>
                         <div>
                             <h4 className="text-rice-paper font-serif text-2xl mb-1">{ABOUT_INFO.conceptNumber}</h4>
                             <span className="text-xs text-gray-500 uppercase tracking-wider">{ABOUT_INFO.conceptLabel}</span>
                         </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default About;