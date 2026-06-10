import type { ReactNode } from "react";
import { Kicker } from "@/components/home/ui";

/**
 * Shared hero for sub-pages (features, how it works, templates, FAQ, …).
 * Gives every indexable page a proper h1 in the same "Daylight" style as the
 * home and pricing heroes.
 */
export const PageHero = ({
  eyebrow,
  title,
  lede,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Extra content under the lede (CTAs, toggles, …). */
  children?: ReactNode;
  align?: "center" | "left";
}) => (
  <section className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 grain opacity-50" />
    <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[780px] rounded-full bg-brand-200/40 blur-3xl" />
    <div className="pointer-events-none absolute -top-20 right-10 h-[260px] w-[260px] rounded-full bg-cyan-400/15 blur-3xl" />
    <div
      className={`relative mx-auto max-w-[1180px] px-5 sm:px-8 pt-14 md:pt-20 pb-4 md:pb-6 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <div className={align === "center" ? "max-w-[760px] mx-auto" : "max-w-[680px]"}>
        <Kicker center={align === "center"}>{eyebrow}</Kicker>
        <h1 className="mt-4 text-[clamp(32px,5.2vw,54px)] font-bold tracking-[-0.035em] leading-[1.04] text-balance">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 text-[17px] md:text-lg text-mute leading-relaxed text-pretty">
            {lede}
          </p>
        )}
        {children}
      </div>
    </div>
  </section>
);
