import Footer from "@/components/layouts/Footer/Footer";
import ResponsiveNavbar from "@/components/layouts/Navbar/Navbar";

import { TChildren } from "@/lib/types/types";
import React from "react";

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-[calc(100vh-276px)] mt-[68px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
