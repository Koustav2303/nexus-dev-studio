import React from 'react';

const TeamCard = ({ developer, setSelectedDev }) => {
  return (
    <div 
      onClick={() => setSelectedDev(developer)}
      className="group relative glass-card rounded-2xl overflow-hidden border-white/10 p-6 flex flex-col justify-between h-[380px] cursor-pointer transition-all duration-500 hover:border-white/25 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
    >
      {/* Precision Micro-Design: Hardware Corner Brackets */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-pureWhite transition-colors duration-300"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-pureWhite transition-colors duration-300"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-pureWhite transition-colors duration-300"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-pureWhite transition-colors duration-300"></div>

      {/* Top Architecture: Domain & Clearance Flag */}
      <div className="flex justify-between items-start z-10">
        <div className="flex flex-col">
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">
            // {developer.domain}
          </span>
          <span className="text-[8px] font-mono text-white/30 tracking-tighter mt-0.5">
            ID: {developer.id}
          </span>
        </div>
        <span className="text-[8px] font-mono px-2 py-0.5 bg-white/[0.05] border border-white/10 rounded text-white/60 group-hover:bg-pureWhite group-hover:text-pureBlack transition-all duration-300 font-bold">
          LVL {developer.level}
        </span>
      </div>

      {/* Center Dynamic Media Core: Stylized Radar / Avatar Mockup */}
      <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-b from-white/15 via-white/5 to-transparent p-[1px] my-4 group-hover:scale-105 transition-transform duration-500">
        <div className="w-full h-full rounded-full bg-pureBlack flex items-center justify-center overflow-hidden relative">
          
          {/* Central Monogram */}
          <span className="text-3xl font-black text-white/30 group-hover:text-pureWhite transition-colors duration-300 font-mono tracking-tighter z-10">
            {developer.initials}
          </span>

          {/* Background Micro-Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:8px_8px]"></div>

          {/* Animated Ambient Scanner Sweep */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/[0.08] to-transparent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          
          {/* Subtle Rotating Crosshair border overlay */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 group-hover:border-white/30 group-hover:rotate-180 transition-all duration-1000 ease-out"></div>
        </div>
      </div>

      {/* Bottom Architecture: Role Data & Active Trigger */}
      <div className="text-center z-10 flex flex-col flex-grow justify-end">
        <h3 className="text-lg font-bold tracking-tight text-pureWhite group-hover:translate-x-0.5 transition-transform duration-300">
          {developer.name}
        </h3>
        <p className="text-[11px] font-mono text-white/50 mt-0.5 mb-4 leading-tight">
          {developer.role}
        </p>

        {/* Detailed Spec Button Interface */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/40 group-hover:text-pureWhite transition-colors duration-300">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-pureWhite transition-colors"></span>
            INSPECT_CONSOLE
          </span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300 font-bold">
            →
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;