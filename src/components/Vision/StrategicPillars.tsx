import { Globe, Lightbulb, LineChart, LucideIcon } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const pillars: Pillar[] = [
  {
    title: "Innovation-First Approach",
    description:
      "Constantly evolving through research, simulation modeling, and cutting-edge AI development.",
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    title: "Global Sustainability",
    description:
      "Reducing carbon emissions and enabling smarter energy systems worldwide.",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    title: "Data-Driven Growth",
    description:
      "Leveraging real-time data to drive efficient decision-making and operational excellence.",
    icon: LineChart,
    color: "text-green-600",
  },
];

const StrategicPillars = () => {
  return (
    <Container>
      <SectionTitle title="Our Strategic Pillars" />
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title}>
              <CardContent className="space-y-2">
                <Icon className={`${pillar.color} w-6 h-6`} />
                <h3 className="font-semibold text-lg">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default StrategicPillars;
