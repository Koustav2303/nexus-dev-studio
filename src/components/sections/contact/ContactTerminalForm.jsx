import React, { useState } from 'react';

const ContactTerminalForm = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    matrix: 'Full-Stack Ecosystem',
    payload: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate secure network handshakes and transmission processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ identifier: '', matrix: 'Full-Stack Ecosystem', payload: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="relative glass-card rounded-2xl overflow-hidden border-white/10 bg-pureBlack/40">
      {/* Top Console Command Header */}
      <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="text-[9px] font-mono text-white/40 ml-2 tracking-widest">
            TERMINAL // STDIN
          </span>
        </div>
        <span className="text-[8px] font-mono text-white/30">UTF-8</span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-6">
        {/* Input 1: Identity */}
        <div>
          <label className="block text-[9px] font-mono text-white/40 uppercase tracking-widest mb-2">
            $ const client_identifier =
          </label>
          <input 
            type="text"
            required
            placeholder="Name or Organization..."
            value={formData.identifier}
            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
            className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-pureWhite placeholder-white/20 focus:outline-none focus:border-pureWhite focus:bg-white/[0.05] transition-all"
          />
        </div>

        {/* Input 2: Core Matrix selection */}
        <div>
          <label className="block text-[9px] font-mono text-white/40 uppercase tracking-widest mb-2">
            $ let target_architecture =
          </label>
          <select
            value={formData.matrix}
            onChange={(e) => setFormData({...formData, matrix: e.target.value})}
            className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-pureWhite focus:outline-none focus:border-pureWhite focus:bg-white/[0.05] transition-all cursor-pointer"
          >
            <option className="bg-pureBlack text-pureWhite" value="Full-Stack Ecosystem">Full-Stack Ecosystem</option>
            <option className="bg-pureBlack text-pureWhite" value="Frontend & UI/UX">Frontend & UI/UX Integration</option>
            <option className="bg-pureBlack text-pureWhite" value="Backend & Spring Security">Backend & Spring Security</option>
            <option className="bg-pureBlack text-pureWhite" value="AI Processing Pipeline">AI Processing Pipeline</option>
          </select>
        </div>

        {/* Input 3: System payload details */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[9px] font-mono text-white/40 uppercase tracking-widest">
              $ const init_parameters =
            </label>
            <span className="text-[8px] font-mono text-white/30">
              {formData.payload.length} / 500
            </span>
          </div>
          <textarea 
            required
            rows="4"
            maxLength="500"
            placeholder="Define core features, integrations, timeline constraints, or database schemas..."
            value={formData.payload}
            onChange={(e) => setFormData({...formData, payload: e.target.value})}
            className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-pureWhite placeholder-white/20 focus:outline-none focus:border-pureWhite focus:bg-white/[0.05] transition-all resize-none"
          ></textarea>
        </div>

        {/* Dynamic Action Matrix Submit Button */}
        <button
          type="submit"
          disabled={submitting || submitted}
          className={`w-full py-4 rounded-lg font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 relative overflow-hidden ${
            submitted 
              ? 'bg-white/10 text-pureWhite border border-white/20'
              : 'bg-pureWhite text-pureBlack hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]'
          }`}
        >
          {submitting && (
            <span className="absolute inset-0 flex items-center justify-center gap-2 bg-pureWhite text-pureBlack">
              <span className="w-1.5 h-1.5 rounded-full bg-pureBlack animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-pureBlack animate-bounce [animation-delay:-.3s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-pureBlack animate-bounce [animation-delay:-.5s]"></span>
              <span>COMPILING_STREAMS</span>
            </span>
          )}
          {submitted ? "TRANSMISSION SUCCESS ✓" : "EXECUTE // DISPATCH_PAYLOAD"}
        </button>
      </form>
    </div>
  );
};

export default ContactTerminalForm;