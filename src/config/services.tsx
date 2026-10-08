import {
  Activity,
  GaugeCircle,
  MonitorSmartphone,
  Orbit,
  Repeat2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Predictive Maintenance",
    description:
      "Reduce downtime and extend asset life by detecting issues before failures occur.",
    icon: <Activity className="w-14 h-14 text-blue-600" />,
  },
  {
    id: 2,
    title: "Energy Performance Optimization",
    description:
      "Maximize energy efficiency through monitoring, analytics, and system tuning.",
    icon: <GaugeCircle className="w-14 h-14 text-green-600" />,
  },
  {
    id: 3,
    title: "Real-Time Monitoring",
    description:
      "Track operations in real time for increased visibility, safety, and efficiency.",
    icon: <MonitorSmartphone className="w-14 h-14 text-purple-600" />,
  },
  {
    id: 4,
    title: "Simulation & Modeling",
    description:
      "Simulate real-world scenarios to optimize system performance and plan effectively.",
    icon: <Orbit className="w-14 h-14 text-yellow-500" />,
  },
  {
    id: 5,
    title: "Asset Lifecycle Management",
    description:
      "Plan, track, and optimize assets from acquisition to retirement.",
    icon: <Repeat2 className="w-14 h-14 text-rose-600" />,
  },
  {
    id: 6,
    title: "Data-Driven Decision Making",
    description:
      "Empower strategic planning with actionable insights derived from advanced analytics.",
    icon: <BarChart3 className="w-14 h-14 text-indigo-600" />,
  },
];

export default services;
