"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/** Legacy homepage hash URLs → dedicated routes (SEO + bookmark compat). */
const LEGACY_HASH_ROUTES: Record<string, string> = {
  features: "/features",
  how: "/how-it-works",
  pricing: "/pricing",
  templates: "/templates",
  faq: "/faq",
};

export function HashScroll() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const route = LEGACY_HASH_ROUTES[hash];
    if (pathname === "/" && route) {
      router.replace(route);
      return;
    }

    if (pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, router]);

  return null;
}
