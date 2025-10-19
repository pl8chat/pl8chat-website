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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PL8CHAT - Connect through license plates",
  description: "Keep your car safe and help other drivers through license plate communication.",
  openGraph: {
    title: "PL8CHAT - Connect through license plates",
    images: "./assets/images/logoGreen.jpg",
    url: "https://pl8chat.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ModalProvider>
          <Navbar />
          <div className="bg-white">
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
