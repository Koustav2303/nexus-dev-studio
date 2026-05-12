import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const mobileLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Stack', href: '#stack' },
  { name: 'Work', href: '#work' },
  { name: 'Initiate Project', href: '#contact', isCta: true },
];

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // GSAP visibility and animation logic
    if (isOpen) {
      gsap.to(overlayRef.current, {
        duration: 0.4,
        autoAlpha: 1, // handles visibility and opacity simultaneously
        ease: 'power3.out',
      });
      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          stagger: 0.06,
          ease: 'power2.out',
          delay: 0.15,
        }
      );
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 invisible md:hidden bg-pureBlack/90 backdrop-blur-xl flex flex-col justify-center items-center px-6"
    >
      <ul className="flex flex-col items-center gap-8 w-full max-w-sm">
        {mobileLinks.map((link, index) => (
          <li
            key={link.name}
            ref={(el) => (linksRef.current[index] = el)}
            className="w-full text-center"
          >
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-light tracking-wider transition-all duration-200 ${
                link.isCta
                  ? 'mt-6 py-3.5 px-8 bg-pureWhite text-pureBlack font-semibold text-sm tracking-widest uppercase rounded-full'
                  : 'text-white/60 hover:text-pureWhite'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;