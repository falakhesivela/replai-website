import { Ico } from "@/components/home/icons";
import { Reveal, Btn } from "@/components/home/ui";
import { SIGNUP_URL, SUPPORT_EMAIL } from "@/lib/site";

export const FinalCTA = ({ id = "get-started" }: { id?: string }) => (
  <section id={id} className="relative overflow-hidden scroll-mt-16">
    <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-[32px] grad text-white px-6 sm:px-14 py-12 md:py-16 text-center shadow-[0_40px_90px_-40px_rgba(30,11,111,0.6)]">
        <div className="pointer-events-none absolute inset-0 grain-noise opacity-[0.25] mix-blend-overlay" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full blur-[80px] opacity-50"
          style={{ background: "radial-gradient(circle, rgba(31,182,239,0.55), transparent 70%)" }}
        />
        <Reveal className="relative">
          <span className="inline-flex items-center gap-2 text-[12.5px] font-medium bg-white/12 border border-white/25 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9fe8ff]" /> A real
            person replies · made in Joburg
          </span>
          <h2 className="mt-6 text-[clamp(30px,5vw,52px)] font-bold tracking-[-0.035em] leading-[1.04] max-w-[760px] mx-auto text-balance">
            Stop losing customers after hours.
          </h2>
          <p className="mt-5 text-[17.5px] text-white/80 max-w-[520px] mx-auto leading-relaxed">
            Give every customer an answer in seconds — on WhatsApp and your site
            — while your team gets their evenings back. Go live this afternoon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Btn variant="white" href={SIGNUP_URL}>
              Start free trial
            </Btn>
            <Btn variant="light" href={`mailto:${SUPPORT_EMAIL}`} icon>
              Talk to a human
            </Btn>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13.5px] text-white/75">
            {["14-day free trial", "No setup fees", "Cancel anytime", "POPIA-aware"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Ico.check className="text-[#9fe8ff] text-[15px]" /> {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
