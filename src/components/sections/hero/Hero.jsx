import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroBadge from './HeroBadge';
import HeroTitle from './HeroTitle';
import HeroActions from './HeroActions';
import HeroFloatingMetrics from './HeroFloatingMetrics';

const Hero = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const actionsRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Build master entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8 // Waits for navbar to settle
      })
      .to(titleRefs.current, {
        y: "0%",
        duration: 1.2,
        stagger: 0.15
      }, "-=0.4")
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.8")
      .to(actionsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert(); // Strict Mode cleanup
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle deep background glow to pop the glassmorphic layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto w-full text-center z-10">
        <HeroBadge badgeRef={badgeRef} />
        
        <HeroTitle titleRefs={titleRefs} />

        <p 
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-white/60 font-light tracking-wide leading-relaxed mb-10 opacity-0 translate-y-4"
        >
          Full-Stack dominance meets high-fidelity UI/UX. We build secure Spring Boot backends, robust database architectures, Next-Gen AI capabilities, and immersive client-side interfaces.
        </p>

        <HeroActions actionsRef={actionsRef} />
      </div>

      {/* Floating Micro-Design Entities */}
      <HeroFloatingMetrics />
    </section>
  );
};

export default Hero;