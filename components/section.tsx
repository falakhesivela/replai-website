import type { ReactNode } from "react";

export const Section = ({
  id,
  eyebrow,
  title,
  sub,
  children,
  className = "",
  center = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) => (
  <section
    id={id}
    className={`anchor mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-20 ${className}`}
  >
    {(eyebrow || title) && (
      <div
        className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-8 md:mb-12`}
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-mark-gradient"></span>
            <span className="text-[12px] uppercase tracking-[0.18em] font-bold text-gradient">
              {eyebrow}
            </span>
          </div>
        )}
        {title && (
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink text-balance leading-[1.05]">
            {title}
          </h2>
        )}
        {sub && <p className="mt-4 text-lg text-mute text-pretty">{sub}</p>}
      </div>
    )}
    {children}
  </section>
);
