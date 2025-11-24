import React from 'react';
import { BRAND } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-[#2c2a29] border-t border-ink/5 text-center">
      <p className="text-white/30 text-xs font-serif tracking-widest">
        Copyright © 2025 {BRAND.name} Photography. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;