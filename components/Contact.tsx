import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Smartphone, Instagram, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-32 pb-20 px-4 max-w-4xl mx-auto flex items-center justify-center">
      
      <div className="w-full bg-white border border-ink/5 p-8 md:p-16 relative overflow-hidden backdrop-blur-md shadow-xl">
        {/* Decorative Background Symbol (Abstract) */}
        <div className="absolute -right-20 -top-20 text-ink/5 text-[300px] font-serif select-none pointer-events-none">
          拍
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-serif text-ink mb-2">联系我</h2>
            <p className="text-gold tracking-[0.2em] uppercase text-sm">Contact Me</p>
            <div className="w-12 h-[1px] bg-ink/20 mt-6"></div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* WeChat */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-100 rounded-full text-green-700 border border-ink/5">
                <Send size={24} />
              </div>
              <div>
                <h4 className="text-sm text-ink/50 uppercase tracking-wider mb-1">WeChat</h4>
                <p className="text-xl text-ink font-serif select-all">{CONTACT_INFO.wechat}</p>
              </div>
            </div>

             {/* XiaoHongShu / Douyin */}
             <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-100 rounded-full text-vermilion border border-ink/5">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="text-sm text-ink/50 uppercase tracking-wider mb-1">Social Media</h4>
                <p className="text-base text-ink-light">小红书: {CONTACT_INFO.xiaohongshu}</p>
                <p className="text-base text-ink-light">抖音: {CONTACT_INFO.douyin}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-100 rounded-full text-blue-800 border border-ink/5">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm text-ink/50 uppercase tracking-wider mb-1">Email</h4>
                <p className="text-lg text-ink font-serif select-all">{CONTACT_INFO.email}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-100 rounded-full text-gold border border-ink/5">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm text-ink/50 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-base text-ink-light">{CONTACT_INFO.location}</p>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-ink/5 text-center text-sm text-ink/40">
            <p>为了保证拍摄质量，请提前预约档期。</p>
            <p className="mt-2 text-xs opacity-60">Please book in advance to ensure quality.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;