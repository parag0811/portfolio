"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#currently", label: "Currently" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" withArrow={false}>
            Hire Me!!!
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
        >
          {open ? (
            <X size={20} strokeWidth={2.5} />
          ) : (
            <Menu size={20} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t-2 border-foreground bg-background px-4 sm:px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-medium text-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" withArrow={false} className="mt-2 w-full">
            Get a kit
          </Button>
        </nav>
      )}
    </header>
  );
}
