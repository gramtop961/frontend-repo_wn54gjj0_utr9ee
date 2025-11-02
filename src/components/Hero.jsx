import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-0">
        <div className="h-[70vh] w-full rounded-b-[2rem] overflow-hidden">
          <Spline
            scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* soft vignette and gradient overlays that don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl py-10 sm:py-14">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900/95"
          >
            Breathe. Heal. Grow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700/90"
          >
            A gentle space for building resilient habits, tracking your mood, and
            finding evidence‑based tools for mental wellbeing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:translate-y-[-1px] transition-transform"
            >
              Start Your Journey
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-white/80 transition-colors"
            >
              Explore Resources
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
