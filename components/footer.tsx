import { Logo } from "@/components/logo";
import { Ico } from "@/components/home/icons";
import { SiteLink } from "@/components/site-link";
import {
  SUPPORT_EMAIL,
  COMPANY_NAME,
  COMPANY_REG,
  COMPANY_SITE,
  COMPANY_SITE_LABEL,
  PRODUCT_LINKS,
} from "@/lib/site";

type FLink = { label: string; href: string };

const COLS: [string, FLink[]][] = [
  ["Product", [...PRODUCT_LINKS]],
  [
    "Company",
    [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
    ],
  ],
  [
    "Legal",
    [
      { label: "Privacy", href: "/privacy" },
      { label: "POPIA compliance", href: "/popia" },
      { label: "Terms", href: "/terms" },
      { label: "Data processing", href: "/dpa" },
      { label: "Acceptable use", href: "/acceptable-use" },
    ],
  ],
];

/* Simplified South African flag — emoji flags don't render on Windows. */
const SaFlag = () => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    className="rounded-[2px] flex-none"
    aria-hidden="true"
  >
    <rect width="18" height="6" fill="#de3831" />
    <rect y="6" width="18" height="6" fill="#002395" />
    <path d="M0 0h2l7 4.5h9v3H9L2 12H0z" fill="#fff" />
    <path d="M0 1.2h1.6L8.4 5.6H18v0.8H8.4L1.6 10.8H0z" fill="#007a4d" stroke="#007a4d" strokeWidth="1.6" />
    <path d="M0 1.8 6.5 6 0 10.2z" fill="#ffb612" />
    <path d="M0 3 4.6 6 0 9z" fill="#000" />
  </svg>
);

const FootLink = ({ href, label }: FLink) => {
  const cls = "text-[14.5px] text-white/70 hover:text-white transition-colors";
  return (
    <SiteLink href={href} className={cls}>
      {label}
    </SiteLink>
  );
};

export const Footer = () => (
  <footer className="relative overflow-hidden bg-ink text-white mt-auto">
    <div
      className="pointer-events-none absolute -top-32 right-0 w-[480px] h-[480px] rounded-full blur-[100px] opacity-30"
      style={{ background: "radial-gradient(circle, rgba(31,182,239,0.45), transparent 70%)" }}
    />
    <div
      className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full blur-[100px] opacity-25"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.5), transparent 70%)" }}
    />
    <div className="pointer-events-none absolute inset-0 grain-noise opacity-[0.2] mix-blend-overlay" />

    <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 py-12 md:py-16">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-[320px] lg:max-w-none sm:col-span-2 lg:col-span-1">
          <Logo size={30} theme="dark" />
          <p className="mt-4 text-[14.5px] text-white/65 leading-relaxed">
            One AI agent for WhatsApp and your website. Answer every customer in
            seconds — and keep a human one tap away.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-white/55">
            <SaFlag /> Made in South Africa
          </div>
          <div className="mt-3 inline-flex items-center gap-2 text-[12.5px] text-white/75 bg-white/8 border border-white/12 rounded-full px-3 py-1.5">
            <Ico.shield className="text-brand-cyan text-[15px]" /> POPIA-aware ·
            encrypted
          </div>
          <p className="mt-4 text-[12.5px] text-white/50 leading-relaxed">
            Replai is a product of{" "}
            <a
              href={COMPANY_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/75 hover:text-white transition-colors"
            >
              {COMPANY_NAME}
            </a>
            , the registered company that builds and operates it.
            <br />
            Company registration no. {COMPANY_REG}.
          </p>
        </div>
        {COLS.map(([title, items]) => (
          <div key={title} className="min-w-0">
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/45 mb-4">
              {title}
            </div>
            <ul className="flex flex-col gap-2.5">
              {items.map((it) => (
                <li key={it.label}>
                  <FootLink {...it} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[13px] text-white/45">
          © {new Date().getFullYear()} {COMPANY_NAME} · Reg. {COMPANY_REG}. All
          rights reserved.
        </span>
        <div className="flex items-center gap-4 text-[13px] text-white/45">
          <a
            href={COMPANY_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {COMPANY_SITE_LABEL}
          </a>
          <span>·</span>
          <span>USD pricing · cancel anytime</span>
        </div>
      </div>
    </div>
  </footer>
);
