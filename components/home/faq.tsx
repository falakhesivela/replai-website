"use client";

import { useState } from "react";
import { Ico } from "@/components/home/icons";
import { Reveal, Kicker } from "@/components/home/ui";

const faqs: [string, string][] = [
  [
    "Will Replai replace my team?",
    "No — and that’s the point. Replai takes the repetitive 80% (hours, prices, bookings, FAQs) off your team’s plate so they can focus on the conversations that genuinely need a person. A human is always one tap away, and Replai hands over the full context so nobody starts from scratch.",
  ],
  [
    "How does it handle POPIA and privacy?",
    "Replai is POPIA-aware by default. Conversations are encrypted, and data is handled with South African privacy rules in mind. You stay in control of your customer data, and you can escalate or delete conversations from your inbox at any time.",
  ],
  [
    "What’s involved in WhatsApp Business setup?",
    "We guide you through connecting your WhatsApp Business number step by step — no technical knowledge needed. Once connected, the same agent you trained answers on WhatsApp and your website from one shared inbox.",
  ],
  [
    "How do I embed it on my website?",
    "Paste one snippet before the closing </body> tag on any site — WordPress, Shopify, Webflow, Wix or custom HTML. The widget appears instantly with the same agent and answers as your WhatsApp.",
  ],
  [
    "How long until I’m live?",
    "Most businesses go live the same afternoon. Connect your channels, train the agent on your site and FAQs, test it in the playground, and switch it on. No long onboarding, no setup fees.",
  ],
  [
    "Can I try it before customers see it?",
    "Yes. The playground lets you chat with your agent in a safe sandbox and fine-tune its answers and tone before a single real customer interacts with it.",
  ],
  [
    "Can I cancel anytime?",
    "Absolutely. Start with a 14-day free trial, no setup fees, and cancel anytime — no lock-in contracts. Pricing is straightforward and in USD.",
  ],
];

function FaqItem({
  q,
  a,
  open,
  onClick,
  i,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
  i: number;
}) {
  return (
    <Reveal delay={(i % 4) * 40}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 text-left py-5 group"
      >
        <span className="text-[16.5px] font-semibold tracking-tight group-hover:text-brand-blue transition-colors">
          {q}
        </span>
        <span
          className={`flex-none w-8 h-8 rounded-full border border-line grid place-items-center text-mute transition-all duration-300 ${
            open ? "grad text-white border-transparent rotate-45" : "group-hover:border-brand-blue/40"
          }`}
        >
          <Ico.plus className="text-[16px]" />
        </span>
      </button>
      <div className={`acc-body ${open ? "open" : ""}`}>
        <div>
          <p className="pb-5 pr-12 text-[15px] text-mute leading-relaxed max-w-[680px]">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export const FAQ = ({
  hideHeader = false,
  items = faqs,
  id = "faq",
  compact = false,
}: {
  hideHeader?: boolean;
  items?: [string, string][];
  id?: string;
  compact?: boolean;
}) => {
  const [open, setOpen] = useState(0);
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 ${compact ? "py-6 md:py-8" : "py-14 md:py-16"}`}
    >
      <div className="max-w-[860px] mx-auto px-5 sm:px-8">
        {!hideHeader && (
          <Reveal className="text-center max-w-[560px] mx-auto">
            <Kicker center>FAQ</Kicker>
            <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.03em] leading-[1.08] text-balance">
              Questions, answered plainly.
            </h2>
          </Reveal>
        )}
        <div className={`${hideHeader ? "" : "mt-10 "}bg-white border border-line rounded-[24px] shadow-[0_1px_2px_rgba(17,24,39,0.04),0_20px_40px_-20px_rgba(17,24,39,0.08)] px-5 sm:px-8 divide-y divide-line`}>
          {items.map(([q, a], i) => (
            <FaqItem
              key={q}
              q={q}
              a={a}
              i={i}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
