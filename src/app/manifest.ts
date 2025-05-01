import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Twin Energy LLC",
    short_name: "DTEnergy",
    description:
      "Digital Twin Energy LLC provides AI-driven optimization solutions for energy systems, including solar, wind, and oil & gas. We lead the future of clean and smart energy innovation.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0A0A0A",
    categories: ["technology", "energy", "ai", "consulting"],
    lang: "en",
    orientation: "portrait-primary",

    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
