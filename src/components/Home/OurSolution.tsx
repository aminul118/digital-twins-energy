"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  GaugeCircle,
  MonitorSmartphone,
  Orbit,
  Repeat2,
  BarChart3,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const services = [
  {
    id: 1,
    title: "Predictive Maintenance",
    description:
      "Reduce downtime and extend asset life by detecting issues before failures occur.",
    icon: <Activity className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 2,
    title: "Energy Performance Optimization",
    description:
      "Maximize energy efficiency through monitoring, analytics, and system tuning.",
    icon: <GaugeCircle className="w-10 h-10 text-green-600" />,
  },
  {
    id: 3,
    title: "Real-Time Monitoring",
    description:
      "Track operations in real time for increased visibility, safety, and efficiency.",
    icon: <MonitorSmartphone className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 4,
    title: "Simulation & Modeling",
    description:
      "Simulate real-world scenarios to optimize system performance and plan effectively.",
    icon: <Orbit className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 5,
    title: "Asset Lifecycle Management",
    description:
      "Plan, track, and optimize assets from acquisition to retirement.",
    icon: <Repeat2 className="w-10 h-10 text-rose-600" />,
  },
  {
    id: 6,
    title: "Data-Driven Decision Making",
    description:
      "Empower strategic planning with actionable insights derived from advanced analytics.",
    icon: <BarChart3 className="w-10 h-10 text-indigo-600" />,
  },
];

const OurSolutions = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
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
