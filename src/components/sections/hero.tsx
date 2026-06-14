import { Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ShapeCircle,
  ShapeSquare,
  ShapeTriangle,
} from "@/components/ui/shapes";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground bg-dot-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div className="relative z-10 animate-pop-in">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-sm font-bold shadow-[var(--shadow-pop)]">
              <Sparkles
                size={16}
                className="text-secondary"
                strokeWidth={2.5}
              />
              Looking for An Internship/Job
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Parag Rangankar
              <span className="relative inline-block">
                <span className="relative z-10 text-xl">
                  Building products that solve problems and look great doing it.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 sm:h-4 bg-tertiary"
                />
              </span>{" "}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              I'm a Full Stack Developer focused on creating scalable web
              applications, modern user experiences, and developer-friendly
              systems. I enjoy turning ideas into polished products using React,
              Next.js, Node.js, and cloud technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">View My Work</Button>
              <Button href="/about" variant="secondary" withArrow={false}>
                Get In Touch
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "bg-secondary",
                  "bg-tertiary",
                  "bg-quaternary",
                  "bg-accent",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`h-10 w-10 rounded-full border-2 border-foreground ${c}`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 font-bold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={2.5}
                      className="fill-tertiary text-foreground"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">12,000+ happy crafters</p>
              </div>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative h-80 sm:h-[28rem] lg:h-[32rem]">
            <div className="flex h-full w-full items-center justify-center from-accent/15 via-secondary/10 to-quaternary/15">
              <div className="text-center px-6 cursor-pointer">
                <Image
                  src="/Images/CatDev.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
