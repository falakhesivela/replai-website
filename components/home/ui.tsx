"use client";

// Shared primitives for the Daylight home design: reveal-on-scroll wrapper,
// gradient/ghost buttons, the mono eyebrow label, and the floating pill.
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { Ico } from "@/components/home/icons";
import { SiteLink } from "@/components/site-link";

export function Reveal({
  children,
  className = "",
  delay = 0,
  style,
  instant = false,
  as: Tag = "div" as ElementType,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  /** Skip scroll animation — use for above-the-fold hero content. */
  instant?: boolean;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(instant);
  useEffect(() => {
    if (instant) return;
    const el = ref.current;
    if (!el) return;
    const show = () => {
      setShown(true);
      io.disconnect();
    };
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) show();
        }),
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    // Already visible on load (hero, nav-adjacent content).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) show();
    else io.observe(el);
    return () => io.disconnect();
  }, [instant]);
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

type BtnVariant = "grad" | "ghost" | "white" | "light" | "dark";

const BTN_STYLES: Record<BtnVariant, string> = {
  grad: "text-white grad shadow-[0_8px_20px_-6px_rgba(61,107,248,0.55)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-6px_rgba(61,107,248,0.6)]",
  ghost:
    "text-ink bg-white border border-line hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-10px_rgba(17,24,39,0.3)]",
  white:
    "text-brand-purple bg-white hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]",
  light: "text-white bg-white/12 border border-white/25 hover:bg-white/20",
  dark: "text-white bg-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(17,24,39,0.5)]",
};

export function Btn({
  variant = "grad",
  href = "#",
  children,
  className = "",
  icon = false,
  ...rest
}: {
  variant?: BtnVariant;
  href?: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-[18px] py-[10px] transition-all duration-200 cursor-pointer";
  return (
    <SiteLink href={href} className={`${base} ${BTN_STYLES[variant]} ${className}`} {...rest}>
      {children}
      {icon && <Ico.arrow className="text-[1.05em]" />}
    </SiteLink>
  );
}

export function Kicker({
  children,
  center = false,
  className = "",
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.14em] uppercase text-brand-blue bg-brand-blue/8 border border-brand-blue/15 rounded-full px-3 py-1 ${
        center ? "mx-auto" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[12.5px] font-medium bg-white border border-line rounded-full pl-2 pr-3.5 py-1.5 shadow-[0_2px_8px_-4px_rgba(17,24,39,0.2)] ${className}`}
    >
      {children}
    </span>
  );
}
