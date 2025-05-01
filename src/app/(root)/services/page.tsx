import Services from "@/components/Services/Services";
import SectionBanner from "@/components/ui/SectionBanner";

const ServicesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant-solar.png"
        heading="Services"
        description="Digital Twin Energy LLC is revolutionizing the energy sector through
          cutting-edge AI-driven optimization."
        className="text-white"
      />
      <Services />
    </div>
  );
};

export default ServicesPage;
