import React, { useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const TextScrambleEffect: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const [displayText, setDisplayText] = useState(title);
  const [isHovered, setIsHovered] = useState(false);
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    let interval: number;
    if (isHovered) {
      let iteration = 0;
      interval = window.setInterval(() => {
        setDisplayText(prev => 
            title.split("").map((letter, index) => {
              if (index < iteration) return title[index];
              return chars[Math.floor(Math.random() * chars.length)];
            }).join("")
        );
        if (iteration >= title.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    } else {
      setDisplayText(title);
    }
    return () => clearInterval(interval);
  }, [isHovered, title]);

  return (
    <div 
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 flex flex-col justify-between p-8 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase text-white/30">
        <span>0{index + 1}</span>
        <span>{category}</span>
      </div>

      <div className="relative">
         <h3 className="text-4xl font-mono text-white leading-tight break-words">{displayText}</h3>
         <div className="h-1 w-8 bg-vantage-gold mt-6 transition-all duration-300 group-hover:w-full" />
      </div>
      
      <div>
        <div className="text-xs font-mono text-vantage-gold/60 opacity-0 group-hover:opacity-100 transition-opacity mb-2">
           // DECRYPTING_DATA...
        </div>
        {description && <p className="text-xs text-white/40 font-mono leading-relaxed">{description}</p>}
      </div>
    </div>
  );
};