// Single source of truth for outbound links to the Replai dashboard app.
// Override per-environment with NEXT_PUBLIC_APP_URL (e.g. a staging domain).
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.replai.co.za";

/** Public marketing site origin — used for sitemap, canonical URLs, etc. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://replai.co.za";

// The dashboard's auth routes (see replai-dashboard app/portal/(public)).
export const LOGIN_URL = `${APP_URL}/portal/login`;

// Every "Start free trial" CTA lands on self-serve signup (14-day trial).
export const SIGNUP_URL = `${APP_URL}/portal/register`;

export const SUPPORT_EMAIL = "hello@replai.co.za";

/** Primary nav + footer product links — each item has its own indexable route. */
export const PRODUCT_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Templates", href: "/templates" },
  { label: "FAQ", href: "/faq" },
] as const;

/** Top nav — subset of product links (no Templates in header). */
export const NAV_LINKS = PRODUCT_LINKS.filter(
  (l) => l.label !== "Templates",
);

/** Indexable marketing routes for sitemap generation. */
export const SITEMAP_ROUTES = [
  "/",
  "/features",
  "/how-it-works",
  "/pricing",
  "/templates",
  "/faq",
  "/about",
  "/contact",
  "/privacy",
  "/popia",
  "/terms",
  "/dpa",
  "/acceptable-use",
] as const;

export function isInternalHref(href: string): boolean {
  return (
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

/** Ensure hash links work from any page (`#how` → `/#how`). */
export function normalizeInternalHref(href: string): string {
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

// Registered legal entity behind Replai. Replai is a product built and
// operated by Bila Automation (Pty) Ltd — surfaced on the site + legal pages
// so Meta/WhatsApp app review can tie the app to the registered company.
export const COMPANY_NAME = "Bila Automation (Pty) Ltd";
export const COMPANY_SHORT = "Bila Automation";
export const COMPANY_REG = "2026/360669/07";
export const COMPANY_SITE = "https://bilaautomation.co.za";
export const COMPANY_SITE_LABEL = "bilaautomation.co.za";
