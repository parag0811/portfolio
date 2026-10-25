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
      "LLMs",
      "pgvector",
      "Composio",
      "Prompt Engineering",
      "RAG",
    ],
    colSpanClass: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: Monitor,
    color: "secondary",
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "HTML5",
      "CSS3",
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
      "PostgreSQL",
      "Prisma",
      "Redis",
      "REST APIs",
      "WebSockets",
      "BullMQ",
    ],
    colSpanClass: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: Cloud,
    color: "quaternary",
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "CI/CD",
      "AWS (S3)",
      "Git & GitHub",
      "Unit Testing",
      "Linux",
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
      className="relative border-b-2 border-foreground py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          eyebrowColor="quaternary"
          title="Tools I use to build products"
          description="From autonomous AI agents and vector retrieval to full-stack web platforms and backend distributed systems."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 cursor-pointer">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={skill.colSpanClass}
            >
              <StickerCard className="h-full pt-10">
                <CardIcon icon={skill.icon} color={skill.color} />

                <h3 className="text-xl font-extrabold">{skill.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-foreground px-3 py-1 text-sm font-bold bg-muted/60 hover:bg-tertiary transition-colors"
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
