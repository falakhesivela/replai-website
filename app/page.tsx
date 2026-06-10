import { Hero } from "@/components/home/hero";
import { Channels } from "@/components/home/channels";
import { Handoff } from "@/components/home/handoff";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { SouthAfrica } from "@/components/home/south-africa";
import { Templates } from "@/components/home/templates";
import { HomePricing, AlwaysIncluded } from "@/components/home/home-pricing";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Channels />
      <Handoff />
      <Features />
      <HowItWorks />
      <SouthAfrica />
      <Templates />
      <HomePricing />
      <AlwaysIncluded />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
