import React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactTerminalForm from './ContactTerminalForm';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactTerminalForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
