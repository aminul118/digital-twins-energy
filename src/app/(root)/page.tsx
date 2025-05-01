import HeroSection from "@/components/Home/HeroSection";
import OurSolutions from "@/components/Home/OurSolution";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import FAQ from "@/components/Home/FAQ";
import AboutCompany from "@/components/common/AboutCompany";
import Blog from "@/components/Home/Blog";

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
