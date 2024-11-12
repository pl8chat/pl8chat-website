'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

type Tier = {
  name: string
  id: string
  href: string
  price: string
  description: string
  features: string[]
  mostPopular: boolean
}

const tiers: Tier[] = [
  {
    name: 'Standard',
    id: 'tier-freelancer',
    href: '#',
    price: 'Free',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-startup',
    href: '#',
    price: '$299',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: ' ',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingComponent() {
  const mostPopularTierId = tiers.find((tier) => tier.mostPopular)?.id || null // Get ID of the most popular tier
  const [selectedTierId, setSelectedTierId] = useState<string | null>(mostPopularTierId) // Set initial state to most popular

  return (
    <div className="bg-lightGrey py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-offBlack sm:text-6xl">
            Pricing for different types of parking
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)} // Set selected tier ID on click
              className={classNames(
                selectedTierId === tier.id ? 'ring-2 ring-darkGreen' : 'ring-1 ring-gray-200', // Apply green outline if the tier is selected
                'rounded-3xl p-8 xl:p-10 cursor-pointer',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    selectedTierId === tier.id ? 'text-darkGreen' : 'text-gray-900',
                    'text-lg/8 font-semibold',
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-darkGreen">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1 relative">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                {tier.price === 'Free' ? (
                  <div>
                    <span className="text-sm/6 font-semibold text-gray-600">/first year</span>
                    <span className='text-sm/6 font-normal text-gray-600 absolute left-0 -bottom-4'>$50/year</span>
                  </div>
                ) : tier.price !== ' ' ? (
                  <span className="text-sm/6 font-semibold text-gray-600">/year</span>
                ) : 
                  <span className='pt-10'></span>
                }
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  selectedTierId === tier.id
                    ? 'bg-darkGreen text-white shadow-sm hover:bg-darkerGreen'
                    : 'text-darkerGreen ring-1 ring-inset ring-indigo-200 hover:ring-darkGreen',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkGreen',
                )}
              >
                {tier.name == 'Enterprise' ?
                  <Link href='#'>Contact Sales</Link>
                  :
                  <Link href='/freeplan'>Buy Plan</Link>
                }
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
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
  )
}