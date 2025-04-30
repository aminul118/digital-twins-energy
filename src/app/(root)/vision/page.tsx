import SectionBanner from "@/components/ui/SectionBanner";
import StrategicPillars from "@/components/Vision/StrategicPillars";
import VisionStateMent from "@/components/Vision/VisionStateMent";

const VisionPage = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant.png"
        heading="Our Vision"
        description=" Leading the future of clean energy through digital twin innovation and
          AI-powered optimization."
        className="text-white"
      />
      <VisionStateMent />
      <StrategicPillars />
    </div>
  );
};

export default VisionPage;
