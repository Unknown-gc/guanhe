import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-ink border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="mb-6 font-serif text-2xl text-rice-paper tracking-widest">关河未冷</div>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-8 text-xs text-rice-paper/60 text-center">
           <span>WeChat: <span className="text-rice-paper/80">{CONTACT_INFO.wechat}</span></span>
           <span>Email: <span className="text-rice-paper/80">{CONTACT_INFO.email}</span></span>
           <span>小红书/抖音: <span className="text-rice-paper/80">{CONTACT_INFO.xiaohongshu}</span></span>
        </div>
        
        <div className="text-center text-rice-paper/30 text-[10px] font-light tracking-wider">
            <p className="mb-2">Located in {CONTACT_INFO.location}</p>
            <p>Copyright © 2025 Guanhe Weileng Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;