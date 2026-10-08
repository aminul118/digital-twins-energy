import AboutCompany from "@/components/common/AboutCompany";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import Blog from "./_components/Blog";
import FAQ from "./_components/FAQ";
import HeroSection from "./_components/HeroSection";
import OurSolutions from "./_components/OurSolution";
import generateMetaTags from "@/seo/generateMetaTags";
import { Metadata } from "next";

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

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Digital Twin Energy LLC - AI-Driven Energy Optimization Solutions",
  description:
    "Digital Twin Energy LLC specializes in AI-driven optimization strategies for energy production systems across solar, wind, and oil & gas sectors. Founded and led by Mr. Saikot, we are redefining smart energy innovation.",
  keywords:
    "Digital Twin Energy, AI energy optimization, renewable energy AI, solar energy optimization, wind energy solutions, oil and gas AI, energy production technology, energy efficiency, smart energy solutions, Mr. Saikot, clean energy AI, digital energy systems",
});
// --> SEO End
