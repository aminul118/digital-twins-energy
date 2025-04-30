import { Flame, Sun } from "lucide-react";
import TypeWritter from "./TypeWritter";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-md relative overflow-hidden">
      <div className="container mx-auto py-6 px-4">
        {/* header */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
          <div className="w-full lg:w-[45%]">
            <TypeWritter />
          </div>

          <div className="w-full lg:w-[55%]">
            <img
              src="https://i.ibb.co/syHFhNy/image.png"
              alt="image"
              className="w-full h-auto object-contain"
            />
          </div>
        </header>

        {/* Services */}
        <div className="pb-[30px] mt-8">
          <h1 className="text-xl font-semibold">Our Service</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div data-aos="fade-right">
              <Sun className="w-14 h-14 text-yellow-500" />
              <h4 className="text-lg mt-3 dark:text-white/90">Solar Energy</h4>
              <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                Optimize solar energy systems through simulation, predictive
                analytics, and real-time monitoring.
              </p>
            </div>
            <div data-aos="fade-left">
              <Flame className="w-14 h-14 text-orange-600" />
              <h4 className="text-lg mt-3 dark:text-white/90">Oil & Gas</h4>
              <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                Enhance safety, efficiency, and maintenance of oil and gas
                infrastructure using digital twin modeling.
              </p>
            </div>
          </div>
        </div>

        {/* right blur shadow */}
        <div className="w-[80px] h-[80px] bg-[#DC0155] blur-[70px] absolute bottom-10 right-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
