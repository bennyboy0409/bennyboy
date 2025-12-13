import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const StandardTile: React.FC<ProjectTileProps> = ({ title, category, index, description }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setCoords({ x, y });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-96 w-full overflow-hidden bg-[#08080A] border border-white/5 group flex items-center justify-center cursor-pointer select-none"
    >
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center transform transition-transform duration-700 group-hover:scale-105">
        <h3 className="text-9xl font-bold tracking-tighter select-none font-sans"
          style={{
            backgroundImage: `linear-gradient(${135 + (coords.x * 20)}deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.8) 45%, rgba(150,150,150,0.5) 50%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0.1) 100%)`,
            backgroundSize: '200% 200%',
            backgroundPosition: `${50 + (coords.x * 30)}% ${50 + (coords.y * 30)}%`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.8))',
          }}
        >VS</h3>
        <p className="text-[10px] tracking-[0.4em] text-vantage-gold/80 uppercase mt-8 font-medium">Vantage Studio</p>
        {description && (<p className="mt-6 text-xs text-white/40 font-mono max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{description}</p>)}
      </div>
       <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at ${50 + coords.x * 50}% ${50 + coords.y * 50}%, rgba(255,255,255,0.03), transparent 60%)` }} />
       <div className="absolute bottom-6 left-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300"><span className="text-xs text-white/30 uppercase tracking-widest">{title}</span></div>
      <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300"><span className="text-xs text-white/30 uppercase tracking-widest">0{index + 1}</span></div>
    </div>
  );
};