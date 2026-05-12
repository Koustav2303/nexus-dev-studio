import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StackHeader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".stack-title-mask", {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block overflow-hidden pb-1 mb-3">
        <span className="stack-title-mask block text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase">
          SYSTEM ARCHITECTURE // UNDER THE HOOD
        </span>
      </div>
      <div className="overflow-hidden pb-2">
        <h2 className="stack-title-mask text-3xl sm:text-5xl font-black tracking-tight text-pureWhite">
          THE ENGINEERING MATRIX
        </h2>
      </div>
      <div className="overflow-hidden pt-2">
        <p className="stack-title-mask text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-xl mx-auto">
          Hover and filter through our core production frameworks. Every technology is selected for extreme scalability, bulletproof security, and seamless hardware-accelerated rendering.
        </p>
      </div>
    </div>
  );
};

export default StackHeader;