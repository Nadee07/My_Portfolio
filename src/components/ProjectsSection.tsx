
import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual Dressing Mall",
      description: "Full-Stack Web Application Developed a virtual e-commerce platform that allow users to try on clothes virtually. Built with the MERN stack, with seamless integration of reservation and transaction management.",
      image: "https://www.stantec.com/content/dam/stantec/images/ideas/blogs/017/hand-holding-tablet-adobestock-128273074.jpg.transform/small/image.20201105.jpeg",
      tech: ["MERN Stack", "Vite", "Tailwind CSS", "Java Script"],
      github: "https://github.com/Nadee07/Virtual-Dressing-Mall",
      demo: "#"
    },
    {
      title: "Vehicle Service and Fuel Station Maanagement System",
      description: "Developed a web-based vehicle service and fuel station management system. This application allows users to book services, manage fuel transactions, and track vehicle maintenance history.",
      image: "https://www.trinetrawireless.com/wp-content/uploads/2017/12/Fuel-Management-Solutions.jpg",
      tech: ["Java", "Bootsrap CSS", "OOP"],
      github: "https://github.com/Nadee07/Vehicle-Service-and-Fuel-Station-Management-System",
      demo: "#"
    },
    {
      title: "Online Fashion Store",
      description: "Web based online fashion store system. This application allows users to browse and purchase fashion items online, with features like user authentication, product management, and order processing.",
      image: "https://sepiastories.in/wp-content/uploads/2023/11/women-clothing-store-4.webp",
      tech: ["HTML", "CSS", "PHP", "Java Script"],
      github: "https://github.com/Nadee07/Online-Fashion-Store",
      demo: "#"
    },
    
    {
      title: "Personal Finance Tracker",
      description: "Mobile application for tracking expenses, income, and financial goals with beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      tech: ["Kotlin", "xml", "Android Studio", ],
      github: "https://github.com/Nadee07/Personal_Finance_Tracker",
      demo: "#"
    },
    {
      title: "Audio Device Management System",
      description: "Developed a web-based audio device management system that allows users to manage audio devices, including adding, updating, and deleting devices. The system also includes features for tracking device usage and generating reports.",
      image: "https://cdn.mos.cms.futurecdn.net/xNj4yDAGXSC29XAHBjySyh.jpg",
      tech: ["MERN Stack", "Vite", "Tailwind CSS", "Java Script"],
      github: "https://github.com/Nadee07/kv-audio-backend",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  <a 
                    href={project.demo}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <span className="text-sm mr-1">Live Demo</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
