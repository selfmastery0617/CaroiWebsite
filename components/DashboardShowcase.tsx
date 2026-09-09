import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

const trend = [32, 38, 35, 44, 41, 50, 47, 56, 53, 62, 59, 68, 65, 72];

const categories = [
  { label: "Operations", value: 68 },
  { label: "Sales", value: 84 },
  { label: "Marketing", value: 52 },
  { label: "Finance", value: 61 },
  { label: "Support", value: 45 },
];

const activity = [
  { name: "Weekly performance summary", status: "Delivered", detail: "Automated report" },
  { name: "Regional sales breakdown", status: "Updated", detail: "Dashboard refresh" },
  { name: "Customer retention cohort", status: "In review", detail: "Analysis" },
  { name: "Inventory variance check", status: "Delivered", detail: "Data quality" },
];

function buildPath(points: number[], width: number, height: number) {
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

export default function DashboardShowcase() {
  const width = 560;
  const height = 160;
  const linePath = buildPath(trend, width, height);
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;
  const maxCategory = Math.max(...categories.map((c) => c.value));

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Analytics showcase"
          title="The kind of clarity we build for our clients"
          description="A sample analytics interface illustrating how data can be organized, tracked, and presented. Figures shown are for demonstration only."
        />

        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] p-4 shadow-[var(--shadow-card)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-2 border-b border-[color:var(--color-border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                Business Performance Dashboard
              </p>
              <p className="text-xs text-[color:var(--color-ink-soft)]">
                Sample interface — illustrative data, not client results
              </p>
            </div>
            <span className="w-fit rounded-full border border-[color:var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[color:var(--color-ink-soft)]">
              Last updated: sample data
            </span>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <ShowcaseKpi label="Total records processed" value="128,400" note="Sample metric" />
            <ShowcaseKpi label="Reporting accuracy" value="99.1%" note="Sample metric" />
            <ShowcaseKpi label="Avg. report turnaround" value="1.8 days" note="Sample metric" />
            <ShowcaseKpi label="Active dashboards" value="12" note="Sample metric" />
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-xl border border-[color:var(--color-border)] bg-white p-5 lg:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  Trend over time
                </p>
                <p className="text-xs font-medium text-[color:var(--color-ink-soft)]">
                  Sample series
                </p>
              </div>
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="h-40 w-full overflow-visible sm:h-48"
                preserveAspectRatio="none"
                role="img"
                aria-label="Sample line chart illustrating an upward trend across fourteen periods"
              >
                <defs>
                  <linearGradient id="showcaseFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0.25, 0.5, 0.75].map((fraction) => (
                  <line
                    key={fraction}
                    x1="0"
                    x2={width}
                    y1={height * fraction}
                    y2={height * fraction}
                    stroke="var(--color-border-soft)"
                    strokeWidth="1"
                  />
                ))}
                <path d={areaPath} fill="url(#showcaseFill)" />
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

            <div className="rounded-xl border border-[color:var(--color-border)] bg-white p-5 lg:col-span-2">
              <p className="mb-4 text-sm font-semibold text-[color:var(--color-ink)]">
                By department
              </p>
              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <div key={category.label} className="flex items-center gap-3">
                    <span className="w-20 shrink-0 text-xs font-medium text-[color:var(--color-ink-soft)]">
                      {category.label}
                    </span>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[color:var(--color-surface-alt)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-cyan)]"
                        style={{ width: `${(category.value / maxCategory) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 shrink-0 text-right text-xs font-semibold text-[color:var(--color-ink)]">
                      {category.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-white">
            <div className="border-b border-[color:var(--color-border)] px-5 py-4">
              <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                Recent activity
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                    <th scope="col" className="px-5 py-3 font-medium">
                      Item
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Type
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activity.map((row) => (
                    <tr key={row.name} className="border-t border-[color:var(--color-border-soft)]">
                      <td className="px-5 py-3 font-medium text-[color:var(--color-ink)]">
                        {row.name}
                      </td>
                      <td className="px-5 py-3 text-[color:var(--color-ink-soft)]">{row.detail}</td>
                      <td className="px-5 py-3">
                        <StatusPill status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ShowcaseKpi({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--color-border)] bg-white p-4">
      <p className="text-xs font-medium text-[color:var(--color-ink-soft)]">{label}</p>
      <p className="mt-1 text-xl font-semibold text-[color:var(--color-ink)]">{value}</p>
      <p className="mt-1 text-[11px] text-[color:var(--color-ink-soft)]">{note}</p>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Delivered: "bg-emerald-50 text-emerald-700",
    Updated: "bg-blue-50 text-blue-700",
    "In review": "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}
