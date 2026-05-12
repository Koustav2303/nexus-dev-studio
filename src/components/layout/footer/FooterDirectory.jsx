import React from 'react';

const directoryLinks = [
  {
    category: "System Routing",
    links: [
      { name: "Core Competencies", href: "#services" },
      { name: "Engineering Matrix", href: "#stack" },
      { name: "Telemetry Showcase", href: "#work" },
      { name: "Human Capital Roster", href: "#capabilities" }
    ]
  },
  {
    category: "Production Spec",
    links: [
      { name: "React 18 Component Ops", href: "#stack" },
      { name: "Tailwind JIT Styling", href: "#stack" },
      { name: "GSAP Physics Core", href: "#stack" },
      { name: "Spring Security Layer", href: "#stack" }
    ]
  }
];

const FooterDirectory = () => {
  return (
    <div className="grid grid-cols-2 gap-8 lg:gap-12 w-full">
      {directoryLinks.map((block, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-4 border-b border-white/5 pb-2">
            // {block.category}
          </span>
          <ul className="flex flex-col gap-2.5 font-mono text-xs">
            {block.links.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  className="text-white/50 hover:text-pureWhite transition-colors duration-300 relative inline-block group/link py-0.5"
                >
                  <span className="inline-block transform group-hover/link:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-pureWhite transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterDirectory;