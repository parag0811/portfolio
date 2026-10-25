const KEYWORDS = [
  "AI Agents",
  "LLMs",
  "pgvector",
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Tailwind",
  "tRPC",
  "Docker",
  "AWS",
  "CI/CD",
  "C++"
];

export function Marquee() {
  const items = [...KEYWORDS, ...KEYWORDS];

  return (
    <section className="border-b-2 border-foreground bg-foreground py-6 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6">
            <span className="font-extrabold text-lg sm:text-xl text-background whitespace-nowrap">
              {item}
            </span>
            <span
              aria-hidden
              className="h-3 w-3 rounded-full bg-tertiary flex-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
