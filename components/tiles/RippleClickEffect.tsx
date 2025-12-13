import React, { useState } from 'react';
import { ProjectTileProps } from '../../types';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const RippleClickEffect: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden cursor-pointer active:bg-[#151518] transition-colors"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 p-8 text-center">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">0{index + 1} — {category}</span>
        <h3 className="text-2xl text-white font-light tracking-tight mb-2">{title}</h3>
        {description && <p className="text-xs text-white/40 font-mono max-w-sm">{description}</p>}
        <p className="mt-4 text-xs text-vantage-gold/60 border border-vantage-gold/20 px-3 py-1 rounded-full">Click Anywhere</p>
      </div>

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/10 pointer-events-none animate-ping"
          style={{
            left: ripple.x, top: ripple.y, width: '20px', height: '20px', transform: 'translate(-50%, -50%)', animationDuration: '0.8s'
          }}
        />
      ))}
      {ripples.map((ripple) => (
        <span
          key={ripple.id + 'b'}
          className="absolute rounded-full border border-vantage-gold/30 pointer-events-none"
          style={{
            left: ripple.x, top: ripple.y, width: '100px', height: '100px', transform: 'translate(-50%, -50%) scale(0)', animation: 'rippleExpand 0.8s ease-out forwards'
          }}
        />
      ))}
      <style>{`@keyframes rippleExpand { to { transform: translate(-50%, -50%) scale(4); opacity: 0; } }`}</style>
    </div>
  );
};