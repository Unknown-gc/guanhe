import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Smartphone, AtSign } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="flex-grow flex items-center justify-center py-20 px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Text Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-imperial-gold text-xs tracking-[0.3em] uppercase mb-4">Contact Me</h2>
                <h1 className="text-4xl md:text-5xl font-serif text-rice-paper mb-6 tracking-widest">联系方式</h1>
                <p className="text-rice-paper/60 text-sm leading-loose font-light mb-8">
                    独立摄影师，专注于汉服与创意人像。<br/>
                    请提前预约档期。
                </p>
                <div className="hidden md:block w-24 h-[1px] bg-vermilion"></div>
            </motion.div>
        </div>

        {/* Right: Contact Cards */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
            
            {/* WeChat */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white/5 border border-white/5 p-6 flex items-center space-x-4 hover:border-vermilion/50 transition-colors group"
            >
                <div className="p-3 bg-stone-gray rounded-full text-vermilion group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                </div>
                <div>
                    <p className="text-xs text-rice-paper/40 uppercase tracking-wider">WeChat 微信</p>
                    <p className="text-lg text-rice-paper font-serif tracking-wide select-all">{CONTACT_INFO.wechat}</p>
                </div>
            </motion.div>

            {/* Socials (XHS & Douyin) */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white/5 border border-white/5 p-6 flex items-center space-x-4 hover:border-vermilion/50 transition-colors group"
            >
                <div className="p-3 bg-stone-gray rounded-full text-vermilion group-hover:scale-110 transition-transform">
                    <Smartphone size={20} />
                </div>
                <div>
                    <p className="text-xs text-rice-paper/40 uppercase tracking-wider">Social Media (XHS & Douyin)</p>
                    <div className="flex flex-col">
                        <span className="text-rice-paper select-all">小红书: {CONTACT_INFO.xiaohongshu}</span>
                        <span className="text-rice-paper select-all">抖音: {CONTACT_INFO.douyin}</span>
                    </div>
                </div>
            </motion.div>

            {/* Email */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white/5 border border-white/5 p-6 flex items-center space-x-4 hover:border-vermilion/50 transition-colors group"
            >
                <div className="p-3 bg-stone-gray rounded-full text-vermilion group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                </div>
                <div>
                    <p className="text-xs text-rice-paper/40 uppercase tracking-wider">Email 邮箱</p>
                    <p className="text-lg text-rice-paper font-serif tracking-wide select-all">{CONTACT_INFO.email}</p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;