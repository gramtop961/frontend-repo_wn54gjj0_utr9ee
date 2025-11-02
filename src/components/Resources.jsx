import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Grounding Techniques",
    desc: "Quick practices to feel safe and present during anxious moments.",
    url: "#",
  },
  {
    title: "Sleep Hygiene Guide",
    desc: "Simple steps to improve sleep quality and restore your energy.",
    url: "#",
  },
  {
    title: "Compassionate Journaling",
    desc: "Prompts that encourage gentle reflection without self‑judgment.",
    url: "#",
  },
];

function ResourceItem({ title, desc, url }) {
  return (
    <motion.a
      href={url}
      whileHover={{ y: -3 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-slate-100/40 to-white/20" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-slate-900 font-semibold tracking-tight">{title}</h3>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-700/90">{desc}</p>
        <div className="mt-3 text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Read more</div>
      </div>
    </motion.a>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Resources and practices</h2>
            <p className="mt-2 text-slate-700/90">Short, evidence‑based guides to help you restore calm and build resilience.</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/60 backdrop-blur-xl px-3 py-2 text-xs text-slate-700/90 inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Curated by mental health educators
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((r, i) => (
            <ResourceItem key={i} title={r.title} desc={r.desc} url={r.url} />
          ))}
        </div>

        <div id="get-started" className="mt-10 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl p-6 sm:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Ready to begin?</h3>
          <p className="mt-2 text-sm text-slate-700/90">Take a 2‑minute check‑in and get personalized suggestions.</p>
          <div className="mt-4 flex items-center justify-center">
            <a href="#" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-lg hover:translate-y-[-1px] transition-transform">Start a quick check‑in</a>
          </div>
        </div>
      </div>
    </section>
  );
}
