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

      // Detect which section is currently in view
      const sectionIds = [
        '#home',
        '#about',
        '#education',
        '#skills',
        '#projects',
        '#contact',
      ];
      let current = '#home';
      for (const id of sectionIds) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md border-b border-slate-200/30 dark:border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <span
              className="bg-gradient-to-r from-blue-600 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              NW
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative group px-2 py-1 rounded transition-colors duration-200
                  ${
                    activeSection === item.href
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white font-semibold'
                      : 'text-black dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
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
                className={`block w-full text-left py-2 rounded transition-colors duration-200
                  ${
                    activeSection === item.href
                      ? 'bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-white font-semibold'
                      : 'text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
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
