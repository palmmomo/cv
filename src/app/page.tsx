import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-slate-100" />
      </div>

      <Education />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-slate-100" />
      </div>

      <Skills />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-slate-100" />
      </div>

      <Projects />

      <Footer />
    </main>
  );
}
