
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "SQL", level: 85 }
      ],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Scikit-learn", level: 80 }
      ],
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Power BI", level: 75 },
        { name: "VS Code", level: 95 }
      ],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
     <section
      id="skills"
      className="py-20 px-4 bg-purple-50 text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`}></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray font-medium">{skill.name}</span>
                      <span className="text-gray text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "JavaScript", "React", "Node.js", "TensorFlow", "Scikit-learn", 
              "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "MongoDB", "Git", 
              "Docker", "AWS", "Jupyter", "VS Code", "Figma"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-gray-300 rounded-full border border-slate-600 hover:border-purple-400 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
