import type { Metadata } from "next";
import localFont from "next/font/local";
import Nabvar from "../components/navbar";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

const inter = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

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
        <Nabvar />
        <div className='bg-[#f3f4f2]'>
          {children}
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
