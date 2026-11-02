"use client";

import {
  Code2,
  ExternalLink,
  TrendingUp,
  ShieldAlert,
  Sparkles,
  Lock,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShapeSquiggle } from "@/components/ui/shapes";
import Image from "next/image";
import { motion } from "framer-motion";

type MlProject = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tag: string;
  techStack: string[];
  previewImage: string;
  repoPath: string;
  href: string;
  accentColor: "accent" | "secondary" | "tertiary" | "quaternary";
  shadowClass: string;
  icon: LucideIcon;
  keyFeature: string;
};

const ML_PROJECTS: MlProject[] = [
  {
    id: "ead",
    number: "01",
    title: "Expense Anomaly Detector",
    tagline: "Real-Time Transaction Outlier Detection Service",
    description:
      "A lightweight Python ML microservice that scans group expenses to detect irregular spending amounts or odd transaction spikes in real time.",
    tag: "Python · FastAPI · scikit-learn",
    techStack: ["Python", "FastAPI", "scikit-learn", "REST API"],
    previewImage: "/Images/ead.png",
    repoPath: "parag0811/expense-anomaly-ml-service",
    href: "https://github.com/parag0811/expense-anomaly-ml-service",
    accentColor: "accent",
    shadowClass: "shadow-[5px_5px_0px_0px_var(--accent)]",
    icon: ShieldAlert,
    keyFeature: "AUC 0.71 anomaly detection model, k-fold validated.",
  },
  {
    id: "srp",
    number: "02",
    title: "Settlement Risk Predictor",
    tagline: "Predictive Payer Delay & Settlement Risk Scoring",
    description:
      "A machine learning model trained on transaction behavior to predict the likelihood of delayed peer-to-peer repayments in expense groups.",
    tag: "Python · Jupyter · scikit-learn",
    techStack: ["Python", "Jupyter", "Pandas", "scikit-learn", "NumPy"],
    previewImage: "/Images/srp.png",
    repoPath: "parag0811/Settlement-risk-predictor",
    href: "https://github.com/parag0811/Settlement-risk-predictor",
    accentColor: "tertiary",
    shadowClass: "shadow-[5px_5px_0px_0px_var(--tertiary)]",
    icon: TrendingUp,
    keyFeature: "AUC 0.69 settlement risk model, k-fold cross-validated.",
  },
  {
    id: "pre",
    number: "03",
    title: "Planex 4-Stage LLM Pipeline",
    tagline: "Structured Schema, API & Requirements Generator",
    description:
      "The AI generation core inside Planex that orchestrates Groq and Gemini across 4 stages to generate structured DB schemas, API specs, and folder structures.",
    tag: "LLM · Groq · Gemini · Zod",
    techStack: ["Groq", "Gemini", "Zod", "TypeScript", "Node.js"],
    previewImage: "/Images/pre.png",
    repoPath: "parag0811/planex",
    href: "https://github.com/parag0811/planex",
    accentColor: "quaternary",
    shadowClass: "shadow-[5px_5px_0px_0px_var(--quaternary)]",
    icon: Sparkles,
    keyFeature: "4-stage generation pipeline with strict runtime Zod validation.",
  },
];

export function MlProjects() {
  return (
    <section className="border-b-2 border-foreground bg-muted/60 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge color="quaternary">From the Lab</Badge>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Machine Learning &amp; AI Projects
            </h2>
            <ShapeSquiggle className="h-2.5 w-24 text-accent mt-2" />
          </div>

          <a
            href="https://github.com/parag0811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start rounded-full border-2 border-foreground bg-card px-4 py-2 text-xs font-bold transition-colors hover:bg-tertiary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:self-auto shadow-xs"
          >
            All Repositories
            <ExternalLink size={12} strokeWidth={2.4} />
          </a>
        </div>

        {/* Compact Separate Sections for ML Projects */}
        <div className="mt-8 space-y-6 sm:space-y-8">
          {ML_PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45 }}
                className="rounded-[var(--radius-md)] border-2 border-foreground bg-card p-4 sm:p-5 shadow-[var(--shadow-pop)]"
              >
                <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
                  {/* Visual Preview Column */}
                  <div
                    className={[
                      "lg:col-span-5",
                      isReversed ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "overflow-hidden rounded-lg border-2 border-foreground bg-card",
                        "transition-all duration-300 hover:-translate-y-0.5",
                        project.shadowClass,
                      ].join(" ")}
                    >
                      {/* Mini Browser Bar */}
                      <div className="flex items-center justify-between border-b border-foreground/30 bg-muted px-2.5 py-1.5">
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                          <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                          <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground truncate max-w-[170px]">
                          <Lock size={9} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{project.repoPath}</span>
                        </div>
                        <span className="h-2 w-2" />
                      </div>

                      {/* Image Preview */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40">
                        <Image
                          src={project.previewImage}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover object-top transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 35vw"
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
                    {/* Top row */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-extrabold text-muted-foreground">
                        {project.number}
                      </span>
                      <Badge color={project.accentColor} className="text-[10px] py-0.5 px-2">
                        {project.tag}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="mt-1.5 text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Feature Highlight */}
                    <div className="mt-2.5 flex items-center gap-2 rounded-md border border-foreground/15 bg-muted/30 px-2.5 py-1.5 text-xs text-foreground/90 font-medium">
                      <Icon size={13} className="text-accent shrink-0" strokeWidth={2.4} />
                      <span>{project.keyFeature}</span>
                    </div>

                    {/* Tech Badges & GitHub Button */}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-foreground/10 pt-2.5">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-foreground/20 bg-muted px-2 py-0.5 text-[10px] font-bold text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-accent text-accent-foreground px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_var(--foreground)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Code2 size={12} strokeWidth={2.4} />
                        View Code
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
