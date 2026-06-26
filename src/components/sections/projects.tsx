"use client";

import { ExternalLink, Code2, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  previewImage: string;
  /** Tailwind classes for the preview area background (mimics a screenshot). */
  previewClassName: string;
  liveUrl: string;
  githubUrl: string;
  /** Offset shadow color token: accent | secondary | tertiary | quaternary */
  shadowColor: "accent" | "secondary" | "tertiary" | "quaternary";
};

const PROJECTS: Project[] = [
  {
    name: "Planex",
    description:
      "A collaborative technical planning workspace where teams design REST APIs, model database schemas, and map system architecture in real time — with AI-powered design suggestions and ML-driven risk prediction to catch structural issues before production.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "BullMQ"],
    previewImage: "/Images/planex.png",
    previewClassName:
      "bg-gradient-to-br from-accent/30 via-card to-secondary/20",
    liveUrl: "#",
    githubUrl: "https://github.com/parag0811/planex",
    shadowColor: "accent",
  },
  {
    name: "Quick Split",
    description:
      "A group expense manager — create groups, log shared expenses, and instantly see who owes what with shareable summary links. Includes ML microservices for real-time anomaly detection and settlement-risk prediction.",
    techStack: ["Next.js", "Node.js", "Python", "MongoDB", "FastAPI", "WebSockets"],
    previewImage: "/Images/qs.png",
    previewClassName:
      "bg-gradient-to-br from-quaternary/30 via-card to-tertiary/20",
    liveUrl: "https://quick-split-gamma.vercel.app",
    githubUrl: "https://github.com/parag0811/Quick-Split",
    shadowColor: "quaternary",
  },
  {
    name: "Campus Vibe",
    description:
      "A platform to centralize college event management — students browse and RSVP to campus events while organizers publish and manage listings from a single dashboard, replacing scattered flyers and group chats.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Brevo", "AWS S3"],
    previewImage: "/Images/cv.png",
    previewClassName:
      "bg-gradient-to-br from-secondary/30 via-card to-accent/20",
    liveUrl: "https://campus-vibe-lyart.vercel.app",
    githubUrl: "https://github.com/parag0811/Campus-Vibe-",
    shadowColor: "secondary",
  },
];
const shadowMap: Record<Project["shadowColor"], string> = {
  accent: "shadow-[8px_8px_0px_0px_var(--accent)]",
  secondary: "shadow-[8px_8px_0px_0px_var(--secondary)]",
  tertiary: "shadow-[8px_8px_0px_0px_var(--tertiary)]",
  quaternary: "shadow-[8px_8px_0px_0px_var(--quaternary)]",
};

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b-2 border-foreground bg-muted py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Work"
          eyebrowColor="secondary"
          title="Projects"
          description="A few things I've built recently — click through for a live look or the source code."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={[
                "bg-card border-2 border-foreground rounded-[var(--radius-lg)] p-3",
                "transition-all duration-300 ease-[var(--ease-bounce)]",
                "hover:-rotate-1 hover:scale-[1.02]",
                shadowMap[project.shadowColor],
              ].join(" ")}
            >
              {/* Preview area */}
              <div
                className={[
                  "aspect-[16/9] rounded-[var(--radius-md)] border-2 border-foreground overflow-hidden",
                  "relative",
                  project.previewClassName,
                ].join(" ")}
              >
                <Image
                  src={project.previewImage}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="px-2 pt-5 pb-2">
                <h3 className="text-xl font-extrabold">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Wrench size={13} strokeWidth={2.5} className="text-muted-foreground" />
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Built with
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border-2 border-foreground/20 bg-muted px-2.5 py-0.5 text-xs font-bold text-foreground/80 transition-colors hover:border-foreground hover:bg-tertiary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent text-accent-foreground px-4 py-2 text-sm font-bold shadow-[var(--shadow-pop)] transition-all duration-300 ease-[var(--ease-bounce)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-pop-hover)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                  >
                    Live <ExternalLink size={14} strokeWidth={2.5} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-4 py-2 text-sm font-bold transition-colors hover:bg-tertiary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                  >
                    GitHub <Code2 size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
