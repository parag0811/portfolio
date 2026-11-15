"use client";

import {
  Monitor,
  Server,
  Cloud,
  GraduationCap,
  Bot,
  LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import { CardIcon, StickerCard } from "@/components/ui/sticker-card";
import { motion } from "framer-motion";

type SkillCard = {
  icon: LucideIcon;
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  title: string;
  skills: string[];
  colSpanClass: string;
};

const SKILLS: SkillCard[] = [
  {
    icon: Bot,
    color: "accent",
    title: "AI & Agents",
    skills: [
      "AI Agents",
      "LLMs (Groq, Gemini)",
      "pgvector",
      "Composio",
      "Prompt Engineering",
      "RAG",
      "MCP",
    ],
    colSpanClass: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: Monitor,
    color: "secondary",
    title: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML / CSS",
    ],
    colSpanClass: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: Server,
    color: "tertiary",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "tRPC",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "WebSockets",
    ],
    colSpanClass: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: Cloud,
    color: "quaternary",
    title: "Cloud & Tools",
    skills: [
      "AWS (S3)",
      "Docker",
      "CI/CD",
      "Git & GitHub",
      "Prisma ORM",
      "Zod",
      "REST APIs",
    ],
    colSpanClass: "sm:col-span-1 lg:col-span-3",
  },
  {
    icon: GraduationCap,
    color: "accent",
    title: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "OOP",
      "C++",
      "Problem Solving",
    ],
    colSpanClass: "sm:col-span-2 lg:col-span-3",
  },
];

export function Features() {
  return (
    <section
      id="skills"
      className="relative border-b-2 border-foreground py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          eyebrowColor="quaternary"
          title="Tools I use to build products"
          description="Technologies and frameworks I use to engineer full-stack systems and autonomous AI agents."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={skill.colSpanClass}
            >
              <StickerCard className="h-full pt-9">
                <CardIcon icon={skill.icon} color={skill.color} />

                <h3 className="text-lg font-extrabold text-foreground">{skill.title}</h3>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-foreground/25 bg-muted/80 px-2.5 py-0.5 text-xs font-bold text-foreground transition-all duration-200 hover:border-foreground hover:bg-tertiary hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </StickerCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
