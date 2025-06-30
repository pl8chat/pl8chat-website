import { FC } from 'react'
import Image from 'next/image'
import FAQ from './faq'
import Reviews from './reviews'
import { Button } from './ui/button'
import CreateAccountBusinessSVG from './svgs/createAccountBusiness'
import MembersBusinessSVG from './svgs/membersBusiness'
import ChatIconBusinessSVG from './svgs/chatIconBusiness'
import CheckBusinessSVG from './svgs/checkBusiness'

interface Feature {
  name: string
  description: string
  href: string
  icon: FC<{ className?: string }>
}

interface Feature2 {
  description: string
}

const features: Feature[] = [
  {
    name: 'Step 1. Create an account',
    description:
      'The business owner or an authorized admin can create a free account to connect your location and start messaging anyone using the PL8CHAT app.',
    href: '#',
    icon: CreateAccountBusinessSVG,
  },
  {
    name: 'Step 2. Invite your parkers',
    description:
      'PL8CHAT works best when everyone parking uses it Recommend or require residents, customers, or employees to join. Each person verifies their identity and vehicle for safety.',
    href: '#',
    icon: MembersBusinessSVG,
  },
  {
    name: 'Step 3. Start "PL8chatting"',
    description:
      'Your all set! Now you can message your on-site vehicles, receive messages and encourage your parking guests to communicate with each other. ',
    href: '#',
    icon: ChatIconBusinessSVG,
  },
]

const features2: Feature2[] = [
  {
    description:
      'Type in any license plate to message your on- site vehicles instantly',
  },
  {
    description:
      'Let customers search and contact your business from the mobile app',
  },
  {
    description:
      'Encourage your parking customers to communicate with each other to solve problems.',
  },
  {
    description:
      'Create more accountable vehicle behavior & build safer parking through communication',
  },
]

export default function FeatureSectionBusiness() {
  return (
    <div className='flex flex-col justify-center w-full'>
      <div className="self-stretch pt-20 pb-5 inline-flex flex-col justify-start items-center gap-20 w-full bg-[#E8F4F0]">
        <div className="self-stretch flex flex-col justify-start items-center gap-20 ">
          <div className="w-[813px] inline-flex justify-center items-start">
            <div className="inline-flex flex-col justify-start items-center gap-1">
              <div className="text-center justify-start text-[#002823] text-4xl font-medium leading-[48px]">How to start connecting on PL8CHAT</div>
            </div>
            <div className="text-center justify-start text-[#002823] text-4xl font-medium leading-10">®</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-center items-start gap-16">
              <div className="flex flex-row gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="w-96 py-1 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-7">
                      <div className="bg-[#034B48] w-10 h-10 flex items-center justify-center rounded-[8px]">
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
        <div className='w-[1392px] px-[90px] py-20 bg-white rounded-[14px] flex justify-between items-center overflow-hidden'>
          <div className='flex flex-row justify-between gap-12'>
            <div className="w-[536px] inline-flex flex-col justify-start items-start gap-5">
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch justify-start text-[#002823] text-[40px] font-medium leading-[48px]">Safer. Smarter. Parking</div>
                </div>
                <div className="self-stretch h-20 justify-start text-gray-900 text-xl font-normal leading-7">PL8CHAT gives businesses the tools to organize and manage their parking environment</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-10">
                {features2.map((feature, index) => (
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                      <CheckBusinessSVG />
                      <div className="w-[500px] justify-center text-gray-900 text-lg font-medium leading-7">{feature.description}</div>
                    </div>
                  </div>
                ))}
                <div data-state="Default" data-type="Primary" className="w-36 h-11 px-4 py-3 bg-[#034B48] rounded-2xl inline-flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-white text-base font-semibold leading-normal">See plans</div>
                </div>
              </div>
            </div>
            <div className='w-[785px] h-[675px] relative rounded-3xl overflow-hidden translate-x-16'>
              <Image
                src={'/assets/images/featureBusiness.png'}
                alt="Feature Section Image"
                fill
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Reviews />
      {/* <Feature3 /> */}
    </div>
  )
}