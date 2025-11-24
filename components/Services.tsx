import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_PACKAGES, SERVICE_POLICIES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-32 pb-20 px-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-ink mb-2">约拍详情</h2>
        <p className="text-gold tracking-[0.2em] uppercase text-sm">Services & Rates</p>
        <div className="w-12 h-[1px] bg-ink/20 mx-auto mt-6"></div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SERVICE_PACKAGES.map((pkg, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            /* Unified styling for all items: White background, Gold border, uniform shadow */
            className="relative p-8 border-2 border-gold/40 bg-white backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-gold hover:shadow-md"
          >
            <h3 className="text-2xl font-serif text-ink mb-4">{pkg.title}</h3>
            <p className="text-vermilion text-xl font-medium mb-6 font-serif border-l-2 border-ink pl-3">{pkg.price}</p>
            
            <ul className="space-y-3">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-ink-light leading-relaxed">
                  <span className="text-gold mr-2 mt-1.5 w-1 h-1 bg-gold rounded-full flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {pkg.note && (
              <div className="mt-6 pt-4 border-t border-ink/5">
                <p className="text-xs text-ink/40 italic">* {pkg.note}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Policy Section */}
      <div className="bg-stone-200/30 p-8 md:p-12 border border-ink/10 backdrop-blur-md">
        <h3 className="text-xl font-serif text-ink mb-6 flex items-center">
          <span className="w-1 h-6 bg-vermilion mr-3"></span>
          拍前须知
          <span className="ml-2 text-xs text-ink/40 font-sans font-normal uppercase pt-1">Important Notice</span>
        </h3>
        
        <ul className="space-y-4">
          {SERVICE_POLICIES.map((policy, index) => (
            <li key={index} className="flex text-sm md:text-base text-ink-light">
              <span className="text-gold font-serif mr-4">{index + 1}.</span>
              {policy}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Services;