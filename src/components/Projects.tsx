import { Layers, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    id: "project-aphid2",
    title: "Aphid2",
    tags: ["Python", "Weather API", "Next.js"],
    description:
      "A web application that predicts aphid infestations based on real-time weather API data, with a particular focus on humidity levels as a key predictor.",
  },
  {
    id: "project-network-lab",
    title: "Network Automation Lab",
    tags: ["GNS3", "Linux", "Scripting"],
    description:
      "Designed network topologies, configured firewalls, and generated automation scripts using GNS3 to simulate enterprise-grade network environments.",
  },
  {
    id: "project-sheets",
    title: "Next.js & Google Sheets Integration",
    tags: ["Next.js", "Google API", "TypeScript"],
    description:
      "Developed a web application that securely connects to the Google Sheets API via service accounts for reliable, authenticated data management workflows.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Layers size={20} className="text-slate-400" />
            <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Projects
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-5">
          {projects.map(({ id, title, tags, description }, i) => (
            <AnimatedSection key={id} delay={i * 0.12}>
              <div
                id={id}
                className="group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                      <ArrowUpRight
                        size={14}
                        className="text-slate-300 group-hover:text-slate-500 transition-colors duration-200"
                      />
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-3 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
