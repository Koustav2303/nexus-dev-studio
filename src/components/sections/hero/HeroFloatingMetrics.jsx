import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroFloatingMetrics = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Subtle float for left card
      gsap.to(leftCardRef.current, {
        y: -15,
        x: 5,
        rotation: -2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Offset counter-float for right card
      gsap.to(rightCardRef.current, {
        y: 18,
        x: -8,
        rotation: 3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {/* Top Left Floating Stat */}
      <div 
        ref={leftCardRef}
        className="absolute top-[20%] left-[5%] glass-card p-4 rounded-xl border-white/10 max-w-[180px]"
      >
        <div className="text-2xl font-black text-pureWhite leading-none">99.9%</div>
        <div className="text-[9px] font-bold tracking-widest text-white/40 uppercase mt-1">
          Precision Backend SLA
        </div>
      </div>

      {/* Bottom Right Floating Stat */}
      <div 
        ref={rightCardRef}
        className="absolute bottom-[25%] right-[5%] glass-card p-4 rounded-xl border-white/10 max-w-[200px]"
      >
        <div className="text-2xl font-black text-pureWhite leading-none">AI + UI/UX</div>
        <div className="text-[9px] font-bold tracking-widest text-white/40 uppercase mt-1">
          Integrated Pipelines
        </div>
      </div>
    </div>
  );
};

export default HeroFloatingMetrics;