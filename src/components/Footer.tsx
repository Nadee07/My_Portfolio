
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-700/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Nadeera Withana. All rights reserved.
          </div>
          
          <div className="text-gray-400 text-sm">
            Built with <span className="text-purple-400">React</span> & <span className="text-cyan-400">Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-gray-500 text-xs">
            "Data is the new oil, but like oil, it has to be refined to be valuable." - Clive Humby
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
