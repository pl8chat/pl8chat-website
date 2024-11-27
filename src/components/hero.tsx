'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import localFont from 'next/font/local'
import Modal from './modal'
import MailingListSubForm from './mailingListSubForm'
import Contact from './contactForm'

const barlow = localFont({
  src: "../app/fonts/Barlow-Medium.woff",
  variable: "--font-barlow-medium",
  weight: "100 900",
})

export default function Hero({ }) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="h-[653px] px-8 pt-32 pb-20 bg-[#034b48] w-full flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-[738px] text-emerald-50 text-[100px] font-medium leading-[100px]">Smart and Social Parking </div>
        <div className="w-[768px] text-emerald-50 text-3xl font-normal leading-[35px]">We’re a new line of communication connecting<br />people, cars and parking communities through <br />license plates.  </div>
        <Button variant='homeHero' href="#" onClick={() => setModalOpen(true)}>Talk to sales</Button>
      </div>
      <Modal isOpen={isModalOpen} component={<Contact isModal={true} />} onClose={() => setModalOpen(false)} />
    </div>
  )
} 