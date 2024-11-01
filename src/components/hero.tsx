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

export default function Hero({}) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={`bg-darkGreenTest pl-5 pt-10 lg:pt-28 lg:pl-10`}>
        <div className="pb-16 pt-32 sm:pb-32 sm:pt-24 md:pb-12 md:pt-36 text-tGreen">
          <h1 className={`font-display text-balance font-medium tracking-tight text-tGreen text-6xl xs: sm:text-[7.5rem] max-w-[10ch] sm:max-w-none`}>
            Sma<span className='tracking-[.2rem]'>rt</span> and <br /> Social Parking
          </h1>
          <h2 className="mt-7 max-w-[37ch] text-lg/7 font-medium sm:text-3xl/8">
            PL8CHAT is a new line of communication connecting
            vehicles and parking communities.
          </h2>
          <div
            className="mt-9 lg:mt-11 inline-block"
            onClick={() => setModalOpen(true)}
          >
            <Button href="#" className='-translate-y-1'>Talk to sales</Button>
          </div>
        </div>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
} 