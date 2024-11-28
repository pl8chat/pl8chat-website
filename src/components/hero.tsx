'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import Modal from './modal'
import Contact from './contactForm'

export default function Hero({ }) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="px-8 pt-32 pb-20 bg-[#034b48] w-full flex-col justify-start items-start gap-10 flex">
        <div className="max-w-[12ch] text-emerald-50 text-[100px] font-medium leading-[100px]">Smart and Social Parking </div>
        <div className="text-emerald-50 text-3xl font-normal leading-[35px]">We’re a new line of communication connecting<br />people, cars and parking communities through <br />license plates.  </div>
        <Button variant='homeHero' href="#" onClick={() => setModalOpen(true)}>Talk to sales</Button>
      </div>
      <Modal isOpen={isModalOpen} component={<Contact isModal={true} />} onClose={() => setModalOpen(false)} />
    </div>
  )
} 