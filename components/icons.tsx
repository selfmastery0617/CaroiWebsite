type IconProps = {
  className?: string;
};

const shared = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true as const,
};

export function AnalysisIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path
        d="M4 19V10M10 19V5M16 19V13M22 19V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IntelligenceIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v4.5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DashboardIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="3.5" width="7" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="10.5" width="7" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3.5" y="13" width="7" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function VisualizationIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path
        d="M4 15.5c2-4 4-6 6-6s3 3 5 3 3.5-4.5 5-6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ReportingIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IntegrationIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <circle cx="6" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.3 8.2 15.7 11M8.3 15.8 15.7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
