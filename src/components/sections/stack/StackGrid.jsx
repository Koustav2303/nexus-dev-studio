import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import StackCard from './StackCard';

const stackData = [
  // --- FRONTEND ---
  { 
    name: "React", 
    category: "Frontend", 
    version: "v18.3+",
    metric: "V-DOM Fiber", 
    details: "Component Architecture",
    description: "Powers our modular, component-driven client portals with strictly encapsulated component state and reusable hooks.",
    capabilities: ["Server Components", "Suspense", "Custom Hooks"]
  },
  { 
    name: "Tailwind CSS", 
    category: "Frontend", 
    version: "v3.4",
    metric: "JIT Engine", 
    details: "Utility-First Styling",
    description: "Enables lightning-fast, highly custom layouts with pixel-perfect responsive constraints and native CSS integration.",
    capabilities: ["Glassmorphism utilities", "Arbitrary variants", "Design Tokens"]
  },
  { 
    name: "GSAP & Lenis", 
    category: "Frontend", 
    version: "Premium",
    metric: "60 FPS Native", 
    details: "Physics Core Transitions",
    description: "Drives our custom smooth scroll setups, scrubbed timelines, and dynamic page mounting sequences without frame drop.",
    capabilities: ["ScrollTrigger", "Timeline Orchestration", "Inertia Physics"]
  },
  { 
    name: "Three.js", 
    category: "UI/UX", 
    version: "r160+",
    metric: "WebGL API", 
    details: "Spatial 3D Rendering",
    description: "Used for bespoke landing page interactions, custom shaders, and GPU-accelerated canvas environments.",
    capabilities: ["Custom Shaders", "Particle Systems", "GLTF loaders"]
  },

  // --- BACKEND & SECURITY ---
  { 
    name: "Spring Boot", 
    category: "Backend & Security", 
    version: "v3.2+",
    metric: "JVM Runtime", 
    details: "Enterprise Microservices",
    description: "Our primary architecture engine for heavy data lifting, resilient transactional logic, and asynchronous messaging.",
    capabilities: ["Spring WebFlux", "JPA / Hibernate", "Actuator Metrics"]
  },
  { 
    name: "Spring Security", 
    category: "Backend & Security", 
    version: "v6.0+",
    metric: "AES-256 / SHA", 
    details: "Zero-Trust Architecture",
    description: "Provides impenetrable boundary defense implementing stateless tokens, dynamic access control lists, and custom CSRF guards.",
    capabilities: ["OAuth2 / OIDC", "Stateless JWT", "Method-Level RBAC"]
  },
  { 
    name: "Node.js", 
    category: "Backend & Security", 
    version: "v20 LTS",
    metric: "V8 Engine Core", 
    details: "Event-Driven IO",
    description: "Handles low-latency, real-time socket connections, lightweight API gateway routing, and quick-iteration endpoints.",
    capabilities: ["Express / NestJS", "WebSockets", "Cluster Mode"]
  },

  // --- DATABASES ---
  { 
    name: "PostgreSQL", 
    category: "Database", 
    version: "v16",
    metric: "Strict ACID", 
    details: "Relational Mapping",
    description: "Guarantees mission-critical transaction integrity, complex relational mapping, and robust JSONB document parsing.",
    capabilities: ["Connection Pooling", "Indexing Specs", "Replication pipelines"]
  },
  { 
    name: "MongoDB", 
    category: "Database", 
    version: "v7.0",
    metric: "BSON Engine", 
    details: "Distributed Storage",
    description: "Deployed for highly flexible, schema-less records requiring horizontal read/write scale across globally available clusters.",
    capabilities: ["Aggregation Pipelines", "Atlas Search", "Sharding"]
  },
  { 
    name: "Redis", 
    category: "Database", 
    version: "v7.2",
    metric: "O(1) Speed", 
    details: "In-Memory Caching",
    description: "Acts as a primary caching membrane reducing latency down to sub-millisecond ranges for user sessions and database queries.",
    capabilities: ["Pub/Sub Queues", "Persistent Snapshots", "Session Store"]
  },

  // --- AI ECOSYSTEM ---
  { 
    name: "OpenAI API", 
    category: "AI Ecosystem", 
    version: "GPT-4o",
    metric: "Streaming LLM", 
    details: "Semantic Processing",
    description: "Integrated directly into our customer systems for real-time contextual analysis, code evaluation, and NLP automation.",
    capabilities: ["Function Calling", "Structured JSON", "Fine-Tuning"]
  },
  { 
    name: "LangChain", 
    category: "AI Ecosystem", 
    version: "v0.1+",
    metric: "Pipeline Logic", 
    details: "Context Orchestration",
    description: "Bridges multi-modal agent logic, parsing retrieval actions cleanly with local tool integrations and short-term conversational arrays.",
    capabilities: ["Agent Executors", "Memory Chains", "Output Parsers"]
  },
  { 
    name: "Pinecone / Chroma", 
    category: "AI Ecosystem", 
    version: "Serverless",
    metric: "Cosine Eval", 
    details: "Vector Search Engine",
    description: "Powers custom Retrieval-Augmented Generation (RAG) by embedding client documentation into high-dimensional accessible indices.",
    capabilities: ["Dense Vectors", "Metadata Filtering", "Hybrid Search"]
  },

  // --- UI/UX ---
  { 
    name: "Figma Prototyping", 
    category: "UI/UX", 
    version: "Design Ops",
    metric: "Variable Logic", 
    details: "Design Systems",
    description: "Ensures precise alignment between design mockups and actual CSS implementations using structural tokens and auto-layout logic.",
    capabilities: ["Design Tokens", "Interactive States", "Component Variants"]
  }
];

const StackGrid = ({ activeCategory }) => {
  const gridRef = useRef(null);
  const [filteredStack, setFilteredStack] = useState(stackData);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.stack-card-item');

      if (cards.length > 0) {
        gsap.to(cards, {
          opacity: 0,
          scale: 0.95,
          y: 10,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            const newFiltered = activeCategory === 'All' 
              ? stackData 
              : stackData.filter(item => item.category === activeCategory);
            
            setFilteredStack(newFiltered);
          }
        });
      } else {
        setFilteredStack(activeCategory === 'All' ? stackData : stackData.filter(item => item.category === activeCategory));
      }
    }, gridRef);

    return () => ctx.revert();
  }, [activeCategory]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.stack-card-item', 
        { opacity: 0, scale: 0.95, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.05, 
          ease: "power3.out" 
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredStack]);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto min-h-[500px]">
      {filteredStack.map((tech, index) => (
        <StackCard 
          key={`${tech.name}-${index}`}
          name={tech.name}
          category={tech.category}
          version={tech.version}
          metric={tech.metric}
          details={tech.details}
          description={tech.description}
          capabilities={tech.capabilities}
        />
      ))}
    </div>
  );
};

export default StackGrid;