import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './components/sections/hero/Hero';
import Services from './components/sections/services/Services';
import Team from './components/sections/team/Team';
import Stack from './components/sections/stack/Stack';
import Showcase from './components/sections/showcase/Showcase'; // Import interactive Slider module
import Contact from './components/sections/contact/Contact';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pureBlack text-pureWhite selection:bg-pureWhite selection:text-pureBlack">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Stack />
        <Showcase /> {/* Dynamic slider cleanly replaces flat grid view */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;