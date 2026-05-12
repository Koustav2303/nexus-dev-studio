import React from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesGrid from './ServicesGrid';

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 border-t border-white/5">
      {/* Subtle background element to separate section states */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-radial-glow pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;