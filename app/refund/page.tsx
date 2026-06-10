import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy — Replai",
  description:
    "How refunds, cancellations and billing work for Replai subscriptions processed by Paddle.",
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="11 June 2026"
      intro="This policy explains how free trials, subscription cancellations and refunds work for Replai, operated by Bila Automation (Pty) Ltd (registration number 2026/360669/07). Replai subscriptions are sold and billed through Paddle.com, which acts as the Merchant of Record for all orders."
      sections={[
        {
          heading: "1. Free trial",
          body: (
            <p>
              Every paid plan includes a <strong>14-day free trial</strong> as
              described at sign-up and on our{" "}
              <a href="/pricing">pricing page</a>. You are not charged during
              the trial. If you do not subscribe before the trial ends, your
              workspace may be limited or paused until you choose a plan.
            </p>
          ),
        },
        {
          heading: "2. Subscriptions and cancellation",
          body: (
            <>
              <p>
                After the trial, your selected plan is billed in advance in US
                Dollars, either monthly or annually, through Paddle. You can
                cancel at any time from the Replai dashboard under{" "}
                <strong>Subscription</strong>.
              </p>
              <ul>
                <li>
                  <strong>Monthly plans</strong> — cancellation takes effect at
                  the end of your current billing period. You keep access until
                  then; no further charges are made.
                </li>
                <li>
                  <strong>Annual plans</strong> — your subscription runs to the
                  end of the annual term. Cancellation stops renewal; we do not
                  provide pro-rata refunds for unused months unless required by
                  applicable law.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. Refunds",
          body: (
            <>
              <p>
                Because Paddle is the Merchant of Record, payment-related
                enquiries and refund requests for Replai subscriptions are
                handled through Paddle&rsquo;s buyer support process, in line with{" "}
                <a
                  href="https://www.paddle.com/legal/checkout-buyer-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paddle&rsquo;s buyer terms
                </a>
                .
              </p>
              <p>
                We may approve a refund at our discretion where:
              </p>
              <ul>
                <li>
                  You were charged in error (for example, a duplicate charge or
                  a charge after a timely cancellation).
                </li>
                <li>
                  You cancel within <strong>14 days of your first paid charge</strong>{" "}
                  and have not made substantial use of the service during that
                  period.
                </li>
                <li>
                  A refund is required under applicable consumer-protection law.
                </li>
              </ul>
              <p>
                Refunds are generally not available for partial billing periods
                on monthly plans, for the unused portion of annual plans, or for
                usage-based charges that have already been incurred (see section
                4).
              </p>
            </>
          ),
        },
        {
          heading: "4. Add-ons and usage overages",
          body: (
            <p>
              Optional add-ons (for example Bookings, Shopping or Broadcasts) and
              usage overages (extra conversations or WhatsApp messages beyond
              your plan allowance) are billed as described on our{" "}
              <a href="/pricing">pricing page</a>. These charges are generally{" "}
              <strong>non-refundable</strong> once billed, because they reflect
              usage or services already delivered. Add-on changes are prorated
              when you upgrade mid-cycle; downgrades apply from your next billing
              cycle.
            </p>
          ),
        },
        {
          heading: "5. How to request a refund or billing help",
          body: (
            <>
              <p>
                <strong>Step 1 — contact us:</strong> email{" "}
                <a href="mailto:hello@replai.co.za">hello@replai.co.za</a> from
                your account email with your business name and the charge date.
                We will review your request and respond within a few business
                days.
              </p>
              <p>
                <strong>Step 2 — Paddle:</strong> if your request relates to a
                payment or receipt issued by Paddle, you may also contact Paddle
                buyer support via the link on your Paddle receipt or through{" "}
                <a
                  href="https://www.paddle.com/help"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  paddle.com/help
                </a>
                . Paddle provides customer service for payment and refund
                enquiries on our behalf as Merchant of Record.
              </p>
            </>
          ),
        },
        {
          heading: "6. Merchant of Record",
          body: (
            <p>
              Our order process is conducted by our online reseller Paddle.com.
              Paddle.com is the Merchant of Record for all our orders. Paddle
              provides customer service inquiries and handles returns. This is
              also stated in our{" "}
              <a href="/terms">Terms of Service</a>.
            </p>
          ),
        },
        {
          heading: "7. Changes",
          body: (
            <p>
              We may update this policy from time to time. Material changes will
              be posted on this page and the &ldquo;last updated&rdquo; date
              above will change.
            </p>
          ),
        },
      ]}
    />
  );
}
