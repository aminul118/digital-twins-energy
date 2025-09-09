import AboutCompany from "@/components/common/AboutCompany";
import CoreValues from "@/components/modules/About/CoreValues";
import Founder from "@/components/modules/About/Founder";
import WhatWeDo from "@/components/modules/About/WhatWeDo";
import SectionBanner from "@/components/ui/SectionBanner";
import generateMetaTags from "@/seo/generateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "About Us - Digital Twin Energy LLC | AI-Driven Energy Innovation",
  description:
    "Learn about Digital Twin Energy LLC, a company specializing in AI-driven optimization strategies for solar, wind, and oil & gas energy systems. Founded by Mr. Saikot, we are committed to advancing clean, smart, and efficient energy solutions.",
  keywords:
    "About Digital Twin Energy, Mr. Saikot, energy technology company, AI energy leadership, energy system optimization, clean energy company, renewable energy innovation, solar and wind solutions, oil and gas AI, energy industry leadership, digital twin technology",
  websitePath: "/about",
});
// --> SEO End

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
