import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  /** Show the circular arrow icon (only applies to the primary variant). */
  withArrow?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

type Props = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-bold rounded-full border-2 border-foreground " +
  "transition-all duration-300 ease-[var(--ease-bounce)] min-h-12 px-6 " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[var(--shadow-pop)] " +
    "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-pop-hover)] " +
    "active:translate-x-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pop-active)]",
  secondary:
    "bg-transparent text-foreground hover:bg-tertiary " +
    "active:translate-x-0.5 active:translate-y-0.5",
};

/**
 * The "Candy Button" (primary) and outlined secondary button from the
 * Playful Geometric system. Renders as a Next.js <Link> when `href` is
 * provided, otherwise as a native <button>.
 */
export function Button({
  variant = "primary",
  withArrow = variant === "primary",
  children,
  className = "",
  ...props
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-foreground">
          <ArrowRight size={16} strokeWidth={2.5} />
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
