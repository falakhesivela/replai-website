import Image from "next/image";
import Link from "next/link";

// The Replai brand lockup: the real gradient "R" mark (shared with the
// dashboard, app/public) + the "Replai" wordmark. The mark is a transparent
// PNG, so it sits cleanly on light or dark surfaces; only the wordmark colour
// changes with `theme`. (The design handoff used a placeholder gradient tile
// because it didn't have the mark — we do, so we render the real thing.)
const MARK_ASPECT = 860 / 708; // intrinsic ratio of replai_R_logo.png

export function Logo({
  theme = "light",
  size = 30,
  href = "/",
  priority = false,
  className = "",
}: {
  theme?: "light" | "dark";
  size?: number;
  href?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Replai home"
      className={`group inline-flex items-center gap-2.5 select-none ${className}`}
    >
      <Image
        src="/replai_R_logo.png"
        alt="Replai"
        width={Math.round(size * MARK_ASPECT)}
        height={size}
        priority={priority}
        className="drop-shadow-[0_4px_12px_-2px_rgba(61,107,248,0.5)] transition-transform group-hover:scale-[1.04]"
      />
      <span
        className={`font-semibold text-lg tracking-tight ${
          theme === "dark" ? "text-white" : "text-ink"
        }`}
      >
        Replai
      </span>
    </Link>
  );
}
