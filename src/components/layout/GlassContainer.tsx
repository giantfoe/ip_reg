import { ReactNode } from 'react';

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
}

export const GlassContainer = ({ children, className = '' }: GlassContainerProps) => {
  return (
    <div 
      className={`
        bg-glass backdrop-blur-md backdrop-filter
        border border-white/10 rounded-xl
        p-6 shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};
