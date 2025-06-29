import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const CursorDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<{ x: number; y: number; color: string; life: number }[]>([]);
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

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // Add a new dot at the cursor
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
      // Draw and update dots
      dots.current.forEach((dot, i) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 8 * dot.life, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.life * 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
        // Animate dot
        dot.life -= 0.02;
        dot.x += (Math.random() - 0.5) * 1.5;
        dot.y += (Math.random() - 0.5) * 1.5;
      });
      // Remove faded dots
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
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Colorful Cursor Dots */}
      <CursorDots />

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content: Name left, Profile pic right */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Name and Info */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in animation-delay-500 leading-tight">
            <span> Nadeera </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Withana
            </span>
          </h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-black-300 mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 60, opacity: [1, 0, 1] }}
            transition={{
              x: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              opacity: {
                duration: 1.0,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            Aspiring Data Engineer | Data Analyst| IT Undergraduate at SLIIT | Web Developer
          </motion.h2>

          <p className="text-lg text-dark bg-gray-500-400 mb-12 max-w-2xl animate-fade-in animation-delay-1500">
            Passionate about transforming data into actionable insights and building intelligent solutions 
            that make a difference in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-2000">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <a
                href="/MY CV.pdf"
                download
                className="btn btn-primary"
              >
                Download CV
              </a>
            </button>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1">
            <img
              src="/Nadiii.jpeg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-200"
          size={24}
          onClick={scrollToAbout}
        />
      </div>

      {/* Social Media Links */}
      <div className="fixed top-1/2 right-6 z-30 -translate-y-1/2 flex flex-col items-center space-y-4">
        <a
          href="https://github.com/Nadee07"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-800 hover:bg-gray-900 transition-all duration-300 shadow-lg"
        >
          <Github className="text-white" size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/nadeera-withana-966a74347/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          <Linkedin className="text-white" size={28} />
        </a>
        <a
          href="https://www.instagram.com/n_a_d_e_e_07/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
        >
          <Instagram className="text-white" size={28} />
        </a>
        <a
          href="https://www.facebook.com/nadee.withana.2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          <Facebook className="text-white" size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
