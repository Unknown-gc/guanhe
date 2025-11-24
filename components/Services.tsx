import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICE_PLANS, SERVICE_ADDONS, SERVICE_NOTES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-rice-paper tracking-widest mb-4">约拍详情</h2>
        <p className="text-rice-paper/40 text-xs tracking-[0.3em] uppercase">Services & Pricing</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {SERVICE_PLANS.map((plan, idx) => (
          <div 
              key={idx} 
              className={`relative p-8 border transition-all duration-300 flex flex-col ${
                  plan.highlight 
                  ? 'bg-white/5 border-vermilion shadow-lg shadow-vermilion/10' 
                  : 'bg-transparent border-white/10 hover:border-imperial-gold/30'
              }`}
          >
            {plan.highlight && (
                <div className="absolute top-0 right-0 bg-vermilion text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-sm">
                    Recommended
                </div>
            )}
            {/* Primary Name (Chinese) */}
            <h3 className="text-2xl font-serif text-rice-paper mb-1">{plan.name}</h3>
            {/* Secondary Name (English/Decorative) */}
            <p className="text-rice-paper/40 text-[10px] uppercase tracking-widest mb-6 border-b border-white/5 pb-4">{plan.enName}</p>
            
            <div className="mb-6">
              <span className="text-lg md:text-xl font-serif text-imperial-gold block mb-2">{plan.price}</span>
              <p className="text-xs text-rice-paper/60 leading-relaxed">{plan.desc}</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-xs md:text-sm text-rice-paper/80 leading-relaxed">
                  <CheckCircle2 size={14} className="mr-3 mt-1 text-vermilion flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Add-ons & Notes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
        
        {/* Add-ons */}
        <div>
           <h4 className="text-xl font-serif text-rice-paper mb-6 flex items-center">
             <span className="w-1 h-6 bg-vermilion mr-3"></span>
             增值服务 <span className="text-xs ml-2 text-rice-paper/40 uppercase tracking-widest">Add-ons</span>
           </h4>
           <div className="space-y-4">
             {SERVICE_ADDONS.map((addon, idx) => (
               <div key={idx} className="flex justify-between items-center p-4 bg-white/5 rounded-sm border border-white/5">
                 <div>
                   <p className="text-rice-paper font-serif text-lg">{addon.name}</p>
                   <p className="text-[10px] text-rice-paper/40 uppercase tracking-wider mb-1">{addon.enName}</p>
                   <p className="text-xs text-rice-paper/60">{addon.detail}</p>
                 </div>
                 <div className="text-imperial-gold font-serif">{addon.price}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Notes */}
        <div>
          <h4 className="text-xl font-serif text-rice-paper mb-6 flex items-center">
             <span className="w-1 h-6 bg-vermilion mr-3"></span>
             拍前须知 <span className="text-xs ml-2 text-rice-paper/40 uppercase tracking-widest">Important Notes</span>
           </h4>
           <ul className="space-y-4 bg-white/[0.02] p-6 border border-white/5">
             {SERVICE_NOTES.map((note, idx) => (
               <li key={idx} className="flex items-start text-xs md:text-sm text-rice-paper/70 leading-relaxed">
                 <AlertCircle size={14} className="mr-3 mt-1 text-imperial-gold/50 flex-shrink-0" />
                 {note}
               </li>
             ))}
           </ul>
        </div>
      </div>

    </section>
  );
};

export default Services;