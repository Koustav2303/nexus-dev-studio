import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Frontend Engineering",
    description: "Immersive, physics-based UI/UX. Delivering fluid 60FPS experiences optimized with advanced state management and premium layouts.",
    tags: ["React", "Tailwind CSS", "GSAP", "Three.js"]
  },
  {
    title: "Backend & Spring Security",
    description: "High-throughput microservices protected by robust Spring Security architectures, custom authentication layers, and strict data validation.",
    tags: ["Spring Boot", "Security", "REST APIs", "JWT"]
  },
  {
    title: "Full-Stack Ecosystems",
    description: "Seamless bridge integration connecting high-fidelity client views directly with resilient distributed processing backends.",
    tags: ["Next-Gen Web", "Node.js", "System Design"]
  },
  {
    title: "Database Architectures",
    description: "Optimized queries, complex modeling, and secure state storage engineered for rapid read/write scaling and zero data loss.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "ORM"]
  },
  {
    title: "AI Integration Pipelines",
    description: "Embedding custom intelligence directly into workflows. Harnessing LLMs, semantic vector queries, and programmatic context chains.",
    tags: ["OpenAI API", "LangChain", "Vector DBs"]
  },
  {
    title: "UI/UX Design Systems",
    description: "Translating extreme precision concepts into code. Crafting scalable design systems built on pure glassmorphism and modern layouts.",
    tags: ["Figma", "Wireframing", "Prototyping"]
  }
];

const ServicesGrid = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={gridRef} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {servicesData.map((service, index) => (
        <div 
          key={index} 
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <ServiceCard 
            index={index + 1}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;