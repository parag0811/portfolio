"use client";

import {
  ExternalLink,
  Code2,
  Wrench,
  Layers,
  Sparkles,
  Lock,
  Zap,
  Bot,
  Users,
  Radio,
  Clock,
  LucideIcon,
} from "lucide-react";
import { SectionHeading, Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

type ArchitectureFeat = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  architectureFeats: ArchitectureFeat[];
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
    tagline: "AI-Powered Architecture & Schema Generation Pipeline",
    category: "Full-Stack · LLM Pipeline · Queues",
    description:
      "An AI planning tool that takes an idea and generates complete software requirements, database schemas, API specs, and folder structures using a 4-stage LLM pipeline.",
    architectureFeats: [
      {
        icon: Sparkles,
        title: "4-Stage LLM Pipeline",
        detail: "Groq & Gemini generate requirements, DB schema, and API specs, strictly validated with Zod.",
      },
      {
        icon: Layers,
        title: "BullMQ Background Workers",
        detail: "Jobs run in BullMQ workers so the API returns a job ID in 33ms instead of blocking for 10.7s.",
      },
      {
        icon: Clock,
        title: "Two-Tier Redis Cache",
        detail: "Cached plans return in 29ms vs 10.7s cold — roughly 360x faster for repeated requests.",
      },
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
    tagline: "Group Expense Manager with Groq Natural Language Splits",
    category: "Full-Stack · Groq AI · WebSockets",
    description:
      "A real-time group expense splitting app. Instead of doing manual math, users explain the expense in natural language and Groq AI automatically figures out the split percentages for each person.",
    architectureFeats: [
      {
        icon: Bot,
        title: "Groq AI Natural Language Splitting",
        detail: "Users describe the situation in plain words; Groq parses the context and fills out the exact split amounts.",
      },
      {
        icon: Radio,
        title: "Live WebSockets Room Sync",
        detail: "Members join expense rooms via NextAuth and balances update live on all screens over WebSockets.",
      },
      {
        icon: Zap,
        title: "FastAPI ML Services",
        detail: "Served anomaly detection (AUC 0.71) and settlement risk (AUC 0.69) models via a Python FastAPI service.",
      },
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
    tagline: "Centralized Campus Event Discovery & RSVP Platform",
    category: "Full-Stack · Cloud Storage · Email",
    description:
      "A centralized college event platform. Students browse and RSVP to campus events in one place, while organizers publish listings, manage rosters, and send automated email confirmations.",
    architectureFeats: [
      {
        icon: Users,
        title: "Student Discovery & Organizer Portal",
        detail: "Separate workflows for students to explore/RSVP and organizers to publish and track attendee lists.",
      },
      {
        icon: Zap,
        title: "Automated Brevo Email Tickets",
        detail: "Automatically triggers dynamic RSVP confirmation emails and event reminder updates via Brevo.",
      },
      {
        icon: Layers,
        title: "AWS S3 Poster Uploads",
        detail: "Secure image upload pipeline using AWS S3 pre-signed URLs for high-resolution event banners.",
      },
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
          description="Full-stack web applications and AI-integrated pipelines I've built and deployed."
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

        {/* Compact Individual Project Sections */}
        <div className="mt-10 space-y-8 sm:space-y-12">
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
                    {/* Header: Number + Category */}
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

                    {/* Title & Tagline */}
                    <div className="mt-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-accent">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Concise Narrative */}
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Real Architecture Feats */}
                    <div className="mt-3 space-y-1.5 rounded-lg border border-foreground/15 bg-muted/40 p-2.5">
                      {project.architectureFeats.map((feat) => {
                        const Icon = feat.icon;
                        return (
                          <div
                            key={feat.title}
                            className="flex items-start gap-2 text-xs text-foreground/90 font-medium"
                          >
                            <Icon size={12} className="text-accent shrink-0 mt-0.5" strokeWidth={2.4} />
                            <div>
                              <strong className="text-foreground">{feat.title}: </strong>
                              <span className="text-muted-foreground">{feat.detail}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
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
