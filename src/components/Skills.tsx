"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Server, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    id: "skills-web",
    icon: Globe,
    title: "Web Development",
    description: "Building modern, performant web experiences",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "PHP", "Tailwind CSS"],
  },
  {
    id: "skills-infra",
    icon: Server,
    title: "Infrastructure & Monitoring",
    description:
      "Deploying and managing monitoring stacks — installed and configured Grafana dashboards with Dockerized agents.",
    skills: ["Grafana", "Docker", "Prometheus", "Linux (Ubuntu)"],
  },
  {
    id: "skills-security",
    icon: Shield,
    title: "System & Security",
    description:
      "Hands-on experience in network and system administration, security tooling, and lab environments.",
    skills: ["Network Administration", "System Administration", "GNS3", "Firewall Config", "Docker"],
  },
];

const levelColors: Record<string, string> = {
  React: "bg-blue-50 text-blue-600 border-blue-100",
  "Next.js": "bg-slate-100 text-slate-600 border-slate-200",
  TypeScript: "bg-sky-50 text-sky-600 border-sky-100",
  JavaScript: "bg-yellow-50 text-yellow-600 border-yellow-100",
  PHP: "bg-purple-50 text-purple-600 border-purple-100",
  "Tailwind CSS": "bg-teal-50 text-teal-600 border-teal-100",
  Grafana: "bg-orange-50 text-orange-600 border-orange-100",
  Docker: "bg-blue-50 text-blue-700 border-blue-100",
  Prometheus: "bg-red-50 text-red-600 border-red-100",
  "Linux (Ubuntu)": "bg-stone-50 text-stone-600 border-stone-200",
  "Network Administration": "bg-green-50 text-green-600 border-green-100",
  "System Administration": "bg-emerald-50 text-emerald-600 border-emerald-100",
  GNS3: "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Firewall Config": "bg-rose-50 text-rose-600 border-rose-100",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="skills" ref={ref} className="py-24 px-6 relative">
      <motion.div style={{ y }} className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3 block">
              Skills & DevOps
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What I work with
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {skillGroups.map(({ id, icon: Icon, title, description, skills }, index) => (
            <AnimatedSection key={id} delay={index * 0.1}>
              <div className="bg-white/70 rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 text-slate-600">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-full border font-medium ${
                        levelColors[skill] ?? "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
