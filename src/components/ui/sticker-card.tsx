import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type CardShadow = "soft" | "pink" | "none";

type StickerCardProps = {
  children: ReactNode;
  shadow?: CardShadow;
  className?: string;
};

const shadowMap: Record<CardShadow, string> = {
  soft: "shadow-[var(--shadow-pop-soft)]",
  pink: "shadow-[var(--shadow-pop-pink)]",
  none: "",
};

/**
 * The "Sticker" card: white surface, chunky dark border, hard offset
 * shadow, and a subtle wiggle + lift on hover.
 */
export function StickerCard({ children, shadow = "soft", className = "" }: StickerCardProps) {
  return (
    <div
      className={[
        "relative bg-card border-2 border-foreground rounded-[var(--radius-lg)] p-6 sm:p-8",
        shadowMap[shadow],
        "transition-all duration-300 ease-[var(--ease-bounce)]",
        "hover:-rotate-1 hover:scale-[1.02]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

type CardIconProps = {
  icon: LucideIcon;
  /** Background color token for the floating circle, e.g. "accent" | "secondary" | "tertiary" | "quaternary" */
  color?: "accent" | "secondary" | "tertiary" | "quaternary";
};

const colorMap: Record<Required<CardIconProps>["color"], string> = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-foreground",
  tertiary: "bg-tertiary text-foreground",
  quaternary: "bg-quaternary text-foreground",
};

/**
 * Floating icon badge that sits half-in / half-out of the card's top
 * border, per the design system's "icon enclosed in a shape" rule.
 */
export function CardIcon({ icon: Icon, color = "accent" }: CardIconProps) {
  return (
    <div
      className={[
        "absolute -top-6 left-6 flex h-12 w-12 items-center justify-center",
        "rounded-full border-2 border-foreground animate-wiggle",
        colorMap[color],
      ].join(" ")}
    >
      <Icon size={22} strokeWidth={2.5} />
    </div>
  );
}
