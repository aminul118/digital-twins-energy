import HeroSection from "@/components/Home/HeroSection";
import OurSolutions from "@/components/Home/OurSolution";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import FAQ from "@/components/Home/FAQ";
import AboutCompany from "@/components/common/AboutCompany";
import Blog from "@/components/Home/Blog";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Digital Twin Energy LLC - AI-Driven Energy Optimization Solutions",
  description:
    "Digital Twin Energy LLC specializes in AI-driven optimization strategies for energy production systems across solar, wind, and oil & gas sectors. Founded and led by Mr. Saikot, we are redefining smart energy innovation.",
  keywords:
    "Digital Twin Energy, AI energy optimization, renewable energy AI, solar energy optimization, wind energy solutions, oil and gas AI, energy production technology, energy efficiency, smart energy solutions, Mr. Saikot, clean energy AI, digital energy systems",
  url: "https://www.digitaltwinsenergy.com",
});
// --> SEO End

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <OurSolutions />
      <AboutCompany />
      <WhyDigitalTwin />
      <Blog />
      <FAQ />
    </div>
  );
};

export default HomePage;
