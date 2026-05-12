import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".team-reveal", {
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
    <div ref={headerRef} className="flex flex-col items-start md:items-center text-left md:text-center mb-16">
      <div className="team-reveal overflow-hidden mb-3">
        <span className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-mono tracking-[0.3em] text-white/50 uppercase">
          HUMAN CAPITAL // VETERAN ARCHITECTS
        </span>
      </div>
      <h2 className="team-reveal text-3xl sm:text-6xl font-black tracking-tight text-pureWhite">
        THE CORE ARCHITECTS
      </h2>
      <p className="team-reveal mt-4 max-w-2xl text-xs sm:text-sm text-white/50 font-light leading-relaxed">
        Our production pipelines are engineered by elite specialists. Select any operative to bypass standard security routing and inspect individual deployment metrics, verified tech stacks, and active commit records.
      </p>
    </div>
  );
};

export default TeamHeader;