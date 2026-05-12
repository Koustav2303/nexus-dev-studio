import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="text-left md:text-center max-w-3xl mx-auto mb-16">
      <div className="contact-anim overflow-hidden mb-3">
        <span className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-mono tracking-[0.3em] text-white/50 uppercase">
          SECURE PROTOCOL // INITIATE COMMS
        </span>
      </div>
      <h2 className="contact-anim text-3xl sm:text-6xl font-black tracking-tight text-pureWhite">
        COMMENCE ENGINEERING
      </h2>
      <p className="contact-anim mt-4 text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-xl mx-auto">
        Ready to deploy elite client-side interfaces, impenetrable Spring Security boundaries, or high-dimensional AI databases? Push your project parameters below.
      </p>
    </div>
  );
};

export default ContactHeader;