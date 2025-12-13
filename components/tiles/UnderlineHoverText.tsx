import React from 'react';
import { ProjectTileProps } from '../../types';

export const UnderlineHoverText: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  footer = "View Case Study",
  description
}) => {
  return (
    <div className="relative h-96 w-full bg-[#0F0F12] border border-white/10 group flex flex-col justify-between p-8 cursor-pointer overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none transition-all duration-500 group-hover:bg-vantage-gold/[0.05]" />

      {/* Header */}
      <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium text-white/40">
        <span>0{index + 1}</span>
        <span>{category}</span>
      </div>

      {/* Center - The Interaction */}
      <div className="relative z-10 my-auto">
        <h3 className="text-4xl font-light text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        
        {/* The Link Container */}
        <div className="inline-block relative py-1 mb-4">
          <span className="text-sm uppercase tracking-[0.2em] text-white/60 group-hover:text-vantage-gold transition-colors duration-300">
            {footer}
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-vantage-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left" />
        </div>

        {description && (
            <p className="text-xs text-white/40 font-mono leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transform">
                {description}
            </p>
        )}
      </div>

      {/* Footer Details */}
      <div className="text-xs text-white/20 font-mono flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="w-2 h-2 rounded-full bg-vantage-gold animate-pulse" />
        Case Pending
      </div>
    </div>
  );
};