import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "../ui/SectionTitle";
import services from "@/lib/constant/services";

const OurSolutions = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <SectionTitle
          title="Our Solutions & Services"
          details="Empowering energy enterprises through intelligent, connected, and
          sustainable digital twin solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, title, description, icon }) => (
            <Card
              key={id}
              className="flex flex-col items-center text-center p-6 hover:shadow-md transition rounded-2xl"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <CardContent className="p-0 text-gray-600 text-sm">
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
