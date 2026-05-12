import React from 'react';

const HeroTitle = ({ titleRefs }) => {
  const lines = [
    { text: "ARCHITECTING", highlight: false },
    { text: "INTELLIGENT", highlight: true },
    { text: "DIGITAL REALITIES", highlight: false }
  ];

  return (
    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mt-6 mb-8">
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pb-2">
          <span
            ref={(el) => (titleRefs.current[index] = el)}
            className={`block translate-y-[110%] ${
              line.highlight 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-pureWhite via-white/80 to-white/40' 
                : 'text-pureWhite'
            }`}
          >
            {line.text}
          </span>
        </span>
      ))}
    </h1>
  );
};

export default HeroTitle;