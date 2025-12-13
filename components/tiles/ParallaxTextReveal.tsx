import React from 'react';
import { ProjectTileProps } from '../../types';

export const ParallaxTextReveal: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  return (
    <div className="relative h-96 w-full bg-[#0F0F12] border border-white/10 group overflow-hidden flex items-center justify-center">
      <div className="absolute top-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
        0{index + 1}
      </div>

      <div className="relative z-10 text-center px-8">
        {/* Layer 1: Moves Up */}
        <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-8">
           <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
             {title.split(' ')[0]}<br/>
             {title.split(' ')[1] || 'Interaction'}
           </h3>
        </div>

        {/* Separator */}
        <div className="w-12 h-[2px] bg-vantage-gold mx-auto my-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

        {/* Layer 2: Moves Down */}
        <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-8 opacity-0 group-hover:opacity-100">
           {description && (
             <p className="text-xs text-white/60 font-mono max-w-[200px] mx-auto leading-relaxed">
                {description}
             </p>
           )}
           <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-vantage-gold">
             {category}
           </span>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60" />
    </div>
  );
};