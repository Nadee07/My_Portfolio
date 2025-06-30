import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Facebook, Download, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

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
      dots.current.forEach(dot => {
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100"
    >
      <CursorDots />

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
       
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in animation-delay-500 leading-tight">
            <span
              className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 bg-clip-text text-transparent dark:from-blue-300 dark:via-purple-400 dark:to-blue-700"
            >
              Nadeera
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 bg-clip-text text-transparent dark:from-blue-300 dark:via-purple-400 dark:to-blue-700"
              style={{ display: "inline-block", marginLeft: "4cm" }}
            >
              Withana
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 font-semibold">
            <Typewriter
              words={[
                'Aspiring Data Engineer',
                'Data Analyst',
                'IT Undergraduate at SLIIT',
                'Web Developer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg bg-white dark:bg-slate-900 mb-12 max-w-2xl animate-fade-in animation-delay-1500">
            Passionate about transforming data into actionable insights and building intelligent solutions
            that make a difference in the world. Actively seeking an internship to apply my skills and gain hands-on industry experience.
          </p>
        </div>

        {/* Right: Profile Picture */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1 shadow-2xl">
            <img
              src="/Nadiii.jpeg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Centered Buttons */}
      <div
        className="absolute bottom-20 transform z-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-2000"
        style={{ left: 'calc(50% - 4cm)', transform: 'translateX(-50%)' }}
      >
        <a
          href="/MY CV.pdf"
          download
          className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <Download size={20} />
          Download CV
        </a>
        <button
          onClick={() => window.location.href = "mailto:nadeerawithana2k20@gmail.com"}
          className="px-8 py-3 border border-gray-600 text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black dark:text-gray-100 dark:border-gray-400 dark:hover:bg-black dark:hover:text-white transition-all duration-300"
        >
          <Mail size={20} />
          Contact Me
        </button>
      </div>

      {/* Arrow Scroll Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
          size={24}
          onClick={scrollToAbout}
        />
      </div>

      {/* Social Media */}
      <div className="fixed top-1/2 right-6 z-30 -translate-y-1/2 flex flex-col items-center space-y-4">
        <a href="https://github.com/Nadee07" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-800 hover:bg-gray-900 transition-all duration-300 shadow-lg">
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