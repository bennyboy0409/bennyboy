import React from 'react';
import { ProjectTileProps } from '../../types';

export const RevealGlass: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description
}) => {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-vantage-surface border border-white/5 group">
      {/* Background Image (Abstract) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: 'url(https://picsum.photos/400/600?grayscale&blur=2)' }}
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-none group-hover:bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="w-full h-[1px] bg-white/20 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        <span className="text-xs text-white/60 tracking-widest uppercase mb-1">
          0{index + 1} — {category}
        </span>
        <h3 className="text-3xl font-light text-white tracking-tight mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-white/40 font-mono leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};