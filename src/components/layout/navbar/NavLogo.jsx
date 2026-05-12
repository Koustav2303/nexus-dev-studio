import React from 'react';

const NavLogo = () => {
  return (
    <a href="#home" className="flex items-center gap-3 group cursor-pointer z-50">
      <div className="w-9 h-9 bg-pureWhite text-pureBlack flex items-center justify-center font-black text-base tracking-tighter rounded-sm transition-transform duration-500 group-hover:rotate-[18deg]">
        N
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base tracking-widest leading-none text-pureWhite">
          NEXUS
        </span>
        <span className="text-[9px] tracking-[0.25em] text-white/40 uppercase mt-1 block font-medium">
          Dev Studio
        </span>
      </div>
    </a>
  );
};

export default NavLogo;