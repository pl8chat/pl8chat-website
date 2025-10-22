'use client'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import AppStoreSVG from '@/svgs/AppleAppStore.svg'
import AppleAppStoreWhite from '@/svgs/AppleAppStoreWhite.svg'
import AppStoreMobile from '@/svgs/AppleAppStoreMobile.svg'
import GooglePlayStoreSVG from '@/svgs/googleplaystore.svg'
import GooglePlayStoreWhite from '@/svgs/googleplaystoreWhite.svg'
import GooglePlayStoreMobile from '@/svgs/googleplaystoreMobile.svg'
import Pl8chatLogoWhite from '@/svgs/Pl8chatLogoWhite.svg'
import FAQ from './faq'
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
    title: 'Modern day\nfleet reporting',
    description:
      'Increase safety and accountability\nfor your vehicles and drivers through license plate reporting.',
    cost: 'First 5 vehicles free. $20/year per additional vehicle.',
    href: '#',
  },
  {
    image: 'featureSection2Image3',
    title: 'Safe and\nconnected parking',
    description:
      'Manage your parking community better with direct vehicle communication through license plates.',
    cost: 'First location free. $50/year per additional location.',
    href: '#',
  },
]

const FeatureSection: FC = () => {
  return (
    <div className='flex flex-col justify-center w-full'>
      <div className="pt-10 px-4 md:p-[60px] bg-white flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:w-[776px] self-stretch inline-flex flex-col justify-center items-start gap-10 pb-10">
          <div className="flex flex-col justify-start items-start gap-5 w-full">
            <div className="w-full text-[#002823] text-4xl md:text-6xl font-medium leading-10 md:leading-[60px] pt-5 md:pt-0 text-center md:text-start">We bring the <br />license plate to life</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-[30px] md:gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 w-full">
              <div className="w-[358px] md:w-[596px] mx-auto md:mx-0 md:h-32 justify-start text-[#002823] text-base md:text-2xl font-medium leading-6 md:leading-[34px] text-center md:text-start">The license plate isn’t a useless vehicle code anymore. It’s alive — and it’s how you keep your car safe, help out other drivers, and stay connected on and off the road. </div>
            </div>
            <div className='flex flex-row mx-auto md:mx-0 gap-5'>
              <Link href={'#'}>
                <AppStoreMobile className='md:hidden' />
                <AppStoreSVG className='hidden md:flex' />
              </Link>
              <Link href={'#'}>
                <GooglePlayStoreSVG className='hidden md:flex' />
                <GooglePlayStoreMobile className='md:hidden' />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[394px] w-full md:w-[544px] md:h-[600px] max-w-[400px] md:max-w-[544px] md:max-h-[600px]">
          <Image
            src="/assets/images/featureImage.png"
            alt="Feature Section Image"
            fill
            className="rounded-[25px] object-fill"
          />
        </div>
      </div>
      <div className="self-stretch pt-10 pb-4 px-4 md:p-14 bg-[#E8F4F0] inline-flex flex-col justify-start items-center gap-[30px] md:gap-10">
        <div className="flex flex-col justify-start items-center gap-5 md:gap-8">
          <div className="text-center justify-start text-[#002823] text-4xl md:text-6xl font-medium leading-[48px]">One platform. Three ways to connect</div>
          <div className="text-center justify-start text-[#363636] text-base md:text-2xl font-medium leading-6 md:leading-[34px]">PL8CHAT is a communication ecosystem connecting drivers, <br className='hidden md:flex' />vehicles and businesses.</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col md:flex-row justify-center items-start gap-[30px] md:gap-8">
              <div className="md:w-[420px] w-full mx-auto md:mx-0 h-[426px] md:h-[550px] pl-4 pr-6 pt-12 md:pt-28 rounded-3xl inline-flex flex-col justify-start items-start gap-0 md:gap-10 bg-[linear-gradient(166deg,rgba(0,0,0,0.43)_17.12%,rgba(0,0,0,0.70)_54.46%,rgba(0,0,0,0.70)_60.31%,rgba(0,0,0,0.00)_73.11%,rgba(0,0,0,0.00)_76.69%),url('/assets/images/featureSection2Image1.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
                <div className="self-stretch h-60 flex flex-col justify-center items-start gap-10">
                  <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-[18px]">
                    <div className="justify-start text-white text-[34px] md:text-4xl font-medium leading-8 md:leading-10 tracking-[0.36px]">A free, <br />new way <br />to connect</div>
                    <div className="self-stretch justify-start text-white text-[15px] md:text-lg font-normal leading-[24px] tracking-[0.18px]">Keep your car safe, help other drivers and <br /> stay connected through license plates.</div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-4'>
                  <div className='flex flex-row items-center justify-center gap-5 w-full'>
                    <AppleAppStoreWhite />
                    <GooglePlayStoreWhite />
                  </div>
                  <div className="self-stretch flex justify-center text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
                </div>
              </div>
              {features.map((feature, index) => (
                <div key={index} className="w-full md:md:w-[420px] h-[426px] md:h-[550px] flex flex-col justify-center items-start">
                  <div
                    className="w-full md:w-[420px] h-[345px] md:h-[550px] pl-4 pr-6 rounded-t-[25px] flex flex-col justify-between items-start gap-[100px]bg-[lightgray] bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `linear-gradient(166deg, rgba(0,0,0,0.43) 17.12%, rgba(0,0,0,0.70) 54.46%, rgba(0,0,0,0.70) 60.31%, rgba(0,0,0,0.00) 73.11%, rgba(0,0,0,0.00) 76.69%), url('/assets/images/${feature.image}.png')`,
                    }}
                  >
                    <div className="self-stretch py-2 inline-flex justify-center items-center gap-1">
                      <Pl8chatLogoWhite />
                      <div className="text-center justify-start text-white text-lg font-medium leading-normal tracking-tight">for business</div>
                    </div>
                    <div className="md:w-[420px] flex-1 flex flex-col justify-start items-start gap-4 pt-[65px] md:pt-[100px]">
                      <div className="self-stretch justify-start text-white text-[34px] md:text-4xl font-medium leading-8 md:leading-10 tracking-[0.36px] whitespace-pre-line">{feature.title}</div>
                      <div className="w-full md:w-[378px] self-stretch justify-start text-white text-[15px] md:text-lg font-normal leading-[24px] tracking-[0.18px]">{feature.description}</div>
                      <div className="hidden md:flex self-stretch justify-start text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
                    </div>
                  </div>
                  <div className="md:w-[420px] self-stretch h-20 pl-5 pr-4 py-3 bg-emerald-900 rounded-bl-2xl rounded-br-2xl inline-flex justify-center items-center overflow-hidden">
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

