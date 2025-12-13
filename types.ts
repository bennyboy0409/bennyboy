import React from 'react';

export interface ProjectTileProps {
  index: number;
  title: string;
  category: string; // Used for top-right "System" label
  client?: string;  // Used for top-left "Client" label
  description?: string;
  stats?: string;
  footer?: string;
  className?: string;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}