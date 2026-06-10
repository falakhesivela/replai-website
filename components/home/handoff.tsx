import { Ico } from "@/components/home/icons";
import { Reveal, Kicker } from "@/components/home/ui";
import { ChatWindow, type ChatMsg } from "@/components/home/chat-window";

const handoffMsgs: ChatMsg[] = [
  { from: "in", text: "Do you do bridal packages for a group of 6?", time: "14:02" },
  {
    from: "wa",
    text: "We do 💐 Bridal parties get a private suite + bubbly. This one’s worth a proper chat — let me bring in Lindiwe.",
    time: "14:02",
  },
  { handoff: "Lindiwe joined · full conversation shared" },
  {
    human: {
      who: "Lindiwe · Owner",
      text: "Hi! So exciting 🎉 I’ve got your dates and party size already — let’s build the perfect morning for you.",
      time: "14:04",
    },
  },
];

const points: [string, string][] = [
  [
    "Handles the repetitive 80%",
    "Opening hours, prices, bookings, stock, directions, order status — answered instantly, every time, in your tone.",
  ],
  [
    "Your people get the 20% that matters",
    "The high-value, high-emotion moments — big quotes, complaints, bridal parties — land with a human who has the full thread.",
  ],
  [
    "Nobody repeats themselves",
    "When Replai escalates, it passes the entire conversation and context. Your team picks up mid-sentence, not from scratch.",
  ],
];

const pointIcons = [
  <Ico.boltLine key="a" className="text-[18px]" />,
  <Ico.handoff key="b" className="text-[18px]" />,
  <Ico.brain key="c" className="text-[18px]" />,
];

export const Handoff = () => (
  <section className="relative overflow-hidden py-14 md:py-16">
    <div
      className="pointer-events-none absolute top-20 -left-40 w-[420px] h-[420px] rounded-full blur-[80px] opacity-50"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)" }}
    />
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
        {/* copy */}
        <div>
          <Reveal>
            <Kicker>People-first AI</Kicker>
            <h2 className="mt-3 text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.07] text-balance">
              Replai handles the busywork so your people do the work that matters.
            </h2>
            <p className="mt-4 text-[16.5px] text-mute leading-relaxed max-w-[480px]">
              It’s not here to replace your team — it’s here to give them their
              evenings back. A real person is always one tap away, and they
              arrive already knowing the whole story.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-5">
            {points.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="flex gap-4">
                <span className="mt-0.5 w-9 h-9 flex-none rounded-xl bg-brand-blue/10 text-brand-blue grid place-items-center">
                  {pointIcons[i]}
                </span>
                <div>
                  <div className="font-semibold text-[16px] tracking-tight">{t}</div>
                  <div className="text-[14.5px] text-mute leading-relaxed mt-0.5">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* chat with handoff */}
        <Reveal delay={120} className="relative">
          <div className="absolute -inset-4 grad opacity-[0.06] rounded-[32px] blur-xl" />
          <div className="relative max-w-[440px] mx-auto">
            <ChatWindow
              kind="wa"
              name="Lindiwe’s Beauty Bar"
              sub="Replai · online"
              tag="WhatsApp"
              msgs={handoffMsgs}
            />
            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
              AI answered in 4 seconds · human took over in 1 tap
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
