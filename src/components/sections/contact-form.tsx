"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Static contact form. This project is backend-free, so submitting
 * simply confirms receipt in the UI. To wire this up to a real inbox:
 *  - swap the onSubmit handler for a call to your form provider
 *    (e.g. Formspree, Resend, a Next.js Route Handler + email API), or
 *  - point the <form> at a service like Formspree directly via its
 *    `action` and `method` attributes.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-2 border-foreground rounded-[var(--radius-lg)] bg-quaternary/20 p-8 text-center shadow-[var(--shadow-pop-soft)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground bg-quaternary">
          <CheckCircle2 size={28} strokeWidth={2.5} />
        </div>
        <h3 className="mt-4 text-xl font-extrabold">Message received</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out — we read every note and reply within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-foreground rounded-[var(--radius-lg)] bg-card p-6 sm:p-8 shadow-[var(--shadow-pop-soft)] space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-bold uppercase tracking-wide"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-[var(--radius-sm)] border-2 border-border bg-input px-4 py-3 text-foreground shadow-[4px_4px_0px_0px_transparent] transition-all focus:border-accent focus:shadow-[4px_4px_0px_0px_var(--accent)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-bold uppercase tracking-wide"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-[var(--radius-sm)] border-2 border-border bg-input px-4 py-3 text-foreground shadow-[4px_4px_0px_0px_transparent] transition-all focus:border-accent focus:shadow-[4px_4px_0px_0px_var(--accent)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wide"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-[var(--radius-sm)] border-2 border-border bg-input px-4 py-3 text-foreground shadow-[4px_4px_0px_0px_transparent] transition-all focus:border-accent focus:shadow-[4px_4px_0px_0px_var(--accent)] focus:outline-none resize-none"
        />
      </div>

      <Button type="submit" withArrow={false} className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
