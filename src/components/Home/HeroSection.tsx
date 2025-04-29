import { Flame, Sun } from "lucide-react";
import TypeWritter from "./TypeWritter";

const HeroSection = () => {
  return (
    <section className=" bg-[#fff] dark:bg-slate-900 rounded-md relative">
      <div className="container mx-auto bg-[#fff] dark:bg-slate-900 rounded-md relative py-6">
        {/* header */}
        <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
          <div className="w-full lg:w-[45%]">
            <TypeWritter />
          </div>

          <div className="w-full lg:w-[55%]">
            <img
              src="https://i.ibb.co/syHFhNy/image.png"
              alt="image"
              className=""
            />
          </div>
        </header>
        {/* Sservices */}
        <div className="px-8 pb-[30px] mt-8">
          <h1 className="text-[1.3rem] font-semibold">Our Service</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-10 w-[70%]">
            <div data-aos="fade-right">
              <Sun className="w-14 h-14 text-yellow-500" />
              <h4 className="text-[1.1rem] mt-3 dark:text-white/90">
                Solar Energy
              </h4>
              <p className="text-[0.9rem] text-gray-500 dark:text-white/60 mt-1">
                Optimize solar energy systems through simulation, predictive
                analytics, and real-time monitoring.
              </p>
            </div>
            <div data-aos="fade-left">
              <Flame className="w-14 h-14 text-orange-600" />
              <h4 className="text-[1.1rem] mt-3 dark:text-white/90">
                Oil & Gas
              </h4>
              <p className="text-[0.9rem] text-gray-500 dark:text-white/60 mt-1">
                Enhance safety, efficiency, and maintenance of oil and gas
                infrastructure using digital twin modeling.
              </p>
            </div>
          </div>
        </div>

        {/* right blur shadow */}
        <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
