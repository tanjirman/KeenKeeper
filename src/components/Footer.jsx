import React from 'react';
// fa6 stands for Font Awesome 6
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1a4031] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
        
        <p className="text-gray-300 text-sm max-w-[90%] mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">Social Links</p>
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a4031] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            {/* Facebook (using the 'F' variant for that clean look) */}
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a4031] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={18} />
            </a>
            {/* X / Twitter */}
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a4031] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;