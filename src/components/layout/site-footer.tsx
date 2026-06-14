import Link from "next/link";
import { Code2, Mail, ExternalLink } from "lucide-react";
import { ShapeCircle, ShapeSquare } from "@/components/ui/shapes";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    heading: "Navigate",
    links: [
      { href: "#hero", label: "Home" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#currently", label: "Currently" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    heading: "Current Focus",
    links: [
      { href: "#", label: "Planex" },
      { href: "#", label: "Docker" },
      { href: "#", label: "System Design" },
      { href: "#", label: "DSA in C++" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-foreground bg-foreground text-background">
      {/* Decorative shapes */}
      <ShapeCircle className="hidden sm:block absolute -top-10 -right-10 h-32 w-32 bg-tertiary/20" />
      <ShapeSquare className="hidden sm:block absolute bottom-6 left-10 h-16 w-16 rotate-12 bg-secondary/20 rounded-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 rounded-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-tertiary animate-wiggle">
                <Image
                  src="/Images/CatWave.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </span>
              PR
            </Link>
            <p className="mt-4 max-w-sm text-background/70">
              Full Stack Developer focused on building modern web applications,
              solving problems with code, and creating experiences people enjoy
              using.
            </p>

            <p className="mt-3 text-background/60 italic">
              Still learning. Still building. Still shipping.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-background hover:bg-accent hover:border-accent transition-colors"
              >
                <Code2 size={18} />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-background hover:bg-accent hover:border-accent transition-colors"
              >
                <Code2 size={18} />
              </a>

              <a
                href="mailto:YOUR_EMAIL"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-background hover:bg-accent hover:border-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-bold uppercase tracking-wide text-sm text-tertiary">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-background/20 pt-6 text-sm text-background/60">
          © {new Date().getFullYear()} Parag Rangankar. Built with Next.js,
          TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
