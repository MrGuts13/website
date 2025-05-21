import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-md ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        {children}
      </h2>
      <div className="h-1 w-24 bg-blue-600 mt-4 mb-2 rounded-full"></div>
    </div>
  );
};