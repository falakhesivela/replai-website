import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal } from "@/components/home/ui";

const diffs: [IcoName, string, string][] = [
  [
    "whatsapp",
    "WhatsApp-first by design",
    "Built for the channel your customers actually use every day — not bolted on as an afterthought.",
  ],
  [
    "shield",
    "POPIA-aware by default",
    "Privacy-conscious from the start, with encrypted conversations and data handling built for South African rules.",
  ],
  [
    "dollar",
    "Straightforward USD pricing",
    "Clear, predictable plans in USD. No setup fees, 14-day free trial, cancel anytime.",
  ],
  [
    "pin",
    "Made in Joburg",
    "Built here, for businesses here. And when you need us, a real person replies — not a ticket queue.",
  ],
];

export const SouthAfrica = () => (
  <section className="relative overflow-hidden bg-ink text-white py-14 md:py-16">
    <div
      className="pointer-events-none absolute -top-32 right-0 w-[520px] h-[520px] rounded-full blur-[90px] opacity-40"
      style={{ background: "radial-gradient(circle, rgba(31,182,239,0.4), transparent 70%)" }}
    />
    <div
      className="pointer-events-none absolute -bottom-40 -left-20 w-[480px] h-[480px] rounded-full blur-[90px] opacity-40"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 70%)" }}
    />
    <div className="pointer-events-none absolute inset-0 grain-noise opacity-[0.25] mix-blend-overlay" />

    <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <Reveal>
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-brand-cyan">
            🇿🇦 Local by default
          </div>
          <h2 className="mt-3 text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.07] text-balance">
            Built for South African business.
          </h2>
          <p className="mt-4 text-[16.5px] text-white/70 leading-relaxed max-w-[420px]">
            Not a global tool with a South African coat of paint. Replai is
            shaped around how customers here actually talk to the businesses they
            love.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 bg-white/8 border border-white/15 rounded-2xl px-4 py-3 backdrop-blur-sm">
            <span className="w-9 h-9 rounded-xl grad-soft grid place-items-center flex-none">
              <Ico.lock className="text-[18px]" />
            </span>
            <span className="text-[14px] text-white/85 leading-snug">
              Encrypted conversations · POPIA-aware data handling
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {diffs.map(([ic, title, desc], i) => {
            const Icon = Ico[ic];
            return (
              <Reveal
                key={title}
                delay={(i % 2) * 70}
                className="group bg-white/[0.06] border border-white/12 rounded-[20px] p-6 backdrop-blur-sm card-hover hover:bg-white/[0.09] hover:border-white/20"
              >
                <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center text-brand-cyan group-hover:grad-soft group-hover:text-white transition-all duration-300">
                  <Icon className="text-[20px]" />
                </span>
                <h3 className="mt-4 text-[16.5px] font-semibold tracking-tight">{title}</h3>
                <p className="mt-1.5 text-[14px] text-white/65 leading-relaxed">{desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
