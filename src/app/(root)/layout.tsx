import { TChildren } from "@/lib/types/types";

import Footer from "@/components/layouts/Footer/Footer";
import DesktopNavbar from "@/components/layouts/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/layouts/Navbar/MobileNavbar";

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <main className="min-h-[calc(100vh-276px)] mt-[68px] ">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
