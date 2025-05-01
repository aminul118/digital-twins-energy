import Services from "@/components/Services/Services";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    "Services - Digital Twin Energy LLC | AI Optimization for Energy Systems",
  description:
    "Explore the services offered by Digital Twin Energy LLC, including AI-powered optimization solutions for solar, wind, and oil & gas energy systems. We deliver smarter, more efficient, and sustainable energy production strategies.",
  keywords:
    "AI energy services, energy optimization solutions, solar energy AI, wind energy technology, oil and gas optimization, renewable energy consulting, digital twin services, clean energy innovation, energy efficiency services, smart energy systems, Digital Twin Energy LLC services",
  url: "https://www.digitaltwinsenergy.com/services",
});

// --> SEO End

const ServicesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant-solar.png"
        heading="Services"
        description="Digital Twin Energy LLC is revolutionizing the energy sector through
          cutting-edge AI-driven optimization."
        className="text-white"
      />
      <Services />
    </div>
  );
};

export default ServicesPage;
