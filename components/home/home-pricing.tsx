"use client";

import { useState } from "react";
import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal, Kicker, Btn } from "@/components/home/ui";
import { SiteLink } from "@/components/site-link";
import { SIGNUP_URL, SUPPORT_EMAIL } from "@/lib/site";

type Plan = {
  name: string;
  // Stable key — must match backend plan keys (website/whatsapp/both).
  key: string;
  tag?: string;
  desc: string;
  monthly: number;
  yearly: number;
  note?: string;
  popular?: boolean;
  cta: string;
  variant: "ghost" | "grad" | "dark";
  features: [string, boolean][];
};

// Mirrors components/pricing/data.ts — keep the two in sync.
const plans: Plan[] = [
  {
    name: "Website widget",
    key: "website",
    desc: "Answer every website visitor 24/7 with one snippet.",
    monthly: 25,
    yearly: 20,
    cta: "Start free trial",
    variant: "ghost",
    features: [
      ["Website chat widget · any CMS", true],
      ["24/7 AI agent + knowledge base", true],
      ["Unified inbox & human handoff", true],
      ["Lead capture + prechat form", true],
      ["1,000 conversations / month", true],
      ["2 team seats", true],
      ["WhatsApp Business channel", false],
    ],
  },
  {
    name: "Both channels",
    key: "both",
    tag: "Most popular",
    desc: "WhatsApp + website in one shared inbox. Save $11/mo.",
    monthly: 49,
    yearly: 39,
    note: "1,000 WhatsApp messages/mo included",
    cta: "Start free trial",
    variant: "grad",
    popular: true,
    features: [
      ["Everything in Website + WhatsApp", true],
      ["One shared inbox, both channels", true],
      ["Same agent, same answers", true],
      ["2,000 pooled conversations / month", true],
      ["Full analytics (CSAT, SLA, response)", true],
      ["3 team seats", true],
      ["Bookings, Shopping & Broadcast add-ons", true],
    ],
  },
  {
    name: "WhatsApp",
    key: "whatsapp",
    desc: "The same AI agent on your WhatsApp Business number.",
    monthly: 35,
    yearly: 28,
    note: "500 WhatsApp messages/mo included",
    cta: "Start free trial",
    variant: "dark",
    features: [
      ["WhatsApp Business API number", true],
      ["We handle the Meta setup", true],
      ["24/7 AI agent + knowledge base", true],
      ["Unified inbox & human handoff", true],
      ["750 conversations / month", true],
      ["2 team seats", true],
      ["Website chat widget", false],
    ],
  },
];

function Tick({ on }: { on: boolean }) {
  return on ? (
    <Ico.check className="text-brand-blue text-[15px] flex-none mt-0.5" />
  ) : (
    <span className="text-[#c4c8d0] text-[15px] flex-none mt-0.5 w-[15px] inline-flex justify-center">
      —
    </span>
  );
}

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const price = yearly ? plan.yearly : plan.monthly;
  const href = `${SIGNUP_URL}?plan=${plan.key}&cycle=${yearly ? "annual" : "monthly"}`;
  return (
    <Reveal
      className={`relative flex flex-col rounded-[22px] p-6 sm:p-7 bg-white shadow-[0_1px_2px_rgba(17,24,39,0.04),0_16px_32px_-16px_rgba(17,24,39,0.08)] ${
        plan.popular
          ? "shadow-[0_30px_60px_-30px_rgba(61,107,248,0.45)] lg:-translate-y-3 z-10"
          : "border border-line"
      }`}
      style={
        plan.popular
          ? {
              border: "1.5px solid transparent",
              background:
                "linear-gradient(#fff,#fff) padding-box, var(--grad) border-box",
            }
          : undefined
      }
    >
      {plan.tag && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 grad text-white font-mono text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
          {plan.tag}
        </span>
      )}
      <div className="text-[17px] font-semibold tracking-tight">{plan.name}</div>
      <div className="text-[13px] text-mute mt-1 leading-snug min-h-[34px]">{plan.desc}</div>
      <div className="my-5">
        <span className="text-[20px] font-semibold align-top">$</span>
        <span className="text-[42px] font-bold tracking-tight leading-none">{price}</span>
        <span className="text-[13.5px] text-mute"> /mo</span>
        <div className="text-[12.5px] text-mute mt-1.5">
          {yearly ? "billed annually · 20% off" : "billed monthly"}
        </div>
        {plan.note && (
          <div className="text-[12px] font-medium text-brand-600 mt-1">{plan.note}</div>
        )}
      </div>
      <Btn variant={plan.variant} href={href} className="w-full">
        {plan.cta}
      </Btn>
      <div className="h-px bg-line my-5" />
      <div className="flex flex-col gap-2.5">
        {plan.features.map(([f, on]) => (
          <div
            key={f}
            className={`flex items-start gap-2.5 text-[13.5px] ${on ? "text-[#374151]" : "text-mute"}`}
          >
            <Tick on={on} /> <span className="leading-snug">{f}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export const HomePricing = () => {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" className="relative overflow-hidden scroll-mt-16 py-14 md:py-16">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[360px] rounded-full blur-[80px] opacity-50"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)" }}
      />
      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <Kicker center>Simple, honest pricing</Kicker>
          <h2 className="mt-3 text-[clamp(30px,4.6vw,46px)] font-bold tracking-[-0.035em] leading-[1.05] text-balance">
            Start with one channel. <span className="grad-text">Or run both in one inbox.</span>
          </h2>
          <p className="mt-4 text-[16.5px] text-mute leading-relaxed">
            Website widget, WhatsApp, or both — the same agent, the same
            answers, one shared inbox. Add bookings, shopping or broadcasts
            whenever you need them.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex justify-center">
          <div className="inline-flex bg-white border border-line rounded-full p-1 gap-0.5">
            <button
              onClick={() => setYearly(false)}
              className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all ${!yearly ? "grad text-white" : "text-mute"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-2 ${yearly ? "grad text-white" : "text-mute"}`}
            >
              Yearly{" "}
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${yearly ? "bg-white/20 text-white" : "bg-brand-blue/10 text-brand-blue"}`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} yearly={yearly} />
          ))}
        </div>

        <Reveal
          delay={40}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-[14px]"
        >
          <span className="text-mute">
            Multi-location team or agency running real volume?
          </span>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Replai%20Scale%20enquiry`}
            className="font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5"
          >
            Talk to us about Scale <Ico.arrow className="text-[14px]" />
          </a>
          <span className="hidden sm:inline text-line">·</span>
          <SiteLink
            href="/pricing"
            className="font-semibold text-ink hover:text-brand-600 inline-flex items-center gap-1.5"
          >
            Compare all plans <Ico.arrow className="text-[14px]" />
          </SiteLink>
        </Reveal>

        <Reveal
          delay={60}
          className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13.5px] text-mute"
        >
          {["14-day free trial", "No setup fees", "Cancel anytime", "USD pricing", "POPIA-aware"].map(
            (t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Ico.check className="text-brand-blue text-[15px]" /> {t}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
};

const included: [IcoName, string, string][] = [
  ["bolt", "24/7 AI agent", "Trained on your business, answering in seconds — every plan, both channel types."],
  ["handoff", "Human handoff included", "Clean escalation to a real person with full context, on every tier."],
  ["shield", "POPIA-aware & encrypted", "Privacy-conscious data handling baked in on every plan."],
  ["pin", "A real person replies", "Made in Joburg. When you need us, you reach a human — not a queue."],
];

export const AlwaysIncluded = () => (
  <section className="py-12 md:py-14">
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
      <div className="rounded-[28px] bg-white border border-line shadow-[0_1px_2px_rgba(17,24,39,0.04),0_24px_48px_-24px_rgba(17,24,39,0.08)] px-6 sm:px-10 py-10 md:py-12">
      <Reveal className="text-center max-w-[520px] mx-auto">
        <Kicker center>On every plan</Kicker>
        <h2 className="mt-3 text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.03em] leading-tight text-balance">
          No asterisks. The essentials are never an upsell.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {included.map(([ic, t, d], i) => {
          const Icon = Ico[ic];
          return (
            <Reveal
              key={t}
              delay={(i % 4) * 60}
              className="bg-paper/70 border border-line rounded-[16px] p-5"
            >
              <span className="w-10 h-10 rounded-xl grad grid place-items-center text-white">
                <Icon className="text-[19px]" />
              </span>
              <div className="mt-3.5 font-semibold text-[15.5px] tracking-tight">{t}</div>
              <div className="mt-1 text-[13.5px] text-mute leading-relaxed">{d}</div>
            </Reveal>
          );
        })}
      </div>
      </div>
    </div>
  </section>
);
