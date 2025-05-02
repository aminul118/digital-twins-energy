import type { Metadata } from "next";
import "./globals.css";
import { Children } from "@/lib/types/types";
import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "../providers/ThemeProvider";
import AosProvider from "../providers/AosProvider";

/**
 *--------->> SEO
 */

const image = "/assets/image/seo/solar.png";
const title =
  "Digital Twin Energy LLC - AI-Driven Energy Optimization Solutions";
const description =
  "Discover Digital Twin Energy LLC's cutting-edge AI-driven energy optimization solutions, empowering industries with smarter, more sustainable energy strategies for the future.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI energy optimization solutions",
    "sustainable energy strategies",
    "Digital Twin Energy LLC",
    "energy management solutions",
    "AI-powered energy efficiency",
    "energy optimization technologies",
    "energy solutions for industries",
    "smart energy systems",
    "AI-driven energy services",
    "future of energy optimization",
  ],
  category: "AI Energy Solutions",
  openGraph: {
    type: "website",
    url: "https://www.digitaltwinsenergy.com",
    title,
    description,
    siteName: "Digital Twin Energy LLC",
    images: [{ url: image }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DigitalTwinEnergy",
    creator: "@DigitalTwinEnergy",
    images: image,
    description,
    title,
  },
  robots: { index: true, follow: true },
  applicationName: "Digital Twin Energy LLC",
  facebook: { appId: "580317868506376" },
  authors: [
    {
      name: "Mr. MD Saifur Rahman Saikot",
    },
  ],

  themeColor: "#ffffff",
};

/**
 *--------->> SEO END
 */

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
