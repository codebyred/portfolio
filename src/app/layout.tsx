import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SlideTabsExample } from "@/components/header2"
import ActiveSectionContextProvider from "@/context/active-section-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redoan | Portfolio",
  description: "I am a Full-Stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-gray-50 text-gray-950
          relative
          py-30
        `}
      >
        <div className="bg-[#fbe2e3] blur-[10rem]
        absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] -z-10
        rounded-full"
        >
        </div>
        <div className="bg-[#dbd7fb] blur-[10rem] 
          absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] -z-10
          h-[31.25rem] w-[50rem] sm:w-[68.75rem]
          rounded-full"
        >
        </div>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
