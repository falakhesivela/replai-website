export const BillingToggle = ({
  annual,
  setAnnual,
}: {
  annual: boolean;
  setAnnual: (v: boolean) => void;
}) => (
  <div className="mt-8 inline-flex items-center gap-3 mx-auto">
    <div className="inline-flex p-1 rounded-full bg-white border border-line shadow-soft">
      <button
        onClick={() => setAnnual(false)}
        className={`px-4 py-1.5 text-sm font-semibold rounded-full transition ${!annual ? "bg-ink text-white" : "text-mute hover:text-ink"}`}
      >
        Monthly
      </button>
      <button
        onClick={() => setAnnual(true)}
        className={`px-4 py-1.5 text-sm font-semibold rounded-full transition flex items-center gap-2 ${annual ? "bg-ink text-white" : "text-mute hover:text-ink"}`}
      >
        Annual
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded-full ${annual ? "bg-brand-500 text-white" : "bg-brand-100 text-brand-700"}`}
        >
          Save 20%
        </span>
      </button>
    </div>
  </div>
);
