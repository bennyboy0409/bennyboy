import React from 'react';
import { ProjectTileProps } from '../../types';

export const SkewHoverImage: React.FC<ProjectTileProps> = ({ 
  title, 
  category,
  index,
  description
}) => {
  return (
    <div className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group">
      
      {/* Text Overlay (Z-Index High) */}
      <div className="absolute inset-0 z-20 pointer-events-none p-8 flex flex-col justify-between">
         <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium text-white mix-blend-difference">
          <span>0{index + 1}</span>
          <span>{category}</span>
        </div>
        <div>
            <h3 className="text-3xl font-bold text-white mix-blend-difference tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0 transform">
            {title}
            </h3>
            {description && (
                <p className="text-xs text-white/80 mix-blend-difference font-mono mt-4 leading-relaxed max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-x-4 group-hover:translate-x-0 transform">
                    {description}
                </p>
            )}
        </div>
      </div>

      {/* Image Container with Perspective */}
      <div className="absolute inset-4 overflow-hidden bg-[#1a1a1e] perspective-1000">
        <div className="w-full h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform origin-center group-hover:scale-110 group-hover:-skew-x-12">
            <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-10" />
        </div>
      </div>

    </div>
  );
};