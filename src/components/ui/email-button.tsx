"use client";

import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/toast";

type EmailButtonProps = {
  email?: string;
  label?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
};

export function EmailButton({
  email = "paragrangankar@gmail.com",
  label = "Get In Touch",
  variant = "primary",
  className = "",
}: EmailButtonProps) {
  const { showToast } = useToast();

  const handleClick = () => {
    // 1. Copy email to clipboard
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast("Email copied to clipboard!", email);
        })
        .catch(() => {
          showToast("Opening email client...", email);
        });
    } else {
      showToast("Opening email client...", email);
    }

    // 2. Trigger mailto navigation
    window.location.href = `mailto:${email}`;
  };

  const variantStyles = {
    primary:
      "bg-accent text-accent-foreground shadow-[var(--shadow-pop)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-pop-hover)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)]",
    secondary:
      "bg-transparent text-foreground hover:bg-tertiary active:translate-x-0.5 active:translate-y-0.5",
    tertiary:
      "bg-tertiary text-foreground shadow-[var(--shadow-pop)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-pop-hover)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)]",
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        "inline-flex items-center justify-center gap-2 font-bold rounded-full border-2 border-foreground",
        "transition-all duration-300 ease-[var(--ease-bounce)] min-h-12 px-6",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 cursor-pointer",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      <span className="flex items-center gap-2">
        <Mail size={18} strokeWidth={2.5} />
        {label}
      </span>
    </button>
  );
}
