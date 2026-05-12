import React from 'react';

const StackCard = ({ name, category, metric, details, description, capabilities, version }) => {
  return (
    <div className="stack-card-item relative glass-card p-6 rounded-xl overflow-hidden glass-card-hover group border-white/10 flex flex-col justify-between min-h-[260px] transition-all duration-300">
      {/* Premium Micro-Design: Hardware-engineered corner marks */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-white/20 group-hover:bg-pureWhite transition-colors duration-300"></div>
      <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 group-hover:bg-pureWhite transition-colors duration-300"></div>
      
      {/* Top Sector: Category, Status & Versioning */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase font-mono">
              [{category}]
            </span>
            <span className="text-[8px] font-mono text-white/30 px-1.5 py-0.5 bg-white/[0.03] rounded border border-white/5">
              {version}
            </span>
          </div>

          {/* Active Status Beacon */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-pureWhite group-hover:shadow-[0_0_8px_#fff] transition-all duration-300"></span>
            <span className="text-[8px] font-mono tracking-tighter text-white/30 group-hover:text-white/60 transition-colors">
              STABLE
            </span>
          </div>
        </div>

        {/* Title & Core Details Target */}
        <h3 className="text-xl font-bold tracking-tight text-pureWhite group-hover:translate-x-1 transition-transform duration-300">
          {name}
        </h3>
        <p className="text-[10px] font-mono text-white/50 tracking-wide mt-0.5 mb-3">
          {details}
        </p>

        {/* Dense Context: Agency Utilization Description */}
        <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        {/* Deep Capabilities mapping (Sub-features mapping) */}
        <div className="flex flex-wrap gap-1 mb-4">
          {capabilities.map((cap, idx) => (
            <span 
              key={idx}
              className="text-[8px] font-medium tracking-wider px-2 py-0.5 bg-white/[0.02] border border-white/[0.06] rounded text-white/60 uppercase group-hover:border-white/10 transition-colors"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Sector: Performance Metrics & Spec Interface */}
      <div className="pt-3 border-t border-white/5 flex items-end justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">
            Hardware Output
          </span>
          <span className="text-[10px] font-mono font-semibold text-white/70 flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-white/20"></span>
            Optimized Execution
          </span>
        </div>

        {/* Dynamic Highlighted Metric Box */}
        <div className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded group-hover:bg-white/[0.08] transition-colors">
          <span className="text-[10px] font-black tracking-tighter text-pureWhite block leading-none">
            {metric}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StackCard;