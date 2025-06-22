'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FreeAccountSVG from './svgs/freeAccount'
import SearchIconSVG from './svgs/searchIcon'
import ChatIconSVG from './svgs/chatIcon'
import CautionIconSVG from './svgs/cautionIcon'
import ChatBubbleSVG from './svgs/chatBubble'
import PhoneIconSVG from './svgs/phoneIcon'
import AppStoreSVG from './svgs/appleAppStore'
import GooglePlayStoreSVG from './svgs/googlePlayStore'
import FAQ from './faq'
import Feature3 from './feature3'
import { FC } from 'react'

interface Feature {
  name: string
  description: string
  href: string
  icon: FC<{ className?: string }>
}

interface Feature2 {
  name: string
  description: string
  href: string
  icon: FC<{ className?: string }>
  image: string
}

const features: Feature[] = [
  {
    name: 'Create a free account',
    description:
      'Signing up is quick and easy. Every member verifies their identity and license plate to keep our community safe and trusted.',
    href: '#',
    icon: FreeAccountSVG,
  },
  {
    name: 'Search a license plate',
    description:
      'See a vehicle you want to reach? are Just type in the license plate info the and if they’re a member you can the view their profile and connect.',
    href: '#',
    icon: SearchIconSVG,
  },
  {
    name: 'Start "PL8chattting"',
    description:
      'Chat with the vehicle owner in real time to ask questions, offer help, and even prevent vehicle issues before they happen.',
    href: '#',
    icon: ChatIconSVG,
  },
]

const features2: Feature2[] = [
  {
    name: 'Quick alerts',
    description:
      'Tap to send a vehicle alert and help other drivers fast without having to type a message.',
    href: '#',
    icon: CautionIconSVG,
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

const FeatureSection: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const src =
    hoveredIndex !== null && features2[hoveredIndex]?.image
      ? features2[hoveredIndex].image
      : '/assets/images/featurePhoneImage.png';
  console.log('Image src:', src);

  return (
    <div className='flex flex-col justify-center w-full'>
      <div className="self-stretch pt-20 pb-6  inline-flex flex-col justify-start items-center gap-20 w-full bg-emerald-50">
        <div className="self-stretch flex flex-col justify-start items-center gap-20 ">
          <div className="w-[813px] inline-flex justify-center items-start">
            <div className="inline-flex flex-col justify-start items-center gap-1">
              <div className="text-center justify-start text-emerald-950 text-4xl font-medium leading-[48px]">How to start connecting on PL8CHAT</div>
            </div>
            <div className="text-center justify-start text-emerald-950 text-4xl font-medium leading-10">®</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-center items-start gap-16">
              <div className="flex flex-row gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="w-96 py-1 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-7">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <feature.icon />
                      </div>
                      <div className="self-stretch h-5 justify-center text-gray-900 text-xl font-semibold leading-7">
                        {feature.name}
                      </div>
                    </div>
                    <div className="self-stretch justify-start text-gray-900 text-xl font-normal leading-7">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='w-[1392px] px-[120px] py-20 bg-white rounded-3xl inline-flex justify-start items-center'>
          <div className='flex'>
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-10">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="justify-start text-emerald-950 text-4xl font-medium leading-[48px]">Search a license plate and <br />start connecting</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-10">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  {features2.map((feature, index) => (
                    <div
                      key={index}
                      className="w-[644px] self-stretch px-6 py-2.5 hover:bg-gray-100 rounded-tl-3xl rounded-bl-3xl inline-flex justify-start items-start gap-2"
                      onMouseEnter={() => { setHoveredIndex(index); }}
                      onMouseLeave={() => { setHoveredIndex(null); }}
                    >
                      <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start">
                        <div className="inline-flex justify-start items-center gap-3">
                          <div className='text-gray-900 text-xl font-bold leading-loose tracking-tight'>{feature.name}</div>
                          <feature.icon />
                        </div>
                        <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                          <div className="flex-1 justify-start text-gray-900 text-xl font-normal leading-[30px] tracking-tight">{feature.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="inline-flex justify-start items-center gap-5">
                  <Link href='https://pl8chat.com/ios'>
                    <AppStoreSVG />
                  </Link>
                  <Link href='https://pl8chat.com/android'>
                    <GooglePlayStoreSVG />
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-[508px] h-[675px] relative rounded-3xl'>
              <Image
                src={
                  hoveredIndex !== null && features2[hoveredIndex]?.image
                    ? features2[hoveredIndex].image
                    : '/assets/images/featurePhoneImageDefault.png'
                }
                alt="Feature Section Image"
                fill
                className="rounded-3xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Feature3 />
    </div>
  )
}

export default FeatureSection;

