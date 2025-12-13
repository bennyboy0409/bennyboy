import React from 'react';
import { ProjectTileProps } from '../../types';

export const CharacterShuffleHover: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  return (
    <div className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group flex flex-col items-center justify-center cursor-pointer p-8 text-center">
       <div className="absolute top-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
          0{index + 1}
       </div>
       
       <div className="flex flex-col items-center">
         <div className="flex text-4xl font-bold text-white uppercase tracking-tight overflow-hidden flex-wrap justify-center">
            {title.split('').map((char, i) => (
                <span 
                    key={i} 
                    className="inline-block transition-transform duration-300 group-hover:text-vantage-gold"
                    style={{ transitionDelay: `${i * 30}ms`, transform: 'translateY(0)' }}
                >
                    <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                         {String.fromCharCode(char.charCodeAt(0) + (Math.random() > 0.5 ? 1 : -1))}
                    </span>
                </span>
            ))}
         </div>
         <p className="mt-4 text-xs tracking-[0.4em] text-white/40 group-hover:text-vantage-gold transition-colors">
            {category}
         </p>
         {description && (
             <p className="mt-6 text-xs text-white/30 font-mono max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                 {description}
             </p>
         )}
       </div>
    </div>
  );
};