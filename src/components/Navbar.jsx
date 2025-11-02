import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/80 to-purple-500/80 text-white shadow-inner">
              <Heart className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">CalmMind</p>
              <p className="text-[11px] text-slate-600/70 dark:text-slate-300/70">Your mental wellbeing space</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
            <a href="#benefits" className="hover:text-slate-900 dark:hover:text-white transition-colors">Benefits</a>
            <a href="#resources" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resources</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#get-started" className="rounded-xl bg-slate-900/90 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:bg-slate-900 transition-colors">
              Get Support
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
