import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal, Kicker } from "@/components/home/ui";

const features: [IcoName, string, string][] = [
  ["calendar", "Books appointments", "Checks your availability, books, confirms and sends reminders — straight inside the chat."],
  ["cart", "Sells with payment links", "Shares your catalogue, answers product questions and sends secure payment links to close the sale."],
  ["leads", "Qualifies & captures leads", "Asks the right questions, captures contact details and tags every lead so none slip away after hours."],
  ["handoff", "Clean human handoff", "Escalates to the right person with the full conversation and context attached — live takeover in one tap."],
  ["brain", "Trains on your knowledge", "Crawl your site, upload PDFs and FAQs. Replai learns your business and answers in your brand’s tone."],
  ["play", "Playground to test first", "Try your agent in a safe sandbox and tune its answers before a single customer sees it."],
  ["inbox", "One unified inbox", "WhatsApp and website conversations in a single shared inbox, with live takeover whenever you want."],
  ["megaphone", "Broadcast campaigns", "Send promos, reminders and announcements to your audience — then let Replai handle the replies."],
  ["chart", "Analytics that matter", "Track reply time, CSAT, leads and bookings — see exactly what the agent is doing for the business."],
  ["clock", "Business-hours scheduling", "Set when humans are around. Replai covers the rest, 24/7, and knows when to say “we open at 9”."],
  ["agency", "Team, departments & roles", "Add your staff, split into departments and set permissions — route chats to the right people."],
  ["globe", "Agency mode", "Manage many clients’ agents from one place — perfect for studios running Replai for local businesses."],
];

function FeatureCard({
  ic,
  title,
  desc,
  i,
}: {
  ic: IcoName;
  title: string;
  desc: string;
  i: number;
}) {
  const Icon = Ico[ic];
  return (
    <Reveal
      delay={(i % 3) * 60}
      className="group relative bg-paper/80 border border-line rounded-[18px] p-5 sm:p-6 card-hover hover:border-brand-blue/30 hover:bg-white hover:shadow-[0_20px_44px_-28px_rgba(61,107,248,0.35)]"
    >
      <div
        className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 0%, rgba(61,107,248,0.06), transparent 60%)",
        }}
      />
      <div className="relative">
        <span className="w-11 h-11 rounded-xl bg-paper border border-line grid place-items-center text-brand-blue group-hover:grad group-hover:text-white group-hover:border-transparent transition-all duration-300">
          <Icon className="text-[20px]" />
        </span>
        <h3 className="mt-4 text-[16.5px] font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-[14px] text-mute leading-relaxed">{desc}</p>
      </div>
    </Reveal>
  );
}

export const Features = ({ hideHeader = false }: { hideHeader?: boolean }) => (
  <section
    id="features"
    className="relative py-14 md:py-16 scroll-mt-16"
  >
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
      <div className="rounded-[28px] bg-white border border-line shadow-[0_1px_2px_rgba(17,24,39,0.04),0_24px_48px_-24px_rgba(17,24,39,0.08)] px-6 sm:px-10 py-10 md:py-12">
      {!hideHeader && (
        <Reveal className="max-w-[640px]">
          <Kicker>Everything it does</Kicker>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.03em] leading-[1.08] text-balance">
            One agent, the workload of a whole front desk.
          </h2>
          <p className="mt-4 text-[16.5px] text-mute leading-relaxed">
            From the first hello to the closed sale, Replai covers the repetitive
            work end-to-end — and keeps a human in the loop wherever it counts.
          </p>
        </Reveal>
      )}

      <div className={`${hideHeader ? "" : "mt-12 "}grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}>
        {features.map(([ic, title, desc], i) => (
          <FeatureCard key={title} ic={ic} title={title} desc={desc} i={i} />
        ))}
      </div>
      </div>
    </div>
  </section>
);
