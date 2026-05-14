"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Satyamnage-27",
    href: personal.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "satyamnage",
    href: personal.linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8">
          [05] Get in Touch
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-8xl leading-[0.95] tracking-tighter mb-12"
        >
          Have a project? <br />
          <em className="italic text-accent">Let&apos;s talk.</em>
        </motion.h2>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href={`mailto:${personal.email}`}
          className="group inline-flex items-baseline gap-4 font-serif text-2xl md:text-4xl text-fg hover:text-accent transition-colors mb-20 break-all"
        >
          {personal.email}
          <ArrowUpRight
            className="group-hover:rotate-45 transition-transform flex-shrink-0"
            size={32}
          />
        </motion.a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 bg-card border border-border hover:border-accent transition-colors"
            >
              <link.icon
                size={20}
                className="text-accent mt-1 flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                  {link.label}
                </div>
                <div className="text-fg group-hover:text-accent transition-colors truncate">
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
