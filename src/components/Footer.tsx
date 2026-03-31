export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>
          &copy; {year}{" "}
          <span className="font-medium text-slate-600">Palm</span>. All rights reserved.
        </p>
        <p className="text-xs tracking-wide">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
