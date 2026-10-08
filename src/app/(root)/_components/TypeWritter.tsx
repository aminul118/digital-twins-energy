"use client";
import { Typewriter } from "react-simple-typewriter";

const words = [
  "Revolutionizing Energy Through AI Optimization",
  "Optimizing Energy Systems with Digital Twin Technology",
];
const longest = words.reduce((a, b) => (b.length > a.length ? b : a));

const TypeWritter = () => {
  return (
    <h1 className="relative text-3xl lg:text-5xl font-bold leading-tight">
      {/* invisible copy reserves the exact height, so no gap and no layout jump */}
      <span className="invisible block" aria-hidden>
        {longest}
      </span>
      <span className="absolute inset-0">
        <Typewriter
          words={words}
          cursor
          loop={1}
          cursorStyle=""
          typeSpeed={30}
          deleteSpeed={100}
          delaySpeed={2000}
        />
      </span>
    </h1>
  );
};

export default TypeWritter;
