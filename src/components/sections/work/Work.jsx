import React from 'react';
import WorkHeader from './WorkHeader';
import WorkGrid from './WorkGrid';

const Work = () => {
  return (
    <section id="work" className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
      {/* Background radial lighting accent positioned behind the grid */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-radial-glow pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <WorkHeader />
        <WorkGrid />
      </div>
    </section>
  );
};

export default Work;