import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const Card3DTilt: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div 
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 p-8 perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
       <div 
         ref={containerRef}
         className="w-full h-full bg-[#151518] border border-white/5 shadow-2xl relative p-8 flex flex-col justify-between transition-transform duration-100 ease-out"
         style={{ transform }}
       >
          <div className="flex justify-between items-start">
             <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">0{index+1}</span>
             <div className="w-2 h-2 rounded-full bg-vantage-gold" />
          </div>
          
          <div className="relative z-10 pointer-events-none">
             <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
             <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{category}</p>
             {description && <p className="text-xs text-white/60 font-mono leading-relaxed">{description}</p>}
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
       </div>
    </div>
  );
};