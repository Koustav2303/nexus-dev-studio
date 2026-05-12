import React from 'react';

const WorkCard = ({ title, category, year, metrics, description, tags, link }) => {
  return (
    <div className="work-card-container group relative glass-card rounded-2xl overflow-hidden border-white/10 flex flex-col justify-between transition-all duration-500 hover:border-white/20">
      
      {/* Top Telemetry Bar */}
      <div className="absolute top-0 left-0 w-full px-6 py-2.5 bg-white/[0.02] border-b border-white/5 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-pureWhite animate-pulse"></span>
          <span className="text-[8px] font-mono tracking-widest text-white/60 uppercase">
            Live Telemetry
          </span>
        </div>
        <span className="text-[9px] font-mono font-bold text-white/80 tracking-tighter">
          {metrics}
        </span>
      </div>

      {/* Monochrome Visual Media Mockup */}
      <div className="relative w-full h-60 sm:h-72 bg-pureBlack overflow-hidden pt-9 border-b border-white/5">
        {/* Subtle ambient gradient overlay to simulate high-end lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-pureBlack via-transparent to-transparent z-10"></div>
        
        {/* Engineered wireframe graphical simulation */}
        <div className="w-full h-full bg-white/[0.01] flex flex-col justify-between p-6 group-hover:scale-105 transition-transform duration-700 ease-out relative">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          
          <div className="relative z-10 flex justify-between items-start text-white/20 font-mono text-[9px]">
            <span>SYS_KERNEL // CONFIG</span>
            <span>SECURE_PIPE</span>
          </div>

          {/* Deep center structural graphic */}
          <div className="relative z-10 self-center border border-white/10 px-8 py-4 rounded bg-pureBlack/40 backdrop-blur-sm group-hover:border-white/30 transition-colors">
            <span className="text-xs font-mono tracking-widest text-white/40 block text-center">
              [ {category} ]
            </span>
            <span className="text-base font-black tracking-tight text-pureWhite block text-center mt-1">
              {title}
            </span>
          </div>

          <div className="relative z-10 flex justify-between items-end text-white/20 font-mono text-[9px]">
            <span>RENDER: GPU ACCEL</span>
            <span>BUILD: {year}</span>
          </div>
        </div>
      </div>

      {/* Dense Metadata & Content Architecture */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white/[0.01]">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold font-mono tracking-widest text-white/40 uppercase">
              {category}
            </span>
            <span className="text-xs font-mono text-white/30">
              {year}
            </span>
          </div>

          <h3 className="text-2xl font-black tracking-tight text-pureWhite mb-3 group-hover:text-white/90 transition-colors">
            {title}
          </h3>

          <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Action interfaces and underlying stacks */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-[8px] font-mono tracking-wider px-2 py-1 bg-white/[0.03] border border-white/[0.08] rounded text-white/70 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* High-fidelity interaction footer link */}
          <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-pureWhite/70 hover:text-pureWhite transition-colors duration-300 py-1 relative group/btn"
          >
            <span>Examine Production Payload</span>
            <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300 inline-block font-mono">
              →
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-pureWhite transition-all duration-300 group-hover/btn:w-full"></span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default WorkCard;