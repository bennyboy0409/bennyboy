import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const ImageZoomRipple: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group cursor-none"
    >
      {/* Layer 1: Base Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
         <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" 
            alt="Abstract Fluid" 
            className="w-full h-full object-cover opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0"
         />
      </div>

      {/* Overlay Text (Base Layer) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-10">
         <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium text-white/50">
          <span>0{index + 1}</span>
          <span>{category}</span>
        </div>
        <div>
            <h3 className="text-3xl font-light text-white tracking-tight mb-2">{title}</h3>
            {description && (
                <p className="text-xs text-white/40 font-mono leading-relaxed max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {description}
                </p>
            )}
        </div>
      </div>

      {/* Layer 2: The "Ripple" / Magnifier */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none bg-[#0F0F12]"
        style={{
            maskImage: `radial-gradient(100px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(100px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
            opacity: opacity,
            transition: 'opacity 0.2s'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" 
                alt="Abstract Fluid Zoom" 
                className="w-full h-full object-cover scale-150 brightness-125"
             />
        </div>
        
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium text-vantage-gold">
                <span>0{index + 1}</span>
                <span>{category}</span>
            </div>
            <div>
                <h3 className="text-3xl font-light text-white tracking-tight drop-shadow-lg mb-2">{title}</h3>
                {description && (
                    <p className="text-xs text-white font-mono leading-relaxed max-w-[80%] drop-shadow-md">
                        {description}
                    </p>
                )}
            </div>
        </div>
      </div>
      
      <div 
        className="absolute w-24 h-24 rounded-full border border-white/20 pointer-events-none z-30 transition-opacity duration-200"
        style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
            opacity: opacity
        }}
      />
    </div>
  );
};