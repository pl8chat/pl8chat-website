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
      {/* <div className="h-[653px] px-8 pt-32 pb-20 bg-pl8chatGreen flex-col justify-start items-start gap-10 inline-flex w-full">
        <div className="w-[738px] text-emerald-50 text-[100px] font-medium leading-[100px]">Smart and Social Parking </div>
        <div className="w-[768px] text-emerald-50 text-3xl font-normal leading-[35px]">We’re a new line of communication connecting<br />people, cars and parking communities through <br />license plates.  </div>
        <Button variant='homeHero' href="#" className='-translate-y-1 text-pl8Green'>Talk to sales</Button>
        <div className="w-[158px] h-[60px] px-[21px] py-[13px] bg-white rounded-md border border-[#00695c] justify-cente r items-center inline-flex">
          <div className="text-[#00695c] text-lg font-medium leading-normal">Talk to sales</div>
        </div>
      </div>
      <div className={`bg-darkGreen pl-5 pt-10 lg:pt-12 lg:pl-10`}>
        <div className="pb-16 pt-32 sm:pb-32 sm:pt-24 md:pb-12 md:pt-[118px] text-tGreen">
          <h1 className={`font-display text-balance font-medium tracking-tight text-tGreen text-6xl xs: sm:text-[7.5rem] max-w-[10ch] sm:max-w-none`}>
            Sma<span className='tracking-[.2rem]'>rt</span> and <br /> Social Parking
          </h1>
          <h2 className="mt-7 max-w-[37ch] text-lg/7 font-medium sm:text-3xl/8">
            PL8CHAT is a new line of communication
            connecting people, vehicles and parking
            communities through license plates.
          </h2>
          <div
            className="mt-9 lg:mt-11 inline-block"
            onClick={() => setModalOpen(true)}
          >
            <Button href="#" className='-translate-y-1 text-pl8Green'>Talk to sales</Button>
          </div>
        </div>
      </div> */}
      <div className="h-[653px] px-8 pt-32 pb-20 bg-[#034b48] w-full flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-[738px] text-emerald-50 text-[100px] font-medium leading-[100px]">Smart and Social Parking </div>
        <div className="w-[768px] text-emerald-50 text-3xl font-normal leading-[35px]">We’re a new line of communication connecting<br />people, cars and parking communities through <br />license plates.  </div>
        <Button variant='homeHero' href="#" onClick={() => setModalOpen(true)}>Talk to sales</Button>
        {/* <div className="w-[158px] h-[60px] px-[21px] py-[13px] bg-[#58ff89] rounded-md border border-[#083937] justify-center items-center inline-flex">
          <div className="text-[#034b48] text-lg font-medium leading-normal">Talk to sales</div>
        </div> */}
      </div>
      <Modal isOpen={isModalOpen} component={<Contact isModal={true} />} onClose={() => setModalOpen(false)} />
    </div>
  )
} 