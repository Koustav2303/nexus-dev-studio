import React from 'react';

const HeroBadge = ({ badgeRef }) => {
  return (
    <div 
      ref={badgeRef}
      className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card opacity-0 translate-y-4"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pureWhite opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-pureWhite"></span>
      </span>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">
        Elite Dev Ecosystem
      </span>
    </div>
  );
};

export default HeroBadge;