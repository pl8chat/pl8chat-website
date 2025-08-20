import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ModalProvider } from "../../components/modalContext";
import TalkToSalesModal from '@/components/talkToSalesModal'
import "../globals.css";

const inter = localFont({
  src: "../fonts/Inter.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
})

export const metadata: Metadata = {
  title: "PL8CHAT - Connect through license plates",
  description: "Keep your car safe and help other drivers through license plate communication.",
  openGraph: {
    title: "PL8CHAT - Connect through license plates",
    description: "Keep your car safe and help other drivers through license plate communication.",
    images: "./assets/images/logoGreen.jpg",
    url: "https://pl8chat.com",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ModalProvider>
          <header>
            <Navbar />
          </header>
          <div className="pt-[102px] md:pt-[114px] bg-white">
            {children}
            <Analytics />
            <TalkToSalesModal />
          </div>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
