import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { experienceData } from '../data/experienceData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Work Experience</SectionHeading>
        
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 md:px-10 ml-8 md:ml-0">
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-medium text-slate-700">{item.company}</span>
                      <span className="mx-2 text-slate-400">•</span>
                      <span className="text-slate-500">{item.location}</span>
                    </div>
                    
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      {item.responsibilities.map((responsibility, rIndex) => (
                        <li key={rIndex}>{responsibility}</li>
                      ))}
                    </ul>
                    
                    {item.technologies && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech, tIndex) => (
                          <span 
                            key={tIndex}
                            className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};