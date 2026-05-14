"use client";
import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              [01] About
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              {about.intro}
            </h2>
            <p className="text-fg/70 text-lg leading-relaxed max-w-3xl mb-12">
              {about.story}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="font-serif text-4xl md:text-6xl text-accent">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
