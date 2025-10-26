import ContactUs from "@/components/modules/contact/ContactUs";
import generateMetaTags from "@/seo/generateMetaTags";
import { Metadata } from "next";

const ContactPage = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    "Contact Us - Digital Twin Energy LLC | Get in Touch for AI Energy Solutions",
  description:
    "Contact Digital Twin Energy LLC to learn more about our AI-driven energy optimization services for solar, wind, and oil & gas sectors. We're here to answer your questions and explore partnership opportunities.",
  keywords:
    "Contact Digital Twin Energy, energy consultation, AI energy support, renewable energy inquiry, solar and wind optimization contact, oil and gas energy solutions, energy project inquiry, get in touch energy company, smart energy services contact, Digital Twin Energy contact info",
  websitePath: "/contact",
});
// --> SEO End
