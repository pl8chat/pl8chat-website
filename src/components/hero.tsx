'use client'
import { Button } from './button'
import localFont from 'next/font/local'

const switzer = localFont({
  src: "../app/fonts/Switzer-Variable.woff",
  variable: "--font-switzer",
  weight: "100 900",
})


export default function Hero() {
  return (
    <div className={`bg-darkGreen pl-5 lg:pl-10 pt-10 lg:pt-20 ${switzer.className}`}>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 text-white">
        <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
          Smart and <br /> Social Parking
        </h1>
        <h2 className="mt-8 max-w-lg text-xl/7 font-medium sm:text-2xl/8">
          PL8CHAT transforms parking environments into safe and connected vehicle communities
        </h2>
        <div className="mt-12">
          <Button href="#">Join Waitlist</Button>
        </div>
      </div>
    </div>
  )
}