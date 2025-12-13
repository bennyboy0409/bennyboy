import React, { useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const DistortedLinkHover: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchTransform, setGlitchTransform] = useState("translate(0,0)");
  const [glitchSkew, setGlitchSkew] = useState("skew(0deg)");

  useEffect(() => {
    let interval: number;
    if (isHovered) {
      interval = window.setInterval(() => {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 5;
        const skew = (Math.random() - 0.5) * 20;
        setGlitchTransform(`translate(${x}px, ${y}px)`);
        setGlitchSkew(`skew(${skew}deg)`);
        
        setTimeout(() => {
            setGlitchTransform("translate(0,0)");
            setGlitchSkew("skew(0deg)");
        }, 50);

      }, 100);
    } else {
        setGlitchTransform("translate(0,0)");
        setGlitchSkew("skew(0deg)");
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 group overflow-hidden cursor-pointer flex flex-col justify-center items-center text-center p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 2px)' }}></div>

        <div className="absolute top-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
            0{index + 1}
        </div>

        <div className="relative mb-4">
            <h3 
                className="text-5xl font-black text-white tracking-tighter transition-all duration-75 uppercase"
                style={{ 
                    transform: isHovered ? `${glitchTransform} ${glitchSkew}` : 'none',
                    textShadow: isHovered ? '2px 0 red, -2px 0 blue' : 'none',
                    opacity: isHovered ? 0.9 : 1
                }}
            >
                {title}
            </h3>
            <h3 
                className="text-5xl font-black text-red-500 tracking-tighter absolute top-0 left-0 -z-10 uppercase"
                style={{ 
                    opacity: isHovered ? 0.5 : 0,
                    transform: isHovered ? `translate(-4px, 2px)` : 'none',
                }}
            >
                {title}
            </h3>
            <h3 
                className="text-5xl font-black text-blue-500 tracking-tighter absolute top-0 left-0 -z-10 uppercase"
                style={{ 
                    opacity: isHovered ? 0.5 : 0,
                    transform: isHovered ? `translate(4px, -2px)` : 'none',
                }}
            >
                {title}
            </h3>
        </div>

        {description && (
            <p className="text-xs text-white/40 font-mono max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {description}
            </p>
        )}

        <p className="absolute bottom-8 text-sm text-vantage-gold font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        &lt;SYSTEM_ERROR /&gt;
        </p>
    </div>
  );
};