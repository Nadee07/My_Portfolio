import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700/60">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-slate-200 dark:border-slate-700/60">
          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:nadeerawithana@gmail.com"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  nadeerawithana@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nadee07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  github.com/Nadee07
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nadeera-withana-966a74347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* About/Brand */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Nadeera Withana</h4>
            <div className="mb-2">
              <span className="block text-gray-600 dark:text-gray-400 text-m">
                Data Science undergraduate passionate about uncovering insights from data, building intelligent systems, and solving real-world problems using technology.
              </span>
            </div>
            <div className="mb-1">
              <span className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
                📍 Colombo, Sri Lanka
              </span>
            </div>
            <div>
              <span className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
                🎓 SLIIT
              </span>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 mt-6">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Nadeera Withana. 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
