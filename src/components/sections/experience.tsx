"use client";

import { Briefcase, Calendar, MapPin, Zap, CheckCircle2, Wrench, Building2 } from "lucide-react";
import { SectionHeading, Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  shadowColor: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "LaVelda Coffee Beans LLP",
    role: "Software Development Intern",
    period: "Apr 2026 – Jun 2026",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Integrated the Next.js frontend with backend REST APIs (Express.js, Prisma, PostgreSQL) for the storefront, ensuring smooth data flow between both layers.",
      "Participated in code reviews, giving and receiving feedback on code quality, structure, and adherence to best practices throughout the sprint cycle.",
      "Containerized backend services with Docker, ensuring consistent environments across local development, testing, and deployment stages.",
    ],
    techStack: [
      "Next.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST APIs",
    ],
    color: "tertiary",
    shadowColor: "shadow-[8px_8px_0px_0px_var(--tertiary)]",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b-2 border-foreground py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career Journey"
          eyebrowColor="tertiary"
          title="Work Experience"
          description="Real-world experience building scalable web applications, optimizing performance, and shipping production code."
        />

        <div className="mt-16 space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={[
                "relative bg-card border-2 border-foreground rounded-[var(--radius-lg)] p-6 sm:p-8",
                "transition-all duration-300 ease-[var(--ease-bounce)] hover:-rotate-1 hover:scale-[1.01]",
                exp.shadowColor,
              ].join(" ")}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-foreground/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="flex items-center gap-1.5 font-bold text-lg sm:text-xl text-foreground">
                      <Building2 size={20} className="text-accent" />
                      {exp.company}
                    </span>
                    <Badge color={exp.color} className="text-xs py-0.5">
                      {exp.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-sm font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground/20 bg-muted px-3 py-1 font-bold text-foreground">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-1">
                    <MapPin size={14} className="text-tertiary" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-4">
                  <Zap size={14} className="text-accent" /> Key Contributions
                </h4>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 font-medium"
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
                  <Wrench size={14} strokeWidth={2.5} className="text-muted-foreground" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                    Technologies Used
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border-2 border-foreground bg-muted px-3 py-1 text-xs font-bold transition-all hover:bg-tertiary hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
