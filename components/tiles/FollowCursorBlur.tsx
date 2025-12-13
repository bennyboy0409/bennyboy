import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const FollowCursorBlur: React.FC<ProjectTileProps> = ({ 
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
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group cursor-crosshair"
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-between blur-[8px] opacity-40 transition-opacity duration-500 group-hover:opacity-20">
         <ContentBlock index={index} category={category} title={title} description={description} />
      </div>

      <div 
        className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-[#0F0F12]"
        style={{
            clipPath: `circle(120px at ${position.x}px ${position.y}px)`,
            display: opacity ? 'flex' : 'none'
        }}
      >
         <ContentBlock index={index} category={category} title={title} description={description} highlight />
      </div>

      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${opacity ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase">Focus Required</span>
      </div>
    </div>
  );
};

const ContentBlock = ({ index, category, title, description, highlight = false }: any) => (
    <>
        <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium">
          <span className={highlight ? "text-vantage-gold" : "text-white/30"}>0{index + 1}</span>
          <span className={highlight ? "text-vantage-gold" : "text-white/30"}>{category}</span>
        </div>
        
        <div className="space-y-4">
            <h3 className={`text-4xl font-bold tracking-tight ${highlight ? "text-white" : "text-white/50"}`}>
                {title}
            </h3>
            {description && (
                <p className={`text-xs font-mono leading-relaxed ${highlight ? "text-white/80" : "text-white/30"}`}>
                    {description}
                </p>
            )}
        </div>

        <div className={`h-1 w-full ${highlight ? "bg-vantage-gold" : "bg-white/10"}`} />
    </>
);