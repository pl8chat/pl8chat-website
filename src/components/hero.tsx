'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import localFont from "next/font/local";
import Image from "next/image";
import MailingListModal from './mailingListModal'

const inter = localFont({
  src: "../app/fonts/Inter-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className='w-full flex bg-[#f3f4f2]'>
      <div className='basis-1/2'>
        <div className="h-[560px] md:h-[751px] w-full px-4 md:px-8 pt-[56px] lg:pt-32 md:pb-[120px] flex-col justify-start items-start gap-4 md:gap-10 inline-flex">
          <div className="w-full max-w-[822px] pt-16">
            <div className="w-full justify-start text-[#363636] text-8xl font-medium leading-[90px]">
              The Voice <br />of Cars
            </div>
          </div>
          <div className="w-full max-w-[798px] justify-start text-neutral-700 text-3xl font-normal leading-9">
            We’re a vehicle connectivity platform <br />transforming license plates into a new <br />line of communication.
          </div>
          <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
        </div>
        <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <div className='basis-1/2 bg-[#f3f4f2] relative h-[751px]'>
        <Image src={'/assets/images/License Plate.png'} fill alt='License Plate' />
      </div>
    </div>

  )
}