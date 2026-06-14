import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { ShapeCircle, ShapeSquare } from "@/components/ui/shapes";

const DETAILS = [
  {
    icon: Mail,
    color: "accent" as const,
    label: "Email",
    value: "hello@snippy.example",
  },
  {
    icon: MapPin,
    color: "secondary" as const,
    label: "Studio",
    value: "118 Maple Ave, Portland, OR",
  },
  {
    icon: Clock,
    color: "quaternary" as const,
    label: "Reply time",
    value: "Within 1 business day",
  },
];

const colorMap: Record<string, string> = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-foreground",
  quaternary: "bg-quaternary text-foreground",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground bg-dot-grid">
      <ShapeCircle className="hidden sm:block absolute top-10 -right-16 h-48 w-48 bg-tertiary/40 -z-0" />
      <ShapeSquare className="hidden sm:block absolute bottom-10 left-0 h-20 w-20 -rotate-6 rounded-2xl border-2 border-foreground bg-secondary/20 -z-0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Say hi
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-md">
              Questions about an order, ideas for a future kit, or just want
              to share a photo of what you made? We&apos;d love to hear it.
            </p>

            <div className="mt-10 space-y-6">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <span
                    className={[
                      "flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-foreground",
                      colorMap[detail.color],
                    ].join(" ")}
                  >
                    <detail.icon size={20} strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
