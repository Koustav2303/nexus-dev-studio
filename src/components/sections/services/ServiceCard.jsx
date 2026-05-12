import React from 'react';

const ServiceCard = ({ index, title, description, tags }) => {
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <div className="group relative glass-card rounded-xl p-6 sm:p-8 glass-card-hover flex flex-col justify-between h-full overflow-hidden">
      {/* Top micro-border glow effect on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pureWhite to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Architecture: Index & Icon indicator */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold font-mono tracking-wider text-white/30 group-hover:text-pureWhite transition-colors duration-300">
            {formattedIndex} //
          </span>
          <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-pureWhite transition-all duration-300 group-hover:shadow-[0_0_10px_#fff]"></div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-pureWhite mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>

        <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Bottom Architecture: Tech pills & Action Trigger */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[9px] font-medium tracking-wider px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded text-white/70 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Micro-interaction bottom link */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/40 group-hover:text-pureWhite transition-colors duration-300">
          <span>Deployment Specs</span>
          <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            ↗
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;