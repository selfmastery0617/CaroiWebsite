/**
 * Central business configuration for Caroi LLC.
 *
 * Every placeholder below is intentionally obvious (YOUR_*) so it can be
 * found and replaced with real information before launch. Nothing in this
 * file should be treated as a verified fact until it is updated.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Caroi LLC",
  shortName: "Caroi",
  tagline: "Data Analysis & Business Intelligence",
  description:
    "Caroi LLC helps businesses transform complex data into actionable insights through data analysis, business intelligence, dashboards, reporting, and visualization.",

  // Replace with the production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR_SITE_URL.example",

  // Centralized contact placeholders. Update these once real information
  // is available — every component below reads from this single source.
  contact: {
    email: process.env.CONTACT_EMAIL ?? "YOUR_EMAIL",
    phone: "YOUR_PHONE",
    location: "YOUR_LOCATION",
  },

  social: {
    linkedin: "YOUR_LINKEDIN_URL",
  } satisfies Record<string, string>,

  nav: [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Why Caroi", href: "/#why-caroi" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],

  ctaLabel: "Let's Talk",
};

/** Returns true once a placeholder value has been replaced with real data. */
export function isConfigured(value: string): boolean {
  return Boolean(value) && !value.startsWith("YOUR_");
}

export const services = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    summary:
      "We examine your business data to surface trends, patterns, anomalies, and opportunities that inform better decisions.",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    summary:
      "We turn scattered organizational information into clear, decision-ready reporting your leadership can act on with confidence.",
  },
  {
    id: "dashboard-development",
    title: "Dashboard Development",
    summary:
      "We build intuitive, purpose-built dashboards that help your team monitor the metrics that matter without digging for answers.",
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    summary:
      "We transform complex, multi-dimensional information into visual stories that are easy to understand and act on.",
  },
  {
    id: "reporting-kpi",
    title: "Reporting & KPI Analytics",
    summary:
      "We develop repeatable reporting and KPI tracking that gives every level of your organization a consistent view of performance.",
  },
  {
    id: "data-preparation",
    title: "Data Preparation & Integration",
    summary:
      "We clean, validate, transform, and combine data from multiple sources so it can be analyzed reliably and consistently.",
  },
] as const;

export const outcomes = [
  {
    title: "Clearer visibility",
    description:
      "Replace scattered spreadsheets and one-off exports with a consistent view of how your business is actually performing.",
  },
  {
    title: "Faster decisions",
    description:
      "Spend less time compiling numbers and more time acting on them, with reporting that is ready when you need it.",
  },
  {
    title: "Well-defined KPIs",
    description:
      "Establish metrics that reflect what actually matters to your business, tracked consistently over time.",
  },
  {
    title: "Less manual reporting",
    description:
      "Reduce repetitive manual work by structuring data pipelines and reports that update reliably.",
  },
  {
    title: "Improved data quality",
    description:
      "Address inconsistencies, duplication, and gaps at the source so downstream analysis can be trusted.",
  },
  {
    title: "Easier communication",
    description:
      "Present findings in a way that stakeholders at any level can understand and use, not just data specialists.",
  },
] as const;

export const whyCaroi = [
  {
    title: "Business-first analysis",
    description:
      "We start with the business question, not the dataset. Every analysis is grounded in the decision it needs to support.",
  },
  {
    title: "Clear communication",
    description:
      "Findings are presented in plain business language, backed by visuals that make the reasoning easy to follow.",
  },
  {
    title: "Practical recommendations",
    description:
      "We aim for conclusions your team can actually implement, not abstract observations without a next step.",
  },
  {
    title: "Customized solutions",
    description:
      "Reports, dashboards, and analysis are shaped around how your organization actually works and makes decisions.",
  },
  {
    title: "Reliable workflows",
    description:
      "We build repeatable processes for data preparation and reporting so results stay consistent over time.",
  },
  {
    title: "Useful over complex",
    description:
      "We favor the simplest approach that answers the question well, instead of unnecessary technical complexity.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We clarify your business goals, key questions, stakeholders, and the data currently available to you.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "We collect, clean, organize, and validate the relevant data so it is ready for reliable analysis.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "We investigate patterns, trends, anomalies, and relationships to understand what is driving your results.",
  },
  {
    number: "04",
    title: "Visualize",
    description:
      "We communicate findings through clear reports, dashboards, KPIs, and visualizations built for your audience.",
  },
  {
    number: "05",
    title: "Recommend",
    description:
      "We translate findings into clear conclusions and practical next steps your team can act on.",
  },
] as const;

export const faqs = [
  {
    question: "What types of data analysis does Caroi LLC provide?",
    answer:
      "We work across exploratory analysis, trend and pattern identification, KPI and performance analysis, and reporting design, tailored to the questions your business needs answered.",
  },
  {
    question: "What kinds of businesses can benefit from analytics services?",
    answer:
      "Any organization that collects operational, financial, sales, or customer data and wants clearer visibility into performance can benefit, regardless of size or industry.",
  },
  {
    question:
      "Can Caroi LLC work with existing spreadsheets, databases, or reporting systems?",
    answer:
      "Yes. We typically start by reviewing the data and systems you already use, and build on that foundation rather than requiring you to adopt new tools unnecessarily.",
  },
  {
    question: "Can you create dashboards and recurring reports?",
    answer:
      "Yes. Dashboard development and repeatable reporting are core parts of our services, designed to keep your team updated without manual rebuilding each time.",
  },
  {
    question: "What happens during an initial consultation?",
    answer:
      "We discuss your business goals, the data you currently have, and the questions you are trying to answer, then outline what an engagement could look like.",
  },
  {
    question: "How is project scope determined?",
    answer:
      "Scope is based on your goals, the complexity of the available data, and the reporting or analysis outcomes you need. We define this together before work begins.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact form or the details on this page. We will follow up to schedule an initial conversation about your needs.",
  },
] as const;
