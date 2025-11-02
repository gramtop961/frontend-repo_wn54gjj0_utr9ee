export default function Footer() {
  return (
    <footer id="contact" className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-slate-900 font-semibold tracking-tight">CalmMind</h4>
              <p className="mt-1 text-sm text-slate-700/90">A calm corner of the web to support your mental wellbeing.</p>
            </div>
            <div className="text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <span className="mx-3">•</span>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <span className="mx-3">•</span>
              <a href="mailto:hello@calmmind.app" className="hover:text-slate-900">hello@calmmind.app</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-500">This website is not a substitute for professional care. If you are in crisis, please contact local emergency services.</div>
        </div>
      </div>
    </footer>
  );
}
