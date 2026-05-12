import React, { useState, useEffect, useRef, useCallback } from 'react';
import ShowcaseHeader from './ShowcaseHeader';
import ShowcaseSlider from './ShowcaseSlider';
import ShowcaseControls from './ShowcaseControls';

// 📦 Import your locally saved assets directly from the repository
import frontendImg from '../../../assets/sliderimages/frontend.png';
import backendImg from '../../../assets/sliderimages/backend.png';
import databaseImg from '../../../assets/sliderimages/database.png';
import llmImg from '../../../assets/sliderimages/llm.png';

const slidesData = [
  {
    node: "FE_UIUX",
    tag: "Client-Side Physics",
    title: "Immersive Web Layouts",
    image: frontendImg,
    description: "Multi-layered dynamic interfaces utilizing hardware-accelerated animations, spatial graphics, and deeply optimized state pipelines that strictly maintain execution speed.",
    specs: [
      { label: "Execution Frame Rate", value: "Locked 60 FPS" },
      { label: "Rendering Core", value: "WebGL / Three.js" },
      { label: "Layout Strategy", value: "Pure Glassmorphism" },
      { label: "State Framework", value: "Zustand Core" }
    ]
  },
  {
    node: "SEC_KERNEL",
    tag: "Impenetrable Boundaries",
    title: "Zero-Trust Infrastructures",
    image: backendImg,
    description: "Enterprise-grade backend processors designed for uncompromised runtime isolation. Encapsulated middleware parsing stateless credentials cleanly across active load balancers.",
    specs: [
      { label: "Cryptographic Core", value: "AES-256 / SHA" },
      { label: "Access Protocol", value: "Stateless JWT" },
      { label: "Compute Runtime", value: "Spring Boot JVM" },
      { label: "Defense Ops", value: "Dynamic RBAC" }
    ]
  },
  {
    node: "DB_CLUSTER",
    tag: "Distributed Topologies",
    title: "High-Throughput Databases",
    image: databaseImg,
    description: "Highly distributed document stores and relational nodes built for minimal latency. Synchronized directly with low-latency memory caching layers to guarantee instant data persistence.",
    specs: [
      { label: "Memory Cache Speed", value: "O(1) Evaluation" },
      { label: "Transaction Integrity", value: "Strict ACID" },
      { label: "Document Target", value: "JSONB Modeling" },
      { label: "Cluster Layout", value: "Multi-Node Shards" }
    ]
  },
  {
    node: "AI_MEMBRANE",
    tag: "Semantic Processing",
    title: "AI Context Pipelines",
    image: llmImg,
    description: "Embedding custom language models seamlessly into real-world software workflows. Harnessing dense vector storage models to inject programmatic document context directly into active agents.",
    specs: [
      { label: "Semantic Pipeline", value: "LangChain Chains" },
      { label: "Vector Search", value: "High-Dimensional" },
      { label: "LLM Orchestration", value: "OpenAI Core API" },
      { label: "Context Storage", value: "Pinecone / Chroma" }
    ]
  }
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const duration = 5000; // Total display length per slide in ms
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedProgressRef = useRef(0);

  // Core callback function to advance slide and zero out timing tracking arrays
  const advanceSlide = useCallback((nextIdx) => {
    setActiveIndex(nextIdx !== undefined ? nextIdx : (prev) => (prev + 1) % slidesData.length);
    setProgress(0);
    pausedProgressRef.current = 0;
    startTimeRef.current = null;
  }, []);

  // Handler for manual slide clicks to instantly sync playback parameters
  const handleManualNav = (idx) => {
    advanceSlide(idx);
  };

  // High-performance custom animation frame timing loop
  useEffect(() => {
    if (isHovered) {
      // Retain active tracking state cleanly when user enters inspection boundaries
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      pausedProgressRef.current = progress;
      startTimeRef.current = null;
      return;
    }

    const animateProgress = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      // Calculate delta offsets taking cached progress values into account
      const elapsed = timestamp - startTimeRef.current;
      const currentProgress = pausedProgressRef.current + (elapsed / duration) * 100;

      if (currentProgress >= 100) {
        advanceSlide();
      } else {
        setProgress(currentProgress);
        animationFrameRef.current = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [activeIndex, isHovered, advanceSlide, duration, progress]);

  return (
    <section 
      id="work" 
      className="relative py-32 px-6 border-t border-white/5 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Centered radial ambient layer casting subtle background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-radial-glow pointer-events-none opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ShowcaseHeader />
        
        {/* Core Layout Subsystems */}
        <ShowcaseSlider 
          slides={slidesData} 
          activeIndex={activeIndex} 
        />

        <ShowcaseControls 
          totalSlides={slidesData.length}
          activeIndex={activeIndex}
          setActiveIndex={handleManualNav}
          isHovered={isHovered}
          progress={progress}
        />

        {/* Console Playback Telemetry Readout */}
        <div className="mt-6 text-center">
          <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
            {isHovered 
              ? "⏸ SEQUENCE SUSPENDED // USER INSPECTION OVERRIDE ACTIVE" 
              : "▶ AUTO-SLIDE MATRIX // REFRESHING STREAMS"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Showcase;