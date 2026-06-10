import { marketingMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { FinalCTA } from "@/components/home/final-cta";
import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal, Btn } from "@/components/home/ui";
import { SIGNUP_URL } from "@/lib/site";

export const metadata = marketingMetadata({
  title: "Industry templates — Replai",
  description:
    "Start from a pre-built template for salons, restaurants, online stores, clinics, real estate, gyms, and general service businesses.",
  path: "/templates",
});

type Template = {
  slug: string;
  icon: IcoName;
  name: string;
  tag: string;
  blurb: string;
  bullets: string[];
  sample: { q: string; a: string };
};

const TEMPLATES: Template[] = [
  {
    slug: "salon",
    icon: "scissors",
    name: "Salon & barber",
    tag: "Bookings & reminders",
    blurb:
      "Fills the chair while you're behind it — books, confirms and reminds so no-shows stop eating your day.",
    bullets: [
      "Service menu with durations & prices",
      "Booking flow with stylist selection",
      "Automatic confirmations & reminders",
    ],
    sample: {
      q: "Any space for a cut & colour on Saturday?",
      a: "We've got 10:30 or 14:00 with Lerato on Saturday — want me to book one? 💇",
    },
  },
  {
    slug: "restaurant",
    icon: "fork",
    name: "Restaurant",
    tag: "Tables & menus",
    blurb:
      "Answers the dinner rush — menus, dietary questions, table bookings and directions, while your floor staff serve.",
    bullets: [
      "Menu questions incl. dietary info",
      "Table reservations & group bookings",
      "Hours, parking & directions",
    ],
    sample: {
      q: "Do you have vegan options? Table for 6 tonight?",
      a: "We do — 4 vegan mains 🌱 I can book you at 19:00 or 20:30 for 6. Which works?",
    },
  },
  {
    slug: "store",
    icon: "bag",
    name: "Online store",
    tag: "Catalogue & payments",
    blurb:
      "Turns product questions into paid orders — stock checks, sizes, delivery info and secure payment links in chat.",
    bullets: [
      "Catalogue search & stock answers",
      "Payment links to close the sale",
      "Delivery, returns & order status",
    ],
    sample: {
      q: "Is the linen dress in stock in a medium?",
      a: "It is! R650, medium available. Here's a secure payment link to check out 👇",
    },
  },
  {
    slug: "clinic",
    icon: "cross",
    name: "Clinic & practice",
    tag: "Appointments & intake",
    blurb:
      "Books appointments and handles intake politely and privately — and knows when a question needs a professional.",
    bullets: [
      "Appointment booking & rescheduling",
      "Pre-visit intake questions",
      "Escalates medical questions to staff",
    ],
    sample: {
      q: "Can I see the dentist this week? It's not urgent.",
      a: "Of course — Dr Naidoo has Thursday 11:00 or Friday 15:30 open. Shall I book one?",
    },
  },
  {
    slug: "realestate",
    icon: "home",
    name: "Real estate",
    tag: "Listings & viewings",
    blurb:
      "Qualifies buyers and tenants before they reach an agent — budget, area, timing — and books the viewing.",
    bullets: [
      "Listing questions & availability",
      "Lead qualification (budget, area)",
      "Viewing bookings for agents",
    ],
    sample: {
      q: "Is the 2-bed in Parkhurst still available?",
      a: "It is — R1.85m, pet-friendly. I can book you a viewing Saturday morning. Interested?",
    },
  },
  {
    slug: "gym",
    icon: "dumbbell",
    name: "Gym & studio",
    tag: "Sign-ups & classes",
    blurb:
      "Signs up members at 22:00 when motivation strikes — plans, class schedules and trial sessions, instantly.",
    bullets: [
      "Membership plans & pricing",
      "Class schedules & booking",
      "Free trial sign-ups",
    ],
    sample: {
      q: "How much is a monthly membership? Any joining fee?",
      a: "R450/month, no joining fee this month 💪 Want me to book you a free first session?",
    },
  },
  {
    slug: "service",
    icon: "wrench",
    name: "General service",
    tag: "Quotes & callbacks",
    blurb:
      "For plumbers, electricians, cleaners and every trade — captures the job details and books the callback.",
    bullets: [
      "Job detail capture (what, where, when)",
      "Quote requests routed to you",
      "Callback scheduling",
    ],
    sample: {
      q: "Geyser is leaking — can someone come today?",
      a: "Sorry to hear that! I've logged it as urgent 🚨 What's your area? I'll get you a callback within 30 min.",
    },
  },
];

function TemplateCard({ t, i }: { t: Template; i: number }) {
  const Icon = Ico[t.icon];
  return (
    <Reveal
      delay={(i % 3) * 60}
      className="group relative flex flex-col bg-white border border-line rounded-[22px] p-6 card-hover hover:border-brand-blue/30 hover:shadow-[0_24px_50px_-30px_rgba(61,107,248,0.4)]"
    >
      <div id={t.slug} className="absolute -top-24" aria-hidden />
      <div className="flex items-center gap-3">
        <span className="flex-none w-11 h-11 rounded-xl bg-paper border border-line grid place-items-center text-brand-blue group-hover:grad group-hover:text-white group-hover:border-transparent transition-all duration-300">
          <Icon className="text-[20px]" />
        </span>
        <div>
          <h2 className="text-[17px] font-semibold tracking-tight leading-tight">
            {t.name}
          </h2>
          <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-mute mt-0.5">
            {t.tag}
          </div>
        </div>
      </div>
      <p className="mt-3.5 text-[14px] text-mute leading-relaxed">{t.blurb}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {t.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[13.5px] text-[#374151]">
            <Ico.check className="text-brand-blue text-[14px] flex-none mt-0.5" />
            <span className="leading-snug">{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 pt-4 border-t border-line/80 flex flex-col gap-2">
        <div className="self-start max-w-[88%] bg-paper border border-line rounded-[14px] rounded-bl-[4px] px-3 py-2 text-[12.5px] text-ink leading-snug">
          {t.sample.q}
        </div>
        <div className="self-end max-w-[88%] grad text-white rounded-[14px] rounded-br-[4px] px-3 py-2 text-[12.5px] leading-snug shadow-[0_6px_14px_-6px_rgba(61,107,248,0.5)]">
          {t.sample.a}
        </div>
      </div>
    </Reveal>
  );
}

const STEPS: [IcoName, string, string][] = [
  [
    "play",
    "Pick your template",
    "Choose your industry at signup. Greeting, flows, tone and the right questions come pre-loaded.",
  ],
  [
    "brain",
    "Make it yours",
    "Add your prices, services and policies — crawl your site or upload PDFs. Replai speaks your brand.",
  ],
  [
    "bolt",
    "Test, then go live",
    "Chat with your agent in the playground until it sounds right, then switch it on. Same afternoon.",
  ],
];

export default function TemplatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="7 industry templates"
        title={
          <>
            Start from a template that{" "}
            <span className="grad-text">already speaks your trade.</span>
          </>
        }
        lede="Pick your industry and Replai comes pre-loaded with the right questions, flows and tone. Tweak from there — you're not starting from a blank page."
      >
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Btn variant="grad" href={SIGNUP_URL} icon>
            Start free trial
          </Btn>
          <Btn variant="ghost" href="/pricing">
            See pricing
          </Btn>
        </div>
      </PageHero>

      <section className="relative py-12 md:py-16">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEMPLATES.map((t, i) => (
              <TemplateCard key={t.slug} t={t} i={i} />
            ))}
            <Reveal
              delay={60}
              className="relative flex flex-col justify-center items-center text-center rounded-[22px] p-6 grad text-white overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 grain-noise opacity-[0.22] mix-blend-overlay" />
              <Ico.spark className="relative text-[26px]" />
              <h2 className="relative mt-3 text-[18px] font-semibold tracking-tight">
                Don&rsquo;t see your industry?
              </h2>
              <p className="relative mt-2 text-[13.5px] text-white/85 leading-relaxed max-w-[260px]">
                Start from the general service template and train it on your
                knowledge — Replai adapts to any business that answers
                customers.
              </p>
              <Btn variant="white" href={SIGNUP_URL} className="relative mt-5">
                Build your agent
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="rounded-[28px] bg-white border border-line shadow-[0_1px_2px_rgba(17,24,39,0.04),0_24px_48px_-24px_rgba(17,24,39,0.08)] px-6 sm:px-10 py-10 md:py-12">
            <Reveal className="text-center max-w-[560px] mx-auto">
              <h2 className="text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.03em] leading-tight text-balance">
                Every template is a head start, not a cage.
              </h2>
              <p className="mt-3 text-[15.5px] text-mute leading-relaxed">
                Templates set the starting flows and tone — everything stays
                editable, and your own knowledge always comes first.
              </p>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {STEPS.map(([ic, title, desc], i) => {
                const Icon = Ico[ic];
                return (
                  <Reveal key={title} delay={i * 80} className="flex items-start gap-4">
                    <span className="relative flex-none w-12 h-12 rounded-2xl grad grid place-items-center text-white shadow-[0_10px_24px_-8px_rgba(61,107,248,0.55)]">
                      <Icon className="text-[20px]" />
                      <span className="absolute -top-2 -right-2 w-5.5 h-5.5 rounded-full bg-white border border-line grid place-items-center font-mono text-[10.5px] font-semibold text-ink">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
                      <p className="mt-1.5 text-[13.5px] text-mute leading-relaxed">{desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
