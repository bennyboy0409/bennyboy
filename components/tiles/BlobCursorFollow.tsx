import React, { useRef, useState, useEffect } from 'react';
import { ProjectTileProps } from '../../types';

export const BlobCursorFollow: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    const updateBlob = () => {
      setBlobPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.1,
        y: prev.y + (targetPos.y - prev.y) * 0.1
      }));
      animationFrameId = requestAnimationFrame(updateBlob);
    };
    animationFrameId = requestAnimationFrame(updateBlob);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTargetPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group cursor-none"
    >
      <div className="absolute top-8 right-8 text-[10px] tracking-[0.2em] uppercase text-white/30 z-20">0{index + 1}</div>

      <div 
        className="absolute w-32 h-32 bg-vantage-gold/30 rounded-full blur-3xl pointer-events-none mix-blend-screen"
        style={{ left: blobPos.x, top: blobPos.y, transform: 'translate(-50%, -50%) scale(1.5)' }}
      />
      <div 
        className="absolute w-4 h-4 bg-white rounded-full pointer-events-none z-30"
        style={{ left: targetPos.x, top: targetPos.y, transform: 'translate(-50%, -50%)' }}
      />

      <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
        <h3 className="text-2xl text-white font-light mb-1">{title}</h3>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">{category}</p>
        {description && <p className="text-xs text-white/60 font-mono max-w-[80%]">{description}</p>}
      </div>
    </div>
  );
};