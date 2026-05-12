import React from 'react';

const links = [
  { name: 'Services', href: '#services' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Stack', href: '#stack' },
  { name: 'Work', href: '#work' },
];

const NavLinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-10">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-xs font-semibold tracking-widest uppercase text-white/60 hover:text-pureWhite relative py-2 transition-colors duration-300 group"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-pureWhite transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;