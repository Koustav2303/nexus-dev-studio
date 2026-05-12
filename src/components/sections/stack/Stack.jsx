import React, { useState } from 'react';
import StackHeader from './StackHeader';
import StackFilters from './StackFilters';
import StackGrid from './StackGrid';

const Stack = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section id="stack" className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-radial-glow pointer-events-none opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <StackHeader />
        <StackFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <StackGrid activeCategory={activeCategory} />
      </div>
    </section>
  );
};

export default Stack;