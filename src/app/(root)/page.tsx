import HeroSection from "@/components/Home/HeroSection";
import IndustriesServed from "@/components/Home/IndustriesServed";
import OurSolutions from "@/components/Home/OurSolution";
import WhyDigitalTwin from "@/components/common/WhyDigitalTwin";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyDigitalTwin />
      <IndustriesServed />
      <OurSolutions />
    </div>
  );
};

export default HomePage;
