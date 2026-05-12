import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamCard from './TeamCard';
import TeamModal from './TeamModal';

gsap.registerPlugin(ScrollTrigger);

const developersData = [
  {
    id: "NX-01",
    name: "Koustav",
    initials: "KS",
    role: "Lead Frontend Architect",
    domain: "CLIENT_OPS",
    level: "09",
    experience: "5+ Years",
    bio: "Specializes in deep hardware-accelerated interfaces, WebGL Three.js integrations, and flawless GSAP timeline orchestration. Architected the core visual parameters of the Chronosync framework.",
    skills: ["React 18", "Tailwind CSS v3", "GSAP / Lenis", "Three.js", "Zustand"],
    stats: { sla: "99.99%", commits: "240+", clearance: "ROOT_ACCESS" },
    logs: [
      { timestamp: "11:28:02", action: "UPDATE // src/components/sections/team/TeamModal.jsx", repo: "nexus-dev-studio" },
      { timestamp: "10:14:12", action: "MERGE // feature/gsap-lenis-smooth-scroll", repo: "nexus-dev-studio" },
      { timestamp: "08:45:00", action: "DEPLOY // build production payload static cache", repo: "chronosync-core" },
      { timestamp: "08:30:15", action: "INIT // environment context configurations", repo: "koustav-terminal-portfolio" }
    ],
    contributions: [
      { title: "Chronosync Core Interface", desc: "Engineered high-fidelity glassmorphism views and fully mapped complex multi-state component animations without dropping frames below 60FPS." },
      { title: "Terminal OS Desktop Sim", desc: "Built highly interactive drag-and-drop window components powered by custom array management state variables." }
    ]
  },
  {
    id: "NX-02",
    name: "Elena Rostova",
    initials: "ER",
    role: "Backend & Systems Security",
    domain: "KERNEL_SEC",
    level: "09",
    experience: "7+ Years",
    bio: "Designs highly distributed, fault-tolerant Spring Boot architectures. Expert in custom Zero-Trust authentication protocols, JWT pipelines, and strict database query profiling.",
    skills: ["Spring Boot", "Spring Security", "PostgreSQL Core", "Redis caching", "Docker / K8s"],
    stats: { sla: "100%", commits: "180+", clearance: "SEC_ADMIN" },
    logs: [
      { timestamp: "11:05:22", action: "PATCH // apply zero-trust middleware restrictions", repo: "nexus-security-gateway" },
      { timestamp: "09:32:01", action: "OPTIMIZE // index JSONB document targets", repo: "vortex-db-cluster" },
      { timestamp: "07:15:40", action: "RELOAD // cluster connection pool arrays", repo: "enterprise-api-router" }
    ],
    contributions: [
      { title: "Stateless Auth Pipeline", desc: "Constructed unbreachable token validation endpoints using strictly layered multi-signature encoding constraints." },
      { title: "High-Throughput IO Core", desc: "Re-architected core REST routing interfaces reducing payload lookup friction by over 42% across multi-region server nodes." }
    ]
  },
  {
    id: "NX-03",
    name: "Marcus Vance",
    initials: "MV",
    role: "AI Integration Engineer",
    domain: "NEURAL_NET",
    level: "08",
    experience: "4+ Years",
    bio: "Bridges state-of-the-art LLMs directly with custom agency infrastructure. Develops context-persisted vector searches, retrieval-augmented logic, and secure local tool functions.",
    skills: ["OpenAI API", "LangChain", "Node.js Core", "Pinecone DB", "Python"],
    stats: { sla: "99.95%", commits: "310+", clearance: "AI_PIPE" },
    logs: [
      { timestamp: "11:15:44", action: "INJECT // system instruction matrix overrides", repo: "vortex-data-vault" },
      { timestamp: "10:00:05", action: "EVAL // high-dimensional vector embeddings", repo: "client-rag-daemon" },
      { timestamp: "09:12:30", action: "TEST // semantic tool execution logic arrays", repo: "nexus-ai-orchestration" }
    ],
    contributions: [
      { title: "Semantic RAG Membrane", desc: "Mapped distributed customer knowledge sources straight into low-latency memory query environments using automated metadata filters." },
      { title: "Context Chain Engine", desc: "Developed highly granular continuous short-term prompt validation arrays ensuring model responses stick safely to reality logic." }
    ]
  },
  {
    id: "NX-04",
    name: "Aria Chen",
    initials: "AC",
    role: "Principal UI/UX Systems",
    domain: "DESIGN_OPS",
    level: "08",
    experience: "6+ Years",
    bio: "Translates abstract business parameters into high-fidelity design prototypes. Master of dynamic Figma variables, pure glassmorphism design tokens, and layout physics.",
    skills: ["Figma Prototyping", "Design Tokens", "Wireframing", "CSS Layout Ops"],
    stats: { sla: "99.98%", commits: "120+", clearance: "SYS_DESIGN" },
    logs: [
      { timestamp: "10:50:11", action: "EXPORT // glassmorphism design token variables", repo: "nexus-design-system" },
      { timestamp: "08:22:04", action: "SPEC // responsive breakpoint layout matrices", repo: "aura-3d-onboarding" },
      { timestamp: "06:10:00", action: "SYNC // component auto-layout constraints", repo: "nexus-design-system" }
    ],
    contributions: [
      { title: "Pure Glass Design Token System", desc: "Created reusable system rules perfectly linking client side component structures to clean backdrop filtering utility files." },
      { title: "Holographic Form Wireframes", desc: "Prototyped multi-stage continuous page transitions establishing clear structural rules for developer handoffs." }
    ]
  }
];

const TeamGrid = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedDev, setSelectedDev] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {developersData.map((dev, index) => (
          <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <TeamCard developer={dev} setSelectedDev={setSelectedDev} />
          </div>
        ))}
      </div>

      {/* Embedded Terminal Access Control View */}
      <TeamModal developer={selectedDev} onClose={() => setSelectedDev(null)} />
    </>
  );
};

export default TeamGrid;