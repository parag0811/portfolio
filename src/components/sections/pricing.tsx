import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Try It",
    price: "$19",
    cadence: "one box",
    description: "Send one kit, no strings attached.",
    features: ["1 craft kit", "Digital instruction cards", "Free shipping"],
  },
  {
    name: "Monthly",
    price: "$24",
    cadence: "per month",
    description: "A new project lands every month, cancel whenever.",
    features: [
      "1 craft kit / month",
      "Printed + digital cards",
      "Free shipping",
      "Early access to themes",
      "Member-only swaps",
    ],
    featured: true,
  },
  {
    name: "Family Pack",
    price: "$39",
    cadence: "per month",
    description: "Two kits a month, for households that craft together.",
    features: [
      "2 craft kits / month",
      "Printed + digital cards",
      "Free shipping",
      "Early access to themes",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-b-2 border-foreground bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Plans"
          eyebrowColor="secondary"
          title="Pick a pace that fits your table"
          description="Switch, pause, or cancel any time from your account — no calls, no forms."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8 items-center">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative bg-card border-2 border-foreground rounded-[var(--radius-lg)] p-8",
                plan.featured
                  ? "lg:scale-110 shadow-[var(--shadow-pop-pink)] z-10"
                  : "shadow-[var(--shadow-pop-soft)]",
              ].join(" ")}
            >
              {plan.featured && (
                <div
                  aria-hidden
                  className="absolute -top-8 -right-6 flex h-20 w-20 rotate-[15deg] items-center justify-center rounded-full border-2 border-foreground bg-tertiary text-center"
                >
                  <span className="text-[11px] font-extrabold uppercase leading-tight">
                    Most
                    <br />
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-extrabold">{plan.name}</h3>
              <p className="mt-1 text-muted-foreground text-sm">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground">/ {plan.cadence}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-foreground bg-quaternary">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={plan.featured ? "primary" : "secondary"}
                withArrow={plan.featured}
                className="mt-8 w-full"
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Star size={16} className="fill-tertiary text-foreground" strokeWidth={2.5} />
          Every plan includes free shipping and a no-questions-asked pause.
        </p>
      </div>
    </section>
  );
}
