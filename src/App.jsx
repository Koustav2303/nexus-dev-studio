import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './components/sections/hero/Hero';
import Services from './components/sections/services/Services';
import Stack from './components/sections/stack/Stack';
import Work from './components/sections/work/Work';
import Contact from './components/sections/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-pureBlack text-pureWhite selection:bg-pureWhite selection:text-pureBlack">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Work />
        <Contact />
      </main>

      {/* Global Agency Structural Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-pureBlack relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/40 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pureWhite"></span>
            <span>NEXUS DEV STUDIO // SYSTEM_KERNEL</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} ALL CONFIGS SECURED.
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-pureWhite transition-colors">INIT</a>
            <a href="#stack" className="hover:text-pureWhite transition-colors">SPECS</a>
            <a href="#work" className="hover:text-pureWhite transition-colors">LOGS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;