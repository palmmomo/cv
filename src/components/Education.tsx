import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const educationData = [
  {
    id: "edu-sut",
    institution: "Suranaree University of Technology (SUT)",
    degree: "B.S. Digital Technology — Security Specialization",
    period: "3rd Year Student · Expected 2026",
    description:
      "Studying core topics including network security, cryptography, system administration, and full-stack web development under the Digital Technology curriculum.",
  },
  {
    id: "edu-tiger",
    institution: "TheTigerTeamAcademy",
    degree: "Full-Stack Development Program",
    period: "Completed",
    description:
      "Completed an intensive hands-on program covering modern full-stack web development with real-world project experience.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap size={20} className="text-slate-400" />
            <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Education
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-10">
          {educationData.map(({ id, institution, degree, period, description }, i) => (
            <AnimatedSection key={id} delay={i * 0.1}>
              <div className="relative pl-6 border-l-2 border-slate-100 hover:border-slate-300 transition-colors duration-300 group">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-slate-500 transition-colors duration-300" />
                <div className="mb-1">
                  <h3 className="text-base font-semibold text-slate-900">{institution}</h3>
                  <p className="text-sm font-medium text-slate-600 mt-0.5">{degree}</p>
                  <p className="text-xs text-slate-400 mt-1 tracking-wide">{period}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mt-2">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
