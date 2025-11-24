import React from 'react';
import { Mail, MapPin, Smartphone, Instagram, Camera } from 'lucide-react';
import { CONTACT_INFO, BRAND } from '../../content';

export const ContactSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-ink relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-2xl w-full bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-paper mb-2">联系我</h2>
          <p className="text-imperial text-sm tracking-widest uppercase">Get in Touch</p>
        </div>

        <div className="space-y-8">
          {/* Social Item: WeChat */}
          <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-white transition-colors duration-300">
              <Smartphone size={20} />
            </div>
            <div className="ml-6">
              <p className="text-imperial text-xs uppercase tracking-wider">WeChat (微信)</p>
              <p className="text-xl text-paper font-serif">{CONTACT_INFO.wechat}</p>
            </div>
          </div>

           {/* Social Item: XiaoHongShu */}
           <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-white transition-colors duration-300">
              <Camera size={20} />
            </div>
            <div className="ml-6">
              <p className="text-imperial text-xs uppercase tracking-wider">XiaoHongShu (小红书)</p>
              <p className="text-xl text-paper font-serif">{CONTACT_INFO.xiaohongshu}</p>
            </div>
          </div>

           {/* Social Item: Douyin */}
           <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-white transition-colors duration-300">
              <Instagram size={20} />
            </div>
            <div className="ml-6">
              <p className="text-imperial text-xs uppercase tracking-wider">Douyin (抖音)</p>
              <p className="text-xl text-paper font-serif">{CONTACT_INFO.douyin}</p>
            </div>
          </div>

          {/* Social Item: Email */}
          <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-vermilion/10 flex items-center justify-center text-vermilion group-hover:bg-vermilion group-hover:text-white transition-colors duration-300">
              <Mail size={20} />
            </div>
            <div className="ml-6">
              <p className="text-imperial text-xs uppercase tracking-wider">Email (邮箱)</p>
              <p className="text-xl text-paper font-serif">{CONTACT_INFO.email}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-center text-gray-500">
            <MapPin size={16} className="mr-2" />
            <span>{BRAND.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};