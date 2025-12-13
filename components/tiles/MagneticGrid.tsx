import React, { useRef, useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const MagneticGrid: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  client, 
  description,
  footer 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Grid configuration
  const rows = 8;
  const cols = 12;
  const dots = Array.from({ length: rows * cols });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 }); // Move "magnet" far away
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full bg-[#050505] border border-white/10 overflow-hidden group flex flex-col justify-between p-8"
    >
      {/* Header */}
      <div className="relative z-20 flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium mb-8 pointer-events-none">
        <span className="text-white">{client}</span>
        <span className="text-white/60 flex items-center gap-1">
          {category}
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 pointer-events-none">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        {description && <p className="text-white/60 text-sm max-w-[80%]">{description}</p>}
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-auto pt-8 pointer-events-none">
         <span className="text-xs text-white/30">{footer}</span>
      </div>

      {/* Dot Grid Layer */}
      <div className="absolute inset-0 z-10 flex flex-wrap content-center justify-center p-4">
        <div 
          className="grid w-full h-full"
          style={{ 
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
          }}
        >
          {dots.map((_, i) => (
            <MagneticDot 
              key={i} 
              mousePos={mousePos} 
              containerRef={containerRef} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual Dot Component
const MagneticDot = ({ mousePos, containerRef }: any) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [styleState, setStyleState] = useState({ 
    x: 0, 
    y: 0, 
    scale: 1, 
    opacity: 0.3,
    boxShadow: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  });

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      if (!dotRef.current || !containerRef.current) return;

      const dotRect = dotRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Center of dot relative to container
      const dotX = dotRect.left - containerRect.left + dotRect.width / 2 - styleState.x; 
      const dotY = dotRect.top - containerRect.top + dotRect.height / 2 - styleState.y;

      const dx = mousePos.x - dotX;
      const dy = mousePos.y - dotY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const maxDist = 200; // Radius of magnetic influence

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist; // 0 to 1 (1 is closest)
        
        // Attraction movement
        const moveX = dx * force * 0.35; 
        const moveY = dy * force * 0.35;
        
        // Scale up (1 -> 1.3)
        const scale = 1 + (force * 0.5); 
        
        // Opacity & Brightness (white glow)
        const opacity = 0.3 + (force * 0.7); // up to 1.0
        
        // Glow effect
        const boxShadow = force > 0.2 
          ? `0 0 ${force * 8}px rgba(255, 255, 255, ${force})` 
          : 'none';
          
        const backgroundColor = `rgba(255, 255, 255, ${opacity})`;

        setStyleState({ 
          x: moveX, 
          y: moveY, 
          scale, 
          opacity,
          boxShadow,
          backgroundColor
        });
      } else {
        // Reset
        setStyleState({ 
          x: 0, 
          y: 0, 
          scale: 1, 
          opacity: 0.3,
          boxShadow: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.3)'
        });
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]); 

  return (
    <div className="flex items-center justify-center pointer-events-none">
      <div 
        ref={dotRef}
        className="rounded-full"
        style={{ 
          width: '3px', 
          height: '3px',
          backgroundColor: styleState.backgroundColor,
          boxShadow: styleState.boxShadow,
          transform: `translate(${styleState.x}px, ${styleState.y}px) scale(${styleState.scale})`,
          transition: 'transform 0.1s ease-out, background-color 0.1s, box-shadow 0.1s' 
        }}
      />
    </div>
  );
};