"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Award, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    id: "exp-tiger",
    type: "work",
    icon: Briefcase,
    title: "Junior Full-Stack Developer",
    org: "TheTigerTeamAcademy",
    period: "Recent",
    description:
      "Built and maintained full-stack web applications using modern frameworks. Contributed to real-world client projects with production deployments.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "exp-crt",
    type: "achievement",
    icon: Award,
    title: "Cybersecurity Talent",
    org: "CRT 2024 — CloudSec Asia",
    period: "2024",
    description:
      "Ranked #91 nationally in the Cybersecurity Research Talent 2024 competition organized by CloudSec Asia, competing among hundreds of candidates across Thailand.",
    tags: ["Cybersecurity", "CTF", "Network Security"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section id="experience" ref={ref} className="py-24 px-6 relative">
      <motion.div style={{ y }} className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3 block">
              Experience & Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              My journey so far
            </h2>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100" aria-hidden="true" />

          <div className="space-y-8">
            {experiences.map(({ id, icon: Icon, title, org, period, description, tags }, index) => (
              <AnimatedSection key={id} delay={index * 0.12}>
                <div className="relative flex gap-6 pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 shrink-0">
                    <Icon size={16} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/70 rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{org}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                        <Calendar size={11} />
                        {period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
