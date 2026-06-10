"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Btn } from "@/components/home/ui";
import { SiteLink } from "@/components/site-link";
import { Ico } from "@/components/home/icons";
import { LOGIN_URL, NAV_LINKS, SIGNUP_URL } from "@/lib/site";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "glassnav border-b border-line/80 shadow-[0_1px_0_rgba(17,24,39,0.04),0_8px_24px_-8px_rgba(17,24,39,0.08)]"
          : "bg-paper/40 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Logo size={28} priority />
        <nav className="hidden md:flex items-center gap-7 text-sm" aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => (
            <SiteLink
              key={label}
              href={href}
              className="text-mute font-medium hover:text-ink transition-colors"
            >
              {label}
            </SiteLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <SiteLink
            href={LOGIN_URL}
            className="text-sm font-medium text-ink hover:text-brand-blue transition-colors"
          >
            Log in
          </SiteLink>
          <Btn variant="grad" href={SIGNUP_URL}>
            Start free trial
          </Btn>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 -mr-2 grid place-items-center text-ink text-2xl"
          aria-label="Menu"
        >
          {open ? <Ico.close /> : <Ico.menu />}
        </button>
      </div>
      {/* mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 glassnav ${
          open ? "max-h-[340px] border-b border-line" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <SiteLink
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] font-medium text-ink border-b border-line/70"
            >
              {label}
            </SiteLink>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <Btn variant="ghost" href={LOGIN_URL} className="flex-1">
              Log in
            </Btn>
            <Btn variant="grad" href={SIGNUP_URL} className="flex-1">
              Start free trial
            </Btn>
          </div>
        </div>
      </div>
    </header>
  );
};
