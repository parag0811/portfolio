import { ExternalLink, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";

type Project = {
  name: string;
  description: string;
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
      "A planning and scheduling app that turns scattered tasks and deadlines into a clear weekly timeline, with smart reminders and drag-and-drop rescheduling.",
    previewClassName:
      "bg-gradient-to-br from-accent/30 via-card to-secondary/20",
    liveUrl: "#",
    githubUrl: "#",
    shadowColor: "accent",
  },
  {
    name: "Quick Split",
    description:
      "A bill-splitting tool for groups — add expenses, split unevenly or evenly, and see who owes what at a glance, with a shareable summary link.",
    previewClassName:
      "bg-gradient-to-br from-quaternary/30 via-card to-tertiary/20",
    liveUrl: "#",
    githubUrl: "#",
    shadowColor: "quaternary",
  },
  {
    name: "Campus Vibe",
    description:
      "A campus events and community platform where students discover events, RSVP, and share posts — built to keep college life easy to find in one place.",
    previewClassName:
      "bg-gradient-to-br from-secondary/30 via-card to-accent/20",
    liveUrl: "#",
    githubUrl: "#",
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Work"
          eyebrowColor="secondary"
          title="Projects"
          description="A few things I've built recently — click through for a live look or the source code."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
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
                  "aspect-[4/3] rounded-[var(--radius-md)] border-2 border-foreground overflow-hidden",
                  "flex items-center justify-center",
                  project.previewClassName,
                ].join(" ")}
              >
                <span className="text-2xl font-extrabold text-foreground/40">
                  {project.name}
                </span>
              </div>

              {/* Content */}
              <div className="px-2 pt-5 pb-2">
                <h3 className="text-xl font-extrabold">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
