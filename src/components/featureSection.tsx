'use client'
import { useState } from 'react'
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
import AppStoreMobile from '@/svgs/AppleAppStoreMobile.svg'
import GooglePlayStoreSVG from '@/svgs/googleplaystore.svg'
import GooglePlayStoreMobile from '@/svgs/googleplaystoreMobile.svg'
import FAQ from './faq'
import Feature3 from './feature3'
import { FC } from 'react'

interface Feature {
  name: string
  description: string
  href: string
  icon: FC<{ className?: string }>
  iconSmall: FC<{ className?: string }>
}

interface Feature2 {
  name: string
  description: string
  href: string
  icon: FC<{ className?: string }>
  image: string
}

interface FeatureMobile {
  description: string
  icon: FC<{ className?: string }>
  iconBold: FC<{ className?: string }>
  image: string
}

const features: Feature[] = [
  {
    name: 'Step 1. Create a free account',
    description:
      'Signing up is easy and free. And all members verify their identity and their vehicle’s license plate to keep our community safe and trusted.',
    href: '#',
    icon: CreateAccountSVG,
    iconSmall: CreateAccountSmallSVG,
  },
  {
    name: 'Step 2. Search a license plate',
    description:
      'See a vehicle you want to reach? Just enter their license plate digits and state. If they’re a member, you can view their profile and contact them.',
    href: '#',
    icon: SearchIconSVG,
    iconSmall: SearchIconSmallSVG,
  },
  {
    name: 'Step 3. Start "PL8chatting"',
    description:
      'Now you can send quick alerts, start a chat convo or make an emergency call. It’s a fast, smart and safe way to keep drivers and vehicles connected.',
    href: '#',
    icon: ChatIconSVG,
    iconSmall: ChatIconSmallSVG,
  },
]

const features2: Feature2[] = [
  {
    name: 'Quick alerts',
    description:
      'Tap to send a vehicle alert and help other drivers fast without having to type a message.',
    href: '#',
    icon: CautionIconBoldSVG,
    image: '/assets/images/featurePhoneImageAlerts.png',
  },
  {
    name: 'Chat convos',
    description:
      'Chat with other drivers, share photos, and help make parking and driving safer than ever.',
    href: '#',
    icon: ChatBubbleSVG,
    image: '/assets/images/featurePhoneImageChat.png',
  },
  {
    name: 'Emergency calls',
    description:
      'Call the driver in emergencies when seconds matter, like if their vehicle is about to be towed.',
    href: '#',
    icon: PhoneIconSVG,
    image: '/assets/images/featurePhoneImageCalls.png',
  },
]

const featuresMobile: FeatureMobile[] = [
  {
    description:
      'Search a vehicle and view their profile',
    icon: SearchIconSmall2SVG,
    iconBold: SearchIconSmall2BoldSVG,
    image: '/assets/images/featurePhoneImageDefault.png',
  },
  {
    description:
      'Quick alerts help other drivers fast.',
    icon: CautionIconSmallSVG,
    iconBold: CautionIconBoldSVG,
    image: '/assets/images/featurePhoneImageAlerts.png',
  },
  {
    description:
      'Start a chat style conversation',
    icon: ChatBubbleSmallSVG,
    iconBold: ChatBubbleSmallBoldSVG,
    image: '/assets/images/featurePhoneImageChat.png',
  },
  {
    description:
      'Make a phone call in an emergency',
    icon: PhoneIconSmallSVG,
    iconBold: PhoneIconSmallBoldSVG,
    image: '/assets/images/featurePhoneImageCalls.png',
  },
]

const FeatureSection: FC = () => {
  const [activeDesktopIndex, setActiveDesktopIndex] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(0);

  const src =
    activeDesktopIndex !== null && features2[activeDesktopIndex]?.image
      ? featuresMobile[activeDesktopIndex].image
      : '/assets/images/featurePhoneImage.png';

  const mobileImage =
    activeMobileIndex !== null && featuresMobile[activeMobileIndex]?.image
      ? featuresMobile[activeMobileIndex].image
      : '/assets/images/featurePhoneImageDefault.png';


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
          <div className="text-center justify-start text-emerald-950 text-6xl font-medium leading-[48px]">One platform. Three ways to connect</div>
          <div className="text-center justify-start text-neutral-700 text-2xl font-medium leading-loose">PL8CHAT is a communication ecosystem connecting drivers, <br />vehicles and businesses.</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-center items-start gap-8">
              <div className="w-[420px] h-[550px] pl-4 pr-6 pt-28 rounded-3xl inline-flex flex-col justify-start items-start gap-10 bg-[linear-gradient(166deg,rgba(0,0,0,0.43)_17.12%,rgba(0,0,0,0.70)_54.46%,rgba(0,0,0,0.70)_60.31%,rgba(0,0,0,0.00)_73.11%,rgba(0,0,0,0.00)_76.69%),url('/assets/images/featureSection2Image1.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
                <div className="self-stretch h-60 flex flex-col justify-center items-start gap-10">
                  <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-4">
                    <div className="justify-start text-white text-4xl font-medium leading-10 tracking-tight">A free, <br />new way <br />to connect</div>
                    <div className="self-stretch justify-start text-white text-lg font-normal leading-normal tracking-tight">Keep your car safe, help other drivers and stay connected through license plates.</div>
                  </div>
                </div>
                <div className='flex flex-row gap-5'>
                  <AppStoreSVG />
                  <GooglePlayStoreSVG />
                </div>
                <div className="self-stretch flex justify-center text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
              </div>
              <div className="h-[550px] inline-flex flex-col justify-center items-start">
                <div className="w-[420px] h-[550px] pl-4 pr-6 pt-28 rounded-t-[25px] inline-flex flex-col justify-start items-start gap-10 bg-[linear-gradient(166deg,rgba(0,0,0,0.43)_17.12%,rgba(0,0,0,0.70)_54.46%,rgba(0,0,0,0.70)_60.31%,rgba(0,0,0,0.00)_73.11%,rgba(0,0,0,0.00)_76.69%),url('/assets/images/featureSection2Image2.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
                  <div className="self-stretch py-2 inline-flex justify-center items-center gap-1">
                    <div className="text-center justify-start text-white text-lg font-medium leading-normal tracking-tight">for business</div>
                  </div>
                  <div className="w-[420px] flex-1 flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-white text-4xl font-medium leading-10 tracking-tight">Modern day<br />fleet reporting</div>
                    <div className="self-stretch justify-start text-white text-lg font-normal leading-normal tracking-tight">Increase safety and accountability for your vehicles and drivers through license plate reporting.</div>
                    <div className="self-stretch justify-start text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
                  </div>
                </div>
                <div className="self-stretch h-20 pl-5 pr-4 py-3 bg-emerald-900 rounded-bl-2xl rounded-br-2xl inline-flex justify-center items-center overflow-hidden">
                  <div className="flex-1 flex justify-start items-center gap-3">
                    <div data-state="Default" data-type="Primary" className="w-24 h-10 px-4 py-3 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center overflow-hidden">
                      <div className="justify-start text-Labels---Vibrant---Controls-Primary-√ text-sm font-medium leading-normal">Sign up</div>
                    </div>
                    <div className="w-64 justify-start text-gray-300 text-sm font-medium leading-tight tracking-tight">First 5 vehicles free. $20/year per additional vehicle.</div>
                  </div>
                  <div className="justify-start"></div>
                </div>
              </div>
              <div className="h-[550px] inline-flex flex-col justify-center items-start">
                <div className="w-[420px] h-[550px] pl-4 pr-6 pt-28 rounded-t-[25px] inline-flex flex-col justify-start items-start gap-10 bg-[linear-gradient(166deg,rgba(0,0,0,0.43)_17.12%,rgba(0,0,0,0.70)_54.46%,rgba(0,0,0,0.70)_60.31%,rgba(0,0,0,0.00)_73.11%,rgba(0,0,0,0.00)_76.69%),url('/assets/images/featureSection2Image3.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
                  <div className="self-stretch py-2 inline-flex justify-center items-center gap-1">
                    <div className="text-center justify-start text-white text-lg font-medium leading-normal tracking-tight">for business</div>
                  </div>
                  <div className="w-96 flex-1 flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-white text-4xl font-medium leading-10 tracking-tight">Safe and<br />connected parking</div>
                    <div className="self-stretch justify-start text-white text-lg font-normal leading-normal tracking-tight">Manage your parking community better with direct vehicle communication through license plates.</div>
                    <div className="self-stretch justify-start text-white text-lg font-medium underline leading-normal tracking-tight">Learn more</div>
                  </div>
                </div>
                <div className="self-stretch h-20 pl-5 pr-4 py-3 bg-emerald-900 rounded-bl-2xl rounded-br-2xl inline-flex justify-center items-center overflow-hidden">
                  <div className="flex-1 flex justify-start items-center gap-3">
                    <div data-state="Default" data-type="Primary" className="w-24 h-10 px-4 py-3 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center overflow-hidden">
                      <div className="justify-start text-Labels---Vibrant---Controls-Primary-√ text-sm font-medium leading-normal">Sign up</div>
                    </div>
                    <div className="w-64 justify-start text-gray-300 text-sm font-medium leading-tight tracking-tight">First location free. $50/year per additional location.</div>
                  </div>
                  <div className="justify-start"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <div className='w-full overflow-x-hidden'>
        <Feature3 />
      </div>
    </div>
  )
}

export default FeatureSection;

