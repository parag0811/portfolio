"use client";

import { Sparkles, FileText, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EmailButton } from "@/components/ui/email-button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-2 border-foreground bg-dot-grid min-h-[calc(100svh-4.5rem)] flex items-center py-6 sm:py-8 lg:py-10"
    >
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Text column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3.5 py-1 text-xs font-bold shadow-[var(--shadow-pop)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <Sparkles
                size={14}
                className="text-secondary shrink-0"
                strokeWidth={2.5}
              />
              Seeking AI Engineer &amp; Full-Stack Roles (Full-Time / PPO)
            </div>

            {/* Headline */}
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Parag Rangankar</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 sm:bottom-1.5 -z-0 h-3 bg-tertiary"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-1.5 text-lg sm:text-xl font-extrabold text-foreground/80 tracking-tight">
              AI Engineer &amp; Full-Stack Developer
            </p>

            {/* Concise Bio */}
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
              I build backend systems, web apps, and autonomous AI agents. Currently part-time at Remii and seeking permanent Full-Time or PPO roles in AI &amp; Software Engineering.
            </p>

            {/* Action buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Button href="#projects" className="min-h-10 px-5 text-sm">
                Explore Work
              </Button>

              <motion.a
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                href="/Parag_Rangankar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-card px-4 py-2 text-xs sm:text-sm font-bold shadow-[var(--shadow-pop)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-[var(--shadow-pop-hover)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                title="Open resume in a new tab"
              >
                <FileText size={15} strokeWidth={2.5} />
                View Resume
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                href="/Parag_Rangankar_Resume.pdf"
                download="Parag_Rangankar_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-card px-4 py-2 text-xs sm:text-sm font-bold shadow-[var(--shadow-pop)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-quaternary hover:shadow-[var(--shadow-pop-hover)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                title="Download resume PDF directly"
              >
                <Download size={15} strokeWidth={2.5} />
                Download
              </motion.a>

              <EmailButton label="Get In Touch" variant="secondary" />
            </div>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://github.com/parag0811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/parag0811/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a
                href="https://x.com/ParagRangankar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:border-black hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Visual column (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <div className="relative flex items-center justify-center p-2">
              <Image
                src="/Images/CatDev.png"
                width={360}
                height={360}
                alt="Illustration"
                priority
                className="h-48 sm:h-64 lg:h-80 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
