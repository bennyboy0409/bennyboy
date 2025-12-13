import React, { useRef, useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const InteractiveGridMorph: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const cells = Array.from({ length: 64 }); 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20 pointer-events-none mix-blend-difference">
         <span className="text-[10px] tracking-[0.2em] uppercase text-white">0{index+1}</span>
         <span className="text-[10px] tracking-[0.2em] uppercase text-white">{category}</span>
      </div>

      <div className="absolute bottom-8 left-8 z-20 pointer-events-none mix-blend-difference max-w-[80%]">
         <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
         {description && <p className="text-xs text-white/80 font-mono leading-tight">{description}</p>}
      </div>

      <div className="flex-1 grid grid-cols-8 gap-1 p-4">
        {cells.map((_, i) => (
          <GridCell key={i} mousePos={mousePos} containerRef={containerRef} index={i} />
        ))}
      </div>
    </div>
  );
};

const GridCell = ({ mousePos, containerRef, index }: any) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!cellRef.current || !containerRef.current) return;
    const rect = cellRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cellX = rect.left - containerRect.left + rect.width / 2;
    const cellY = rect.top - containerRect.top + rect.height / 2;
    
    const dist = Math.hypot(mousePos.x - cellX, mousePos.y - cellY);
    const maxDist = 150;

    if (dist < maxDist) {
      const factor = (maxDist - dist) / maxDist; 
      setStyle({
        borderRadius: `${factor * 50}%`,
        transform: `scale(${1 - factor * 0.5})`,
        backgroundColor: `rgba(212, 175, 55, ${factor * 0.3 + 0.1})`,
        borderColor: `rgba(212, 175, 55, ${factor * 0.5})`
      });
    } else {
      setStyle({
        borderRadius: '0%',
        transform: 'scale(1)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderColor: 'rgba(255, 255, 255, 0.05)'
      });
    }
  }, [mousePos]);

  return <div ref={cellRef} className="w-full h-full border transition-all duration-200 ease-out" style={style} />;
};