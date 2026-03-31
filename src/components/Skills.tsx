import { Globe, Shield, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    id: "skills-web",
    label: "Web Development",
    icon: Globe,
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "PHP", "Tailwind CSS"],
  },
  {
    id: "skills-security",
    label: "System & Security",
    icon: Shield,
    skills: [
      "Network Administration",
      "System Administration",
      "Cryptography Protocols",
      "Linux (Ubuntu)",
      "Docker",
    ],
  },
  {
    id: "skills-tools",
    label: "Tools & Automation",
    icon: Wrench,
    skills: ["GNS3", "Git / GitHub", "Python"],
  },
];

function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-900 transition-all duration-150 cursor-default">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Wrench size={20} className="text-slate-400" />
            <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Skills
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-10">
          {skillGroups.map(({ id, label, icon: Icon, skills }, i) => (
            <AnimatedSection key={id} delay={i * 0.1}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={15} className="text-slate-400" />
                  <h3 className="text-sm font-semibold text-slate-700">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
