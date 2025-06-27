'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@/components/modal'
import TalkToSales from '@/components/talkToSales'

export default function ContactSalesCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="w-[496px] h-[185px] self-stretch p-10 bg-[#E8F4F0] rounded-3xl inline-flex flex-col justify-start items-start gap-3">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch h-7 justify-center text-gray-900 text-xl font-semibold leading-7">Talk to sales</div>
          <div className="self-stretch justify-center text-gray-900 text-base font-normal leading-normal">Have a parking community you want to connect?</div>
        </div>
        <Button variant='contact' onClick={() => setIsModalOpen(true)}>
          Contact sales
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} component={<TalkToSales />} noX={true} />
    </>
  )
}
