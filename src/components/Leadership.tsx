import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { leadershipData } from '../data/leadershipData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Leadership Experience</SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((role, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-24 bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center text-white p-6">
                <h3 className="text-xl font-bold">{role.position}</h3>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <span className="text-lg font-medium text-slate-800">{role.organization}</span>
                  <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {role.period}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-4">{role.location}</p>
                
                <ul className="space-y-2 text-slate-700 list-disc list-inside">
                  {role.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
                
                {role.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
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