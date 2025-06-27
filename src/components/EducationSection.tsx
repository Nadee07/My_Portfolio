import React from 'react';
import { ExternalLink } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-800/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400 hidden md:block"></div>

          <div className="space-y-12">
            {/* Current Education */}
            <div className="relative md:ml-16">
              <div className="absolute -left-20 top-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 hidden md:block"></div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Sri Lanka Institute of Information Technology (SLIIT) </h3> 
                    <p className="text-white font-semibold">BSc (Hons) in Information Technology</p>
                    <p className="text-purple font-semibold">(Specializing Data Science)</p>
                  </div>
                  <span className="text-cyan-400 font-semibold mt-2 md:mt-0">2023 - 2027</span>
                </div>
                <p className="text-gray mb-4">
                  Specializing in Data Science with a focus on machine learning, statistical analysis, and data visualization.
                  Currently maintaining a strong academic record while actively participating in tech communities and projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Data Science</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Statistics</span>
                </div>
              </div>
            </div>

            {/* Previous Education */}
            <div className="relative md:ml-16">
              <div className="absolute -left-20 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 hidden md:block"></div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Sujathaa Vidyalaya - Matara</h3>
                    <p className="text-cyan-400 font-semibold">Advanced Level(2021) and Ordinary Level(2017)</p>
                    <p className="text-purple font-semibold">Biological Sceience Stream </p>
                  </div>
                  <span className="text-purple-400 font-semibold mt-2 md:mt-0">2010 - 2022</span>
                </div>
                <p className="text-gray mb-4">
                  Completed Advanced Level with subjects in Physics, Chemistry and Biology.
                  laying a strong foundation for analytical thinking and problem-solving skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Biology</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Physics</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Chemistry</span>
                </div>
              </div>
            </div>

            {/* Courses Category */}
            <div className="relative md:ml-16">
              <div className="absolute -left-20 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 hidden md:block"></div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Certificate Courses</h3>
                    <ul className="list-disc ml-5 text-gray space-y-2">
                      <li className="flex items-center gap-2">
                        Python(Basic) (HackerRank, 2025)
                        <a
                          href="https://www.hackerrank.com/certificates/8db8c8602c10?hr_r"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-cyan-400 hover:text-cyan-300"
                          title="View Certificate"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        Getting Started with DevOps (Amazon Web Services, 2025)
                        <a
                          href="https://skillbuilder.aws/learn/R4B13K95YQ/getting-started-with-devops-on-aws/38NHHYRV1R"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-cyan-400 hover:text-cyan-300"
                          title="View Certificate"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        Fundamental of Machine Learning and Artificial Intelligence (Amazon Web Services, 2025)
                        <a
                          href="https://skillbuilder.aws/learn/16ASDUHF86/fundamentals-of-machine-learning-and-artificial-intelligence/M7JZCTA94N"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-cyan-400 hover:text-cyan-300"
                          title="View Certificate"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        Amazon Aurora Getting Started (Amazon Web Services, 2025)
                        <a
                          href="https://skillbuilder.aws/learn/W95CCPKD1Y/amazon-aurora-getting-started/PT4AMCE9XC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-cyan-400 hover:text-cyan-300"
                          title="View Certificate"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
