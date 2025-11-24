import React from 'react';
import { PRICING_LIST, SERVICE_NOTES } from '../../content';

export const ServicesSection: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto px-6 py-12 md:px-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-paper mb-2">约拍价格表</h2>
          <p className="text-imperial text-sm tracking-widest uppercase">Service Rates & Packages</p>
          <div className="w-16 h-1 bg-vermilion mx-auto mt-6"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 mb-16">
          {PRICING_LIST.map((item, index) => (
            <div 
              key={index} 
              className="relative p-8 border border-white/10 bg-white/5 hover:border-imperial/50 transition-colors duration-300"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-imperial opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-imperial opacity-50"></div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-white/10 pb-2">
                <h3 className="text-xl md:text-2xl font-serif text-paper">{item.title}</h3>
                <span className="text-vermilion text-lg md:text-xl font-bold mt-2 md:mt-0 font-serif">
                  ¥ {item.price}
                </span>
              </div>
              
              <ul className="space-y-2">
                {item.details.map((detail, dIndex) => (
                  <li key={dIndex} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start">
                    <span className="mr-2 text-imperial">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="bg-ink border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-white/5 font-serif text-9xl select-none pointer-events-none">注</div>
          
          <h3 className="text-2xl font-serif text-paper mb-6 relative z-10">拍前须知 (Important Notes)</h3>
          
          <div className="space-y-6 relative z-10">
            {SERVICE_NOTES.map((note, index) => (
              <div key={index}>
                <h4 className="text-imperial font-serif mb-1 text-lg">{note.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};