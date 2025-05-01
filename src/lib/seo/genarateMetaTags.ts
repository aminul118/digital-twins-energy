import { Metadata } from "next";
import { MetaProps } from "../types/types";

export const generateMetaTags = ({
  title,
  description,
  keywords,
  image = "/assets/image/solar.png",
  url = "https://www.digitaltwinsenergy.com",
}: MetaProps): Metadata => {
  return {
    title,
    description,
    keywords,
    category: "Solar Energy",
    openGraph: {
      type: "website",
      url: url,
      title: title,
      description: description,
      siteName: "Digital Twins Energy LLC",
      images: [{ url: image, alt: title }],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: "summary_large_image",
      site: "@digitaltwinsenergy",
      creator: "@mrsaikat",
      images: image,
      title,
      description,
    },
    applicationName: "SHRLBD",
    alternates: {
      canonical: url,
      languages: {
        "en-US": "https://www.digitaltwinsenergy.com/en-US",
      },
    },
  };
};
