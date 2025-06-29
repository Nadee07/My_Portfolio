// Tailwind setup: Ensure you have `darkMode: 'class'` in your tailwind.config.js
// You can toggle the theme by toggling a `dark` class on <body> or a parent wrapper.

import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const CursorDots = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const colors = ['#a78bfa', '#f472b6', '#06b6d4', '#facc15', '#34d399'];
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

    const handleMouseMove = (e) => {
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

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dots.current.forEach((dot, i) => {
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
    };

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
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 relative overflow-hidden">
      <CursorDots />

      {/* Colorful blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300 dark:bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-300 dark:bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in animation-delay-500 leading-tight mt-[3cm]">
            Nadeera <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent ml-16 inline-block">Withana</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 font-semibold mt-[4cm] mb-8">
            <Typewriter
              words={['Aspiring Data Engineer', 'Data Analyst', 'IT Undergraduate at SLIIT', 'Web Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mt-[6cm] mb-12 max-w-2xl">
            Passionate about transforming data into actionable insights and building intelligent solutions.
            Actively seeking an internship to apply my skills and gain hands-on industry experience.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1 shadow-2xl">
            <img src="/Nadiii.jpeg" alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>

      {/* Buttons in Center */}
      <div className="absolute bottom-20 left-[calc(50%-8rem)] flex gap-4 z-10">
        <a
          href="/MY CV.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-transform"
        >
          Download CV
        </a>
        <button
          onClick={() => window.location.href = 'mailto:nadeerawithana2k20@gmail.com'}
          className="px-6 py-3 border border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-white dark:hover:bg-slate-800 hover:text-black dark:hover:text-white transition"
        >
          Contact Me
        </button>
      </div>

      {/* Arrow Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="text-gray-400 cursor-pointer hover:text-black dark:hover:text-white"
          size={24}
          onClick={scrollToAbout}
        />
      </div>

      {/* Social Media */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-center space-y-4 z-30">
        <a href="https://github.com/Nadee07" target="_blank" className="w-10 h-10 bg-slate-800 hover:bg-gray-900 flex items-center justify-center rounded-full">
          <Github className="text-white" size={24} />
        </a>
        <a href="https://linkedin.com/in/nadeera-withana-966a74347/" target="_blank" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 flex items-center justify-center rounded-full">
          <Linkedin className="text-white" size={24} />
        </a>
        <a href="https://www.instagram.com/n_a_d_e_e_07/" target="_blank" className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center rounded-full">
          <Instagram className="text-white" size={24} />
        </a>
        <a href="https://facebook.com/nadee.withana.2025/" target="_blank" className="w-10 h-10 bg-blue-500 hover:bg-blue-700 flex items-center justify-center rounded-full">
          <Facebook className="text-white" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
