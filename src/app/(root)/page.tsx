import HeroSection from "@/components/Home/HeroSection";
import OurSolutions from "@/components/Home/OurSolution";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import ContactUs from "@/components/contact/ContactUs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurSolutions />
      <WhyDigitalTwin />
      <ContactUs />
    </div>
  );
};

export default HomePage;
