import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Acceptable Use Policy — Replai",
  description:
    "What you may and may not do when using Replai and the WhatsApp Business Platform.",
};

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      updated="19 May 2026"
      intro="To keep Replai safe, reliable and compliant with Meta's WhatsApp rules and South African law, all customers must follow this policy."
      sections={[
        {
          heading: "You may not use Replai to",
          body: (
            <ul>
              <li>
                Send unsolicited bulk messages or contact people without a
                lawful basis or the consent WhatsApp/POPIA require.
              </li>
              <li>
                Distribute unlawful, fraudulent, misleading, hateful or harmful
                content, or anything that infringes others&rsquo; rights.
              </li>
              <li>
                Collect or process special or children&rsquo;s personal
                information without a lawful basis.
              </li>
              <li>
                Attempt to disrupt, reverse-engineer, overload or gain
                unauthorised access to the service.
              </li>
              <li>
                Misrepresent your identity or impersonate Replai, Meta or any
                other business.
              </li>
            </ul>
          ),
        },
        {
          heading: "WhatsApp Business rules",
          body: (
            <p>
              Use of WhatsApp through Replai is also subject to Meta&rsquo;s
              WhatsApp Business Messaging Policy and Commerce Policy. Violations
              can lead Meta to restrict your number independently of Replai.
            </p>
          ),
        },
        {
          heading: "Enforcement",
          body: (
            <p>
              We may suspend or terminate accounts that breach this policy,
              especially where customers, recipients or the platform are at
              risk. Report abuse to{" "}
              <a href="mailto:hello@replai.co.za">hello@replai.co.za</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
