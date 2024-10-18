'use client'
import { Button } from './button'
import localFont from 'next/font/local'

const barlow = localFont({
  src: "../app/fonts/Barlow-Medium.woff",
  variable: "--font-barlow-medium",
  weight: "100 900",
})


export default function Hero() {
  return (
    <div className={`bg-darkGreen pl-5 lg:pl-10 pt-10 lg:pt-28 `}>
      <div className="pb-24 pt-32 sm:pb-32 sm:pt-24 md:pb-48 md:pt-36 text-white">
        <h1 className={`font-display text-balance font-medium tracking-tight text-white text-6xl xs: sm:text-8xl max-w-[10ch] sm:max-w-none ${barlow.className}`}>
          Smart and <br /> Social Parking
        </h1>
        <h2 className="mt-8 max-w-lg text-xl/7 font-medium sm:text-2xl/8">
          PL8CHAT transforms parking environments into safe and connected communities
        </h2>
        <div className="mt-12">
          <Button href="#">Join waitlist</Button>
        </div>
      </div>
    </div>
  )
}