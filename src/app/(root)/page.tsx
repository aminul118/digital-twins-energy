import HeroSection from "@/components/Home/HeroSection";
import OurSolutions from "@/components/Home/OurSolution";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import FAQ from "@/components/Home/FAQ";
import ContactUs from "@/components/contact/ContactUs";
import AboutCompany from "@/components/common/AboutCompany";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <OurSolutions />
      <AboutCompany />
      <WhyDigitalTwin />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;
