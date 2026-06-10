import type { Metadata } from "next";
import { PricingView } from "@/components/pricing/pricing-view";
import { marketingMetadata } from "@/lib/metadata";

export const metadata: Metadata = marketingMetadata({
  title: "Pricing — Replai",
  description:
    "USD pricing, no setup fees, cancel anytime. Start with the website widget, WhatsApp, or both — same AI agent, one inbox.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingView />;
}
