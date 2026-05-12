import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavAction from './NavAction';
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navContainerRef.current,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-5">
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <nav
        ref={navContainerRef}
        className="relative z-[105] max-w-7xl mx-auto h-[4.5rem] sm:h-20 px-5 sm:px-8 glass-card rounded-2xl flex items-center justify-between gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.06] transition-all duration-300"
      >
        <NavLogo />
        <NavLinks />
        <div className="flex shrink-0 items-center gap-3 md:gap-0">
          <NavAction />
          <HamburgerButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
