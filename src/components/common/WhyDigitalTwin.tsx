import React from "react";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";

const features = [
  {
    id: 1,
    icon: <RiSecurePaymentLine className="text-5xl text-yellow-400" />,
    title: "Trusted & Transparent",
    description:
      "We maintain full transparency in our processes, ensuring trust at every stage of your energy journey.",
  },
  {
    id: 2,
    icon: <TbLicense className="text-5xl text-green-400" />,
    title: "Certified & Compliant",
    description:
      "Our operations are fully licensed and compliant with national energy and sustainability regulations.",
  },
  {
    id: 3,
    icon: <RiBankLine className="text-5xl text-blue-400" />,
    title: "Financially Backed",
    description:
      "We safeguard your investments through partnerships with top-tier financial institutions.",
  },
];

const WhyDigitalTwin = () => {
  return (
    <div className="relative bg-[url('/assets/background/bg-solar.png')] bg-local md:bg-fixed bg-center bg-cover h-auto min-h-[550px] flex items-center justify-center py-16 2xl:py-40 px-4">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative w-full max-w-7xl mx-auto text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 data-aos="fade-left" className="text-3xl font-bold mb-4">
            Why Digital Twin Energy LLC?
          </h2>
          <p data-aos="fade-right" className="mb-10 text-gray-300">
            At Digital Twin Energy LLC, we combine advanced technology with
            sustainable solutions to deliver reliable and efficient energy
            systems. Our commitment to safety, compliance, and transparency sets
            us apart in the clean energy sector.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 w-full">
          {features.map(({ id, icon, title, description }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="flex flex-col items-center text-center"
            >
              {icon}
              <h3 className="text-xl sm:text-2xl mt-2 font-semibold">
                {title}
              </h3>
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
