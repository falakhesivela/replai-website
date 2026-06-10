import { marketingMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { PRICING_FAQ } from "@/components/pricing/data";
import { Kicker } from "@/components/home/ui";

export const metadata = marketingMetadata({
  title: "FAQ — Replai",
  description:
    "Plain answers about POPIA, WhatsApp setup, website embed, free trial, human handoff, and getting live the same day.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="grad-text">answered plainly.</span>
          </>
        }
        lede="Everything people ask before they switch Replai on — the product, privacy, setup and pricing. Still unsure? A real person replies at hello@replai.co.za."
      />
      <FAQ hideHeader compact id="product-faq" />
      <div className="max-w-[860px] mx-auto px-5 sm:px-8 pt-8 md:pt-10">
        <Kicker>Billing & plans</Kicker>
        <h2 className="mt-3 text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.03em] leading-tight">
          Pricing questions
        </h2>
      </div>
      <FAQ hideHeader compact id="pricing-faq" items={PRICING_FAQ} />
      <FinalCTA />
    </main>
  );
}
