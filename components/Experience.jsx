"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted md:sticky md:top-32">
              [04] Experience
            </p>
          </div>

          <div className="md:col-span-9 space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-2 border-border pl-8 hover:border-accent transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                  <h3 className="font-serif text-3xl md:text-4xl">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="font-mono text-sm uppercase tracking-wider text-accent mb-6">
                  {job.company}
                </p>
                <ul className="space-y-3">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-fg/70 leading-relaxed"
                    >
                      <span className="text-accent mt-2 text-xs">●</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
