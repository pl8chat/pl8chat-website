import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { ModalProvider } from "../../components/modalContext";
import localFont from "next/font/local";
import NavbarProducts from "@/components/navbarProducts";
import Footer from "@/components/footer";
import "../globals.css";

const inter = localFont({
  src: "../fonts/Inter.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className}`}>
        <ModalProvider>
          <NavbarProducts />
          <div className="bg-white pt-[70px]">
            {children}
            <Analytics />
          </div>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}
