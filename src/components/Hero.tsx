import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 transform translate-y-8 transition duration-1000"
          >
            <span className="block text-blue-400">Finance → Data Science →</span>
            <span className="block mt-2">Cybersecurity → Fullstack AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fadeIn opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Technology Consultant with cross-domain expertise building secure, intelligent systems
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            <a 
              href="#experience" 
              className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              View Experience
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};