
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-gray hover:text-white transition-colors duration-200"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
};

export default ThemeToggle;
