// Inline SVG icon set for the "Daylight" home design — ported verbatim from
// the Claude Design handoff. Icons are sized by font-size (width/height = 1em),
// so control size with a `text-[20px]` class. Pure functions, no hooks.
import type { ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const svg = (paths: ReactNode, opts: { fill?: string } = {}) => {
  function Icon(props: P) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill={opts.fill || "none"}
        width="1em"
        height="1em"
        aria-hidden="true"
        {...props}
      >
        {paths}
      </svg>
    );
  }
  return Icon;
};

const s = {
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export const Ico = {
  whatsapp: svg(<path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" {...s} />),
  whatsappFill: svg(
    <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" fill="currentColor" />,
    { fill: "currentColor" },
  ),
  widget: svg(<path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" {...s} />),
  bolt: svg(<path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13L13 2z" fill="currentColor" />, {
    fill: "currentColor",
  }),
  boltLine: svg(<path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13L13 2z" {...s} />),
  calendar: svg(
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" {...s} />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" {...s} />
    </>,
  ),
  cart: svg(
    <>
      <path
        d="M3 3h2l2.2 12.2a1.5 1.5 0 001.5 1.3h8.4a1.5 1.5 0 001.5-1.2L21 7H6"
        {...s}
      />
      <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
    </>,
  ),
  leads: svg(
    <>
      <path d="M16 19v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4V19" {...s} />
      <circle cx="9" cy="7.5" r="3.5" {...s} />
      <path d="M19 8v6M22 11h-6" {...s} />
    </>,
  ),
  handoff: svg(
    <>
      <circle cx="8" cy="8" r="3" {...s} />
      <path d="M2.5 19v-1a4 4 0 014-4H9" {...s} />
      <path d="M14 13l3 3-3 3M21.5 16H14" {...s} />
    </>,
  ),
  brain: svg(
    <path
      d="M8.5 4A3 3 0 005.5 7a2.7 2.7 0 00-1.5 4.8A2.7 2.7 0 005.5 16a3 3 0 003 3 2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 008.5 4zM15.5 4A3 3 0 0118.5 7a2.7 2.7 0 011.5 4.8A2.7 2.7 0 0118.5 16a3 3 0 01-3 3 2.5 2.5 0 01-2.5-2.5v-9A2.5 2.5 0 0115.5 4z"
      {...s}
    />,
  ),
  play: svg(
    <>
      <circle cx="12" cy="12" r="9.2" {...s} />
      <path d="M10 8.5l5 3.5-5 3.5z" fill="currentColor" />
    </>,
  ),
  inbox: svg(
    <>
      <path
        d="M3 13l2.5-7.5A2 2 0 017.4 4h9.2a2 2 0 011.9 1.5L21 13v5a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        {...s}
      />
      <path d="M3 13h5l1.5 2.5h5L16 13h5" {...s} />
    </>,
  ),
  megaphone: svg(
    <path
      d="M3 11v2a1.5 1.5 0 001.5 1.5H6l1.5 5H10l-1.2-5 9.7 4V5.5L8.5 9.5H4.5A1.5 1.5 0 003 11z"
      {...s}
    />,
  ),
  chart: svg(
    <>
      <path d="M4 20V4M4 20h16" {...s} />
      <rect x="7.5" y="12" width="2.6" height="5" rx="0.6" fill="currentColor" />
      <rect x="12" y="8.5" width="2.6" height="8.5" rx="0.6" fill="currentColor" />
      <rect x="16.5" y="5" width="2.6" height="12" rx="0.6" fill="currentColor" />
    </>,
  ),
  clock: svg(
    <>
      <circle cx="12" cy="12" r="9" {...s} />
      <path d="M12 7.5V12l3 2" {...s} />
    </>,
  ),
  agency: svg(
    <>
      <path d="M3 21h18M5 21V7l7-4 7 4v14" {...s} />
      <path d="M9.5 21v-4.5h5V21" {...s} />
      <path d="M9 9h0M15 9h0M9 12.5h0M15 12.5h0" {...s} />
    </>,
  ),
  shield: svg(
    <>
      <path d="M12 2.5l8 3v6c0 4.8-3.3 8.4-8 10-4.7-1.6-8-5.2-8-10v-6z" {...s} />
      <path d="M8.7 12l2.3 2.3 4.3-4.6" {...s} />
    </>,
  ),
  lock: svg(
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" {...s} />
      <path d="M8 10.5V8a4 4 0 018 0v2.5" {...s} />
    </>,
  ),
  pin: svg(
    <>
      <path d="M12 22s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" {...s} />
      <circle cx="12" cy="10" r="2.6" {...s} />
    </>,
  ),
  globe: svg(
    <>
      <circle cx="12" cy="12" r="9" {...s} />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" {...s} />
    </>,
  ),
  check: svg(<path d="M20 6L9 17l-5-5" {...s} strokeWidth={2.4} />),
  arrow: svg(<path d="M5 12h14M13 6l6 6-6 6" {...s} strokeWidth={2} />),
  plus: svg(<path d="M12 5v14M5 12h14" {...s} strokeWidth={2} />),
  spark: svg(<path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" fill="currentColor" />, {
    fill: "currentColor",
  }),
  dollar: svg(
    <>
      <path d="M12 2.5v19" {...s} />
      <path d="M16.5 6.5H9.8a2.8 2.8 0 000 5.6h4.4a2.8 2.8 0 010 5.6H7" {...s} />
    </>,
  ),
  scissors: svg(
    <>
      <circle cx="6" cy="6" r="2.6" {...s} />
      <circle cx="6" cy="18" r="2.6" {...s} />
      <path d="M8.2 7.6L20 18M8.2 16.4L20 6" {...s} />
    </>,
  ),
  fork: svg(
    <>
      <path d="M6 3v7a2 2 0 002 2 2 2 0 002-2V3M8 12v9" {...s} />
      <path d="M16 3c-1.5 0-2.5 1.8-2.5 4.5S14.5 12 16 12v9" {...s} />
    </>,
  ),
  bag: svg(
    <>
      <path d="M6 8h12l-1 12.5a1.5 1.5 0 01-1.5 1.4H8.5A1.5 1.5 0 017 20.5z" {...s} />
      <path d="M9 8V6a3 3 0 016 0v2" {...s} />
    </>,
  ),
  cross: svg(<path d="M12 4v16M4 12h16" {...s} strokeWidth={2.2} />),
  home: svg(
    <>
      <path d="M4 11l8-7 8 7" {...s} />
      <path d="M6 9.5V20h12V9.5" {...s} />
      <path d="M10 20v-5h4v5" {...s} />
    </>,
  ),
  dumbbell: svg(<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" {...s} />),
  wrench: svg(
    <path
      d="M14.5 6.5a3.5 3.5 0 01-4.6 4.6L4 17l3 3 5.9-5.9a3.5 3.5 0 004.6-4.6l-2.2 2.2-2.3-.5-.5-2.3z"
      {...s}
    />,
  ),
  close: svg(<path d="M6 6l12 12M18 6 6 18" {...s} strokeWidth={2} />),
  menu: svg(<path d="M4 7h16M4 12h16M4 17h16" {...s} strokeWidth={2} />),
} as const;

export type IcoName = keyof typeof Ico;
