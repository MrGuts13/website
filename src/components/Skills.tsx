import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { skillsData, SkillCategory } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([categoryId, category]) => (
              <div 
                key={categoryId}
                className={`bg-white rounded-xl shadow-sm transition-all duration-300 overflow-hidden ${
                  activeCategory === categoryId ? 'ring-2 ring-blue-600' : 'hover:shadow-md'
                }`}
              >
                <div 
                  className={`p-6 cursor-pointer ${
                    activeCategory === categoryId ? 'bg-blue-50' : 'bg-white'
                  }`}
                  onClick={() => toggleCategory(categoryId)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <p className="text-slate-600 mt-2">{category.description}</p>
                </div>

                <div 
                  className={`transition-all duration-300 ${
                    activeCategory === categoryId ? 'max-h-[40rem] overflow-y-auto' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-slate-100">
                    <ul className="space-y-3">
                      {category.skills.map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 mt-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-slate-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-800">ISC2 - Certified in Cybersecurity</h4>
                <p className="text-slate-600 mt-2">Industry-recognized certification validating essential cybersecurity knowledge and skills.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-800">Microsoft Certified: Security, Compliance and Identity Fundamentals</h4>
                <p className="text-slate-600 mt-2">Foundation in security, compliance, and identity across cloud-based and related Microsoft services.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-800">Microsoft Certified: Azure Fundamentals</h4>
                <p className="text-slate-600 mt-2">Verification of knowledge of cloud concepts, Azure services, Azure workloads, security, privacy, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};