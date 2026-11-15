import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type CardShadow = "soft" | "pink" | "none";

type StickerCardProps = {
  children: ReactNode;
  shadow?: CardShadow;
  className?: string;
};

const shadowMap: Record<CardShadow, string> = {
  soft: "shadow-[var(--shadow-pop)]",
  pink: "shadow-[var(--shadow-pop-pink)]",
  none: "",
};

/**
 * Clean Neo-Brutalist Sticker Card:
 * Smooth vertical lift with crisp pop shadow on hover, no tilt.
 */
export function StickerCard({ children, shadow = "soft", className = "" }: StickerCardProps) {
  return (
    <div
      className={[
        "group relative bg-card border-2 border-foreground rounded-[var(--radius-lg)] p-6 sm:p-7",
        shadowMap[shadow],
        "transition-all duration-300 ease-[var(--ease-bounce)]",
        "hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_var(--foreground)]",
        "active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--foreground)]",
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
 * Floating icon badge that sits half-in / half-out of the card's top border.
 * Gently scales up on card hover without continuous wiggling.
 */
export function CardIcon({ icon: Icon, color = "accent" }: CardIconProps) {
  return (
    <div
      className={[
        "absolute -top-5 left-6 flex h-11 w-11 items-center justify-center",
        "rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)]",
        "transition-transform duration-300 ease-[var(--ease-bounce)] group-hover:scale-115 group-hover:-translate-y-0.5",
        colorMap[color],
      ].join(" ")}
    >
      <Icon size={20} strokeWidth={2.4} />
    </div>
  );
}
