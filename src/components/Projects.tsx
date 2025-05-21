import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { projectsData } from '../data/projectsData';
import { X } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openProject = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openProject(index)}
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center justify-center">
                <span className="text-4xl text-white">{project.icon}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {projectsData[selectedProject].title}
                </h3>
                <button 
                  onClick={closeProject}
                  className="text-slate-500 hover:text-slate-700 p-1"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-700">
                  {projectsData[selectedProject].fullDescription}
                </p>
                
                {projectsData[selectedProject].keyFeatures && (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      {projectsData[selectedProject].keyFeatures.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[selectedProject].technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {projectsData[selectedProject].outcome && (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Outcome</h4>
                    <p className="text-slate-700">
                      {projectsData[selectedProject].outcome}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};