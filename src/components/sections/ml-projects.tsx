import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShapeSquiggle } from "@/components/ui/shapes";

type MlProject = {
  title: string;
  description: string;
  tag: string;
  /** Tailwind gradient classes standing in for a project preview image. */
  previewClassName: string;
  href: string;
};

const ML_PROJECTS: MlProject[] = [
  {
    title: "Expense Anomaly Detector",
    description:
      "A deployed ML service that scans group expenses in real time and flags irregular transactions, helping catch mistakes and fraud before they slip through.",
    tag: "Python · ML Service",
    previewClassName:
      "bg-gradient-to-br from-accent/30 via-card to-quaternary/20",
    href: "https://github.com/parag0811/expense-anomaly-ml-service",
  },
  {
    title: "Settlement Risk Predictor",
    description:
      "A model that learns from past transaction behavior to predict the chance a settlement will be delayed, giving group expense apps an early warning system for unreliable payers.",
    tag: "Jupyter Notebook · ML Model",
    previewClassName:
      "bg-gradient-to-br from-secondary/30 via-card to-tertiary/20",
    href: "https://github.com/parag0811/Settlement-risk-predictor",
  },
  {
    title: "Planex Risk Engine",
    description:
      "The ML layer inside Planex that scores planning and architecture decisions for risk, surfacing potential bottlenecks before a team commits to a design.",
    tag: "Python · Risk Scoring",
    previewClassName:
      "bg-gradient-to-br from-quaternary/30 via-card to-accent/20",
    href: "https://github.com/parag0811/planex",
  },
];

export function MlProjects() {
  return (
    <section className="border-b-2 border-foreground bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header row: eyebrow + title on the left, "view all" button on the right */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge color="quaternary">From the Lab</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Machine Learning Projects
            </h2>
            <ShapeSquiggle className="h-3 w-28 text-accent mt-3" />
          </div>

          <a
            href="https://github.com/parag0811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border-2 border-foreground bg-transparent px-5 py-2.5 text-sm font-bold transition-colors hover:bg-tertiary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:self-auto"
          >
            View all on GitHub
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ML_PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 rounded-[var(--radius-lg)]"
            >
              <div
                className={[
                  "aspect-[4/3] rounded-[var(--radius-lg)] border-2 border-foreground overflow-hidden relative",
                  "transition-all duration-300 ease-[var(--ease-bounce)]",
                  "shadow-[var(--shadow-pop-soft)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-pop-hover)]",
                  project.previewClassName,
                ].join(" ")}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-foreground/30 text-center px-4">
                    {project.title}
                  </span>
                </div>

                {/* Tag chip, bottom-right, mirrors the date chip in the reference */}
                <span className="absolute bottom-3 right-3 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold">
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-5 text-lg sm:text-xl font-extrabold leading-snug">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
                View on GitHub
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 ease-[var(--ease-bounce)] group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
