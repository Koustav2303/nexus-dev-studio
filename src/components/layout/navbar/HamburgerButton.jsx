import React from 'react';

const HamburgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
      aria-label="Toggle Navigation Menu"
    >
      <span
        className={`w-6 h-[1.5px] bg-pureWhite transition-all duration-300 origin-center ${
          isOpen ? 'rotate-45 translate-y-[7.5px]' : ''
        }`}
      ></span>
      <span
        className={`w-6 h-[1.5px] bg-pureWhite transition-all duration-200 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`w-6 h-[1.5px] bg-pureWhite transition-all duration-300 origin-center ${
          isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;