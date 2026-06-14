import { Heart, Leaf, Lightbulb } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import { CardIcon, StickerCard } from "@/components/ui/sticker-card";
import { ShapeCircle, ShapeSquare, ShapeTriangle } from "@/components/ui/shapes";
import { Currently } from "@/components/sections/currently";

const VALUES = [
  {
    icon: Lightbulb,
    color: "tertiary" as const,
    title: "Curiosity first",
    description:
      "Every kit starts as a question — what happens if you fold this, wire that, or paint over it? The project is how we answer it.",
  },
  {
    icon: Leaf,
    color: "quaternary" as const,
    title: "Low-waste by design",
    description:
      "We cut to fit, source recycled card stock where we can, and skip the plastic wrap on individual pieces whenever possible.",
  },
  {
    icon: Heart,
    color: "secondary" as const,
    title: "Made to be kept",
    description:
      "We design projects worth displaying, not landfill-bound. If it ends up on a shelf or a fridge door, we did our job.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-foreground bg-dot-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="relative max-w-2xl">
            <ShapeCircle className="hidden sm:block absolute -top-8 -left-10 h-28 w-28 bg-secondary/30 -z-0" />
            <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold tracking-tight">
              We make craft night less of a scavenger hunt
            </h1>
            <p className="relative z-10 mt-6 text-lg text-muted-foreground">
              Snippy started in a garage in 2021, when our founder spent more
              time hunting for googly eyes than actually making the project.
              So we built the box we wished existed: everything you need,
              nothing you don&apos;t, delivered on a schedule you choose.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-foreground py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we believe"
            eyebrowColor="quaternary"
            title="Three ideas behind every box"
            description="These aren't framed on a wall somewhere — they're the questions we ask before any kit ships."
          />

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {VALUES.map((value) => (
              <StickerCard key={value.title} className="pt-10">
                <CardIcon icon={value.icon} color={value.color} />
                <h3 className="text-xl font-extrabold">{value.title}</h3>
                <p className="mt-3 text-muted-foreground">{value.description}</p>
              </StickerCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b-2 border-foreground bg-muted py-20 sm:py-24">
        <ShapeTriangle className="hidden sm:block absolute top-10 right-1/4 text-tertiary/50" />
        <ShapeSquare className="hidden sm:block absolute bottom-10 left-10 h-14 w-14 rotate-6 rounded-2xl border-2 border-foreground bg-accent/30" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="By the numbers"
            eyebrowColor="secondary"
            title="A small team, a lot of boxes"
          />
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              { value: "60+", label: "Kits designed" },
              { value: "12k", label: "Subscribers" },
              { value: "9", label: "Team members" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Currently />
    </>
  );
}
