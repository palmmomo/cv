"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Dramatic parallax ranges — clearly visible as you scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "-320px"]); // slowest
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-520px"]); // medium
  const y3 = useTransform(scrollYProgress, [0, 1], ["0px", "-750px"]); // fast
  const y4 = useTransform(scrollYProgress, [0, 1], ["0px", "-180px"]); // very slow
  const y5 = useTransform(scrollYProgress, [0, 1], ["0px", "-600px"]); // fast

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale1  = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 0.9]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Blob 1: large blue-violet, top-right, slow ── */}
      <motion.div
        style={{
          y: y1,
          rotate: rotate1,
          scale: scale1,
          background:
            "radial-gradient(ellipse at center, rgba(165,180,252,0.35) 0%, rgba(196,181,253,0.18) 50%, transparent 75%)",
        }}
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
      />

      {/* ── Blob 2: teal, left-center, medium ── */}
      <motion.div
        style={{
          y: y2,
          background:
            "radial-gradient(ellipse at center, rgba(94,234,212,0.22) 0%, rgba(56,189,248,0.12) 55%, transparent 80%)",
        }}
        className="absolute top-[30%] -left-52 w-[580px] h-[580px] rounded-full"
      />

      {/* ── Blob 3: amber accent, center, fast ── */}
      <motion.div
        style={{
          y: y3,
          rotate: rotate2,
          background:
            "radial-gradient(ellipse at center, rgba(251,191,36,0.14) 0%, rgba(249,115,22,0.08) 60%, transparent 80%)",
        }}
        className="absolute top-[65%] left-[35%] w-[460px] h-[460px] rounded-full"
      />

      {/* ── Blob 4: indigo, bottom-right, very slow ── */}
      <motion.div
        style={{
          y: y4,
          background:
            "radial-gradient(ellipse at center, rgba(129,140,248,0.20) 0%, rgba(99,102,241,0.10) 55%, transparent 80%)",
        }}
        className="absolute top-[80%] -right-32 w-[520px] h-[520px] rounded-full"
      />

      {/* ── Floating ring 1: top-left, medium speed ── */}
      <motion.div
        style={{
          y: y2,
          border: "1.5px solid rgba(165,180,252,0.30)",
        }}
        className="absolute top-[8%] left-[5%] w-[280px] h-[280px] rounded-full"
      />

      {/* ── Floating ring 2: mid-right, fast ── */}
      <motion.div
        style={{
          y: y5,
          border: "1px solid rgba(94,234,212,0.25)",
        }}
        className="absolute top-[42%] right-[8%] w-[180px] h-[180px] rounded-full"
      />

      {/* ── Small dots cluster, center-top, fast ── */}
      <motion.div style={{ y: y3 }} className="absolute top-[20%] left-[48%] flex gap-4">
        <span className="block w-4 h-4 rounded-full bg-violet-300/40" />
        <span className="block w-2.5 h-2.5 rounded-full bg-sky-300/40 mt-2" />
        <span className="block w-3 h-3 rounded-full bg-indigo-300/30 -mt-1" />
      </motion.div>

      {/* ── Small dots cluster 2, bottom-left, medium ── */}
      <motion.div style={{ y: y2 }} className="absolute top-[55%] left-[12%] flex gap-3">
        <span className="block w-3 h-3 rounded-full bg-teal-400/30" />
        <span className="block w-2 h-2 rounded-full bg-emerald-300/35 mt-1.5" />
      </motion.div>

      {/* ── Tiny square accent ── */}
      <motion.div
        style={{ y: y5, rotate: rotate1 }}
        className="absolute top-[48%] left-[18%] w-8 h-8 rounded-lg border border-violet-300/25 bg-violet-100/10"
      />

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
