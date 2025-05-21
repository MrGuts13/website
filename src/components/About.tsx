import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/3">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-200 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-800/20"></div>
              <span className="text-6xl">FH</span>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              A Technology Consultant with a unique cross-domain journey
            </h3>
            
            <div className="space-y-4 text-lg text-slate-700">
              <p>
               I am a dynamic Technology Consultant with a unique cross-functional expertise spanning AI/ML Engineering, Software Development, Data Systems, and Cybersecurity, underpinned by a strong foundation in finance. At EY, I engineer and stabilize complex Generative AI platforms for national clients, navigating distributed microservices architectures and independently resolving critical infrastructure challenges (Docker, PostgreSQL, SAML/JWT authentication). I develop responsive frontend solutions (React, Streamlit) and implement advanced NLP capabilities for automated reporting, document summarization, intelligent querying, and knowledge base management.
              </p>
              
              <p>
               Beyond client work, I design and build end-to-end AI workflow platforms and data pipelines (FastAPI, Prefect, PostgreSQL, n8n), showcasing expertise in RAG architectures, LLM integration, and workflow automation. My experience also includes conducting OT cybersecurity audits for critical infrastructure and validating e-KYC compliance for financial institutions, ensuring robust, secure, and scalable solutions. My background in finance provides a distinct advantage in translating complex technical solutions into strategic business value.
              </p>
         
              <p>
                I hold an MSc in Data Science from City, University of London and a Bachelor of Commerce from the University of Melbourne, with industry certifications in cybersecurity from ISC2 and Microsoft.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-slate-100 rounded-md text-slate-800">
                <span className="font-medium">Location:</span> Kuala Lumpur, Malaysia
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-md text-slate-800">
                <span className="font-medium">Experience:</span> 2+ Years
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-md text-slate-800">
                <span className="font-medium">Languages:</span> English (Fluent), Malay (Native)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};