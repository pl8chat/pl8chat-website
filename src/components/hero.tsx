'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import localFont from "next/font/local";
import MailingListModal from './mailingListModal'

const inter = localFont({
  src: "../app/fonts/Inter-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className='w-full'>
      <div className="h-[560px] md:h-[683px] w-full px-4 md:px-8 pt-[56px] lg:pt-32 md:pb-[120px] bg-[#f3f4f2] flex-col justify-start items-start gap-4 md:gap-10 inline-flex">
        {/* <div className="max-w-[12ch] text-white text-[100px] font-medium leading-[100px]">Smart and Social Parking </div> */}
        <div className="md:w-[822px] w-[214px]"><span className="text-[#034b48] text-[35px] md:text-[100px] font-semibold md:font-medium leading-[50px] md:leading-[100px]">Smart and Social Parking</span><span className={`text-[#034b48] text-[35px] lg:text-[90px] font-semibold lg:font-medium lg:leading-[100px] ${inter.className}`}>™</span></div>
        <div className="max-w-[272px] md:max-w-[769px] text-[#353535] text-sm md:text-3xl font-regular leading-[25px] md:leading-[35px]">We’re a new line of communication connecting people, cars and parking communities through license plates.  </div>
        <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}