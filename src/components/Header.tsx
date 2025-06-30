import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = ['#home', '#about', '#education', '#skills', '#projects', '#contact'];
      let found = '#home';
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0d1321] dark:bg-white dark:text-gray-900 backdrop-blur-lg border-b border-slate-700/50'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-black dark:text-white">
            NW
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative group px-4 py-2 rounded transition-colors duration-200 font-medium
                  ${
                    activeSection === item.href
                      ? 'bg-white text-[#0d1321] dark:bg-[#0d1321] dark:text-white shadow'
                      : 'text-black dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#0d1321] dark:hover:text-white'
                  }
                `}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 transition-all duration-300
                    ${activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                ></span>
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-slate-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 px-2 rounded font-medium transition-colors duration-200
                  ${
                    activeSection === item.href
                      ? 'bg-white text-[#0d1321] dark:bg-[#0d1321] dark:text-white shadow'
                      : 'text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-[#0d1321] dark:hover:text-white'
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
