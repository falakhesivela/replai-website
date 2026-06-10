// Reusable chat mockups (WhatsApp + website widget) shared across hero,
// channels and the handoff section. Ported from the Daylight design.
import type { ReactNode } from "react";

export type ChatMsg =
  | { from: "in" | "wa" | "widget"; text: ReactNode; time?: string }
  | { typing: true }
  | { handoff: string }
  | { human: { who: string; text: ReactNode; time?: string } };

function ChatHead({
  kind,
  name,
  sub,
  tag,
}: {
  kind: "wa" | "widget";
  name: string;
  sub: string;
  tag?: string;
}) {
  const bg = kind === "wa" ? "bg-wa" : "grad";
  return (
    <div className={`flex items-center gap-2.5 px-4 py-3 ${bg}`}>
      <span className="w-[34px] h-[34px] rounded-full bg-white/25 grid place-items-center text-white font-bold text-[15px] flex-none">
        R
      </span>
      <div className="leading-tight">
        <div className="font-semibold text-[14.5px] text-white">{name}</div>
        <div className="text-[11.5px] text-white/90 flex items-center gap-1.5">
          <span className="w-[7px] h-[7px] rounded-full bg-[#d2ffe0] inline-block" />
          {sub}
        </div>
      </div>
      {tag && (
        <span className="ml-auto font-mono text-[10px] text-white/90 border border-white/40 rounded-md px-1.5 py-0.5">
          {tag}
        </span>
      )}
    </div>
  );
}

function Typing() {
  return (
    <div className="typing self-start bg-white rounded-[14px] rounded-bl-[4px] px-3 py-[11px] flex gap-1 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
}

function HandoffLine({ children }: { children: ReactNode }) {
  return (
    <div className="self-center font-mono text-[10.5px] text-mute bg-white border border-dashed border-line rounded-full px-3 py-[5px] inline-flex items-center gap-2 my-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
      {children}
    </div>
  );
}

function HumanBubble({
  who,
  children,
  time,
}: {
  who: string;
  children: ReactNode;
  time?: string;
}) {
  return (
    <div className="b-human bubble">
      <span className="flex items-center gap-1.5 font-mono text-[9.5px] text-brand-violet mb-1">
        <span className="w-4 h-4 rounded-full grad-soft inline-block" /> {who}
      </span>
      {children}
      {time && <span className="t">{time}</span>}
    </div>
  );
}

export function ChatWindow({
  kind = "wa",
  name,
  sub,
  tag,
  msgs,
  className = "",
  shadow = true,
}: {
  kind?: "wa" | "widget";
  name: string;
  sub: string;
  tag?: string;
  msgs: ChatMsg[];
  className?: string;
  shadow?: boolean;
}) {
  const bodyBg = kind === "wa" ? "wabg" : "widgetbg";
  return (
    <div
      className={`rounded-[20px] overflow-hidden bg-white border border-line ${
        shadow ? "shadow-[0_30px_60px_-24px_rgba(17,24,39,0.28)]" : ""
      } ${className}`}
    >
      <ChatHead kind={kind} name={name} sub={sub} tag={tag} />
      <div className={`p-4 flex flex-col gap-2.5 ${bodyBg}`}>
        {msgs.map((m, i) => {
          if ("typing" in m) return <Typing key={i} />;
          if ("handoff" in m) return <HandoffLine key={i}>{m.handoff}</HandoffLine>;
          if ("human" in m)
            return (
              <HumanBubble key={i} who={m.human.who} time={m.human.time}>
                {m.human.text}
              </HumanBubble>
            );
          const cls = m.from === "in" ? "b-in" : m.from === "wa" ? "b-wa" : "b-widget";
          return (
            <div key={i} className={`bubble ${cls}`}>
              {m.text}
              {m.time && <span className="t">{m.time}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
