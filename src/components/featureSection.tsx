'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import CreateAccountSVG from '@/svgs/createAccount.svg'
import CreateAccountSmallSVG from '@/svgs/createAccountSmall.svg'
import SearchIconSVG from '@/svgs/searchIcon.svg'
import SearchIconSmallSVG from '@/svgs/searchIconSmall.svg'
import SearchIconSmall2SVG from '@/svgs/searchIconSmall2.svg'
import SearchIconSmall2BoldSVG from '@/svgs/SearchIconSmall2Bold.svg'
import ChatIconSVG from '@/svgs/chatIcon.svg'
import ChatIconSmallSVG from '@/svgs/chatIconSmall.svg'
import CautionIconSVG from '@/svgs/cautionIcon.svg'
import CautionIconSmallSVG from '@/svgs/cautionIconSmall.svg'
import CautionIconBoldSVG from '@/svgs/cautionIconBold.svg'
import ChatBubbleSVG from '@/svgs/chatBubble.svg'
import ChatBubbleSmallSVG from '@/svgs/chatBubbleSmall.svg'
import ChatBubbleSmallBoldSVG from '@/svgs/chatBubbleSmallBold.svg'
import PhoneIconSVG from '@/svgs/phoneIcon.svg'
import PhoneIconSmallSVG from '@/svgs/phoneIconSmall.svg'
import PhoneIconSmallBoldSVG from '@/svgs/phoneIconSmallBold.svg'
import AppStoreSVG from '@/svgs/AppleAppStore.svg'
import AppleAppStoreWhite from '@/svgs/AppleAppStoreWhite.svg'
import AppStoreMobile from '@/svgs/AppleAppStoreMobile.svg'
import GooglePlayStoreSVG from '@/svgs/googleplaystore.svg'
import GooglePlayStoreWhite from '@/svgs/googleplaystoreWhite.svg'
import GooglePlayStoreMobile from '@/svgs/googleplaystoreMobile.svg'
import Pl8chatLogoWhite from '@/svgs/pl8chatLogoWhite.svg'
import FAQ from './faq'
import Feature3 from './feature3'
import { FC } from 'react'

interface Feature {
  image: string
  title: string
  description: string
  cost?: string
  href: string
}

const features: Feature[] = [
  {
    image: 'featureSection2Image2',
    title: 'Modern day fleet\nreporting',
    description:
      'Increase safety and accountability\nfor your vehicles and drivers through license plate reporting.',
    cost: 'First 5 vehicles free. $20/year per additional vehicle.',
    href: '#',
  },
  {
    image: 'featureSection2Image3',
    title: 'Safe and connected parking',
    description:
      'Manage your parking community better with direct vehicle communication through license plates.',
    cost: 'First location free. $50/year per additional location.',
    href: '#',
  },
]


const FeatureSection: FC = () => {
  return (
    <div className='flex flex-col justify-center w-full'>
      <div className="p-14 bg-white flex flex-row justify-center items-center">
        <div className="w-[776px] self-stretch inline-flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-[#002823] text-6xl font-medium leading-[60px]">We bring the <br />license plate to life</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="w-[596px] h-32 justify-start text-[#002823] text-2xl font-medium leading-[34px]">The license plate isn’t a useless vehicle code anymore. It’s alive — and it’s how you keep your car safe, help out other drivers, and stay connected on and off the road. </div>
            </div>
            <div className='flex flex-row gap-5'>
              <AppStoreSVG />
              <GooglePlayStoreSVG />
            </div>
          </div>
        </div>
        <div className='max-h-[600px]'>
          <Image
            src="/assets/images/featureImage.png"
            alt="Feature Section Image"
            width={544}
            height={600}
            className='rounded-[25px] max-h-[600px]'
          />
        </div>
      </div>
      <div className="self-stretch p-14 bg-emerald-50 inline-flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-start items-center gap-8">
          <div className="text-center justify-start text-[#002823] text-6xl font-medium leading-[48px]">One platform. Three ways to connect</div>
          <div className="text-center justify-start text-[#363636] text-2xl font-medium leading-[34px]">PL8CHAT is a communication ecosystem connecting drivers, <br />vehicles and businesses.</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col md:flex-row justify-center items-start gap-8">
              <div className="w-[420px] h-[550px] pl-4 pr-6 pt-28 rounded-3xl inline-flex flex-col justify-start items-start gap-10 bg-[linear-gradient(166deg,rgba(0,0,0,0.43)_17.12%,rgba(0,0,0,0.70)_54.46%,rgba(0,0,0,0.70)_60.31%,rgba(0,0,0,0.00)_73.11%,rgba(0,0,0,0.00)_76.69%),url('/assets/images/featureSection2Image1.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
                <div className="self-stretch h-60 flex flex-col justify-center items-start gap-10">
                  <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-[18px]">
                    <div className="justify-start text-white text-4xl font-medium leading-10 tracking-[0.36px]">A free, <br />new way <br />to connect</div>
                    <div className="self-stretch justify-start text-white text-lg font-normal leading-[24px] tracking-tight">Keep your car safe, help other drivers and <br /> stay connected through license plates.</div>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-5 w-full'>
                  <AppleAppStoreWhite />
                  <GooglePlayStoreWhite />
                </div>
                <div className="self-stretch flex justify-center text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
              </div>
              {features.map((feature, index) => (
                <div key={index} className="h-[550px] inline-flex flex-col justify-center items-start">
                  <div
                    className="w-[420px] h-[550px] pl-4 pr-6 rounded-t-[25px] inline-flex flex-col justify-between items-start gap-[100px] bg-[lightgray] bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `linear-gradient(166deg, rgba(0,0,0,0.43) 17.12%, rgba(0,0,0,0.70) 54.46%, rgba(0,0,0,0.70) 60.31%, rgba(0,0,0,0.00) 73.11%, rgba(0,0,0,0.00) 76.69%), url('/assets/images/${feature.image}.png')`,
                    }}
                  >
                    <div className="self-stretch py-2 inline-flex justify-center items-center gap-1">
                      <Pl8chatLogoWhite />
                      <div className="text-center justify-start text-white text-lg font-medium leading-normal tracking-tight">for business</div>
                    </div>
                    <div className="w-[420px] flex-1 flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch justify-start text-white text-4xl font-medium leading-10 tracking-tight whitespace-pre-line">{feature.title}</div>
                      <div className="w-[378px] self-stretch justify-start text-white text-lg font-normal leading-[24px] tracking-[0.18]">{feature.description}</div>
                      <div className="self-stretch justify-start text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
                    </div>
                  </div>
                  <div className="self-stretch h-20 pl-5 pr-4 py-3 bg-emerald-900 rounded-bl-2xl rounded-br-2xl inline-flex justify-center items-center overflow-hidden">
                    <div className="flex-1 flex justify-start items-center gap-3">
                      <Link href={feature.href}>
                        <Button variant='signUp' >Sign up</Button>
                      </Link>
                      <div className="w-64 justify-start text-gray-300 text-sm font-medium leading-tight tracking-tight">{feature.cost}</div>
                    </div>
                    <div className="justify-start"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  )
}

export default FeatureSection;

