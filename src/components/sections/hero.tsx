"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShapeCircle,
  ShapeSquare,
  ShapeTriangle,
} from "@/components/ui/shapes";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b-2 border-foreground bg-dot-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-sm font-bold shadow-[var(--shadow-pop)]">
              <Sparkles
                size={16}
                className="text-secondary"
                strokeWidth={2.5}
              />
              Looking for An Internship/Job
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Parag Rangankar
              <span className="relative inline-block">
                <span className="relative z-10 text-xl">
                  Building products that solve problems and look great doing it.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 sm:h-4 bg-tertiary"
                />
              </span>{" "}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              I'm a Full Stack Developer focused on creating scalable web
              applications, modern user experiences, and developer-friendly
              systems. I enjoy turning ideas into polished products using React,
              Next.js, Node.js, and cloud technologies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#projects">View My Work</Button>
              <Button href="https://mail.google.com/mail/?view=cm&to=paragrangankar@gmail.com" target="_blank" rel="noopener noreferrer" variant="secondary" withArrow={false}>
                Get In Touch
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/parag0811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all duration-300 ease-[var(--ease-bounce)] hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/parag0811/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all duration-300 ease-[var(--ease-bounce)] hover:-translate-y-0.5 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

          </motion.div>

          {/* Visual column */}
          <div className="relative h-80 sm:h-[28rem] lg:h-[32rem]">
            <div className="flex h-full w-full items-center justify-center from-accent/15 via-secondary/10 to-quaternary/15">
              <div className="text-center px-6 cursor-pointer">
                <Image
                  src="/Images/CatDev.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
