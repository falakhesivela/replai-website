import type { IconName } from "@/components/icons";

export type Plan = {
  // Stable key — must match backend plan keys (website/whatsapp/both/scale).
  key: string;
  name: string;
  blurb: string;
  // Per-month price. `annual` is the per-month figure when billed annually (20% off).
  price: { monthly: string; annual: string };
  priceNote?: string;
  cta: string;
  highlight: boolean;
  custom?: boolean;
  included: [string, boolean][];
};

export const PLANS: Plan[] = [
  {
    key: "website",
    name: "Website widget",
    blurb: "Answer every website visitor 24/7 with one snippet.",
    price: { monthly: "$25", annual: "$20" },
    cta: "Start free trial",
    highlight: false,
    included: [
      ["Website chat widget (one snippet, any CMS)", true],
      ["Widget branding: colour, position, avatar, greeting", true],
      ["24/7 AI agent", true],
      ["Knowledge base (site crawl + PDFs)", true],
      ["Playground + all industry templates", true],
      ["Unified conversations inbox + search", true],
      ["Human handoff", true],
      ["Lead capture + prechat form", true],
      ["Rich messaging (images, files, voice)", true],
      ["Business hours & after-hours replies", true],
      ["1,000 conversations / month", true],
      ["2 team seats", true],
      ["WhatsApp Business channel", false],
    ],
  },
  {
    key: "whatsapp",
    name: "WhatsApp",
    blurb: "The same AI agent on your WhatsApp Business number.",
    price: { monthly: "$35", annual: "$28" },
    priceNote: "500 WhatsApp messages/mo included · $0.04 each beyond",
    cta: "Start free trial",
    highlight: false,
    included: [
      ["WhatsApp Business API number (we handle Meta setup)", true],
      ["24/7 AI agent", true],
      ["Knowledge base (site crawl + PDFs)", true],
      ["Playground + all industry templates", true],
      ["Unified conversations inbox + search", true],
      ["Human handoff", true],
      ["Lead capture & qualification", true],
      ["Rich messaging incl. voice notes", true],
      ["Business hours & after-hours replies", true],
      ["750 conversations / month", true],
      ["500 WhatsApp messages / month ($0.04 each beyond)", true],
      ["2 team seats", true],
      ["Website chat widget", false],
    ],
  },
  {
    key: "both",
    name: "Both channels",
    blurb:
      "WhatsApp + website, one shared inbox. $11/mo less than buying separately.",
    price: { monthly: "$49", annual: "$39" },
    priceNote: "Save $11/mo · 1,000 WhatsApp messages/mo included",
    cta: "Start free trial",
    highlight: true,
    included: [
      ["Everything in Website widget + WhatsApp", true],
      ["One shared inbox across both channels", true],
      ["Same agent, same answers, both channels", true],
      ["2,000 pooled conversations / month", true],
      ["1,000 WhatsApp messages / month ($0.04 each beyond)", true],
      ["3 team seats", true],
      ["Lead qualification & scoring", true],
      ["Full analytics (CSAT, SLA, response)", true],
      ["Bookings, Shopping & Broadcasts available as add-ons", true],
    ],
  },
  {
    key: "scale",
    name: "Scale",
    blurb: "For multi-location teams and agencies running real volume.",
    price: { monthly: "Let’s talk", annual: "Let’s talk" },
    cta: "Talk to sales",
    highlight: false,
    custom: true,
    included: [
      ["Everything in Both channels", true],
      ["Custom conversation volume", true],
      ["Departments with AI auto-routing", true],
      ["Advanced roles, permissions & activity log", true],
      ["SSO (Google / Microsoft)", true],
      ["Agency multi-client console", true],
      ["Custom analytics & exports", true],
      ["Bookings, Shopping & Broadcasts included", true],
      ["POPIA DPA + onboarding manager", true],
      ["Priority local support", true],
    ],
  },
];

export const ADDONS: [IconName, string, string, string][] = [
  [
    "Calendar",
    "Bookings module",
    "Services, availability, reminders and calendar sync.",
    "$8",
  ],
  [
    "Cart",
    "Shopping module",
    "Catalogue, orders and payment links inside chat.",
    "$10",
  ],
  [
    "Megaphone",
    "Broadcast campaigns",
    "Targeted sends with scheduling and delivery/read stats.",
    "$8",
  ],
  [
    "Team",
    "Extra team seat",
    "Add another teammate to the shared inbox.",
    "$5",
  ],
];

export const PRICING_FAQ: [string, string][] = [
  [
    "Do I have to buy both channels?",
    "No. Start with just the website widget ($25/mo) or just WhatsApp ($35/mo). The Both plan combines them at $49/mo — $11 less than buying separately — with one shared inbox. You can add the other channel any time.",
  ],
  [
    "What counts as a conversation?",
    "A conversation is a 24-hour window of back-and-forth with one customer on one channel. Replies within that window don't count again, no matter how many messages.",
  ],
  [
    "What if I go over my monthly conversations?",
    "We notify you as you approach the limit and never cut off mid-chat. You can upgrade for more headroom, or extra conversations are billed at $0.04 each.",
  ],
  [
    "How are WhatsApp message fees handled?",
    "Each WhatsApp plan includes a monthly allowance of business messages — 500/mo on the WhatsApp plan, 1,000/mo on the Both plan. Extra messages are billed at $0.04 each on your Replai invoice (one bill, no separate Meta account). Service replies — your responses to customer-initiated chats — are free and don't count toward the allowance. The website widget has no per-message fee at all.",
  ],
  [
    "Can I change channels or modules later?",
    "Yes — changes are immediate. Upgrades and added channels/modules are pro-rated; downgrades apply from your next billing cycle. No annual lock-in penalties.",
  ],
  [
    "Do you charge for setup?",
    "No setup fees on any plan. Scale customers get a dedicated onboarding manager included.",
  ],
];

export type CompareValue = boolean | string;

// Columns: Website widget · WhatsApp · Both channels (highlighted) · Scale
export const COMPARE_ROWS: [
  string,
  [string, CompareValue, CompareValue, CompareValue, CompareValue][],
][] = [
  [
    "Channels",
    [
      ["Website chat widget (one snippet)", true, false, true, true],
      ["WhatsApp Business API number", false, true, true, true],
      ["Widget branding (colour, position, avatar)", true, false, true, true],
      ["Prechat lead form", true, false, true, true],
      ["One shared inbox across channels", false, false, true, true],
    ],
  ],
  [
    "AI agent",
    [
      ["24/7 AI replies", true, true, true, true],
      ["Knowledge base training", true, true, true, true],
      ["Playground", true, true, true, true],
      ["Industry templates", "All 7", "All 7", "All 7", "All 7"],
    ],
  ],
  [
    "Conversations",
    [
      ["Included conversations / month", "1,000", "750", "2,000", "Custom"],
      ["Billed per 24h conversation", true, true, true, true],
      ["Overage per extra conversation", "$0.04", "$0.04", "$0.04", "Custom"],
      ["WhatsApp messages / month included", "—", "500", "1,000", "Custom"],
      ["Overage per WhatsApp message", "—", "$0.04", "$0.04", "Custom"],
      ["Service replies (customer-initiated)", "—", "Free", "Free", "Free"],
    ],
  ],
  [
    "Inbox & team",
    [
      ["Unified conversations inbox", true, true, true, true],
      ["Human handoff", true, true, true, true],
      ["Team seats included", "2", "2", "3", "Custom"],
      ["Departments & AI auto-routing", false, false, false, true],
      ["Roles, permissions, activity log", "Basic", "Basic", "Standard", "Advanced"],
      ["SSO (Google / Microsoft)", false, false, false, true],
      ["Agency multi-client console", false, false, false, true],
    ],
  ],
  [
    "Sell & book",
    [
      ["Lead capture & qualification", true, true, true, true],
      ["Appointment bookings", "Add-on", "Add-on", "Add-on", true],
      ["Ecommerce + payment links", "Add-on", "Add-on", "Add-on", true],
      ["Broadcast campaigns", "Add-on", "Add-on", "Add-on", true],
      ["Rich messaging (images, files, voice)", true, true, true, true],
    ],
  ],
  [
    "Analytics & ops",
    [
      ["Conversations / leads dashboard", true, true, true, "Full + exports"],
      ["CSAT & SLA breach rate", true, true, true, true],
      ["Business hours & after-hours", true, true, true, true],
      ["Custom analytics & exports", false, false, false, true],
      ["Priority local support", false, false, false, true],
      ["POPIA DPA + onboarding manager", false, false, false, true],
    ],
  ],
];
