import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  isExternalHref,
  isInternalHref,
  normalizeInternalHref,
} from "@/lib/site";

type SiteLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Renders Next.js `<Link>` for internal routes (including `/#section` anchors)
 * and a plain `<a>` for external URLs, mailto, and tel links.
 */
export function SiteLink({ href, children, ...rest }: SiteLinkProps) {
  if (isInternalHref(href) && !isExternalHref(href)) {
    return (
      <Link href={normalizeInternalHref(href)} {...rest}>
        {children}
      </Link>
    );
  }

  const external = isExternalHref(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
