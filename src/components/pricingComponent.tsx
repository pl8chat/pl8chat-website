'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useModal } from '@/components/modalContext'

type Tier = {
  name: string
  id: string
  href: string
  price: string
  description: string
  extraText?: string
  features: string[]
  buttonText: string,
  mostPopular: boolean
}

const tiers: Tier[] = [
  {
    name: 'Single location',
    id: 'single-location',
    href: 'https://pl8-chat-admin-v2.vercel.app/signup?userType=parking',
    price: 'Always Free',
    description: 'If your business has parking you need to set up your official PL8CHAT line of communication today!',
    extraText: 'text?',
    features: [
      'Contact parked cars via license plates', 
      'Receive messages from your customers', 
      'Keep your parking safe and connected', 
      'More features coming soon!',
    ],
    buttonText: 'Sign up',
    mostPopular: true,
  },
  {
    name: 'Multiple locations',
    id: 'multiple-locations',
    href: '#',
    price: 'Free to start',
    description: 'Great for managing multi-unit locations, including apartment communities and business chains.',
    extraText: 'Text goes here',
    features: [
      'Create a private parking community',
      'Group chats connect your parkers',
      'Send announcements to everyone',
      '24-hour support response time',
    ],
    buttonText: 'Sign up',
    mostPopular: false,
  },
  {
    name: 'Custom solution',
    id: 'custom-solution',
    href: '#',
    price: 'Custom',
    description: 'Need help customizing a parking experience or choosing the right product? Talk to our experts today!',
    extraText: 'Text goes here',
    features: [
      'Create a private parking community',
      '5 Group chats connect your parkers',
      'Send announcements to everyone',
      'Let admins help you manage',
    ],
    buttonText: 'Talk to Sales',
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingComponent() {
  const { open } = useModal()
  const mostPopularTierId = tiers.find((tier) => tier.mostPopular)?.id || null // Get ID of the most popular tier
  const [selectedTierId, setSelectedTierId] = useState<string | null>(mostPopularTierId) // Set initial state to most popular

  return (
    <div className="bg-white pt-[50px] pb-4 md:pb-5 px-4">
      <div className='max-w-[1400px] bg-[#E8F4F0] mx-auto pt-8 md:pt-10 pb-4 md:pb-20 rounded-[25px]'>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="self-stretch w-full inline-flex flex-col justify-center items-center gap-2 md:gap-5">
            <div className="text-center justify-center text-[#034B48] text-base md:text-lg font-semibold leading-8">Parking plans</div>
            <div className="text-center justify-center text-[#002823] md:text-[#111827] text-2xl md:text-[40px] font-medium leading-[34px] md:leading-[60px]">Choose the right plan</div>
          </div>
          <div className="isolate mx-auto pt-[16px] md:pt-10 grid max-w-md grid-cols-1 gap-4 md:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)} // Set selected tier ID on click
                className={classNames(
                  selectedTierId === tier.id ? 'ring-1 ring-darkGreen' : 'ring-1 ring-gray-200',
                  'bg-white rounded-[25px] px-6 py-[30px] md:p-10 cursor-pointer flex flex-col gap-[14px] md:gap-8',
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={tier.id} className={classNames('text-[#034B48] text-base md:text-lg font-semibold',)}>
                    {tier.name}
                  </h3>
                  {/* {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-darkGreen">
                      Most popular
                    </p>
                  ) : null} */}
                </div>
                <p className="text-[15px] text-[#111827]">{tier.description}</p>
                <div className="flex flex-col items-baseline gap-x-1 relative">
                  <span className="h-[43px] md:h-auto text-xl md:text-2xl font-medium tracking-tight text-[#101828]">
                    {tier.price}
                  </span>
                  <p className="hidden md:flex text-xs text-[#111827]">{tier.extraText}</p>
                  {/* {tier.price === 'Free' ? (
                    <div>
                      <span className="text-sm/6 font-semibold text-gray-600">/first year</span>
                    </div>
                  ) : tier.price !== ' ' ? (
                    <span className="text-sm/6 font-semibold text-gray-600">/year</span>
                  ) :
                    <span className='pt-10'></span>
                  } */}
                </div>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                >
                  <Button variant='pricing' onClick={() => {
                    if (tier.buttonText === 'Talk to Sales') {
                      open()
                    }
                  }}>
                    {tier.buttonText}
                  </Button>
                </Link>
                <ul role="list" className="space-y-3 text-[11px] md:text-sm/6 text-gray-600 pt-[2px] md:pt-0">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-darkGreen" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}