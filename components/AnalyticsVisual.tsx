const trendPoints = [24, 30, 27, 38, 34, 44, 40, 52, 48, 60, 56, 68];

const barData = [
  { label: "Q1", value: 42 },
  { label: "Q2", value: 58 },
  { label: "Q3", value: 51 },
  { label: "Q4", value: 71 },
];

function buildTrendPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);

  return points
    .map((point, index) => {
      const x = index * step;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function AnalyticsVisual() {
  const width = 280;
  const height = 96;
  const linePath = buildTrendPath(trendPoints, width, height);
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;
  const maxBar = Math.max(...barData.map((b) => b.value));

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6"
    >
      <div className="flex items-center justify-between border-b border-[color:var(--color-border-soft)] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
            Sample interface
          </p>
          <p className="text-sm font-semibold text-[color:var(--color-ink)]">
            Performance Overview
          </p>
        </div>
        <span className="rounded-full bg-[color:var(--color-surface-muted)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--color-ink-soft)]">
          Illustrative data
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 py-4">
        <KpiCard label="Revenue" value="$1.24M" delta="+12.4%" positive />
        <KpiCard label="Retention" value="94.2%" delta="+2.1%" positive />
        <KpiCard label="Cycle time" value="3.1 days" delta="-8.6%" positive />
      </div>

      <div className="rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-surface-muted)] p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-[color:var(--color-ink-soft)]">
            Monthly trend
          </p>
          <p className="text-xs font-semibold text-emerald-600">+18.3%</p>
        </div>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-20 w-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#trendFill)" />
          <path
            d={linePath}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        {barData.map((bar) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-20 w-full items-end rounded-md bg-[color:var(--color-surface-alt)]">
              <div
                className="w-full rounded-md bg-gradient-to-t from-[color:var(--color-accent)] to-[color:var(--color-cyan)]"
                style={{ height: `${(bar.value / maxBar) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-[color:var(--color-ink-soft)]">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  delta,
  positive,
}: {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-lg border border-[color:var(--color-border-soft)] p-3">
      <p className="text-[11px] font-medium text-[color:var(--color-ink-soft)]">{label}</p>
      <p className="mt-1 text-base font-semibold text-[color:var(--color-ink)]">{value}</p>
      <p
        className={`mt-0.5 text-[11px] font-semibold ${
          positive ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {delta}
      </p>
    </div>
  );
}
