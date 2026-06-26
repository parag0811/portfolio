import { Monitor, Server, Cloud, Brain, GraduationCap, LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import { CardIcon, StickerCard } from "@/components/ui/sticker-card";

type SkillCard = {
  icon: LucideIcon;
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  title: string;
  skills: string[];
};

const SKILLS : SkillCard[] = [
  {
    icon: Monitor,
    color: "accent" as const,
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    icon: Server,
    color: "secondary" as const,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Authentication",
    ],
  },
  {
    icon: Cloud,
    color: "tertiary" as const,
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS S3", "Postman", "Linux"],
  },
  {
    icon: GraduationCap,
    color: "quaternary",
    title: "CS Fundamentals",
    skills: [
      "DSA",
      "Operating System",
      "DBMS",
      "Computer Networks",
      "System Design",
    ],
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
          description="From frontend experiences to backend systems, these are the technologies I use to design, develop, and deploy modern web applications."
        />

        {/* Connector line (desktop only) */}
        <div className="relative mt-16 hidden lg:block">
          <svg
            aria-hidden
            className="absolute left-0 top-10 w-full text-border"
            height="2"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="mt-16 lg:mt-[-2rem] grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 cursor-pointer">
          {SKILLS.map((skill) => (
            <StickerCard key={skill.title} className="pt-10">
              <CardIcon icon={skill.icon} color={skill.color} />

              <h3 className="text-xl font-extrabold">{skill.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {skill.skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 border-foreground px-3 py-1 text-sm font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StickerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
