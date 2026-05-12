import React from 'react';
import { CTA } from './navConfig';

const NavAction = () => {
  return (
    <div className="hidden md:block z-50">
      <a
        href={CTA.href}
        className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-pureBlack bg-pureWhite rounded-full overflow-hidden transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
      >
        <span>{CTA.name}</span>
      </a>
    </div>
  );
};

export default NavAction;
