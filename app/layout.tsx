"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Sections/Header/Header";
import { About } from "@/components/Sections/About/About";
import { Contacts } from "@/components/Sections/Contacts/Contacts";
import { Footer } from "@/components/Sections/Footer/Footer";
import { SmoothScroll } from "./ui/SmoothScroll/SmoothScroll";
import { Toaster } from "sonner";

const unbounded = localFont({
  src: "../public/fonts/Unbounded-VariableFont_wght.ttf",
  variable: "--font-unbounded",
  display: "swap",
});

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const bebasneue = localFont({
  src: "../public/fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebasneue",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${unbounded.className} ${unbounded.variable}  ${montserrat.variable} ${bebasneue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <About />
          <Contacts />
          <Footer />
          <Toaster richColors position="bottom-right" />
        </SmoothScroll>
      </body>
    </html>
  );
}
