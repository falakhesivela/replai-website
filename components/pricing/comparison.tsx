import { Fragment } from "react";
import { Section } from "@/components/section";
import { I } from "@/components/icons";
import { COMPARE_ROWS, type CompareValue } from "@/components/pricing/data";

const cellRender = (v: CompareValue, highlight = false) => {
  if (v === true) return <I.Check className="h-4 w-4 text-brand-600" />;
  if (v === false) return <I.X className="h-4 w-4 text-mute/60" />;
  return (
    <span className={`text-xs font-semibold ${highlight ? "text-brand-800" : "text-ink"}`}>
      {v}
    </span>
  );
};

export const Comparison = () => (
  <Section
    id="compare"
    eyebrow="Compare in detail"
    title="Every feature, every plan."
  >
    <div className="rounded-2xl border border-line overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-sm">
          <thead>
            <tr className="bg-paper border-b border-line">
              <th className="text-left font-semibold text-mute uppercase tracking-wider text-[11px] px-5 py-3 w-1/3">
                Feature
              </th>
              <th className="text-center font-semibold text-ink px-5 py-3">
                Website
              </th>
              <th className="text-center font-semibold text-ink px-5 py-3">
                WhatsApp
              </th>
              <th className="text-center font-semibold px-5 py-3 bg-brand-gradient text-white">
                Both channels
              </th>
              <th className="text-center font-semibold text-ink px-5 py-3">
                Scale
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map(([group, rows]) => (
              <Fragment key={group}>
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 pt-6 pb-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-600"
                  >
                    {group}
                  </td>
                </tr>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="px-5 py-3 text-ink">{r[0]}</td>
                    <td className="px-5 py-3 text-center">
                      {cellRender(r[1])}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {cellRender(r[2])}
                    </td>
                    <td className="px-5 py-3 text-center bg-brand-50/70 border-x border-brand-100">
                      {cellRender(r[3], true)}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {cellRender(r[4])}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Section>
);
