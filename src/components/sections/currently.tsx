"use client";

import { useState } from "react";
import { Plus, Download, FileText, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/badge";
import { EmailButton } from "@/components/ui/email-button";
import { motion, AnimatePresence } from "framer-motion";

const CURRENTLY = [
  {
    question: "Current Status: Part-Time AI Developer @ Remii",
    tag: "Part-Time · Available for Full-Time",
    answer:
      "I am currently working part-time at Remii (SeaSurf Technologies), engineering autonomous background AI agents, multi-turn session hydration, and tRPC dashboards. Since this is a part-time engagement, I have full bandwidth and am actively seeking a permanent full-time AI Engineering, Backend, or Full-Stack role (or internship with PPO).",
  },
  {
    question: "Primary Goal: Seeking Full-Time AI & SWE Roles (or PPO Internships)",
    tag: "Immediate Joiner",
    answer:
      "Actively interviewing and ready to join immediately for permanent full-time AI Engineer, Backend Developer, or Full-Stack Developer positions, as well as internships with Pre-Placement Offer (PPO) conversion. Eager to take complete ownership of production features and high-scale systems.",
  },
  {
    question: "Deep-Diving: Distributed Queues & Scalable Backends",
    tag: "Systems & Architecture",
    answer:
      "Diving deep into resilient background job architectures with BullMQ & Redis, database indexing and query optimization on PostgreSQL, and semantic search pipelines with pgvector to ground LLM reasoning with production-grade reliability.",
  },
  {
    question: "Core CS: Daily DSA Problem Solving in C++",
    tag: "Interview Ready",
    answer:
      "Practicing Data Structures & Algorithms daily in C++. Focusing on time/space complexity optimization, graph algorithms, dynamic programming, and system design patterns for technical interview rounds.",
  },
];

export function Currently() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="currently"
      className="border-b-2 border-foreground py-14 sm:py-20 bg-background"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Right Now"
          eyebrowColor="tertiary"
          title="What I'm Currently Doing"
          description="A transparent look at my current work, job search, and technical focus."
        />

        <div className="mt-10 space-y-3.5">
          {CURRENTLY.map((currently, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={currently.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border-2 border-foreground rounded-[var(--radius-md)] bg-card overflow-hidden shadow-[var(--shadow-pop)]"
              >
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 transition-colors hover:bg-muted/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-sm sm:text-base">{currently.question}</span>
                    <span className="inline-flex items-center justify-center text-center self-start sm:self-center shrink-0 rounded-full border border-foreground/20 bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground whitespace-nowrap">
                      {currently.tag}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-foreground bg-tertiary"
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-foreground/10">
                        {currently.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="relative mt-12 overflow-hidden rounded-[var(--radius-lg)] border-2 border-foreground bg-accent px-6 sm:px-10 py-10 sm:py-12 text-center shadow-[var(--shadow-pop)]"
        >
          <div className="mx-auto inline-flex items-center justify-center text-center gap-2 rounded-full border-2 border-accent-foreground bg-card/20 px-3.5 py-1 text-xs font-extrabold text-accent-foreground mb-3">
            <Briefcase size={14} />
            <span>Immediate Joiner · Full-Time &amp; PPO</span>
          </div>

          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold tracking-tight text-accent-foreground">
            Looking for an AI Engineer, Full-Stack Dev, or PPO Intern?
          </h2>

          <p className="relative z-10 mt-3 text-sm sm:text-base text-accent-foreground/90 max-w-xl mx-auto leading-relaxed">
            I am currently working part-time at Remii and actively seeking a permanent <strong>Full-Time AI Engineering, Backend, or Full-Stack Developer</strong> role or an <strong>Internship with PPO</strong>. Ready to join immediately and ship production code.
          </p>

          <div className="relative z-10 mt-6 flex flex-wrap justify-center items-center gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
              <EmailButton label="Get In Touch" variant="tertiary" />
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              href="/Parag_Rangankar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-foreground bg-card px-5 py-3 font-bold text-xs sm:text-sm text-foreground hover:bg-tertiary transition-colors shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
              title="View resume in a new tab"
            >
              <FileText size={15} strokeWidth={2.5} />
              View Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              href="/Parag_Rangankar_Resume.pdf"
              download="Parag_Rangankar_Resume.pdf"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-foreground bg-card px-5 py-3 font-bold text-xs sm:text-sm text-foreground hover:bg-quaternary transition-colors shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
              title="Download resume PDF directly"
            >
              <Download size={15} strokeWidth={2.5} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
