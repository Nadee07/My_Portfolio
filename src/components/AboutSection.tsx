import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-purple-50 text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About{' '}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About Me Text and Details */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a third-year undergraduate student at SLIIT, pursuing a Bachelor's degree in Information Technology 
              with a specialization in Data Science. My journey in tech began with a curiosity about how data can 
              tell stories and drive meaningful decisions.During my first two years, I acquired a strong foundation in IT,
              developing hands-on experience in full-stack web development and mobile app development.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently, I'm diving deep into machine learning algorithms, statistical analysis, and data visualization 
              techniques. I'm passionate about using technology to solve real-world problems and am particularly 
              interested in the intersection of AI and healthcare.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-cyan-600 font-semibold mb-2">University</h4>
                <p>SLIIT</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-cyan-600 font-semibold mb-2">Degree</h4>
                <p>BSc (Hons) in Information Technology </p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-cyan-600 font-semibold mb-2">Year</h4>
                <p>3rd Year</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-cyan-600 font-semibold mb-2">Specializing</h4>
                <p>Data Science</p>
              </div>
            </div>
          </div>

          {/* Right: Image on top, Interests below */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile Image */}
            <img
              src="/NK.jpeg"
              alt="Nadeera Withana"
              className="w-full h-auto rounded-2xl object-contain shadow-lg border-4 border-gray-500 max-w-md"
            />
            {/* My Interests */}
            <div className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-bold text-cyan-600 mb-6">My Interests</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Machine Learning & AI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Data Visualization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Statistical Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Open Source Projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
