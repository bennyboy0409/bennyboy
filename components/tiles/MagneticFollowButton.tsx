import React, { useRef, useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const MagneticFollowButton: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !buttonRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      if (x >= 0 && x <= containerRect.width && y >= 0 && y <= containerRect.height) {
        const btnCenterX = (containerRect.width / 2);
        const btnCenterY = (containerRect.height / 2);
        const distX = x - btnCenterX;
        const distY = y - btnCenterY;
        const pull = 0.4;
        setPosition({ x: distX * pull, y: distY * pull });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 flex flex-col items-center justify-center group overflow-hidden"
    >
      <div className="absolute top-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/30">0{index + 1}</div>
      <div className="absolute top-8 right-8 text-[10px] tracking-[0.2em] uppercase text-white/30">{category}</div>

      <button
        ref={buttonRef}
        className="relative z-10 px-8 py-4 bg-vantage-gold text-black font-bold tracking-widest uppercase text-xs rounded-sm transition-transform duration-200 ease-out hover:scale-110"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        Explore
      </button>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
         <div className="w-[1px] h-32 bg-white"></div>
         <div className="absolute h-[1px] w-32 bg-white"></div>
      </div>
      
      <div className="absolute bottom-8 text-center px-8">
          <h3 className="text-white/20 text-sm tracking-widest mb-2">{title}</h3>
          {description && <p className="text-xs text-white/10 font-mono hidden group-hover:block">{description}</p>}
      </div>
    </div>
  );
};