import { Brain, Heart, Calendar, MessageCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Brain,
    title: "Mood Tracking",
    desc: "Understand patterns with simple daily check-ins and reflective insights.",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Heart,
    title: "Breathing Guides",
    desc: "Calming exercises that help you regulate stress in minutes.",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    icon: Calendar,
    title: "Gentle Routines",
    desc: "Build sustainable habits with reminders designed for compassion.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: MessageCircle,
    title: "Supportive Tips",
    desc: "Evidence‑based prompts for journaling and self‑care.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

function BenefitCard({ Icon, title, desc, gradient }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${gradient}`} />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-inner">
          <Icon className="h-6 w-6 text-slate-900" />
        </div>
        <div>
          <h3 className="text-slate-900 font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-slate-700/90">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Designed for gentle progress</h2>
          <p className="mt-2 text-slate-700/90">Thoughtfully crafted tools with a calm, glassy interface inspired by iOS.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, idx) => (
            <BenefitCard key={idx} Icon={b.icon} title={b.title} desc={b.desc} gradient={b.gradient} />)
          )}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/70 border border-white/40">
            <Shield className="h-5 w-5 text-slate-900" />
          </div>
          <p className="text-sm text-slate-700/90">
            Your data stays private. We never sell personal information and we follow strong security practices.
          </p>
        </div>
      </div>
    </section>
  );
}
