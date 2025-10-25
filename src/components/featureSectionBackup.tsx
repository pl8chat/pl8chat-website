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

const FeatureSectionBackup: FC = () => {
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
      <div className="self-stretch px-4 md:px-0 pt-10 md:pt-20 flex flex-col justify-start items-center gap-10 md:gap-20 w-full bg-[#E8F4F0]">
        <div className="self-stretch flex flex-col justify-start md:items-center gap-[30px] md:gap-20">
          <div className="md:w-[813px] flex justify-start md:justify-center items-start">
            <div className="flex flex-col justify-start items-start">
              <div className="text-start md:text-center px-[18px] text-[#002823] text-2xl md:text-[40px] font-medium leading-[34px] md:leading-[48px]">Start connecting on <br className='md:hidden' /> PL8CHAT<span className='md:hidden text-[20px] font-medium leading-[34px] relative -top-[3px]'>®</span> <br className='hidden md:flex' /> in 3 <span className='hidden md:inline'>easy</span> steps:</div>
            </div>
            <div className="text-start md:text-center justify-start text-[#002823] text-[30px] font-medium leading-10 hidden md:block -translate-x-4 md:translate-y-[1px]">®</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch flex justify-start md:justify-center items-start gap-16">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="md:w-96 py-1 flex flex-col justify-start items-start gap-[10px] md:gap-4 px-[18px]">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2 md:gap-7">
                      <div className="hidden md:flex items-center justify-center w-10 h-10">
                        <feature.icon />
                      </div>
                      <div className="md:hidden flex items-center justify-center">
                        <feature.iconSmall />
                      </div>
                      <div className="self-stretch h-5 justify-center text-gray-900 text-base md:text-xl font-semibold leading-7">
                        {feature.name}
                      </div>
                    </div>
                    <div className="w-[306px] md:w-[360px] self-stretch justify-start text-gray-900 text-sm md:text-xl font-normal leading-7">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className='hidden md:flex md:w-full px-[120px] py-20 bg-white justify-start items-center'>
          <div className='flex flex-col md:flex-row'>
            <div className="self-stretch inline-flex flex-col justify-center items-start gap-10">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="text-center md:text-start justify-start text-[#002823] text-[24px] md:text-[40px] font-medium leading-[34px] md:leading-[48px]">Search a license plate and <br />start connecting</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-10">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  {features2.map((feature, index) => (
                    <div
                      key={index}
                      className="w-[644px] self-stretch px-6 py-2.5 hover:bg-gray-100 rounded-tl-3xl rounded-bl-3xl inline-flex justify-start items-start gap-2"
                      onMouseEnter={() => { setActiveDesktopIndex(index); }}
                      onMouseLeave={() => { setActiveDesktopIndex(null); }}
                    >
                      <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start w-full">
                        <div className="inline-flex justify-start items-center gap-3">
                          <div className='text-gray-900 text-[22px] font-bold leading-[30px] tracking-tight'>{feature.name}</div>
                          <feature.icon />
                        </div>
                        <div className="self-stretch inline-flex justify-center items-center gap-2.5 w-10/12">
                          <div className="flex-1 justify-start text-gray-900 text-xl font-normal leading-[20px] md:leading-[30px]">{feature.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="inline-flex justify-start items-center gap-5">
                  <Link href='https://apps.apple.com/us/app/pl8chat/id6474788258?platform=iphone'>
                    <AppStoreSVG />
                  </Link>
                  <Link href='https://play.google.com/store/apps/details?id=com.pl8chat.mobile'>
                    <GooglePlayStoreSVG />
                  </Link>
                </div>
              </div>
            </div>
            <div className='rounded-3xl px-4 md:px-0'>
              <Image
                src={
                  activeDesktopIndex !== null && features2[activeDesktopIndex]?.image
                    ? features2[activeDesktopIndex].image
                    : '/assets/images/featurePhoneImageDefault.png'
                }
                alt="Feature Section Image"
                height={675}
                width={508}
                className="rounded-[25px]"
              />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden self-stretch py-10 bg-white rounded-3xl inline-flex flex-col justify-start items-center gap-6">
          <div className="w-80 text-center justify-start text-[#002823] text-2xl font-medium leading-[34px]">Search a license plate<br className='md:hidden' /> and<br className='hidden md:inline' /> start connecting</div>
          <div className="relative w-full aspect-[326/394] rounded-3xl px-4 mx-auto">
            <Image
              src={mobileImage}
              alt="Feature Section Image"
              fill
              className="rounded-[25px] object-contain cursor-pointer"
              onClick={() => setActiveMobileIndex(null)}
            />
          </div>
          <div className="w-72 flex flex-col justify-start items-center gap-6 md:gap-5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {featuresMobile.map((feature, index) => {
                const isActive = activeMobileIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveMobileIndex(index)}
                    className={`flex flex-col justify-start items-center gap-2.5 cursor-pointer`}
                  >
                    {isActive ? <feature.iconBold /> : <feature.icon />}
                    <div className={`text-center ${isActive ? 'text-[#111827] font-semibold' : 'text-[#111827] font-normal'} text-[13px] leading-[20px] tracking-tight`}>
                      {feature.description}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* GOOGLE AND APPLE STORE BUTTONS GO HERE */}
            <div className="flex justify-center items-center gap-5">
              <Link href='https://apps.apple.com/us/app/pl8chat/id6474788258?platform=iphone'>
                <AppStoreMobile />
              </Link>
              <Link href='https://play.google.com/store/apps/details?id=com.pl8chat.mobile'>
                <GooglePlayStoreMobile />
              </Link>
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

export default FeatureSectionBackup;

