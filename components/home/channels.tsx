import type { ReactNode } from "react";
import { Ico } from "@/components/home/icons";
import { Reveal, Kicker } from "@/components/home/ui";
import { ChatWindow, type ChatMsg } from "@/components/home/chat-window";

const chWa: ChatMsg[] = [
  { from: "in", text: "Hey, what time do you close today?", time: "17:32" },
  {
    from: "wa",
    text: "We’re open till 19:00 today 🙌 Want me to book you in before then?",
    time: "17:32",
  },
  { from: "in", text: "Yes, a beard trim around 6", time: "17:33" },
  { from: "wa", text: "Done ✅ 18:00 beard trim with Junaid. See you just now!", time: "17:33" },
];

const chWidget: ChatMsg[] = [
  { from: "in", text: "Is the linen dress in stock in a medium?", time: "now" },
  {
    from: "widget",
    text: "It is! R650, medium available. Here’s a secure payment link to check out 👇",
    time: "now",
  },
  { from: "widget", text: "🔗 pay.replai.co/d8f2 — free delivery over R800", time: "now" },
];

const snippet = `<script src="https://cdn.replai.co/widget.js"
  data-agent="bloom-studio"></script>`;

function ChannelCard({
  kind,
  icon,
  eyebrow,
  title,
  desc,
  chat,
}: {
  kind: "wa" | "widget";
  icon: ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
  chat: { name: string; sub: string; tag: string; msgs: ChatMsg[] };
}) {
  return (
    <Reveal className="group relative bg-white border border-line rounded-[24px] p-6 sm:p-7 card-hover hover:border-brand-blue/30 hover:shadow-[0_30px_60px_-30px_rgba(61,107,248,0.35)]">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`w-11 h-11 rounded-xl grid place-items-center text-white ${
            kind === "wa" ? "bg-wa" : "grad"
          }`}
        >
          {icon}
        </span>
        <div>
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-mute">
            {eyebrow}
          </div>
          <h3 className="text-[19px] font-semibold tracking-tight">{title}</h3>
        </div>
      </div>
      <p className="text-[15px] text-mute leading-relaxed mb-5">{desc}</p>
      <ChatWindow
        kind={kind}
        {...chat}
        shadow={false}
        className="shadow-[0_18px_40px_-26px_rgba(17,24,39,0.4)]"
      />
    </Reveal>
  );
}

export const Channels = () => (
  <section id="channels" className="relative py-14 md:py-16">
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
      <Reveal className="max-w-[640px]">
        <Kicker>Two channels · one agent</Kicker>
        <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.03em] leading-[1.08] text-balance">
          The same agent, the same answers — wherever your customers message you.
        </h2>
        <p className="mt-4 text-[16.5px] text-mute leading-relaxed">
          Train it once. Replai works your WhatsApp Business number and your
          website widget from one shared brain and one inbox — so nobody gets a
          different story.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <ChannelCard
          kind="wa"
          icon={<Ico.whatsappFill className="text-[20px]" />}
          eyebrow="WhatsApp Business"
          title="On the number they already use"
          desc="South Africa runs on WhatsApp. Replai answers there in seconds, books appointments and confirms — no app to download, no new habit to learn."
          chat={{
            name: "Fade & Co. Barbers",
            sub: "Replai · online",
            tag: "WhatsApp",
            msgs: chWa,
          }}
        />
        <ChannelCard
          kind="widget"
          icon={<Ico.widget className="text-[20px]" />}
          eyebrow="Website widget"
          title="On your site, in one snippet"
          desc="Drop one line of code on any site and the same agent greets visitors, answers questions and sends payment links — turning browsers into bookings."
          chat={{
            name: "Chat with us",
            sub: "Typically replies instantly",
            tag: "Website",
            msgs: chWidget,
          }}
        />
      </div>

      {/* embed snippet */}
      <Reveal delay={80} className="mt-7">
        <div className="bg-ink rounded-2xl overflow-hidden border border-ink/10 shadow-[0_24px_50px_-28px_rgba(17,24,39,0.5)]">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11.5px] text-white/50">index.html</span>
            <span className="ml-auto font-mono text-[11px] text-brand-cyan flex items-center gap-1.5">
              <Ico.check className="text-[13px]" /> live in 30 seconds
            </span>
          </div>
          <pre className="px-5 py-4 font-mono text-[12.5px] sm:text-[13px] text-white/85 overflow-x-auto leading-relaxed">
            <span className="text-white/40">{"<!-- paste before </body> -->"}</span>
            {"\n"}
            {snippet}
          </pre>
        </div>
      </Reveal>
    </div>
  </section>
);
