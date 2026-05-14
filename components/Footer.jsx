import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted">
        <div>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
        <div>Built with Next.js & Tailwind.</div>
      </div>
    </footer>
  );
}
