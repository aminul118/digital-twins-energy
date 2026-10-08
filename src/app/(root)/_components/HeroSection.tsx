import { Flame, Sun } from "lucide-react";
import TypeWritter from "./TypeWritter";
import Image from "next/image";
import images from "@/config/images";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Solar Energy",
    description:
      "Optimize solar energy systems through simulation, predictive analytics, and real-time monitoring.",
    icon: Sun,
    iconClass: "text-yellow-500 bg-yellow-500/15",
  },
  {
    title: "Oil & Gas",
    description:
      "Enhance safety, efficiency, and maintenance of oil and gas infrastructure using digital twin modeling.",
    icon: Flame,
    iconClass: "text-orange-600 bg-orange-600/15",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-md relative flex items-center lg:min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto py-6 px-4">
        <header className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-[45%]">
            <TypeWritter />
          </div>

          {/* banner image */}
          <div className="relative w-full lg:w-[55%] overflow-hidden rounded-xl">
            <ScrollReveal direction="fade-up" duration={2}>
              <Image
                src={images.solar.solar}
                alt="image of Solar and gas line"
                height={400}
                width={800}
                className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
                priority
              />
            </ScrollReveal>
          </div>
        </header>

        {/* services row, same line as the red glow */}
        <div className="mt-8 relative z-10">
          <div className="grid grid-cols-1 max-w-2xl gap-4 sm:grid-cols-2">
            {services.map(({ title, description, icon: Icon, iconClass }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
                >
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/70 sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right blur shadow */}
        <div className="w-[80px] h-[80px] bg-[#DC0155] blur-[70px] absolute bottom-10 right-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
