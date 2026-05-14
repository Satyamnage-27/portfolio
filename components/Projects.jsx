"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              [03] Selected Work
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight">
              Things I&apos;ve built that shipped to{" "}
              <em className="italic text-accent">real users</em>.
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative bg-card border border-border p-8 md:p-12 hover:border-accent/50 transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-border font-mono text-xs uppercase tracking-wider text-fg/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-fg/70 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-fg/60"
                      >
                        <span className="text-accent mt-1.5 text-xs">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={28} className="text-accent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
