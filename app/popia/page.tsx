import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "POPIA Compliance — Replai",
  description:
    "How Replai is built to help South African businesses meet their obligations under the Protection of Personal Information Act (POPIA).",
};

export default function PopiaPage() {
  return (
    <LegalPage
      title="POPIA compliance"
      updated="19 May 2026"
      intro="Replai is designed to help South African businesses meet their obligations under the Protection of Personal Information Act, 2013 (POPIA). This page summarises the measures we take and the responsibilities that remain with you."
      sections={[
        {
          heading: "Our approach",
          body: (
            <p>
              We follow a &ldquo;POPIA-aware by default&rdquo; approach: data is
              minimised, encrypted in transit and at rest, access is
              role-restricted, and conversation content for one business is
              never used to train or answer for another.
            </p>
          ),
        },
        {
          heading: "Operator relationship",
          body: (
            <p>
              When your customers&rsquo; personal information flows through
              Replai, you are the responsible party and Replai &mdash; operated
              by <strong>Bila Automation (Pty) Ltd</strong> (registration number
              2026/360669/07) &mdash; is your operator. We process that
              information only on your documented instructions, under our{" "}
              <a href="/dpa">Data Processing Addendum</a>, which we will sign
              with businesses that require it.
            </p>
          ),
        },
        {
          heading: "The eight conditions",
          body: (
            <ul>
              <li>
                <strong>Accountability & processing limitation</strong> — we
                process only what is needed to run the service.
              </li>
              <li>
                <strong>Purpose specification & further processing</strong> —
                data is used for the purposes you authorise, not repurposed.
              </li>
              <li>
                <strong>Information quality</strong> — you can correct and
                update records from the dashboard.
              </li>
              <li>
                <strong>Openness</strong> — see our{" "}
                <a href="/privacy">Privacy Policy</a> for full detail.
              </li>
              <li>
                <strong>Security safeguards</strong> — encryption, access
                control, monitoring and breach procedures.
              </li>
              <li>
                <strong>Data subject participation</strong> — access, correction
                and deletion on request.
              </li>
            </ul>
          ),
        },
        {
          heading: "What stays your responsibility",
          body: (
            <p>
              POPIA compliance is shared. As the responsible party you must
              still obtain a lawful basis for contacting your customers, provide
              your own privacy notice, honour data-subject requests, and
              configure Replai (retention, broadcasts, consent) appropriately
              for your business.
            </p>
          ),
        },
        {
          heading: "Requests and breach reporting",
          body: (
            <p>
              For data-subject requests, DPAs, or to report a suspected
              incident, contact{" "}
              <a href="mailto:privacy@replai.co.za">privacy@replai.co.za</a>. We
              will assist you within the timeframes required by POPIA.
            </p>
          ),
        },
      ]}
    />
  );
}
