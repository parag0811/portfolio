"use client";

import {
  ExternalLink,
  Code2,
  Wrench,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading, Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  highlights: string[];
  techStack: string[];
  previewImage: string;
  previewUrl: string;
  liveUrl: string;
  githubUrl: string;
  accentColor: "accent" | "secondary" | "tertiary" | "quaternary";
  shadowClass: string;
};

const PROJECTS: Project[] = [
  {
    id: "planex",
    number: "01",
    name: "Planex",
    category: "Full-Stack · LLM Pipeline",
    highlights: [
      "Built a 4-stage LLM pipeline (Groq, Gemini) for requirements, DB schema, API spec and folders; Zod-validated.",
      "Moved generation into BullMQ workers; the API returns a job ID in 33ms instead of blocking 10.7s on the LLM call.",
      "Added a two-tier Redis cache; hits return in 29ms vs 10.7s cold, about 360x faster (p50).",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Groq",
      "Gemini",
    ],
    previewImage: "/Images/planex.png",
    previewUrl: "planex-one.vercel.app",
    liveUrl: "https://planex-one.vercel.app",
    githubUrl: "https://github.com/parag0811/planex",
    accentColor: "accent",
    shadowClass: "shadow-[6px_6px_0px_0px_var(--accent)]",
  },
  {
    id: "quick-split",
    number: "02",
    name: "Quick Split",
    category: "Full-Stack · WebSockets · AI",
    highlights: [
      "Built a real-time expense-splitting app: members join rooms via NextAuth and balances update live over WebSockets.",
      "Used Groq to turn plain-language messages into expense splits via a REST endpoint with flexible split modes.",
      "Served anomaly detection (AUC 0.71) and settlement risk (AUC 0.69) models via FastAPI, both k-fold validated.",
    ],
    techStack: [
      "Next.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "FastAPI",
      "Groq",
    ],
    previewImage: "/Images/qs.png",
    previewUrl: "quick-split-gamma.vercel.app",
    liveUrl: "https://quick-split-gamma.vercel.app",
    githubUrl: "https://github.com/parag0811/Quick-Split",
    accentColor: "quaternary",
    shadowClass: "shadow-[6px_6px_0px_0px_var(--quaternary)]",
  },
  {
    id: "campus-vibe",
    number: "03",
    name: "Campus Vibe",
    category: "Full-Stack · Cloud Storage",
    highlights: [
      "Built a centralized college event platform with student RSVPs and organizer publishing dashboards.",
      "Integrated Brevo API to automate dynamic RSVP confirmation emails and event notifications.",
      "Built a secure image upload pipeline using AWS S3 pre-signed URLs for event posters.",
    ],
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "Brevo",
      "Tailwind CSS",
    ],
    previewImage: "/Images/cv.png",
    previewUrl: "campus-vibe-lyart.vercel.app",
    liveUrl: "https://campus-vibe-lyart.vercel.app",
    githubUrl: "https://github.com/parag0811/Campus-Vibe-",
    accentColor: "secondary",
    shadowClass: "shadow-[6px_6px_0px_0px_var(--secondary)]",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b-2 border-foreground bg-muted/40 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeading
          eyebrow="My Work"
          eyebrowColor="secondary"
          title="Featured Projects"
          description="Production-grade full-stack platforms and AI-powered systems I've built and deployed."
        />

        {/* Quick jump navigation pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-card px-3.5 py-1 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
            >
              <span className="font-mono text-muted-foreground">{project.number}.</span>
              <span>{project.name}</span>
            </a>
          ))}
        </div>

        {/* Streamlined Project Sections */}
        <div className="mt-10 space-y-8 sm:space-y-10">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="rounded-[var(--radius-lg)] border-2 border-foreground bg-card p-5 sm:p-6 shadow-[var(--shadow-pop)]"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
                  {/* Visual Mockup Column */}
                  <div
                    className={[
                      "lg:col-span-5",
                      isReversed ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "overflow-hidden rounded-[var(--radius-md)] border-2 border-foreground bg-card",
                        "transition-all duration-300 ease-[var(--ease-bounce)] hover:-translate-y-0.5",
                        project.shadowClass,
                      ].join(" ")}
                    >
                      {/* Browser Chrome Bar */}
                      <div className="flex items-center justify-between border-b-2 border-foreground bg-muted px-3 py-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full border border-foreground/30 bg-[#FF5F56]" />
                          <span className="h-2.5 w-2.5 rounded-full border border-foreground/30 bg-[#FFBD2E]" />
                          <span className="h-2.5 w-2.5 rounded-full border border-foreground/30 bg-[#27C93F]" />
                        </div>

                        <div className="flex items-center gap-1.5 rounded-full border border-foreground/20 bg-card px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground max-w-[160px] sm:max-w-[190px] truncate">
                          <Lock size={10} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{project.previewUrl}</span>
                        </div>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name}`}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground/20 bg-card text-foreground hover:bg-tertiary transition-colors"
                        >
                          <ExternalLink size={11} strokeWidth={2.4} />
                        </a>
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/60">
                        <Image
                          src={project.previewImage}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover object-top transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={[
                      "lg:col-span-7 flex flex-col justify-center",
                      isReversed ? "lg:order-1" : "lg:order-2",
                    ].join(" ")}
                  >
                    {/* Header: Number + Category + Status */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-extrabold text-muted-foreground">
                        {project.number}
                      </span>
                      <Badge color={project.accentColor} className="text-[11px] py-0.5 px-2.5">
                        {project.category}
                      </Badge>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground ml-auto">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Live
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
                      {project.name}
                    </h3>

                    {/* Resume Bullet Points */}
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                      {project.highlights.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-accent shrink-0 mt-0.5"
                            strokeWidth={2.4}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                      <Wrench size={12} strokeWidth={2.4} className="text-muted-foreground mr-1" />
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-foreground/20 bg-muted px-2.5 py-0.5 text-[11px] font-bold text-foreground hover:bg-tertiary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex flex-wrap items-center gap-2.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-foreground bg-accent text-accent-foreground px-4 py-2 text-xs font-bold shadow-[var(--shadow-pop)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-pop-hover)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                      >
                        Live Demo
                        <ExternalLink size={12} strokeWidth={2.5} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-transparent px-3.5 py-2 text-xs font-bold transition-all duration-200 hover:bg-tertiary hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                      >
                        <Code2 size={13} strokeWidth={2.5} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
