import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "../ui/SectionTitle";
import services from "@/lib/constant/services";

const OurSolutions = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto text-center">
        <SectionTitle
          title="Our Solutions & Services"
          details="Empowering energy enterprises through intelligent, connected, and sustainable digital twin solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map(({ id, title, description, icon }) => (
            <Card
              data-aos="fade-up"
              key={id}
              className="flex flex-col items-center"
            >
              <div className="mb-4 text-4xl text-primary">{icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {title}
              </h3>
              <CardContent className="text-gray-600 dark:text-white/70 text-sm px-2">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
