import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FinalCTA } from "@/components/home/final-cta";
import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal, Kicker } from "@/components/home/ui";
import {
  COMPANY_NAME,
  COMPANY_REG,
  COMPANY_SITE,
  COMPANY_SITE_LABEL,
  SUPPORT_EMAIL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Replai",
  description:
    "Replai is the WhatsApp and website AI customer-conversation platform built and operated by Bila Automation (Pty) Ltd for South African businesses.",
};

const BELIEFS: [IcoName, string, string][] = [
  [
    "whatsapp",
    "Meet customers where they are",
    "South Africa runs on WhatsApp. A tool that ignores that isn't built for businesses here — so we started there, not bolted it on.",
  ],
  [
    "handoff",
    "AI should hand over, not take over",
    "Replai exists to give teams their evenings back, not their jobs. A human is always one tap away, with the full story attached.",
  ],
  [
    "shield",
    "Local rules, local respect",
    "POPIA-aware defaults, encrypted conversations, and support from people who understand the businesses we serve.",
  ],
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Replai"
        title={
          <>
            Built in South Africa,{" "}
            <span className="grad-text">for South African businesses.</span>
          </>
        }
        lede="Replai started with a simple frustration: local businesses lose customers every night and weekend because nobody is there to answer WhatsApp or the website chat."
      />

      <section className="relative py-12 md:py-16">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <Kicker>What we do</Kicker>
              <h2 className="mt-3 text-[clamp(26px,3.6vw,38px)] font-bold tracking-[-0.03em] leading-[1.1] text-balance">
                One AI agent. Two channels. Zero missed customers.
              </h2>
              <div className="mt-5 space-y-4 text-[15.5px] text-mute leading-relaxed">
                <p>
                  Replai is one AI agent that lives on your WhatsApp Business
                  number and as a chat widget on your site. It answers, books,
                  sells, qualifies and escalates to your team — on both
                  channels, from one inbox.
                </p>
                <p>
                  It&rsquo;s not a global tool with a South African coat of
                  paint. It&rsquo;s shaped around how customers here actually
                  talk to the businesses they love — the salon, the clinic, the
                  store down the road.
                </p>
                <p>
                  We&rsquo;re early and we listen. Reach the team at{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
                  >
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  — a real person replies.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-4">
              {BELIEFS.map(([ic, t, d], i) => {
                const Icon = Ico[ic];
                return (
                  <Reveal
                    key={t}
                    delay={i * 70}
                    className="flex items-start gap-4 bg-white border border-line rounded-[18px] p-5"
                  >
                    <span className="flex-none w-11 h-11 rounded-xl grad grid place-items-center text-white">
                      <Icon className="text-[20px]" />
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-semibold tracking-tight">
                        {t}
                      </h3>
                      <p className="mt-1 text-[13.5px] text-mute leading-relaxed">
                        {d}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={60} className="mt-12">
            <div className="rounded-[22px] bg-white border border-line p-6 sm:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-mute">
                  Who builds Replai
                </div>
                <p className="mt-2.5 text-[14.5px] text-mute leading-relaxed max-w-[680px]">
                  Replai is a product built and operated by{" "}
                  <a
                    href={COMPANY_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline underline-offset-2 hover:text-brand-600 transition-colors"
                  >
                    {COMPANY_NAME}
                  </a>{" "}
                  (registration number {COMPANY_REG}), a custom-AI software
                  company registered in South Africa and based in Johannesburg.
                  Bila Automation is the registered legal entity responsible for
                  the Replai platform, its WhatsApp Business integration and its
                  website chat widget.
                </p>
              </div>
              <a
                href={COMPANY_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-brand-600 hover:text-brand-700 transition-colors whitespace-nowrap"
              >
                {COMPANY_SITE_LABEL} <Ico.arrow className="text-[14px]" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
