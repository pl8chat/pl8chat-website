import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import Nabvar from "../components/navbar";
import Footer from "../components/footer";
import FooterFinal from "../components/footerFinal";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PL8CHAT - Smart & Social Parking",
  description: "We unite parking communities through license plate chat and connectivity",
  openGraph: {
    title: "PL8CHAT",
    description: "Smart & Social Parking",
    images: "./assets/images/logoGreen.jpg",
    url: "PL8CHAT",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <Nabvar />
        </header>
        <div>
          {children}
          <Analytics />
        </div>
        <div>
          {/* <Footer /> */}
          <FooterFinal />
        </div>
      </body>
    </html>
  );
}
