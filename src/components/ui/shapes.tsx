/**
 * Decorative "confetti" shapes used to scatter behind content blocks.
 * Pure SVG/div primitives — purely decorative, marked aria-hidden.
 *
 * Usage: position these with absolute + Tailwind position utilities
 * from the parent (which should be `relative`).
 */

import { CSSProperties } from "react";

type ShapeProps = {
  className?: string;
  style?: CSSProperties;
};

/** Solid filled circle. */
export function ShapeCircle({ className = "", style }: ShapeProps) {
  return (
    <div
      aria-hidden
      className={`rounded-full ${className}`}
      style={style}
    />
  );
}

/** Solid filled square, can be rotated via className. */
export function ShapeSquare({ className = "", style }: ShapeProps) {
  return <div aria-hidden className={className} style={style} />;
}

/** Outlined triangle made from a CSS border trick. */
export function ShapeTriangle({ className = "", style }: ShapeProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        width: 0,
        height: 0,
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderBottom: "34px solid currentColor",
        ...style,
      }}
    />
  );
}

/** Hand-drawn-feel squiggle, used as a divider or heading underline. */
export function ShapeSquiggle({ className = "" }: ShapeProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 20"
      className={className}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M2 14C16 4 30 4 44 14C58 24 72 24 86 14C100 4 114 4 128 14C142 24 156 24 170 14C184 4 192 4 198 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Pill / capsule shape. */
export function ShapePill({ className = "", style }: ShapeProps) {
  return <div aria-hidden className={`rounded-full ${className}`} style={style} />;
}
