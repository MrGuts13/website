import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold tracking-tight">
              Faiq<span className="text-blue-400">Hilman</span>
            </h2>
            <p className="text-slate-400 mt-2">Technology Consultant with cross-domain expertise</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/faiqhilman13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/faiqhilman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:faiqhilman97@gmail.com" 
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-4 md:mb-0">
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#leadership" className="text-sm text-slate-400 hover:text-white transition-colors">Leadership</a>
            <a href="#education" className="text-sm text-slate-400 hover:text-white transition-colors">Education</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Faiq Hilman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};