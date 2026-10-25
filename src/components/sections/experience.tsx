"use client";

import {
  Calendar,
  MapPin,
  Zap,
  CheckCircle2,
  Wrench,
  Building2,
  Bot,
  Coffee,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SectionHeading, Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  subCompany?: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  workplaceType: "Hybrid" | "Remote" | "On-site";
  type: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  techStack: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  shadowColor: string;
  icon: "bot" | "coffee";
  linkedInUrl?: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Remii",
    subCompany: "Product of SeaSurf Technologies",
    role: "AI Full Stack Developer",
    period: "Aug 2026 – Present",
    duration: "3 mos",
    location: "Jaipur, Rajasthan, India",
    workplaceType: "Hybrid",
    type: "Part-time",
    isCurrent: true,
    summary:
      "AI full-stack developer at remii, a product of SeaSurf Technologies. Part of a two-person engineering team building an autonomous AI agent working in the background: connecting to 1,000+ apps through OAuth, running tasks end-to-end, and maintaining rich context across multi-turn sessions.",
    highlights: [
      "Fixed chats that went blank when users left mid-task and returned, engineering state sync and session hydration so the agent's live progress bubble reliably restores on reload.",
      "Architected and built the internal admin dashboard powered by a tRPC BFF (Backend-for-Frontend) covering real-time users, error diagnostics, LLM model/token consumption, and platform analytics.",
      "Engineered transactional email workflows with HMAC-signed unsubscribe links, per-category user preferences, and automated low-credit quota warning triggers.",
      "Shipped responsive file and artifact display components rendering code, markdown documents, and media created dynamically by the agent through Composio tooling.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "tRPC",
      "PostgreSQL",
      "Redis",
      "LLM Integration",
      "Composio",
      "TailwindCSS",
    ],
    color: "accent",
    shadowColor: "shadow-[8px_8px_0px_0px_var(--accent)]",
    icon: "bot",
    linkedInUrl: "https://www.linkedin.com/in/parag0811/",
  },
  {
    company: "LaVelda Coffee Beans LLP",
    role: "Software Developer Intern",
    period: "Apr 2026 – Jun 2026",
    duration: "3 mos",
    location: "Jaipur, Rajasthan, India",
    workplaceType: "Remote",
    type: "Internship",
    isCurrent: false,
    summary:
      "Three-month internship building the production e-commerce storefront for LaVelda Coffee Beans, architecting a high-performance Next.js frontend integrated with a Prisma and PostgreSQL backend.",
    highlights: [
      "Owned auth and payments: implemented custom auth with jose JWTs, bcryptjs password hashing, secure HttpOnly cookies, and customer/admin role guards.",
      "Engineered end-to-end Razorpay checkout with server-side price and tax validation plus idempotent webhook handlers deduplicating events by SHA-256 signatures.",
      "Added stock reservation with a scheduled cron job releasing expired holds, eliminating race conditions where concurrent buyers could purchase the last unit.",
      "Built a resilient transactional email outbox pattern with exponential retries, ensuring order confirmations reliably survive external provider failures.",
      "Delivered production-ready code through weekly code reviews and maintained consistent, reliable development and testing environments.",
    ],
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Razorpay",
      "jose (JWT)",
    ],
    color: "tertiary",
    shadowColor: "shadow-[8px_8px_0px_0px_var(--tertiary)]",
    icon: "coffee",
    linkedInUrl: "https://www.linkedin.com/in/parag0811/",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b-2 border-foreground py-20 sm:py-24 bg-background"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career Journey"
          eyebrowColor="tertiary"
          title="Work Experience"
          description="Real-world engineering experience building autonomous AI agents, full-stack web platforms, payment pipelines, and production systems."
        />

        {/* Timeline Container */}
        <div className="relative mt-16 sm:mt-20">
          {/* Continuous Vertical Timeline Spine */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] sm:left-[31px] top-6 bottom-6 w-1 bg-foreground/20 rounded-full -translate-x-1/2"
          >
            {/* Animated gradient flow line inside the spine */}
            <div className="h-full w-full bg-gradient-to-b from-accent via-tertiary to-quaternary rounded-full opacity-80" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-[19px] sm:left-[31px] top-6 -translate-x-1/2 -translate-y-1/2 z-10">
                    {exp.isCurrent && (
                      <span className="absolute -inset-2 rounded-full bg-accent/40 animate-ping opacity-75 pointer-events-none" />
                    )}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={[
                        "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 sm:border-[3px] border-foreground bg-card",
                        "shadow-[var(--shadow-pop)] transition-colors cursor-pointer",
                        exp.isCurrent
                          ? "bg-accent text-accent-foreground"
                          : "bg-tertiary text-foreground",
                      ].join(" ")}
                      title={`${exp.company} • ${exp.role}`}
                    >
                      {exp.icon === "bot" ? (
                        <Bot className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                      ) : (
                        <Coffee className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                      )}
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={[
                      "relative bg-card border-2 border-foreground rounded-[var(--radius-lg)] p-6 sm:p-8",
                      "transition-all duration-300 ease-[var(--ease-bounce)] hover:scale-[1.01]",
                      exp.shadowColor,
                    ].join(" ")}
                  >
                    {/* Header Info */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-foreground/10 pb-6">
                      <div>
                        {/* Company & Status Badges */}
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <span className="flex items-center gap-1.5 font-bold text-lg sm:text-xl text-foreground">
                            <Building2
                              size={20}
                              className={
                                exp.color === "accent"
                                  ? "text-accent"
                                  : "text-tertiary"
                              }
                            />
                            {exp.company}
                          </span>

                          {exp.subCompany && (
                            <span className="text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-foreground/15">
                              {exp.subCompany}
                            </span>
                          )}

                          <Badge color={exp.color} className="text-xs py-0.5">
                            {exp.type}
                          </Badge>

                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-quaternary/20 px-2.5 py-0.5 text-xs font-bold text-foreground animate-pulse">
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                              Active Role
                            </span>
                          )}
                        </div>

                        {/* Role Title */}
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Period & Location Metadata */}
                      <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-sm font-semibold text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground/20 bg-muted px-3 py-1 font-bold text-foreground">
                          <Calendar size={14} className="text-accent" />
                          {exp.period}
                          <span className="text-xs text-muted-foreground font-normal">
                            ({exp.duration})
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-1 text-xs sm:text-sm">
                          <MapPin
                            size={14}
                            className={
                              exp.color === "accent"
                                ? "text-accent"
                                : "text-tertiary"
                            }
                          />
                          {exp.location}
                          <span className="font-bold text-foreground">
                            · {exp.workplaceType}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Overview Paragraph */}
                    <div className="mt-5 rounded-xl border border-foreground/10 bg-muted/40 p-4">
                      <p className="text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6">
                      <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-4">
                        <Zap size={14} className="text-accent" /> Key Contributions & Technical Impact
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 font-medium leading-normal"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-1 flex-shrink-0 text-accent"
                              strokeWidth={2.5}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 pt-5 border-t-2 border-foreground/10">
                      <div className="flex items-center gap-1.5 mb-3">
                        <Wrench
                          size={14}
                          strokeWidth={2.5}
                          className="text-muted-foreground"
                        />
                        <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                          Technologies & Tools
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border-2 border-foreground bg-muted px-3 py-1 text-xs font-bold transition-all hover:bg-tertiary hover:scale-105 hover:shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
