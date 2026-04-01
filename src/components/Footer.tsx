export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {year} Panat Phongphaew (Palm). All rights reserved.
          </p>
          <p className="text-sm text-slate-300">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
