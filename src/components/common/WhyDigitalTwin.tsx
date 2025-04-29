import React from "react";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";

const features = [
  {
    id: 1,
    icon: <RiSecurePaymentLine className="text-5xl text-yellow-400" />,
    title: "Safe & Secure",
    description:
      "Your personal and financial information are secured by ISO standards.",
  },
  {
    id: 2,
    icon: <TbLicense className="text-5xl text-green-400" />,
    title: "Licensed & Regulated",
    description:
      "Transaction with confidence, knowing our operations are fully regulated.",
  },
  {
    id: 3,
    icon: <RiBankLine className="text-5xl text-blue-400" />,
    title: "Protected Funds",
    description: "100% of your funds are kept in the bank at all times.",
  },
];

const WhyDigitalTwin = () => {
  return (
    <div className="relative bg-[url('/assets/background/bg-solar.png')] bg-local md:bg-fixed bg-center bg-cover h-auto min-h-[550px] flex items-center justify-center py-16 2xl:py-40 px-4">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full max-w-7xl mx-auto text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 data-aos="fade-left" className="text-3xl font-bold  mb-4">
            Why Digital Twin Energy LLC?
          </h2>
          <p data-aos="fade-right" className=" mb-10  mx-auto">
            orem ipsum dolor sit amet consectetur, adipisicing elit. Earum atque
            similique, rerum labore odio sit ducimus nisi neque facilis vero!
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 w-full">
          {features.map(({ id, icon, title, description }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="flex flex-col items-center"
            >
              {icon}
              <h2 className="text-xl sm:text-2xl md:text-2xl mt-2 font-semibold">
                {title}
              </h2>
              <p className="mt-3 text-gray-200 text-sm sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDigitalTwin;
