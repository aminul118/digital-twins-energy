"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section className=" bg-[#fff] rounded-md relative">
      <div className="container mx-auto bg-[#fff] rounded-md relative py-6">
        {/* header */}
        <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
          <div className="w-full lg:w-[45%]">
            <h1 className="text-4xl sm:text-[60px] font-semibold  sm:leading-20">
              <Typewriter
                words={[
                  " Revolutionizing Energy Through AI Optimization",
                  "Optimizing Energy Systems with Digital Twin Technolog",
                ]}
                cursor
                loop={1}
                cursorStyle=""
                typeSpeed={30}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </h1>
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
            <div>
              <img
                src="https://i.ibb.co/z721j8b/Vector.png"
                alt="Vector"
                className="w-[30px]"
              />
              <h4 className="text-[1.1rem] mt-3">Branding</h4>
              <p className="text-[0.9rem] text-gray-500 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/Qn78BRJ/Ui-Design.png"
                alt="Vector"
                className="w-[30px]"
              />
              <h4 className="text-[1.1rem] mt-3">UI/UX</h4>
              <p className="text-[0.9rem] text-gray-500 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/GcsvXxk/Product.png"
                alt="Vector"
                className="w-[30px]"
              />
              <h4 className="text-[1.1rem] mt-3">Product Design</h4>
              <p className="text-[0.9rem] text-gray-500 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
