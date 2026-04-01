"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Globe, Network, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    id: "proj-homeroom",
    icon: Globe,
    title: "Homeroom Record App",
    subtitle: "Client Project — Production",
    description:
      "A production-ready web application built for real-world client usage. Full CRUD operations for managing homeroom records, deployed and live.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://homeroom-one.vercel.app/record",
    parallaxSpeed: 0.04,
  },
  {
    id: "proj-aphid2",
    icon: Leaf,
    title: "Aphid2",
    subtitle: "Smart Agriculture",
    description:
      "A web application that predicts aphid infestations based on real-time weather API humidity data to help farmers take preventive action early.",
    tags: ["React", "Weather API", "Data Science"],
    liveUrl: null,
    parallaxSpeed: 0.06,
  },
  {
    id: "proj-network",
    icon: Network,
    title: "Network Automation Lab",
    subtitle: "Infrastructure / GNS3",
    description:
      "Created complex network topologies, configured firewalls and routing protocols, and generated automation scripts using GNS3 for lab simulations.",
    tags: ["GNS3", "Firewall", "Automation", "Linux"],
    liveUrl: null,
    parallaxSpeed: 0.08,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${project.parallaxSpeed * 100}%`, `-${project.parallaxSpeed * 100}%`]
  );

  const Icon = project.icon;

  return (
    <motion.div ref={ref} style={{ y }}>
      <AnimatedSection delay={index * 0.1}>
        <div className="group bg-white/70 rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors duration-200">
                <Icon size={18} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{project.subtitle}</p>
              </div>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`${project.id}-link`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-400 rounded-full px-3 py-1.5 transition-all duration-200 shrink-0"
              >
                <ExternalLink size={11} />
                Live
              </a>
            )}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div style={{ y: headerY }}>
          <AnimatedSection>
            <div className="mb-12">
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3 block">
                Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Things I&apos;ve built
              </h2>
            </div>
          </AnimatedSection>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
