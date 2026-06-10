import type { ReactNode } from "react";
import Link from "next/link";
import { I } from "@/components/icons";

export type LegalSection = { heading: string; body: ReactNode };

export const LegalPage = ({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: ReactNode;
  updated: string;
  sections: LegalSection[];
}) => (
  <main>
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 grain opacity-50 pointer-events-none"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[360px] w-[760px] rounded-full bg-brand-200/40 blur-3xl pointer-events-none"></div>
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 pt-14 md:pt-20 pb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-mute hover:text-ink transition"
        >
          <I.Arrow className="h-3.5 w-3.5 rotate-180" /> Back to home
        </Link>
        <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance">
          {title}
        </h1>
        <p className="mt-4 text-lg text-mute text-pretty">{intro}</p>
        <p className="mt-4 text-xs text-mute">Last updated: {updated}</p>
      </div>
    </section>

    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 md:py-16 space-y-10">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="text-xl md:text-2xl font-bold text-ink">
            {s.heading}
          </h2>
          <div className="mt-3 space-y-3 text-mute text-pretty leading-relaxed [&_a]:text-brand-600 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
            {s.body}
          </div>
        </section>
      ))}
    </div>
  </main>
);
