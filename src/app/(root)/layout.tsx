import { TChildren } from "@/lib/types/types";
import ResponsiveNavbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

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
