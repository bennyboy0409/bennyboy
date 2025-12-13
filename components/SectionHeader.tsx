import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="w-full mb-12 border-b border-white/10 pb-4 flex items-end justify-between group cursor-default">
      <h2 className="text-sm tracking-[0.2em] font-medium text-vantage-gold uppercase">
        {title}
      </h2>
      <div className="h-[1px] bg-vantage-gold w-0 group-hover:w-12 transition-all duration-500 ease-out"></div>
    </div>
  );
};