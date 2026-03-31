import { Mail, MapPin, ArrowDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// Inline SVG brand icons (lucide-react doesn't ship Github/Linkedin)
function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/palmmomo",
    icon: GithubIcon,
    id: "link-github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/palmmomo",
    icon: LinkedinIcon,
    id: "link-linkedin",
  },
  {
    label: "Email",
    href: "mailto:palm@example.com",
    icon: Mail,
    id: "link-email",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 relative"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Badge */}
        <AnimatedSection delay={0.1}>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-slate-400 uppercase mb-6 border border-slate-200 rounded-full px-4 py-1.5 bg-white shadow-sm">
            <MapPin size={12} className="text-slate-400" />
            Nakhon Ratchasima, Thailand
          </span>
        </AnimatedSection>

        {/* Name */}
        <AnimatedSection delay={0.2}>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 tracking-tight mb-4">
            Palm
          </h1>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection delay={0.3}>
          <p className="text-lg sm:text-xl font-medium text-slate-500 mb-8">
            Full-Stack Developer &amp; Cybersecurity Student
          </p>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection delay={0.4}>
          <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
            A 3rd-year Digital Technology student specializing in Security. Passionate
            about bridging the gap between robust network infrastructure and modern web
            development.
          </p>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.5}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {socialLinks.map(({ label, href, icon: Icon, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium shadow-sm hover:border-slate-400 hover:text-slate-900 hover:shadow-md transition-all duration-200"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Scroll hint */}
        <AnimatedSection delay={0.7}>
          <div className="mt-16 flex flex-col items-center gap-2 text-slate-300">
            <span className="text-xs tracking-widest uppercase">scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
