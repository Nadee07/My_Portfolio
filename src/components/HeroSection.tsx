import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Facebook, Moon, Sun } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const CursorDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<{ x: number; y: number; color: string; life: number }[]>([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const colors = ['#60a5fa', '#93c5fd', '#3b82f6', '#1e3a8a', '#2563eb'];
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dots.current.push({
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      dots.current.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 8 * dot.life, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.life * 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
        dot.life -= 0.02;
        dot.x += (Math.random() - 0.5) * 1.5;
        dot.y += (Math.random() - 0.5) * 1.5;
      });
      dots.current = dots.current.filter(dot => dot.life > 0);
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        zIndex: 2,
      }}
    />
  );
};

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-slate-900 text-gray' : 'bg-white text-gray-900'
      }`}
    >
      <CursorDots />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-black dark:text-white shadow-md"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in animation-delay-500 leading-tight">
            <span>Nadeera</span><br />
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent inline-block ml-16">
              Withana
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 font-semibold text-gray-700 dark:text-gray-300">
            <Typewriter
              words={[
                'Aspiring Data Engineer',
                'Data Analyst',
                'IT Undergraduate at SLIIT',
                'Web Developer'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg mb-12 max-w-2xl animate-fade-in animation-delay-1500 text-gray-600 dark:text-gray-300">
            Passionate about transforming data into actionable insights and building intelligent solutions
            that make a difference in the world. Actively seeking an internship to apply my skills and gain hands-on industry experience.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 p-1 shadow-2xl">
            <img
              src="/Nadiii.jpeg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-20 left-[calc(50%-8rem)] z-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-2000">
        <a
          href="/MY CV.pdf"
          download
          className="px-6 py-3 rounded-full font-semibold transition duration-300
            bg-blue-500 text-white hover:bg-blue-700"
        >
          Download CV
        </a>
        <button
          onClick={() => window.location.href = "mailto:nadeerawithana2k20@gmail.com"}
          className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
            darkMode
              ? 'border border-gray-400 text-gray-100 dark:hover:bg-slate-800'
              : 'border border-gray-600 text-gray-900 hover:bg-white'
          }`}
        >
          Contact Me
        </button>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
          size={24}
          onClick={scrollToAbout}
        />
      </div>

      {/* Social Icons */}
      <div className="fixed top-1/2 right-6 z-30 -translate-y-1/2 flex flex-col items-center space-y-4">
        <a href="https://github.com/Nadee07" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 transition-all duration-300 shadow-lg">
          <Github className="text-white" size={28} />
        </a>
        <a href="https://www.linkedin.com/in/nadeera-withana-966a74347/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg">
          <Linkedin className="text-white" size={28} />
        </a>
        <a href="https://www.instagram.com/n_a_d_e_e_07/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
          <Instagram className="text-white" size={28} />
        </a>
        <a href="https://www.facebook.com/nadee.withana.2025/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 transition-all duration-300 shadow-lg">
          <Facebook className="text-white" size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
