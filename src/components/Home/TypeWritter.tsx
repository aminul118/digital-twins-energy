"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
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
  );
};

export default TypeWritter;
