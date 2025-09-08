import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
