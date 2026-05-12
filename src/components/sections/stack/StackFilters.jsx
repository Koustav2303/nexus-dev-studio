import React from 'react';

const categories = ['All', 'Frontend', 'Backend & Security', 'Database', 'AI Ecosystem', 'UI/UX'];

const StackFilters = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-12 p-1.5 glass-card rounded-full border-white/5 bg-white/[0.01]">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 relative ${
              isActive 
                ? 'text-pureBlack bg-pureWhite shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                : 'text-white/50 hover:text-pureWhite hover:bg-white/[0.05]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default StackFilters;