import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const TeamModal = ({ developer, onClose }) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'logs' | 'clearance'

  // Manage dynamic mounting/unmounting transitions safely
  useEffect(() => {
    if (developer) {
      document.body.style.overflow = 'hidden';
      setActiveTab('specs'); // Reset to default view when new developer loads
      
      let ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.to(overlayRef.current, { duration: 0.3, autoAlpha: 1, ease: "power2.out" })
          .fromTo(modalRef.current, 
            { scale: 0.95, y: 40, opacity: 0 }, 
            { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: "expo.out" },
            "-=0.1"
          );
      });
      return () => ctx.revert();
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [developer]);

  const handleClose = () => {
    let ctx = gsap.context(() => {
      gsap.to(modalRef.current, { scale: 0.98, y: 20, opacity: 0, duration: 0.2, ease: "power2.in" });
      gsap.to(overlayRef.current, { duration: 0.3, autoAlpha: 0, ease: "power2.in", onComplete: onClose });
    });
  };

  if (!developer) return null;

  return (
    <div 
      ref={overlayRef}
      onClick={handleClose}
      className="fixed inset-0 z-50 invisible bg-pureBlack/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl glass-card rounded-2xl overflow-hidden border-white/15 bg-pureBlack/95 flex flex-col max-h-[90vh] shadow-2xl relative"
      >
        {/* Top Header Shell */}
        <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20"></span>
              <span className="w-2 h-2 rounded-full bg-white/20"></span>
              <span className="w-2 h-2 rounded-full bg-white/20"></span>
            </div>
            <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase border-l border-white/10 pl-3">
              SECURE_SHELL // {developer.domain} // TARGET:{developer.initials}
            </span>
          </div>
          <button 
            onClick={handleClose}
            className="text-[10px] font-mono font-bold tracking-widest text-white/40 hover:text-pureWhite transition-colors px-2 py-1 bg-white/[0.03] rounded border border-white/5"
          >
            [CLOSE_SYS]
          </button>
        </div>

        {/* Master Content Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-grow overflow-hidden">
          
          {/* Left Column: Avatar & Status Pipeline */}
          <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01] flex flex-col justify-between">
            <div>
              {/* Detailed Badge Component */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                  ACCESS STATUS
                </span>
                <span className="flex items-center gap-1.5 text-[8px] font-mono text-pureWhite px-2 py-0.5 bg-white/[0.05] rounded border border-white/10">
                  <span className="w-1 h-1 rounded-full bg-pureWhite animate-ping"></span>
                  CONNECTED
                </span>
              </div>

              {/* Developer Metadata Profile */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-white/5">
                <div className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black font-mono text-pureWhite mb-4 relative">
                  {developer.initials}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pureBlack border border-white/20 flex items-center justify-center text-[6px] font-mono text-white/60">
                    {developer.level}
                  </div>
                </div>
                <h4 className="text-xl font-bold tracking-tight text-pureWhite">{developer.name}</h4>
                <p className="text-xs font-mono text-white/50 mt-0.5">{developer.role}</p>
                <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase mt-3 px-2 py-0.5 bg-white/[0.03] rounded">
                  EXP: {developer.experience}
                </span>
              </div>

              {/* Real-Time Live Hardware SLAs */}
              <div className="mt-6 flex flex-col gap-3">
                <div>
                  <div className="flex justify-between text-[9px] font-mono text-white/40 mb-1">
                    <span>SLA INTEGRITY</span>
                    <span className="text-pureWhite">{developer.stats.sla}</span>
                  </div>
                  <div className="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-pureWhite rounded-full" 
                      style={{ width: developer.stats.sla }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[9px] font-mono text-white/40 mb-1">
                    <span>CODE PIPELINE SLA</span>
                    <span className="text-pureWhite">OPTIMIZED</span>
                  </div>
                  <div className="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-white/40 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Security Clearance Key */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <span className="text-[8px] font-mono text-white/40 block uppercase tracking-widest mb-1">
                Security Directive
              </span>
              <span className="text-xs font-mono font-bold text-white/80 tracking-wide block">
                {developer.stats.clearance}
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Deep Content Controller */}
          <div className="lg:col-span-2 flex flex-col h-full overflow-hidden">
            
            {/* Interactive Tab Navigation */}
            <div className="flex border-b border-white/5 px-6 pt-2 bg-white/[0.01]">
              {[
                { id: 'specs', label: 'Verified Tech Specs' },
                { id: 'logs', label: 'Access & System Logs' },
                { id: 'clearance', label: 'Contributions' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-xs font-mono tracking-widest uppercase relative transition-colors duration-300 ${
                    activeTab === tab.id 
                      ? 'text-pureWhite font-bold' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pureWhite"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Scrollable Output Viewport */}
            <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar flex-grow">
              
              {/* TAB 1: Verified Tech Specs */}
              {activeTab === 'specs' && (
                <div className="flex flex-col gap-6 animate-fadeIn">
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                      // Primary Capability Architecture
                    </span>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {developer.bio}
                    </p>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-3">
                      // Deployed Tech Stack Nodes
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {developer.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-mono px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded text-pureWhite flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/40"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                      // Continuous Output Volume
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
                        <span className="text-[9px] font-mono text-white/40 block">COMMITS / MONTH</span>
                        <span className="text-sm font-mono font-bold text-pureWhite">{developer.stats.commits}</span>
                      </div>
                      <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
                        <span className="text-[9px] font-mono text-white/40 block">PIPELINE INTEGRATION</span>
                        <span className="text-sm font-mono font-bold text-pureWhite">AUTOMATED CI/CD</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Access & System Logs */}
              {activeTab === 'logs' && (
                <div className="flex flex-col gap-3 font-mono text-[10px] animate-fadeIn">
                  <span className="text-[9px] text-white/40 uppercase tracking-widest block mb-2">
                    // Real-Time Action Traces
                  </span>
                  {developer.logs.map((log, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white/30">[{log.timestamp}]</span>
                        <span className="text-pureWhite font-semibold">{log.action}</span>
                      </div>
                      <span className="text-[9px] text-white/50 bg-white/[0.03] px-2 py-0.5 rounded self-start sm:self-auto">
                        {log.repo}
                      </span>
                    </div>
                  ))}
                  <div className="p-3 bg-white/[0.01] border border-dashed border-white/5 rounded text-center text-white/30 text-[9px] mt-2">
                    END OF LIVE ACCESSIBLE TRACE STREAM
                  </div>
                </div>
              )}

              {/* TAB 3: Core Contributions */}
              {activeTab === 'clearance' && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-1">
                    // Core Architectural Deliverables
                  </span>
                  {developer.contributions.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded">
                      <h5 className="text-xs font-bold text-pureWhite font-mono mb-1">{item.title}</h5>
                      <p className="text-xs text-white/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom Input Prompt Controller */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-2">
                <span className="text-pureWhite animate-pulse">$</span>
                <span>SECURE_PIPE_OPEN // CONFIG READY</span>
              </span>
              <span className="hidden sm:inline text-[9px]">ROUTING: {developer.id}</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamModal;