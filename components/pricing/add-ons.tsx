import { Section } from "@/components/section";
import { I } from "@/components/icons";
import { ADDONS } from "@/components/pricing/data";
import { SIGNUP_URL } from "@/lib/site";

export const AddOns = () => (
  <Section
    id="addons"
    eyebrow="Optional add-ons"
    title="Toggle on the modules you need — on any plan."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ADDONS.map(([ic, t, d, price]) => {
        const Ic = I[ic];
        return (
          <div
            key={t}
            className="rounded-2xl border border-line bg-white p-5 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                <Ic className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-ink">
                +{price} <span className="font-normal text-mute">/mo</span>
              </span>
            </div>
            <h3 className="mt-4 text-base font-bold">{t}</h3>
            <p className="mt-1 text-sm text-mute text-pretty flex-1">{d}</p>
            <a
              href={SIGNUP_URL}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-paper hover:bg-white hover:border-brand-blue/40 transition px-3 py-2 text-sm font-semibold"
            >
              <I.Plus className="h-3.5 w-3.5" /> Add at signup
            </a>
          </div>
        );
      })}
    </div>
  </Section>
);
