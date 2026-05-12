import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".showcase-mask", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="flex flex-col items-start md:items-center text-left md:text-center mb-16 max-w-3xl mx-auto">
      <div className="showcase-mask overflow-hidden mb-3">
        <span className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-mono tracking-[0.3em] text-white/50 uppercase">
          SYSTEM VISUALIZATION // ISOMETRIC VIEW
        </span>
      </div>
      <h2 className="showcase-mask text-3xl sm:text-6xl font-black tracking-tight text-pureWhite">
        ARCHITECTURAL MOCKUPS
      </h2>
      <p className="showcase-mask mt-4 text-xs sm:text-sm text-white/50 font-light leading-relaxed">
        Examine our core capabilities conceptualized through highly dimensional isometric modeling. Swipe through our high-performance client interface structures, core security layouts, and AI processing nodes.
      </p>
    </div>
  );
};

export default ShowcaseHeader;