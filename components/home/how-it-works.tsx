import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal, Kicker, Btn } from "@/components/home/ui";
import { SIGNUP_URL } from "@/lib/site";

const steps: [string, string, IcoName][] = [
  [
    "Connect both channels",
    "Link your WhatsApp Business number and paste one snippet on your site. Same agent, both places — no developer required.",
    "widget",
  ],
  [
    "Train your agent",
    "Crawl your website, upload PDFs and FAQs, pick from 7 industry templates. Replai learns your prices, services and tone.",
    "brain",
  ],
  [
    "Go live",
    "Test it in the playground, then flip it on. Most businesses are answering real customers the same afternoon.",
    "bolt",
  ],
];

export const HowItWorks = ({ hideHeader = false }: { hideHeader?: boolean }) => (
  <section id="how" className="relative py-14 md:py-16 scroll-mt-16 overflow-hidden">
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
      {!hideHeader && (
        <Reveal className="max-w-[640px]">
          <Kicker>How it works</Kicker>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.03em] leading-[1.08] text-balance">
            Live in one afternoon. Really.
          </h2>
          <p className="mt-4 text-[16.5px] text-mute leading-relaxed">
            No long onboarding, no agency fees. Three steps from signing up to
            answering your first customer automatically.
          </p>
        </Reveal>
      )}

      <div className={`${hideHeader ? "" : "mt-14 "}relative grid md:grid-cols-3 gap-6 md:gap-5`}>
        {/* connecting line */}
        <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-linear-to-r from-brand-violet/40 via-brand-blue/40 to-brand-cyan/40" />
        {steps.map(([title, desc, ic], i) => {
          const Icon = Ico[ic];
          return (
            <Reveal key={title} delay={i * 90} className="relative">
              <div className="flex md:flex-col items-start gap-4">
                <div className="relative z-10 flex-none w-14 h-14 rounded-2xl grad grid place-items-center text-white shadow-[0_10px_24px_-8px_rgba(61,107,248,0.55)]">
                  <Icon className="text-[24px]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-line grid place-items-center font-mono text-[11px] font-semibold text-ink">
                    {i + 1}
                  </span>
                </div>
                <div className="md:mt-5">
                  <h3 className="text-[19px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[15px] text-mute leading-relaxed max-w-[330px]">
                    {desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-12 flex flex-wrap items-center gap-4">
        <Btn variant="grad" href={SIGNUP_URL}>
          Start free trial
        </Btn>
        <span className="font-mono text-[12.5px] text-mute flex items-center gap-2">
          <Ico.check className="text-brand-blue text-[15px]" /> No setup fees · go
          live the same day
        </span>
      </Reveal>
    </div>
  </section>
);
