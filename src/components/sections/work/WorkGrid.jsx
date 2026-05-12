import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkCard from './WorkCard';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "Chronosync Core",
    category: "Full-Stack Commerce",
    year: "2026",
    metrics: "99.98% SLA // <42ms DB Read",
    description: "An advanced luxury watch e-commerce ecosystem. Features immersive GSAP interface controls, state-preserved checkout workflows, and asynchronous Spring Boot microservices.",
    tags: ["React", "Zustand", "Tailwind v3", "Spring Security"],
    link: "https://github.com/Koustav2303/nexus-dev-studio" // Routing back to agency core for placeholder precision
  },
  {
    title: "Aura-3D Engine",
    category: "UI/UX Interactive System",
    year: "2026",
    metrics: "Locked 60FPS // WebGL Native",
    description: "Multi-stage holographic onboarding protocol built for dynamic enterprise client acquisitions. Utilizes custom vertex shaders and strictly optimized rendering pipelines.",
    tags: ["Three.js", "GSAP Scroll", "Glassmorphism", "Figma Ops"],
    link: "https://github.com/Koustav2303/nexus-dev-studio"
  },
  {
    title: "Vortex Data Vault",
    category: "AI & Distributed DB",
    year: "2025",
    metrics: "O(1) Memory Cache // Vector Maps",
    description: "High-dimensional visual dashboard orchestrating real-time vector embeddings and semantic data queries. Backed by state-persisted node topologies.",
    tags: ["OpenAI LLM", "PostgreSQL Core", "Node.js", "Redis Memory"],
    link: "https://github.com/Koustav2303/nexus-dev-studio"
  },
  {
    title: "Apex Terminal OS",
    category: "Frontend System Architecture",
    year: "2025",
    metrics: "100% Client Isolation // Virtual DOM",
    description: "A highly engineered web desktop UI recreating authentic developer workstation consoles. Packed with custom windowing mechanisms and command logic states.",
    tags: ["React 18", "Draggable Engine", "CSS Grid", "Monochrome"],
    link: "https://github.com/Koustav2303/nexus-dev-studio"
  }
];

const WorkGrid = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 100, scale: 0.98 },
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
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {projectsData.map((project, index) => (
        <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
          <WorkCard 
            title={project.title}
            category={project.category}
            year={project.year}
            metrics={project.metrics}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkGrid;