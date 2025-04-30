import AboutCompany from "@/components/common/AboutCompany";
import CoreValues from "@/components/About/CoreValues";
import Founder from "@/components/About/Founder";
import WhatWeDo from "@/components/About/WhatWeDo";
import SectionBanner from "@/components/ui/SectionBanner";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant.png"
        heading="About us"
        description="Digital Twin Energy LLC is revolutionizing the energy sector through
          cutting-edge AI-driven optimization."
        className="text-white"
      />
      <AboutCompany />
      <CoreValues />
      <WhatWeDo />
      <Founder />
    </div>
  );
};

export default AboutPage;
