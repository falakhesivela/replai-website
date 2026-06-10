import { I } from "@/components/icons";
import { PLANS } from "@/components/pricing/data";
import { SIGNUP_URL, SUPPORT_EMAIL } from "@/lib/site";

export const Tiers = ({ annual }: { annual: boolean }) => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
      {PLANS.map((p) => (
        <div
          key={p.name}
          className={`relative rounded-3xl p-7 flex flex-col border transition
            ${
              p.highlight
                ? "text-white border-transparent bg-brand-gradient shadow-glow lg:scale-[1.03] lg:-my-3 z-10"
                : "bg-white text-ink border-line shadow-soft"
            }`}
        >
          {p.highlight && (
            <>
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-brand-radial mix-blend-screen"></div>
                <div className="absolute inset-0 grain-dark opacity-50"></div>
              </div>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold bg-white text-brand-700 uppercase tracking-wider shadow-soft whitespace-nowrap">
                Most popular
              </span>
            </>
          )}
          <div className="relative flex items-center justify-between">
            <h3
              className={`text-lg font-bold ${p.highlight ? "text-white" : "text-ink"}`}
            >
              {p.name}
            </h3>
            {p.highlight && <span className="chip-dark">Recommended</span>}
          </div>
          <p
            className={`relative mt-2 text-sm text-pretty ${p.highlight ? "text-white/80" : "text-mute"}`}
          >
            {p.blurb}
          </p>
          <div className="relative mt-6 flex items-baseline gap-1">
            <span
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${p.highlight ? "text-white" : "text-ink"}`}
            >
              {annual ? p.price.annual : p.price.monthly}
            </span>
            {!p.custom && (
              <span
                className={`text-sm ${p.highlight ? "text-white/70" : "text-mute"}`}
              >
                /mo
              </span>
            )}
          </div>
          <div
            className={`relative text-[11px] ${p.highlight ? "text-white/70" : "text-mute"} mt-1`}
          >
            {p.custom
              ? "Tailored to your volume"
              : annual
                ? "billed annually · 20% off"
                : "billed monthly"}
          </div>
          {p.priceNote && (
            <div
              className={`relative mt-1 text-[11px] font-medium ${p.highlight ? "text-white/80" : "text-brand-600"}`}
            >
              {p.priceNote}
            </div>
          )}
          <a
            href={
              p.cta === "Talk to sales"
                ? `mailto:${SUPPORT_EMAIL}?subject=Replai%20Scale%20enquiry`
                : `${SIGNUP_URL}?plan=${p.key}&cycle=${annual ? "annual" : "monthly"}`
            }
            className={`relative mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition
              ${p.highlight ? "bg-white text-brand-700 hover:bg-brand-50" : "bg-ink hover:bg-ink/90 text-white"}`}
          >
            {p.cta} <I.Arrow className="h-4 w-4" />
          </a>
          <div
            className={`relative mt-5 text-[11px] font-semibold uppercase tracking-wider ${p.highlight ? "text-white/70" : "text-mute"}`}
          >
            What&apos;s included
          </div>
          <ul className="relative mt-3 space-y-2.5 text-sm flex-1">
            {p.included.map(([txt, yes], k) => (
              <li
                key={k}
                className={`flex items-start gap-2 ${yes ? "" : p.highlight ? "text-white/40" : "text-mute/70"}`}
              >
                <span
                  className={`mt-0.5 h-5 w-5 grid place-items-center rounded-full shrink-0 ${
                    yes
                      ? p.highlight
                        ? "bg-white text-brand-700"
                        : "bg-brand-50 text-brand-600"
                      : p.highlight
                        ? "bg-white/10 text-white/50"
                        : "bg-paper text-mute"
                  }`}
                >
                  {yes ? (
                    <I.Check className="h-3 w-3" />
                  ) : (
                    <I.X className="h-3 w-3" />
                  )}
                </span>
                <span
                  className={`leading-snug ${yes ? "" : "line-through"} ${p.highlight ? "text-white" : ""}`}
                >
                  {txt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="mt-6 text-center text-xs text-mute">
      Start with one channel or both — same AI agent, one inbox · WhatsApp
      plans include a monthly message allowance; extra messages are $0.04 each
      on your Replai invoice.
    </p>
  </section>
);
