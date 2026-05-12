import React from 'react';

const HamburgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-controls="mobile-nav-drawer"
      id="mobile-nav-toggle"
      className="md:hidden relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-pureWhite backdrop-blur-sm transition-colors hover:bg-white/[0.08] hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pureWhite/50 focus-visible:ring-offset-2 focus-visible:ring-offset-pureBlack/0"
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      <span className="flex h-3.5 w-5 flex-col justify-between" aria-hidden>
        <span
          className={`block h-0.5 w-full origin-center rounded-full bg-pureWhite transition-transform duration-300 ease-out ${
            isOpen ? 'translate-y-[7px] rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full rounded-full bg-pureWhite transition-opacity duration-200 ease-out ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-full origin-center rounded-full bg-pureWhite transition-transform duration-300 ease-out ${
            isOpen ? '-translate-y-[7px] -rotate-45' : ''
          }`}
        />
      </span>
    </button>
  );
};

export default HamburgerButton;
