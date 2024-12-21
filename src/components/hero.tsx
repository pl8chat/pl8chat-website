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
    <div>
      <div className="h-[683px] w-full px-8 pt-32 pb-[120px] bg-[#f3f4f2] flex-col justify-start items-start gap-10 inline-flex">
        {/* <div className="max-w-[12ch] text-white text-[100px] font-medium leading-[100px]">Smart and Social Parking </div> */}
        <div className="w-[822px]"><span className="text-[#034b48] text-[100px] font-medium leading-[100px]">Smart and Social Parking</span><span className={`text-[#034b48] text-[90px] font-medium leading-[100px] ${inter.className}`}>™</span><span className="text-[#034b48] text-[100px] font-medium leading-[100px]"> </span></div>
        <div className="w-[768px] text-[#034b48] text-3xl font-regular leading-[35px]">We’re a new line of communication connecting<br />people, cars and parking communities through <br />license plates.  </div>
        <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}