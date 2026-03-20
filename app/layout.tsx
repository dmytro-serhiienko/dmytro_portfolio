import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Sections/Header/Header";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${unbounded.className} ${unbounded.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
