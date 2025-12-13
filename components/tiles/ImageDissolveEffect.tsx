import React, { useRef, useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const ImageDissolveEffect: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const [displacement, setDisplacement] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reqRef = useRef<number>(0);

  useEffect(() => {
    const target = isHovered ? 100 : 0;
    
    const animate = () => {
      setDisplacement(prev => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.5) return target;
        return prev + diff * 0.1;
      });
      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [isHovered]);

  const filterId = `dissolve-filter-${index}`;

  return (
    <div 
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={displacement} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0 transition-opacity duration-700">
         <img src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=800&auto=format&fit=crop" alt="Dissolve" className="w-full h-full object-cover opacity-80" style={{ filter: `url(#${filterId}) brightness(${1 + displacement/100})`, transform: `scale(${1 + displacement/500})` }} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-500 pointer-events-none" style={{ opacity: isHovered ? 1 : 0 }}>
          <div className="z-10 text-center px-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] tracking-[0.2em] uppercase text-vantage-gold mb-4 block">{category}</span>
              <h3 className="text-3xl text-white font-bold mb-4 tracking-tighter uppercase">{title}</h3>
              {description && (<p className="text-xs text-white/60 font-mono leading-relaxed max-w-xs mx-auto">{description}</p>)}
          </div>
      </div>
      <div className={`absolute bottom-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/50 z-20 mix-blend-difference transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>0{index + 1} — {category}</div>
    </div>
  );
};