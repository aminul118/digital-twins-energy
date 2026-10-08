import images from "./images";

const servicesData = [
  {
    id: 1,
    service: "AI-Driven System Optimization",
    image: images.services.a1,
    details: [
      "Real-time adjustment of system parameters (e.g., production schedules, equipment settings).",
      "Enhanced resource utilization and minimized energy loss.",
      "Supports solar, wind, oil & gas platforms.",
    ],
  },
  {
    id: 2,
    service: "Digital Twin Simulation & Modeling",
    image: images.services.twin,
    details: [
      "High-fidelity digital replicas of physical energy systems.",
      "Used for simulation, prediction, and optimization.",
      "Allows clients to test strategies in a risk-free environment.",
    ],
  },
  {
    id: 3,
    service: "Reinforcement Learning Integration",
    image: images.services.reinforcement,
    details: [
      "Adaptive learning systems that self-improve over time.",
      "Automates decision-making for maximum energy efficiency.",
      "Ideal for complex operations like multi-site solar farms or offshore drilling rigs.",
    ],
  },
  {
    id: 4,
    service: "Predictive Maintenance Services",
    image: images.services.predictive,
    details: [
      "Uses ML to forecast equipment failures before they happen.",
      "Includes sensor integration and maintenance scheduling.",
      "Reduces downtime and extends asset lifespan.",
    ],
  },
  {
    id: 5,
    service: "Real-Time Performance Monitoring",
    image: images.services.performance_monitoring,
    details: [
      "Dashboards with live analytics and alerts.",
      "Detect inefficiencies and energy waste instantly.",
      "Supports API integration with SCADA and IoT devices.",
    ],
  },
  {
    id: 6,
    service: "Energy Forecasting & Grid Integration",
    image: images.services.grid_integration,
    details: [
      "Accurate energy output predictions using historical, weather, and system data.",
      "Helps clients optimize grid participation and energy trading.",
      "Supports demand response planning and PPA strategies.",
    ],
  },
  {
    id: 7,
    service: "Solar Solutions for Disadvantaged Communities",
    image: images.services.solution,
    details: [
      "Affordable solar system implementation.",
      "Partnerships with nonprofits and local governments.",
      "Access to grants, low-interest loans, and financial aid.",
    ],
  },
  {
    id: 8,
    service: "Green Energy Education & Outreach",
    image: images.services.green_energy,
    details: [
      "Community-based workshops and webinars.",
      "Online resources about energy savings and solar benefits.",
      "Aimed at homeowners, schools, and small businesses.",
    ],
  },
  {
    id: 9,
    service: "Custom AI Model Development",
    image: images.services.custom_a1,
    details: [
      "Tailored ML algorithms based on client data.",
      "Optimization for specific goals (e.g., emissions reduction, cost cutting).",
    ],
  },
  {
    id: 10,
    service: "Energy Infrastructure Consulting",
    image: images.services.green_energy,
    details: [
      "Guidance for upgrading legacy systems.",
      "Feasibility studies and ROI modeling.",
      "Grid interconnection planning and permitting support.",
    ],
  },
];

export default servicesData;
