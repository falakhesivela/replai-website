import { marketingMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Channels } from "@/components/home/channels";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata = marketingMetadata({
  title: "How it works — Replai",
  description:
    "Connect WhatsApp and your website, train your agent on your business, and go live the same afternoon — no developer required.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Live in one afternoon. <span className="grad-text">Really.</span>
          </>
        }
        lede="No long onboarding, no agency fees. Three steps from signing up to answering your first customer automatically — on WhatsApp and your website."
      />
      <HowItWorks hideHeader />
      <Channels />
      <FinalCTA />
    </main>
  );
}
