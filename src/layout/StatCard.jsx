const STAT_LABELS = {
  Snídaně: "Snídaně",
  Oběd: "Obědy",
  Večeře: "Večeře",
};

export function StatCard({ item }) {
  const label = STAT_LABELS[item.label] ?? item.label;

  return (
    <div className="rounded-[2rem] bg-white p-5 card-glow ring-1 ring-orange-100">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-4xl">{item.emoji}</p>
          <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-[#f9735b]">
            {label}
          </p>
        </div>

        <div className="rounded-2xl bg-orange-50 px-4 py-2 text-3xl font-black text-[#3b2418]">
          {item.count}
        </div>
      </div>
    </div>
  );
}
