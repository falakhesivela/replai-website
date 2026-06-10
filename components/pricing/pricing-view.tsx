"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { I } from "@/components/icons";
import { FinalCTA } from "@/components/final-cta";
import { BillingToggle } from "@/components/pricing/billing-toggle";
import { Tiers } from "@/components/pricing/tiers";
import { AddOns } from "@/components/pricing/add-ons";
import { Comparison } from "@/components/pricing/comparison";
import { PRICING_FAQ } from "@/components/pricing/data";

export const PricingView = () => {
  const [annual, setAnnual] = useState(true);
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-brand-200/40 blur-3xl pointer-events-none"></div>
        <div className="absolute -top-20 right-10 h-[280px] w-[280px] rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 md:pt-20 pb-10 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 chip mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-mark-gradient inline-block"></span>
              USD pricing · no setup fees · cancel anytime
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-balance">
              Pricing that scales with your conversations —{" "}
              <span className="text-gradient">not your headaches.</span>
            </h1>
            <p className="mt-5 text-lg text-mute text-pretty">
              Two weeks free on every plan. Start with the website widget,
              WhatsApp, or both — same AI agent, one inbox. Pay per
              conversation, change channels or modules any time.
            </p>
            <BillingToggle annual={annual} setAnnual={setAnnual} />
          </div>
        </div>
      </section>

      <Tiers annual={annual} />
      <AddOns />
      <Comparison />

      <Section
        id="pricing-faq"
        eyebrow="Pricing FAQ"
        title="Before you sign up."
      >
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
          {PRICING_FAQ.map(([q, a]) => (
            <details key={q} className="group py-5 border-b border-line">
              <summary className="flex items-start gap-3">
                <span className="flex-1 text-base font-semibold text-ink">
                  {q}
                </span>
                <span className="chev mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-line">
                  <I.Plus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <div className="mt-2 text-mute text-pretty pr-10">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      <FinalCTA kicker="Pick a plan. Connect one channel or both. Go live today." />
    </main>
  );
};
