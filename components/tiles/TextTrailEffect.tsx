import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const TextTrailEffect: React.FC<ProjectTileProps> = ({ title, category, index, description }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group cursor-crosshair select-none"
    >
      {/* Static Background Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
        <div className="flex justify-between text-[10px] tracking-[0.2em] uppercase text-white/30">
          <span>0{index + 1}</span>
          <span>{category}</span>
        </div>
        
        {description && (
             <div className="absolute bottom-8 left-8 right-8">
                 <div className="w-full h-[1px] bg-white/10 mb-4" />
                 <p className="text-xs text-white/30 font-mono leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     {description}
                 </p>
             </div>
        )}
        
        {!description && (
            <>
                <div className="w-full h-[1px] bg-white/10" />
                <div className="text-xs text-white/20 font-mono uppercase">
                    Move Cursor
                </div>
            </>
        )}
      </div>

      {/* The Trail Effect */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute pointer-events-none whitespace-nowrap text-4xl font-black tracking-tighter text-transparent"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            opacity: opacity * (1 - i * 0.15), 
            transition: `transform ${i * 50 + 50}ms linear, opacity 0.2s`, 
            WebkitTextStroke: i === 0 ? '1px #D4AF37' : '1px rgba(255,255,255,0.3)', 
            zIndex: 20 - i
          }}
        >
          {title.split(" ")[0] || "VANTAGE"}
        </div>
      ))}
    </div>
  );
};