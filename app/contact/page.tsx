import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal } from "@/components/home/ui";
import { SiteLink } from "@/components/site-link";
import {
  COMPANY_NAME,
  COMPANY_REG,
  COMPANY_SITE,
  COMPANY_SITE_LABEL,
  SUPPORT_EMAIL,
  LOGIN_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Replai",
  description: "Get in touch with the Replai team in Johannesburg.",
};

type Channel = {
  icon: IcoName;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

const CHANNELS: Channel[] = [
  {
    icon: "spark",
    title: "Sales & general",
    desc: "Questions about the product, pricing, or whether Replai fits your business. We reply within one business day.",
    cta: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: "shield",
    title: "Privacy & POPIA",
    desc: "Data-subject requests, DPAs and privacy questions go straight to the people responsible for them.",
    cta: "privacy@replai.co.za",
    href: "mailto:privacy@replai.co.za",
  },
  {
    icon: "handoff",
    title: "Already a customer?",
    desc: "The fastest route is support inside your dashboard — or simply reply to any email from our team.",
    cta: "Open your dashboard",
    href: LOGIN_URL,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="grad-text">a real person.</span>
          </>
        }
        lede="No ticket queues, no chatbots guarding the door (ironic, we know). A human in Johannesburg reads every message — usually within one business day."
      />

      <section className="relative py-12 md:py-16">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {CHANNELS.map((c, i) => {
              const Icon = Ico[c.icon];
              return (
                <Reveal
                  key={c.title}
                  delay={i * 70}
                  className="group flex flex-col bg-white border border-line rounded-[22px] p-6 sm:p-7 card-hover hover:border-brand-blue/30 hover:shadow-[0_24px_50px_-30px_rgba(61,107,248,0.4)]"
                >
                  <span className="w-11 h-11 rounded-xl bg-paper border border-line grid place-items-center text-brand-blue group-hover:grad group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Icon className="text-[20px]" />
                  </span>
                  <h2 className="mt-4 text-[17px] font-semibold tracking-tight">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-[14px] text-mute leading-relaxed flex-1">
                    {c.desc}
                  </p>
                  <a
                    href={c.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {c.cta} <Ico.arrow className="text-[14px]" />
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={80} className="mt-8">
            <div className="rounded-[22px] bg-white border border-line p-6 sm:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-mute">
                  Registered company
                </div>
                <p className="mt-2.5 text-[14.5px] text-mute leading-relaxed max-w-[640px]">
                  Replai is built and operated by{" "}
                  <a
                    href={COMPANY_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline underline-offset-2 hover:text-brand-600 transition-colors"
                  >
                    {COMPANY_NAME}
                  </a>
                  , a software company registered in South Africa (registration
                  number {COMPANY_REG}) and based in Johannesburg.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-[13.5px] text-mute md:text-right">
                <span className="inline-flex md:justify-end items-center gap-2">
                  <Ico.pin className="text-brand-blue text-[15px]" /> Johannesburg,
                  South Africa
                </span>
                <a
                  href={COMPANY_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex md:justify-end items-center gap-2 hover:text-ink transition-colors"
                >
                  <Ico.globe className="text-brand-blue text-[15px]" />{" "}
                  {COMPANY_SITE_LABEL}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-8 text-center text-[14px] text-mute">
            Looking for answers right now? Try the{" "}
            <SiteLink
              href="/faq"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              FAQ
            </SiteLink>{" "}
            — most setup and pricing questions are covered there.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
