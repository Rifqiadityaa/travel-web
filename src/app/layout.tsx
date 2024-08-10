import ApplicationProviders from "@/components/ApplicationProviders";
import type { Metadata } from "next";
import { Albert_Sans, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Site",
  description: "Travel Site",
};

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-unbounded",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-albert-sans",
  display: "swap",
});

const thesignature = localFont({
  src: "../../public/assets/fonts/Thesignature.ttf",
  display: "swap",
  weight: "400",
  variable: "--font-thesignature",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${unbounded.variable} ${albertSans.variable} ${thesignature.variable}`}
      >
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
};

export default RootLayout;
