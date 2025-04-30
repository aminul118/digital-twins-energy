import { Sun, Wind, Factory } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    icon: Sun,
    title: "Solar Optimization",
    description:
      "Maximizing solar energy yields through predictive AI modeling.",
  },
  {
    icon: Wind,
    title: "Wind Efficiency",
    description:
      "Boosting wind turbine output with real-time performance analytics.",
  },
  {
    icon: Factory,
    title: "Oil & Gas Solutions",
    description:
      "Optimizing operations with digital twin simulations and AI insights.",
  },
];

const WhatWeDo = () => {
  return (
    <Container backgroundColor="bg-slate-100 dark:bg-slate-900">
      <SectionTitle title="What We Do" />
      <div className="grid md:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description }, index) => (
          <Card data-aos="fade-up" key={index}>
            <CardContent className="p-6 text-center space-y-2">
              <Icon className="mx-auto h-8 w-8" />
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WhatWeDo;
