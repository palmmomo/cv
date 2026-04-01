import ParallaxBackground from "@/components/ParallaxBackground";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

// Thin section divider
function Divider() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <hr className="border-slate-100" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Fixed parallax background — renders on every section */}
      <ParallaxBackground />

      <main className="relative min-h-screen">
        <Hero />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Footer />
      </main>
    </>
  );
}
