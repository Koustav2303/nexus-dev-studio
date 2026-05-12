import React from 'react';

const FooterLogo = () => {
  return (
    <div className="flex flex-col justify-between h-full lg:max-w-sm">
      {/* Primary Brand Core */}
      <div>
        <a href="#home" className="inline-flex items-center gap-3 group cursor-pointer mb-6 z-10 relative">
          <div className="w-8 h-8 bg-pureWhite text-pureBlack flex items-center justify-center font-black text-sm tracking-tighter rounded-sm transition-transform duration-500 group-hover:rotate-[18deg]">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-widest leading-none text-pureWhite">
              NEXUS
            </span>
            <span className="text-[8px] tracking-[0.25em] text-white/40 uppercase mt-1 block font-mono">
              Dev Studio
            </span>
          </div>
        </a>

        <p className="text-xs text-white/50 font-light leading-relaxed mb-6 font-sans">
          Engineering mission-critical web platforms. We bridge deep full-stack compute capabilities with immersive client-side interfaces.
        </p>

        {/* Live Global Deployment Flags */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[9px] font-mono px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-white/40 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            SYS_SECURE
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-white/40 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            LOC: BANGALORE // IN
          </span>
        </div>
      </div>

      {/* Massive Underlying Watermark */}
      <div className="mt-8 pt-6 border-t border-white/5 relative overflow-hidden">
        <span className="text-[10px] font-mono text-white/30 tracking-widest block uppercase mb-1">
          // CONFIG TARGET
        </span>
        <span className="text-4xl font-black font-mono text-white/[0.02] tracking-tighter block select-none">
          SYSTEM_KERNEL_OK
        </span>
      </div>
    </div>
  );
};

export default FooterLogo;