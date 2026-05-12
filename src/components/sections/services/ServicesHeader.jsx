import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesHeader = () => {
  const headerRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(titleRef.current, { y: "0%", opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.3")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="flex flex-col items-start md:items-center text-left md:text-center mb-16">
      {/* Micro-Tag */}
      <div 
        ref={tagRef} 
        className="opacity-0 translate-y-4 mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold tracking-[0.25em] text-white/60 uppercase"
      >
        Core Competencies
      </div>

      {/* Main Title */}
      <div className="overflow-hidden pb-2">
        <h2 
          ref={titleRef} 
          className="text-3xl sm:text-5xl font-black tracking-tight text-pureWhite opacity-0 translate-y-full"
        >
          ENGINEERED SOLUTIONS
        </h2>
      </div>

      {/* Description */}
      <p 
        ref={descRef} 
        className="opacity-0 translate-y-4 mt-4 max-w-2xl text-xs sm:text-sm text-white/50 font-light leading-relaxed"
      >
        Delivering end-to-end architectures. From pixel-perfect high-fidelity frontend interfaces to impenetrable backend logic and custom AI LLM orchestrations.
      </p>
    </div>
  );
};

export default ServicesHeader;