'use client'
import { useState } from 'react'
import { Button } from './button'
import localFont from 'next/font/local'
import MailingListModal from './mailingListModal'

const barlow = localFont({
  src: "../app/fonts/Barlow-Medium.woff",
  variable: "--font-barlow-medium",
  weight: "100 900",
})


export default function Hero() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={`bg-darkGreen pl-5 lg:pl-10 pt-10 lg:pt-28 `}>
        <div className="pb-24 pt-32 sm:pb-32 sm:pt-24 md:pb-48 md:pt-36 text-white">
          <h1 className={`font-display text-balance font-medium tracking-tight text-white text-6xl xs: sm:text-[7.5rem] max-w-[10ch] sm:max-w-none ${barlow.className}`}>
            Sma<span className='tracking-[.3rem]'>rt</span> and <br /> social parking
          </h1>
          <h2 className="mt-8 max-w-xl text-lg/7 font-medium sm:text-2xl/8">
            We create safe and connected parking communities through license plate communication
          </h2>
          <div
            className="mt-9 lg:mt-11"
            onClick={() => setModalOpen(true)}
          >
            <Button href="#">Join waitlist</Button>
          </div>
        </div>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}