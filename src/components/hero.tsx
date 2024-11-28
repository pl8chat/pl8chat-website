'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import MailingListModal from './mailingListModal'

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="h-[683px] w-full px-8 pt-32 pb-[120px] bg-[#034b48] flex-col justify-start items-start gap-10 inline-flex">
        <div className="max-w-[12ch] text-white text-[100px] font-medium leading-[100px]">Smart and Social Parking </div>
        <div className="w-[768px] text-white text-3xl font-normal leading-[35px]">We’re a new line of communication connecting<br />people, cars and parking communities through <br />license plates.  </div>
        <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}