import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Outcomes from "@/components/Outcomes";
import DashboardShowcase from "@/components/DashboardShowcase";
import WhyCaroi from "@/components/WhyCaroi";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <Services />
      <Outcomes />
      <DashboardShowcase />
      <WhyCaroi />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
