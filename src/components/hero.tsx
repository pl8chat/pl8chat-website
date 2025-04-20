'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import Image from "next/image";
import MailingListModal from './mailingListModal'
import { TopPaddingLayout } from './layouts/topPaddingLayout';

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className=''>
      <div className='w-full md:flex h-[741px] bg-[#f3f4f2] hidden'>
        <div className='basis-1/2'>
          <div className="h-[560px] md:h-[751px] w-full px-4 md:pl-8 pt-[56px] lg:pt-32 md:pb-[120px] flex-col justify-start items-start gap-4 md:gap-10 inline-flex">
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
        <div className='basis-1/2 bg-[#f3f4f2] relative'>
          <Image
            src={'/assets/images/License Plate.png'}
            alt='License Plate'
            fill
            objectFit='cover'
            className="absolute top-0 left-0 w-full h-full"
          />
           <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black/60 to-transparent" />
        </div>
      </div>
      <div className="md:hidden flex bg-[#f3f4f2] w-full relative h-[654px]">
        <div className="absolute inset-0 bg-[url('/assets/images/License%20Plate%202.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className='pt-[58px]'>  
          <div className="relative w-full px-4 pt-[56px] pb-[120px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-80 text-white text-5xl font-medium leading-[50px]">
              The Voice <br />of Cars
            </div>
            <div className="w-80 text-white text-xl font-medium leading-7">
              We’re a vehicle connectivity <br />
              <span className="leading-loose">
                platform transforming license plates into a new line of communication.
              </span>
            </div>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
            <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}