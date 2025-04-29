import HeroSection from "@/components/Home/HeroSection";
import OurSolutions from "@/components/Home/OurSolution";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import FAQ from "@/components/Home/FAQ";
import ContactUs from "@/components/contact/ContactUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurSolutions />
      <WhyDigitalTwin />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
