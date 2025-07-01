import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import NavbarFinal from "../../components/navbarFinal";
import FooterFinal from "../../components/footerFinal";
import "../globals.css";

const inter = localFont({
  src: "../fonts/Inter.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
})

export const metadata: Metadata = {
  title: "PL8CHAT",
  description: "",
  openGraph: {
    title: "PL8CHAT",
    images: "./assets/images/logoGreen.jpg",
    url: "https://pl8chat.com",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          <NavbarFinal />
        </header>
        <div className="pt-[114px] bg-white">
          {children}
          <Analytics />
        </div>
        <div>
          <FooterFinal />
        </div>
      </body>
    </html>
  );
}
