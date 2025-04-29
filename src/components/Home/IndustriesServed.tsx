import { Card, CardContent } from "@/components/ui/card";
import { Flame, Sun } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const industries = [
  {
    id: 1,
    title: "Solar Energy",
    description:
      "Optimize solar energy systems through simulation, predictive analytics, and real-time monitoring.",
    icon: <Sun className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Oil & Gas",
    description:
      "Enhance safety, efficiency, and maintenance of oil and gas infrastructure using digital twin modeling.",
    icon: <Flame className="w-10 h-10 text-orange-600" />,
  },
];

const IndustriesServed = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <SectionTitle
          title=" Industries We Serve"
          details="  Digital Twin Energy LLC delivers tailored solutions for the Solar and
          Oil & Gas industries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map(({ id, title, description, icon }) => (
            <Card
              key={id}
              className="flex flex-col items-center text-center p-6 hover:shadow-md transition rounded-2xl"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <CardContent className="p-0 text-gray-600">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
