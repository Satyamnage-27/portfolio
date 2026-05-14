"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tighter mb-8"
        >
          Satyam <em className="italic text-accent">Nage</em>
          <br />
          <span className="text-muted">— Web Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-fg/70 mb-12 leading-relaxed"
        >
          {personal.tagline} Currently building production interfaces at{" "}
          <span className="text-fg">SDLC Corp</span> in {personal.location}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-bg font-mono text-sm uppercase tracking-wider hover:gap-5 transition-all"
          >
            View My Work
            <ArrowDownRight
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 border border-fg/20 text-fg font-mono text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted"
        >
          <span>Based in {personal.location}</span>
          <span className="hidden sm:inline">2+ Years of Experience</span>
          <span>React · Next.js · Node.js</span>
        </motion.div>
      </div>
    </section>
  );
}
