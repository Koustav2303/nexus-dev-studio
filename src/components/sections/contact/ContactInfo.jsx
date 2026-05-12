import React from 'react';

const channels = [
  {
    label: 'SECURE_MAIL',
    value: 'hello@nexusdev.studio',
    href: 'mailto:hello@nexusdev.studio',
    hint: 'PGP optional // plaintext accepted',
  },
  {
    label: 'RESPONSE_WINDOW',
    value: '24–48h UTC',
    hint: 'Weekdays prioritized for critical path',
  },
  {
    label: 'COORDINATES',
    value: 'Remote-first // Global',
    hint: 'Timezone overlap scheduled on request',
  },
];

const ContactInfo = () => {
  return (
    <div className="relative glass-card rounded-2xl overflow-hidden border-white/10 bg-pureBlack/40 p-6 sm:p-8 flex flex-col gap-6">
      <div className="px-0 py-0 border-b border-white/5 pb-4">
        <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase block mb-2">
          DIRECT_CHANNELS // READ_ONLY
        </span>
        <p className="text-sm text-white/60 font-light leading-relaxed">
          Use the secure terminal to transmit project scope. These endpoints are for reference and async follow-up only.
        </p>
      </div>

      <ul className="flex flex-col gap-5">
        {channels.map((row) => (
          <li key={row.label} className="group">
            <span className="block text-[9px] font-mono text-white/40 tracking-widest uppercase mb-1.5">
              $ echo {row.label}
            </span>
            {row.href ? (
              <a
                href={row.href}
                className="text-sm font-mono text-pureWhite hover:text-white/80 transition-colors break-all"
              >
                {row.value}
              </a>
            ) : (
              <span className="text-sm font-mono text-pureWhite">{row.value}</span>
            )}
            {row.hint && (
              <p className="mt-1 text-[10px] font-mono text-white/35">{row.hint}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
