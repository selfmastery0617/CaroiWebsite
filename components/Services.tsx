import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/config/site";
import {
  AnalysisIcon,
  IntelligenceIcon,
  DashboardIcon,
  VisualizationIcon,
  ReportingIcon,
  IntegrationIcon,
} from "@/components/icons";

const icons = {
  "data-analysis": AnalysisIcon,
  "business-intelligence": IntelligenceIcon,
  "dashboard-development": DashboardIcon,
  "data-visualization": VisualizationIcon,
  "reporting-kpi": ReportingIcon,
  "data-preparation": IntegrationIcon,
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Services"
          title="Practical analytics services built around your data"
          description="Each engagement is scoped around the business question you need answered, drawing on the services below as needed."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <ServiceCard
                key={service.id}
                icon={<Icon />}
                title={service.title}
                summary={service.summary}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
