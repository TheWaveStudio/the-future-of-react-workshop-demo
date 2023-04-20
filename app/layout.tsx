import "./assets/styles/globals.css";
import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "./components/atoms/ThemeProvider/ThemeProvider";
import { Header } from "@/components/molecules/Header/Header";
import { Footer } from "@/components/molecules/Footer/Footer";

const firaCode = Fira_Code({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${firaCode.variable}`} suppressHydrationWarning>
      <body className="ld-background-gradient ld-text-color">
        <ThemeProvider>
          {/* https://beta.nextjs.org/docs/configuring/typescript#async-server-component-typescript-error */}
          {/* @ts-expect-error Async Server Component */}
          <Header />
          {children}
          {/* @ts-expect-error Async Server Component */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
