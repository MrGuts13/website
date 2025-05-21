import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 4 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Get In Touch</SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Let's Connect
            </h3>
            
            <p className="text-slate-700 mb-8">
              Feel free to reach out if you'd like to discuss potential opportunities, collaborations, or just have a conversation about technology and its intersection with finance, data science, or cybersecurity.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Email</h4>
                  <a 
                    href="mailto:faiqhilman97@gmail.com" 
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    faiqhilman97@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Phone</h4>
                  <a 
                    href="tel:+60192713447" 
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    +60 19-271 3447
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Location</h4>
                  <p className="text-slate-700">
                    Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-slate-900 mb-4">Connect Online</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/faiqhilman13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-800 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/faiqhilman/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-full text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitSuccess && (
                  <div className="p-3 bg-green-100 border border-green-200 text-green-800 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};