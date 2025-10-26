import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "../providers/ThemeProvider";
import AosProvider from "@/providers/AosProvider";
import { IChildren } from "@/types";
import "@/styles/globals.css";
import "@/styles/custom.css";

const RootLayout = ({ children }: IChildren) => {
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
