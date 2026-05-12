import React from 'react';
import TeamHeader from './TeamHeader';
import TeamGrid from './TeamGrid';

const Team = () => {
  return (
    <section id="capabilities" className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
      {/* Deep ambient glow layers */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-glow pointer-events-none opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <TeamHeader />
        <TeamGrid />
      </div>
    </section>
  );
};

export default Team;