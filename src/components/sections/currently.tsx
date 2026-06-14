"use client";

import { useState } from "react";
import { Plus, Download, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CURRENTLY = [
  {
    question: "Current Focus",
    answer:
      "Building full-stack web applications with Next.js, Node.js, MongoDB, and AWS.",
  },
  {
    question: "Learning",
    answer:
      "Docker, system design, scalable architectures, and cloud deployment workflows.",
  },
  {
    question: "Problem Solving",
    answer:
      "Practicing Data Structures & Algorithms in C++ with a focus on interview preparation.",
  },
  {
    question: "Availability",
    answer:
      "Open to internships, freelance work, and exciting full-stack opportunities.",
  },
];

export function Currently() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="currently"
      className="border-b-2 border-foreground py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Right Now"
          eyebrowColor="tertiary"
          title="Currently"
          description="What I'm building, learning, and looking for at the moment."
        />

        <div className="mt-12 space-y-4">
          {CURRENTLY.map((currently, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={currently.question}
                className="border-2 border-foreground rounded-[var(--radius-md)] bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                >
                  {currently.question}
                  <span
                    className={[
                      "cursor-pointer flex h-9 w-9 flex-none items-center justify-center rounded-full border-2 border-foreground bg-tertiary transition-transform duration-300 ease-[var(--ease-bounce)]",
                      isOpen ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-muted-foreground">
                    {currently.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA card */}
        <div className="relative mt-16 overflow-hidden rounded-[var(--radius-lg)] border-2 border-foreground bg-accent px-6 sm:px-12 py-12 sm:py-16 text-center shadow-[var(--shadow-pop)]">
          <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold tracking-tight text-accent-foreground">
            Let&apos;s build something great together.
          </h2>

          <p className="relative z-10 mt-4 text-accent-foreground/90 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new projects, full-stack
            development opportunities, and ambitious ideas. Let&apos;s connect
            and create something meaningful.
          </p>

          <div className="relative z-10 mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="#contact"
              withArrow={false}
              className="bg-tertiary text-foreground"
            >
              <span className="flex items-center gap-2">
                <Mail size={18} strokeWidth={2.5} />
                Get In Touch
              </span>
            </Button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground bg-card px-6 py-3 font-bold text-foreground hover:bg-tertiary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
            >
              <Download size={18} strokeWidth={2.5} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
