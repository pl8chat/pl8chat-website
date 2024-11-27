import type { Metadata } from "next";
import localFont from "next/font/local";
import Nabvar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PL8CHAT - Smart & social parking",
  description: "Smart & Social parking",
  openGraph: {
    title: "PL8CHAT - Smart & social parking",
    images: "./assets/images/logoGreen.jpg",
    url: "https://pl8chat.com",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          <Nabvar />
        </header>
        <div>
          {children}
        </div>
        <div className="w-screen">
          <Footer />
        </div>
      </body>
    </html>
  );
}
