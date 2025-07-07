'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useModal } from '@/components/modalContext'

export default function ContactSalesCard() {
  const { open } = useModal()

  return (
    <div className="w-[358px] md:w-[496px] h-[185px] self-stretch p-7 md:p-10 bg-[#E8F4F0] rounded-3xl inline-flex flex-col justify-start items-start gap-3">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch h-7 justify-center text-gray-900 text-xl font-semibold leading-7">Talk to sales</div>
        <div className="self-stretch justify-center text-gray-900 text-base font-normal leading-normal">
          Have a parking community you want to connect?
        </div>
      </div>
      <div className='pt-2'>
        <Button variant="contact" onClick={open}>
          Contact sales
        </Button>
      </div>
    </div>
  )
}
