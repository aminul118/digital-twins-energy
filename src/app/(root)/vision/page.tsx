import SectionBanner from "@/components/ui/SectionBanner";
import StrategicPillars from "@/components/Vision/StrategicPillars";
import VisionStateMent from "@/components/Vision/VisionStateMent";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    "Our Vision - Digital Twin Energy LLC | Pioneering AI Energy Solutions",
  description:
    "Discover the vision of Digital Twin Energy LLC — transforming energy production through AI-driven digital twin technology for solar, wind, and oil & gas systems. Guided by innovation and sustainability.",
  keywords:
    "Digital Twin Energy vision, AI energy solutions, future of energy, clean energy innovation, renewable energy AI, digital twin strategy, energy optimization, sustainable energy future, solar and wind energy AI, oil and gas digital solutions, Mr. Saikot vision, AI in energy systems",
  url: "https://www.digitaltwinsenergy.com/vision",
});

// --> SEO End
const VisionPage = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant.png"
        heading="Our Vision"
        description=" Leading the future of clean energy through digital twin innovation and
          AI-powered optimization."
        className="text-white"
      />
      <VisionStateMent />
      <StrategicPillars />
    </div>
  );
};

export default VisionPage;
