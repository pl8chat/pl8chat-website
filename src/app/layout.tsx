import type { Metadata } from "next";
import localFont from "next/font/local";
import Nabvar from "../components/navbar";
import Footer from "../components/footer";
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
const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff",
  variable: "--font-switzer",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "PL8CHAT",
  description: "DESCRIPTION GOES EHRE",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${switzer.variable} antialiased`}>
        <header>
          <Nabvar />
        </header>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
