import React from 'react';

const ShowcaseControls = ({ totalSlides, activeIndex, setActiveIndex, isHovered, progress }) => {
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-6 border-t border-white/5">
      
      {/* Segmented Loading Indicator Control Matrix */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 relative overflow-hidden bg-white/20 cursor-pointer ${
                isActive ? 'w-16' : 'w-4 hover:bg-white/40'
              }`}
              aria-label={`Jump to architecture slide ${idx + 1}`}
            >
              {/* Dynamic Loading Fill Strip strictly rendered for the active slide */}
              {isActive && (
                <span 
                  className="absolute top-0 left-0 h-full bg-pureWhite rounded-full transition-all duration-75"
                  style={{ width: `${progress}%` }}
                ></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Manual Step Controllers */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="p-3 rounded-xl glass-card border-white/10 hover:bg-white/5 transition-all text-white/60 hover:text-pureWhite font-mono text-xs cursor-pointer"
          aria-label="Previous Showcase Slide"
        >
          [← PREV]
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-xl glass-card border-white/10 hover:bg-white/5 transition-all text-white/60 hover:text-pureWhite font-mono text-xs font-bold cursor-pointer"
          aria-label="Next Showcase Slide"
        >
          [NEXT →]
        </button>
      </div>

    </div>
  );
};

export default ShowcaseControls;