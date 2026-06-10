import { Ico, type IcoName } from "@/components/home/icons";
import { Reveal, Kicker } from "@/components/home/ui";
import { SiteLink } from "@/components/site-link";

const templates: [IcoName, string, string, string][] = [
  ["scissors", "Salon", "Bookings & reminders", "salon"],
  ["fork", "Restaurant", "Tables & menus", "restaurant"],
  ["bag", "Online store", "Catalogue & payments", "store"],
  ["cross", "Clinic", "Appointments & intake", "clinic"],
  ["home", "Real estate", "Listings & viewings", "realestate"],
  ["dumbbell", "Gym", "Sign-ups & classes", "gym"],
  ["wrench", "General service", "Quotes & callbacks", "service"],
];

export const Templates = () => (
  <section id="templates" className="relative py-14 md:py-16 overflow-hidden scroll-mt-16">
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
      <Reveal className="max-w-[640px]">
        <Kicker>7 industry templates</Kicker>
        <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.03em] leading-[1.08] text-balance">
          Start from a template that already speaks your trade.
        </h2>
        <p className="mt-4 text-[16.5px] text-mute leading-relaxed">
          Pick your industry and Replai comes pre-loaded with the right
          questions, flows and tone. Tweak from there — you’re not starting from
          a blank page.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
        {templates.map(([ic, name, sub, slug], i) => {
          const Icon = Ico[ic];
          return (
            <Reveal key={name} delay={(i % 4) * 50}>
              <SiteLink
                href={`/templates#${slug}`}
                className="group block bg-white border border-line rounded-[18px] p-4 sm:p-5 text-center card-hover hover:border-brand-blue/40 hover:shadow-[0_20px_44px_-28px_rgba(61,107,248,0.45)]"
              >
                <span className="mx-auto w-12 h-12 rounded-xl bg-paper border border-line grid place-items-center text-brand-blue group-hover:grad group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <Icon className="text-[22px]" />
                </span>
                <div className="mt-3 font-semibold text-[14.5px] tracking-tight">{name}</div>
                <div className="mt-0.5 text-[11.5px] text-mute leading-tight">{sub}</div>
              </SiteLink>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
