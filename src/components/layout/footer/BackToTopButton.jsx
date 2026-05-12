import React from 'react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      aria-label="Scroll back to top of viewport"
      className="group relative px-6 py-3 rounded-full glass-card border-white/10 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-2 overflow-hidden cursor-pointer"
    >
      {/* Background Hover Flare */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

      <span className="text-[9px] font-mono font-bold tracking-widest text-white/60 group-hover:text-pureWhite uppercase transition-colors">
        RETURN_TO_TOP
      </span>
      <span className="inline-block transform group-hover:-translate-y-1 transition-transform duration-300 font-mono text-xs font-bold text-pureWhite">
        ↑
      </span>
    </button>
  );
};

export default BackToTopButton;