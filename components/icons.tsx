// Inline icon set — original, minimalist stroked SVGs.
import type { ReactNode, SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "stroke"> & {
  className?: string;
  stroke?: number;
};

export const Icon = ({
  children,
  className = "h-5 w-5",
  stroke = 1.6,
  ...rest
}: IconProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const I = {
  Chat: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V6Z" />
    </Icon>
  ),
  Widget: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="4" width="14" height="11" rx="2" />
      <path d="M7 19l3-4" />
      <circle cx="18" cy="18" r="3" />
    </Icon>
  ),
  Book: (p: IconProps) => (
    <Icon {...p}>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z" />
      <path d="M5 17a3 3 0 0 1 3-3h11" />
    </Icon>
  ),
  Play: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9l5 3-5 3V9Z" />
    </Icon>
  ),
  Layers: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </Icon>
  ),
  Inbox: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 13l3-7h10l3 7" />
      <path d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <path d="M4 13h4l1 2h6l1-2h4" />
    </Icon>
  ),
  Handoff: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="8" cy="8" r="3" />
      <path d="M2 20c.5-3 3-5 6-5s5.5 2 6 5" />
      <path d="M15 7l4 4-4 4" />
      <path d="M19 11h-5" />
    </Icon>
  ),
  Lead: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 4h12l4 4v12H4z" />
      <path d="M9 12h7" />
      <path d="M9 16h5" />
      <path d="M9 8h3" />
    </Icon>
  ),
  Calendar: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4M16 3v4" />
    </Icon>
  ),
  Cart: (p: IconProps) => (
    <Icon {...p}>
      <path d="M3 4h2l2.5 11a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.5L21 8H6" />
      <circle cx="10" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </Icon>
  ),
  Megaphone: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 10v4l11 5V5L4 10Z" />
      <path d="M15 8a4 4 0 0 1 0 8" />
      <path d="M7 14v3a2 2 0 0 0 2 2" />
    </Icon>
  ),
  Team: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 19c.6-3 3-5 6-5s5.4 2 6 5" />
      <path d="M14 19c.4-2 1.8-3.5 3.5-3.5S20.6 17 21 19" />
    </Icon>
  ),
  Chart: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 20V8" />
      <path d="M10 20V4" />
      <path d="M16 20v-8" />
      <path d="M3 20h18" />
    </Icon>
  ),
  Clock: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  ),
  Bolt: (p: IconProps) => (
    <Icon {...p}>
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
    </Icon>
  ),
  Shield: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  ),
  Check: (p: IconProps) => (
    <Icon {...p}>
      <path d="m5 12 4 4 10-10" />
    </Icon>
  ),
  X: (p: IconProps) => (
    <Icon {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  ),
  Plus: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  ),
  Arrow: (p: IconProps) => (
    <Icon {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  ),
  Star: (p: IconProps) => (
    <Icon {...p}>
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
    </Icon>
  ),
  Globe: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </Icon>
  ),
  Phone: (p: IconProps) => (
    <Icon {...p}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </Icon>
  ),
  Sparkle: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </Icon>
  ),
  Send: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 12 20 4l-3 16-5-6-8-2Z" />
      <path d="m12 14 5-10" />
    </Icon>
  ),
  Logo: (p: IconProps) => (
    <Icon {...p} stroke={1.8}>
      <path d="M5 5h9a5 5 0 0 1 0 10H9l-4 3V5Z" />
      <path d="M13 11l2 2 3-3" />
    </Icon>
  ),
  Mic: (p: IconProps) => (
    <Icon {...p}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </Icon>
  ),
  Attach: (p: IconProps) => (
    <Icon {...p}>
      <path d="M21 11.5 12.5 20a5 5 0 0 1-7-7L14 4.5a3.5 3.5 0 0 1 5 5L10.5 18a2 2 0 0 1-3-3L15 7" />
    </Icon>
  ),
  Building: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="4" width="8" height="16" />
      <rect x="13" y="9" width="8" height="11" />
      <path d="M6 8h2M6 12h2M6 16h2M16 13h2M16 17h2" />
    </Icon>
  ),
  Code: (p: IconProps) => (
    <Icon {...p}>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
      <path d="m14 5-4 14" />
    </Icon>
  ),
  Whats: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 20l1.5-4.5A8 8 0 1 1 9 19L4 20Z" />
      <path d="M9 10.5c0 2.2 1.8 4 4 4l1.2-1.3a1 1 0 0 1 1-.3l1.5.5a1 1 0 0 1 .7.9V16a1.5 1.5 0 0 1-1.7 1.5A8 8 0 0 1 8 9.4 1.5 1.5 0 0 1 9.5 7.8h.5a1 1 0 0 1 1 .7l.5 1.5a1 1 0 0 1-.3 1L9.9 12" />
    </Icon>
  ),
  Lightning: (p: IconProps) => (
    <Icon {...p}>
      <path d="m13 2-9 13h7l-1 7 9-13h-7l1-7Z" />
    </Icon>
  ),
  Twitter: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 4l7.5 9.5L4.5 20H7l5.5-5.7L17 20h3l-7.8-9.9L19.5 4H17l-5 5.2L8 4H4Z" />
    </Icon>
  ),
  LinkedIn: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v-3" />
    </Icon>
  ),
  Insta: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </Icon>
  ),
} as const;

export type IconName = keyof typeof I;
