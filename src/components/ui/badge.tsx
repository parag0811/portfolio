import { ReactNode } from "react";
import { ShapeSquiggle } from "./shapes";

type BadgeColor = "accent" | "secondary" | "tertiary" | "quaternary";

const colorMap: Record<BadgeColor, string> = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-foreground",
  tertiary: "bg-tertiary text-foreground",
  quaternary: "bg-quaternary text-foreground",
};

/** Small pill-shaped label, e.g. "MOST POPULAR" or category tags. */
export function Badge({
  children,
  color = "accent",
  className = "",
}: {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border-2 border-foreground px-4 py-1",
        "text-xs font-bold uppercase tracking-wide",
        colorMap[color],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/**
 * Reusable section heading: eyebrow badge, heading with a squiggle
 * underline, and an optional supporting description.
 */
export function SectionHeading({
  eyebrow,
  eyebrowColor = "accent",
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  eyebrowColor?: BadgeColor;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <Badge color={eyebrowColor} className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      <ShapeSquiggle
        className={`h-3 w-28 text-accent mt-3 ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
