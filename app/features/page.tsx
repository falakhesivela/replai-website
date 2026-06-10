import { marketingMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { Channels } from "@/components/home/channels";
import { Features } from "@/components/home/features";
import { Handoff } from "@/components/home/handoff";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata = marketingMetadata({
  title: "Features — Replai",
  description:
    "Books appointments, sells with payment links, qualifies leads, hands off to humans, and runs on WhatsApp and your website — one AI agent, one inbox.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Everything it does"
        title={
          <>
            One agent, the workload of{" "}
            <span className="grad-text">a whole front desk.</span>
          </>
        }
        lede="From the first hello to the closed sale, Replai covers the repetitive work end-to-end — booking, selling, qualifying — and keeps a human in the loop wherever it counts."
      />
      <Features hideHeader />
      <Handoff />
      <Channels />
      <FinalCTA />
    </main>
  );
}
