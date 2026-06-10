import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Data Processing Addendum — Replai",
  description:
    "The operator terms under which Replai processes personal information on behalf of your business under POPIA.",
};

export default function DpaPage() {
  return (
    <LegalPage
      title="Data Processing Addendum"
      updated="19 May 2026"
      intro="This Addendum forms part of the agreement between your business (responsible party) and Bila Automation (Pty) Ltd (registration number 2026/360669/07), the company that operates the Replai platform (operator), and governs Replai's processing of personal information on your behalf under POPIA."
      sections={[
        {
          heading: "1. Roles",
          body: (
            <p>
              You are the responsible party determining the purpose and means of
              processing your customers&rsquo; personal information. Replai is
              the operator and processes it only on your documented
              instructions, including those given through the dashboard.
            </p>
          ),
        },
        {
          heading: "2. Scope of processing",
          body: (
            <p>
              Replai processes contact and conversation data for the duration of
              your subscription, solely to deliver the messaging, AI, inbox,
              bookings, ecommerce and analytics features you enable.
            </p>
          ),
        },
        {
          heading: "3. Confidentiality and security",
          body: (
            <p>
              Replai keeps personal information confidential, restricts access
              to authorised personnel under confidentiality obligations, and
              maintains the technical and organisational measures described in
              our <a href="/popia">POPIA page</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          ),
        },
        {
          heading: "4. Sub-operators",
          body: (
            <p>
              You authorise Replai to engage sub-operators (such as cloud
              hosting and AI model providers) under written terms imposing
              equivalent obligations. We remain responsible for their
              performance.
            </p>
          ),
        },
        {
          heading: "5. Assistance and breach notification",
          body: (
            <p>
              Replai will assist you with data-subject requests and security
              measures, and will notify you without undue delay after becoming
              aware of a personal-information breach affecting your data.
            </p>
          ),
        },
        {
          heading: "6. Return or deletion",
          body: (
            <p>
              On termination, Replai will, at your choice, return or delete the
              personal information it processes for you, except where retention
              is required by law.
            </p>
          ),
        },
        {
          heading: "7. Signing a counterpart",
          body: (
            <p>
              Businesses that require a countersigned DPA can request one from{" "}
              <a href="mailto:privacy@replai.co.za">privacy@replai.co.za</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
