import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

const PADDLE_REFUND_POLICY = "https://www.paddle.com/legal/refund-policy";
const PADDLE_BUYER_TERMS = "https://www.paddle.com/legal/buyer-terms";
const PADDLE_SUPPORT = "https://paddle.net";

export const metadata: Metadata = {
  title: "Refund Policy — Replai",
  description:
    "How refunds, cancellations and billing work for Replai subscriptions sold through Paddle.",
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="11 June 2026"
      intro={
        <>
          Replai is operated by Bila Automation (Pty) Ltd (registration number
          2026/360669/07). All Replai subscriptions are sold and billed through
          Paddle.com, which is the Merchant of Record for our orders. Refunds and
          withdrawals are handled by Paddle in accordance with{" "}
          <a href={PADDLE_REFUND_POLICY} target="_blank" rel="noopener noreferrer">
            Paddle&rsquo;s Refund Policy
          </a>{" "}
          and{" "}
          <a href={PADDLE_BUYER_TERMS} target="_blank" rel="noopener noreferrer">
            Paddle Buyer Terms
          </a>
          .
        </>
      }
      sections={[
        {
          heading: "1. Merchant of Record",
          body: (
            <p>
              Our order process is conducted by our online reseller Paddle.com.
              Paddle.com is the Merchant of Record for all our orders. Paddle
              provides all customer service inquiries and handles returns. This
              is also stated in our <a href="/terms">Terms of Service</a>.
            </p>
          ),
        },
        {
          heading: "2. Free trial",
          body: (
            <p>
              Paid plans include a <strong>14-day free trial</strong> as
              described at sign-up and on our{" "}
              <a href="/pricing">pricing page</a>. If you wish to cancel before
              we start charging your payment method, you must do so before the
              end of the trial period.
            </p>
          ),
        },
        {
          heading: "3. Cancellation",
          body: (
            <>
              <p>
                You can cancel a subscription at any time with effect from the
                end of your current billing period. Your cancellation will take
                effect at the end of your current billing period, and you will
                not be charged again after that.
              </p>
              <p>
                You can cancel from the Replai dashboard under{" "}
                <strong>Subscription</strong>, or through Paddle&rsquo;s buyer
                portal using the link in your subscription confirmation email.
                You can also submit a cancellation request through{" "}
                <a href={PADDLE_SUPPORT} target="_blank" rel="noopener noreferrer">
                  paddle.net
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "4. Refunds",
          body: (
            <>
              <p>
                Refund and withdrawal rights for Replai subscriptions are
                governed entirely by{" "}
                <a href={PADDLE_REFUND_POLICY} target="_blank" rel="noopener noreferrer">
                  Paddle&rsquo;s Refund Policy
                </a>
                , which forms part of the{" "}
                <a href={PADDLE_BUYER_TERMS} target="_blank" rel="noopener noreferrer">
                  Paddle Buyer Terms
                </a>
                . That policy sets out when you may be entitled to withdraw a
                transaction or receive a refund, including country-specific
                statutory rights and how Paddle handles refund requests.
              </p>
              <p>
                Unless required by applicable law, all transactions are
                non-refundable and non-exchangeable, as stated in Paddle&rsquo;s
                Refund Policy. Paddle may issue refunds on a discretionary
                basis or where you have an applicable statutory withdrawal or
                refund right.
              </p>
              <p>
                If you receive a refund in accordance with Paddle&rsquo;s
                Refund Policy, access to Replai will cease.
              </p>
            </>
          ),
        },
        {
          heading: "5. How to request a refund",
          body: (
            <>
              <p>
                To withdraw, cancel and/or request a refund, contact Paddle
                using one of the following methods:
              </p>
              <ul>
                <li>
                  Use the &ldquo;View receipt&rdquo; or &ldquo;Manage
                  subscription&rdquo; link in your transaction confirmation
                  email;
                </li>
                <li>
                  Submit a request via the support link in your receipt or
                  billing page; or
                </li>
                <li>
                  Visit{" "}
                  <a href={PADDLE_SUPPORT} target="_blank" rel="noopener noreferrer">
                    paddle.net
                  </a>{" "}
                  and select &ldquo;Request refund&rdquo;.
                </li>
              </ul>
              <p>
                If you experience a technical issue with Replai, please contact
                us first at{" "}
                <a href="mailto:hello@replai.co.za">hello@replai.co.za</a>. If
                the issue cannot be resolved, contact Paddle&rsquo;s support
                team as described in section 4 of Paddle&rsquo;s Refund Policy.
              </p>
            </>
          ),
        },
        {
          heading: "6. Changes",
          body: (
            <p>
              We may update this page from time to time to reflect changes to
              how Replai subscriptions are sold. Paddle may update its Refund
              Policy and Buyer Terms separately; the version in effect at the
              time of your transaction governs that transaction.
            </p>
          ),
        },
      ]}
    />
  );
}
