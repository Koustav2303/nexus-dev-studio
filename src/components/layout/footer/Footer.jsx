import React from 'react';
import FooterLogo from './FooterLogo';
import FooterDirectory from './FooterDirectory';
import FooterSocials from './FooterSocials';
import BackToTopButton from './BackToTopButton';

const Footer = () => {
  return (
    <footer className="relative bg-pureBlack border-t border-white/10 overflow-hidden pt-20 pb-12 px-6 z-10">
      {/* Background ambient lighting casting soft global depth across closing view */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-radial-glow pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core Multi-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-1">
            <FooterLogo />
          </div>
          
          <div className="lg:col-span-2 flex items-center">
            <FooterDirectory />
          </div>
          
          <div className="lg:col-span-1">
            <FooterSocials />
          </div>
        </div>

        {/* Global Bottom Terminal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-pureWhite tracking-wide select-none">
              &copy; {new Date().getFullYear()} NEXUS DEV STUDIO.
            </span>
            <span className="hidden sm:inline text-white/20 font-mono">|</span>
            <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">
              ALL INTEGRATION CONFIGS SECURED.
            </span>
          </div>

          {/* Magnetic Orb Return Button */}
          <BackToTopButton />
        </div>

      </div>
    </footer>
  );
};

export default Footer;