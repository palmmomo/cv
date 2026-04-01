"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="education" ref={ref} className="py-24 px-6 relative">
      <motion.div style={{ y }} className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3 block">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Academic background
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/70 rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 shrink-0">
                <GraduationCap size={22} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 leading-snug">
                      Suranaree University of Technology (SUT)
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">
                      B.S. Digital Technology — Security Specialization
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                    <Calendar size={11} />
                    3rd Year
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <BookOpen size={10} />
                      Degree Progress
                    </span>
                    <span className="text-xs font-medium text-slate-500">Year 3 / 4</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-slate-400 to-slate-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Focus areas */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Network Security",
                    "Digital Forensics",
                    "Cryptography",
                    "Web Development",
                    "System Administration",
                  ].map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </motion.div>
    </section>
  );
}
