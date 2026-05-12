import React from 'react';

const socials = [
  { name: "GitHub", handle: "@Koustav2303", url: "https://github.com/Koustav2303", icon: "↗" },
  { name: "LinkedIn", handle: "// System Profile", url: "https://linkedin.com", icon: "↗" },
  { name: "Twitter // X", handle: "@nexusdev_studio", url: "https://twitter.com", icon: "↗" }
];

const FooterSocials = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-4 border-b border-white/5 pb-2">
          // Outer Connectivity
        </span>
        <div className="flex flex-col gap-3">
          {socials.map((soc, idx) => (
            <a 
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/soc p-3 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-pureWhite font-mono group-hover/soc:translate-x-0.5 transition-transform">
                  {soc.name}
                </span>
                <span className="text-[9px] font-mono text-white/40">
                  {soc.handle}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-white/30 group-hover/soc:text-pureWhite group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-all">
                {soc.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* SLA Transmission Stamp */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/40">
        <span>ENCRYPTED_PIPELINE</span>
        <span className="text-pureWhite">SECURE</span>
      </div>
    </div>
  );
};

export default FooterSocials;