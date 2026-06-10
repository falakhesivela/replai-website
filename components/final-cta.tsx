import { SiteLink } from "@/components/site-link";
import { I } from "@/components/icons";
import { SIGNUP_URL } from "@/lib/site";

export const FinalCTA = ({ kicker }: { kicker: string }) => (
  <section className="px-5 sm:px-8 pb-14 md:pb-20">
    <div className="mx-auto max-w-7xl rounded-3xl text-white relative overflow-hidden bg-brand-gradient animate-gradient shadow-glow ring-1 ring-white/10">
      <div className="absolute inset-0 bg-brand-radial mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 grain-dark opacity-60 pointer-events-none"></div>
      <div className="absolute -top-16 -right-10 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"></div>
      <div className="relative px-8 md:px-14 py-12 md:py-16 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="text-[12px] uppercase tracking-[0.18em] text-brand-200 font-semibold">
            Ready when you are
          </div>
          <h3 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.05]">
            {kicker}
          </h3>
          <p className="mt-4 text-white/75 max-w-xl text-pretty">
            Two weeks free. Your number, your tone, your knowledge. Go live this
            afternoon — on both channels.
          </p>
        </div>
        <div className="md:col-span-4 flex md:justify-end gap-3 flex-wrap">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 hover:bg-brand-50 transition px-5 py-3 font-semibold"
          >
            Start free trial <I.Arrow className="h-4 w-4" />
          </a>
          <SiteLink
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 transition px-5 py-3 text-white font-semibold backdrop-blur"
          >
            Tour the product
          </SiteLink>
        </div>
      </div>
    </div>
  </section>
);
