import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Replai",
  description:
    "How Bila Automation (Pty) Ltd, the company that operates Replai, collects, uses, stores and protects personal information, in line with South Africa's POPIA.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="19 May 2026"
      intro="This policy explains what personal information Bila Automation (Pty) Ltd — the registered company that operates the Replai platform — collects, why we collect it, how we use and protect it, and the rights you have under the Protection of Personal Information Act, 2013 (POPIA)."
      sections={[
        {
          heading: "1. Who we are",
          body: (
            <p>
              Replai is a product operated by{" "}
              <strong>Bila Automation (Pty) Ltd</strong> (registration number
              2026/360669/07), a company registered in South Africa
              (&ldquo;Bila Automation&rdquo;, &ldquo;Replai&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;). We provide an AI
              customer-conversation platform for WhatsApp and website chat. Our
              registered company website is{" "}
              <a
                href="https://bilaautomation.co.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                bilaautomation.co.za
              </a>
              . For privacy matters you can reach our Information Officer at{" "}
              <a href="mailto:privacy@replai.co.za">privacy@replai.co.za</a>.
            </p>
          ),
        },
        {
          heading: "2. The information we collect",
          body: (
            <>
              <p>We collect:</p>
              <ul>
                <li>
                  <strong>Account data</strong> — name, business name, email,
                  phone number and billing details of the business that signs
                  up.
                </li>
                <li>
                  <strong>Conversation data</strong> — messages, attachments and
                  contact details exchanged between a business and its customers
                  through WhatsApp or the website widget.
                </li>
                <li>
                  <strong>Knowledge base content</strong> — website pages, PDFs
                  and FAQs a business uploads to train its agent.
                </li>
                <li>
                  <strong>Usage data</strong> — log, device and analytics data
                  used to operate and secure the service.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. How we use it",
          body: (
            <p>
              We process personal information only to provide and improve the
              service: routing and answering conversations, training each
              business&rsquo;s agent, billing, support, security and meeting
              legal obligations. We do not sell personal information, and we do
              not use customer conversation content to train models for other
              businesses.
            </p>
          ),
        },
        {
          heading: "4. Roles under POPIA",
          body: (
            <p>
              For data a business collects from its own customers through
              Replai, the business is the responsible party and Replai acts as
              an operator processing that data on the business&rsquo;s
              instructions under a written agreement (see our{" "}
              <a href="/dpa">Data Processing Addendum</a>). For account and
              billing data, Replai is the responsible party.
            </p>
          ),
        },
        {
          heading: "5. Sharing and sub-processors",
          body: (
            <p>
              We share data only with sub-processors needed to run the service —
              for example cloud hosting, AI model providers and payment
              processors — under contracts that require appropriate
              safeguards. WhatsApp messaging is delivered via Meta&rsquo;s
              WhatsApp Business Platform and is subject to Meta&rsquo;s own
              terms.
            </p>
          ),
        },
        {
          heading: "6. Cross-border processing",
          body: (
            <p>
              Some sub-processors may process data outside South Africa. Where
              that happens, we rely on POPIA section 72 safeguards, including
              contractual protections that provide an adequate level of
              protection.
            </p>
          ),
        },
        {
          heading: "7. Security and retention",
          body: (
            <p>
              Personal information is encrypted in transit and at rest, access
              is restricted on a need-to-know basis, and we keep data only for
              as long as needed to provide the service or as required by law.
              Businesses can export or delete their data from the dashboard or
              by request.
            </p>
          ),
        },
        {
          heading: "8. Your rights",
          body: (
            <p>
              You may request access to, correction of, or deletion of your
              personal information, and you may object to processing. To
              exercise these rights, email{" "}
              <a href="mailto:privacy@replai.co.za">privacy@replai.co.za</a>. You
              also have the right to complain to the Information Regulator
              (South Africa).
            </p>
          ),
        },
        {
          heading: "9. Changes",
          body: (
            <p>
              We may update this policy from time to time. Material changes will
              be communicated through the dashboard or by email, and the
              &ldquo;last updated&rdquo; date above will change.
            </p>
          ),
        },
      ]}
    />
  );
}
