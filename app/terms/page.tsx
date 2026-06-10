import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Replai",
  description:
    "The terms governing your use of the Replai AI customer-conversation platform.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="19 May 2026"
      intro="These terms govern your access to and use of the Replai platform, which is operated by Bila Automation (Pty) Ltd (registration number 2026/360669/07), a company registered in South Africa. By creating an account or using the service you agree to them."
      sections={[
        {
          heading: "1. The service",
          body: (
            <p>
              Replai provides an AI customer-conversation platform that operates
              on the WhatsApp Business Platform and as a website chat widget,
              together with related dashboard, inbox, bookings, ecommerce and
              analytics features. We may improve or change features over time.
            </p>
          ),
        },
        {
          heading: "2. Accounts and acceptable use",
          body: (
            <p>
              You are responsible for your account, your users and the content
              you upload, and for using the service lawfully and in line with
              our <a href="/acceptable-use">Acceptable Use Policy</a> and
              Meta&rsquo;s WhatsApp Business policies.
            </p>
          ),
        },
        {
          heading: "3. Trial and fees",
          body: (
            <p>
              Paid plans include a free trial as described at sign-up. After
              the trial, fees are billed in advance per your selected plan.
              Pricing is in US Dollars. WhatsApp plans include a monthly
              allowance of billable business messages; messages sent above
              that allowance are billed on your Replai invoice at the per-
              message overage rate published on the pricing page. Annual plans
              run to the end of their term; month-to-month plans can be
              cancelled at any time from the dashboard.
            </p>
          ),
        },
        {
          heading: "4. Data protection",
          body: (
            <p>
              Our handling of personal information is described in our{" "}
              <a href="/privacy">Privacy Policy</a> and, where applicable, our{" "}
              <a href="/dpa">Data Processing Addendum</a>.
            </p>
          ),
        },
        {
          heading: "5. Availability and AI output",
          body: (
            <p>
              We work to keep the service reliable but do not warrant
              uninterrupted availability. AI-generated replies can contain
              errors; you are responsible for reviewing automation and human
              handoff settings appropriate to your business.
            </p>
          ),
        },
        {
          heading: "6. Liability",
          body: (
            <p>
              To the extent permitted by law, Replai&rsquo;s aggregate liability
              is limited to the fees you paid in the three months before the
              event giving rise to the claim. We are not liable for indirect or
              consequential loss.
            </p>
          ),
        },
        {
          heading: "7. Termination",
          body: (
            <p>
              Either party may terminate as set out in your plan. On
              termination you can export your data for a reasonable period,
              after which it is deleted in line with our retention practices.
            </p>
          ),
        },
        {
          heading: "8. Governing law",
          body: (
            <p>
              These terms are governed by the laws of the Republic of South
              Africa. Questions:{" "}
              <a href="mailto:hello@replai.co.za">hello@replai.co.za</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
