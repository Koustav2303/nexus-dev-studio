import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".work-reveal", {
        y: 80,
        opacity: 0,
        duration: 0.8,
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
    <div ref={headerRef} className="flex flex-col items-start md:items-center text-left md:text-center mb-20">
      <div className="work-reveal overflow-hidden mb-3">
        <span className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-mono tracking-[0.3em] text-white/50 uppercase">
          PROVEN TELEMETRY // DEPLOYED SYSTEMS
        </span>
      </div>
      <h2 className="work-reveal text-3xl sm:text-6xl font-black tracking-tight text-pureWhite max-w-4xl">
        SELECTED CASE STUDIES
      </h2>
      <p className="work-reveal mt-4 max-w-2xl text-xs sm:text-sm text-white/50 font-light leading-relaxed">
        Explore our high-performance production builds. Every platform demonstrates optimal state handling, native 60FPS fluid physics, and bulletproof backend integrations.
      </p>
    </div>
  );
};

export default WorkHeader;