import { Ico } from "@/components/home/icons";
import { Reveal, Btn, Pill } from "@/components/home/ui";
import { ChatWindow, type ChatMsg } from "@/components/home/chat-window";
import { SIGNUP_URL } from "@/lib/site";

const waMsgs: ChatMsg[] = [
  { from: "in", text: "Hi! Any space for a cut & blow wave on Saturday?", time: "09:14" },
  {
    from: "wa",
    text: "Hi Thandi 👋 We've got 10:30 or 14:00 with Lerato on Saturday. Want me to book one?",
    time: "09:14",
  },
  { from: "in", text: "10:30 please", time: "09:15" },
  {
    from: "wa",
    text: "Booked ✅ See you Saturday 10:30. I'll send a reminder the day before.",
    time: "09:15",
  },
];

const widgetMsgs: ChatMsg[] = [
  { from: "in", text: "Do you ship to Durban?", time: "now" },
  {
    from: "widget",
    text: "Yes! Durban delivery is 2–3 days. Want me to send a payment link for your cart?",
    time: "now",
  },
  { typing: true },
];

const cms = ["WordPress", "Shopify", "Webflow", "Wix"];

export const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    {/* ambient glow */}
    <div
      className="pointer-events-none absolute -top-48 -left-40 w-[520px] h-[520px] rounded-full blur-[90px] opacity-70"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.28), transparent 68%)" }}
    />
    <div
      className="pointer-events-none absolute -top-20 -right-44 w-[500px] h-[500px] rounded-full blur-[90px] opacity-70"
      style={{ background: "radial-gradient(circle, rgba(31,182,239,0.26), transparent 68%)" }}
    />
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[900px] h-[280px] rounded-full blur-[100px] opacity-40"
      style={{ background: "radial-gradient(circle, rgba(61,107,248,0.15), transparent 70%)" }}
    />
    <div className="pointer-events-none absolute inset-0 grain-noise opacity-[0.22] mix-blend-overlay" />

    <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 pt-10 sm:pt-12 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
        {/* copy */}
        <div className="text-center lg:text-left">
          <Reveal instant>
            <Pill>
              <span className="w-[18px] h-[18px] rounded-md grad grid place-items-center text-white">
                <Ico.bolt className="text-[11px]" />
              </span>
              One agent · WhatsApp + your website
            </Pill>
          </Reveal>
          <Reveal instant delay={40}>
            <h1 className="mt-5 text-[clamp(2rem,5.2vw,3.375rem)] leading-[1.06] font-bold tracking-[-0.035em] text-balance">
              Answer every customer in seconds — on{" "}
              <span className="grad-text">WhatsApp</span> and your site.
            </h1>
          </Reveal>
          <Reveal instant delay={80}>
            <p className="mt-5 text-[17px] sm:text-[17.5px] text-mute max-w-[480px] mx-auto lg:mx-0 leading-[1.6]">
              Replai is one AI agent on your WhatsApp Business number and your
              website widget. Same answers, one shared inbox. It books, sells,
              and hands clean context to your team the moment a real person is
              needed.
            </p>
          </Reveal>
          <Reveal instant delay={120}>
            <div className="mt-7 flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <Btn variant="grad" href={SIGNUP_URL}>
                Start free trial
              </Btn>
              <Btn variant="ghost" href="/how-it-works" icon>
                See how it works
              </Btn>
            </div>
          </Reveal>
          <Reveal instant delay={160}>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-mute justify-center lg:justify-start">
              {["14-day free trial", "No setup fees", "Cancel anytime"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Ico.check className="text-brand-blue text-[15px]" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal instant delay={200}>
            <div className="mt-9 pt-6 border-t border-line/80 flex flex-col sm:flex-row flex-wrap items-center lg:items-start gap-3 sm:gap-4">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-mute shrink-0">
                Drops onto
              </span>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {cms.map((c) => (
                  <span
                    key={c}
                    className="text-[12.5px] font-medium text-ink/75 bg-white/80 border border-line rounded-lg px-2.5 py-1 shadow-[0_1px_2px_rgba(17,24,39,0.04)]"
                  >
                    {c}
                  </span>
                ))}
                <span className="text-[12px] text-mute self-center px-1">
                  + any site, one snippet
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* chat stack */}
        <Reveal instant delay={100} className="relative mt-4 lg:mt-0">
          <div className="relative max-w-[420px] mx-auto lg:max-w-none lg:mx-0 lg:ml-auto">
            <div className="absolute -top-4 sm:-top-5 right-4 sm:right-6 z-20 floaty bg-white/95 border border-line rounded-2xl shadow-[0_16px_30px_-14px_rgba(17,24,39,0.25)] px-3.5 py-2.5 flex items-center gap-2.5 text-[12.5px] font-medium backdrop-blur-sm">
              <span className="w-[26px] h-[26px] rounded-lg grad grid place-items-center text-white">
                <Ico.bolt className="text-[13px]" />
              </span>
              Replies in seconds · 24/7
            </div>
            <div
              className="relative z-10 floaty-slow lg:transform-[rotate(-2deg)]"
            >
              <ChatWindow
                kind="wa"
                name="Bloom Hair Studio"
                sub="Replai · online"
                tag="WhatsApp"
                msgs={waMsgs}
              />
            </div>
            <div className="relative z-30 w-[88%] sm:w-[80%] ml-auto -mt-6 sm:-mt-8 floaty lg:transform-[rotate(2.5deg)]">
              <ChatWindow
                kind="widget"
                name="Chat with us"
                sub="Typically replies instantly"
                tag="Website"
                msgs={widgetMsgs}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
