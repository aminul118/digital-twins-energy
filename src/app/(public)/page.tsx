import AboutCompany from "@/components/common/AboutCompany";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import Blog from "@/components/modules/Home/Blog";
import FAQ from "@/components/modules/Home/FAQ";
import HeroSection from "@/components/modules/Home/HeroSection";
import OurSolutions from "@/components/modules/Home/OurSolution";
import generateMetaTags from "@/seo/generateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Digital Twin Energy LLC - AI-Driven Energy Optimization Solutions",
  description:
    "Digital Twin Energy LLC specializes in AI-driven optimization strategies for energy production systems across solar, wind, and oil & gas sectors. Founded and led by Mr. Saikot, we are redefining smart energy innovation.",
  keywords:
    "Digital Twin Energy, AI energy optimization, renewable energy AI, solar energy optimization, wind energy solutions, oil and gas AI, energy production technology, energy efficiency, smart energy solutions, Mr. Saikot, clean energy AI, digital energy systems",
});
// --> SEO End

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurSolutions />
      <AboutCompany />
      <WhyDigitalTwin />
      <Blog />
      <FAQ />
    </>
  );
};

export default HomePage;
