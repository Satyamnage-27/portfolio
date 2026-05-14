"use client";
import { skills } from "@/lib/data";

export default function TechStack() {
  const duplicated = [...skills, ...skills];

  return (
    <section className="py-20 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          [02] Tech Stack
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee whitespace-nowrap w-max">
          {duplicated.map((skill, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 py-3 border border-border bg-card rounded-full"
            >
              <span className="text-accent">◆</span>
              <span className="font-mono text-sm uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
