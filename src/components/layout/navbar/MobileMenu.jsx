import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NAV_LINKS, CTA } from './navConfig';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const backdropRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;
    gsap.set(backdrop, { autoAlpha: 0, pointerEvents: 'none' });
    gsap.set(panel, { xPercent: 100, pointerEvents: 'none' });
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    if (isOpen) {
      gsap.set([backdrop, panel], { pointerEvents: 'auto' });
      gsap.to(backdrop, {
        autoAlpha: 1,
        duration: 0.35,
        ease: 'power2.out',
      });
      gsap.fromTo(
        panel,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.45, ease: 'power3.out' }
      );
    } else {
      gsap.to(backdrop, {
        autoAlpha: 0,
        duration: 0.28,
        ease: 'power2.in',
      });
      gsap.to(panel, {
        xPercent: 100,
        duration: 0.38,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set([backdrop, panel], { pointerEvents: 'none' });
        },
      });
    }
  }, [isOpen]);

  return (
    <div className="md:hidden" aria-hidden={!isOpen}>
      <div
        ref={backdropRef}
        role="presentation"
        className="fixed inset-0 z-[100] bg-pureBlack/80 backdrop-blur-md opacity-0 invisible pointer-events-none"
        onClick={() => setIsOpen(false)}
      />
      <aside
        id="mobile-nav-drawer"
        ref={panelRef}
        className="fixed right-0 bottom-0 z-[102] flex w-full max-w-sm flex-col border-l border-t border-white/[0.12] rounded-tl-2xl bg-[#070707] shadow-[-24px_0_48px_rgba(0,0,0,0.55)] pointer-events-none top-[calc(1.25rem+4.5rem)] sm:top-[calc(1.25rem+5rem)]"
        aria-label="Mobile navigation"
      >
        <div className="border-b border-white/[0.08] px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Navigate
          </p>
          <p className="mt-1 text-sm font-medium text-pureWhite">Nexus Dev Studio</p>
        </div>

        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-4 rounded-xl px-4 py-3.5 text-pureWhite opacity-100 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-pureWhite/40"
            >
              <span className="font-mono text-[11px] text-white/50 transition-colors group-hover:text-white/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-lg font-semibold tracking-tight text-pureWhite">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="border-t border-white/[0.08] p-4">
          <a
            href={CTA.href}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-pureWhite px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-pureBlack transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-pureWhite focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
          >
            {CTA.name}
          </a>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
