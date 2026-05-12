import React from 'react';

const HeroActions = ({ actionsRef }) => {
  return (
    <div 
      ref={actionsRef}
      className="flex flex-col sm:flex-row items-center gap-4 opacity-0 translate-y-6"
    >
      <a
        href="#services"
        className="w-full sm:w-auto px-8 py-4 bg-pureWhite text-pureBlack font-bold text-xs tracking-[0.15em] uppercase rounded-full text-center transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
      >
        Explore Matrix
      </a>
      <a
        href="#contact"
        className="w-full sm:w-auto px-8 py-4 glass-card text-pureWhite font-semibold text-xs tracking-[0.15em] uppercase rounded-full text-center transition-all duration-300 glass-card-hover hover:scale-105"
      >
        Consultation
      </a>
    </div>
  );
};

export default HeroActions;