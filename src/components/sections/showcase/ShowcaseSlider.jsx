import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ShowcaseSlider = ({ slides, activeIndex }) => {
  const imageContainerRef = useRef(null);
  const contentContainerRef = useRef(null);

  // Trigger high-fidelity entry animations whenever the activeIndex updates
  useEffect(() => {
    let ctx = gsap.context(() => {
      const activeSlideImg = imageContainerRef.current.querySelector('.active-slide-img');
      const activeContent = contentContainerRef.current.querySelectorAll('.slide-content-anim');

      // Reset states cleanly before firing the timeline
      gsap.set(activeSlideImg, { scale: 1.08, opacity: 0 });
      gsap.set(activeContent, { y: 30, opacity: 0 });

      // Build continuous cross-fade/scale transition
      const tl = gsap.timeline();
      tl.to(activeSlideImg, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" })
        .to(activeContent, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4");

    }, [imageContainerRef, contentContainerRef]);

    return () => ctx.revert();
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
      
      {/* Visual Domain: Left column spanning 7 slots */}
      <div className="lg:col-span-7 relative w-full aspect-video glass-card rounded-2xl overflow-hidden border-white/10 group p-2">
        {/* Hardware Corner Marks */}
        <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 z-10"></div>
        <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 z-10"></div>
        <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 z-10"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 z-10"></div>

        {/* Master Image Viewport */}
        <div ref={imageContainerRef} className="w-full h-full rounded-xl overflow-hidden relative bg-pureBlack">
          {/* Subtle overlay grid layer to enhance technical context */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] z-10 pointer-events-none"></div>
          
          <img 
            src={currentSlide.image} 
            alt={currentSlide.title}
            className="active-slide-img w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-700 relative z-0"
          />

          {/* Absolute Status Ribbon */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-pureBlack/80 backdrop-blur-md border border-white/10 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-pureWhite animate-pulse"></span>
            <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest">
              RENDER_TARGET // {currentSlide.node}
            </span>
          </div>
        </div>
      </div>

      {/* Content Domain: Right column spanning 5 slots */}
      <div ref={contentContainerRef} className="lg:col-span-5 flex flex-col justify-center h-full p-4 lg:p-8">
        <div className="slide-content-anim">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono font-bold text-pureWhite px-2.5 py-1 bg-white/5 border border-white/10 rounded">
              NODE 0{activeIndex + 1}
            </span>
            <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
              // {currentSlide.tag}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-pureWhite mb-4">
            {currentSlide.title}
          </h3>
        </div>

        <p className="slide-content-anim text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
          {currentSlide.description}
        </p>

        {/* Dynamic Parameter Architecture list */}
        <div className="slide-content-anim pt-4 border-t border-white/5">
          <span className="text-[9px] font-mono text-white/40 block uppercase tracking-widest mb-3">
            // Core Specs Mapping
          </span>
          <div className="grid grid-cols-2 gap-3">
            {currentSlide.specs.map((spec, idx) => (
              <div key={idx} className="p-2.5 bg-white/[0.02] border border-white/5 rounded">
                <span className="text-[8px] font-mono text-white/40 block uppercase">{spec.label}</span>
                <span className="text-xs font-mono font-bold text-pureWhite block mt-0.5">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShowcaseSlider;