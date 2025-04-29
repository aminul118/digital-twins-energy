import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionTitle from "../ui/SectionTitle";

const ContactUs: React.FC = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-12 py-6 lg:py-12 2xl:py-24 xl:min-h-[calc(100vh-276px)] bg-[url('/assets/background/contact.jpg')] bg-cover bg-center">
      {/* Top White Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[1]" />

      {/* Content Section */}
      <div className="relative z-10">
        <SectionTitle title="Contact Us" />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 container mx-auto">
          <div className="flex-1 w-full max-w-lg">
            <ContactInfo />
          </div>
          <div className="flex-1 w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
