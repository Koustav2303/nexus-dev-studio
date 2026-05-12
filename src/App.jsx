import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './components/sections/hero/Hero';
import Services from './components/sections/services/Services';

function App() {
  return (
    <div className="min-h-screen bg-pureBlack text-pureWhite selection:bg-pureWhite selection:text-pureBlack">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;