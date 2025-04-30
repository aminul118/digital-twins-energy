"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight sm:leading-snug text-center px-4 sm:px-6 lg:px-12">
      <Typewriter
        words={[
          "Revolutionizing Energy Through AI Optimization",
          "Optimizing Energy Systems with Digital Twin Technology",
        ]}
        cursor
        loop={1}
        cursorStyle="|"
        typeSpeed={30}
        deleteSpeed={100}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default TypeWritter;
