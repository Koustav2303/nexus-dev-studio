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

  // GSAP Entry Animation for the whole Navbar
  useEffect(() => {
    gsap.fromTo(
      navContainerRef.current,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.2 }
    );
  }, []);

  // Prevent scroll artifacts when mobile view is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header ref={navContainerRef} className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-5">
      {/* Floating glassmorphic wrapper */}
      <nav className="max-w-7xl mx-auto h-20 px-6 sm:px-8 glass-card rounded-2xl flex items-center justify-between transition-all duration-300">
        <NavLogo />
        <NavLinks />
        <NavAction />
        <HamburgerButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      </nav>
      
      {/* Detached Mobile Layer */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;