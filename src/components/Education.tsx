import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { educationData } from '../data/educationData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Education</SectionHeading>
        
        <div className="mt-12 space-y-8">
          {educationData.map((education, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/3 bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-1">{education.institution}</h3>
                <p className="text-blue-200">{education.location}</p>
                <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-sm inline-flex items-center justify-center backdrop-blur-sm">
                  {education.period}
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">{education.degree}</h4>
                
                {education.coursework && (
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-slate-500 mb-2">Relevant Coursework</h5>
                    <p className="text-slate-700">{education.coursework}</p>
                  </div>
                )}
                
                {education.achievements && education.achievements.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-slate-500 mb-2">Achievements</h5>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      {education.achievements.map((achievement, aIndex) => (
                        <li key={aIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};