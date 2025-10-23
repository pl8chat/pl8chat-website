'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import StateInput from '@/components/stateInput'
import Link from 'next/link'
import Search from '@/svgs/search.svg'
import BackArrowHero from '@/svgs/backArrowHero.svg'
import BackArrowHeroMobile from '@/svgs/backArrowHeroMobile.svg'
import CheckHero from '@/svgs/checkHero.svg'
import AppleAppStoreWhite from '@/svgs/AppleAppStoreWhite.svg'
import AppleAppStoreWhiteMobile from '@/svgs/AppleAppStoreWhiteMobile.svg'
import GooglePlayStoreWhite from '@/svgs/googleplaystoreWhite.svg'
import GooglePlayStoreWhiteMobile from '@/svgs/googleplaystoreWhiteMobile.svg'

interface Statements {
  statement: string
}

const Statements: Statements[] = [
  {
    statement: 'Help other drivers in real time',
  },
  {
    statement: 'Add your vehicle to stay safe and connected',
  },
  {
    statement: 'Send helpful alerts, start chat convos & more',
  },
]

export default function Hero() {
  const [selectedState, setSelectedState] = useState('')
  const [isSearched, setIsSearched] = useState(false)

  // If isSearched is true, render the second part; otherwise, render the initial one.
  return (
    <div className="relative self-stretch bg-[url('/assets/images/HeroBgMobile.jpg')] md:bg-[url('/assets/images/HeroBg.jpg')] bg-cover bg-[position:74%center] md:bg-center bg-no-repeat flex flex-col justify-center items-center gap-7 w-full h-screen">
      <div className={`absolute inset-0  ${isSearched ? 'bg-black/80' : 'bg-black/55'}`} />
      <div className="relative z-10 w-full px-[14px] md:px-0 md:w-[768px] h-[656px] flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-6">
          {/* Conditionally render content based on isSearched */}
          {isSearched ? (
            <>
              <div className="w-full md:w-[516px] inline-flex flex-col justify-start items-start gap-1 md:gap-[6px]">
                <div className="self-stretch inline-flex justify-start items-center gap-2 md:gap-4">
                  <BackArrowHero onClick={() => setIsSearched(false)} className='cursor-pointer hidden md:flex' />
                  <BackArrowHeroMobile onClick={() => setIsSearched(false)} className='cursor-pointer md:hidden' />
                  <div className="justify-center text-white text-[18px] md:text-[22px] font-medium leading-[27px]">This vehicle’s not on PL8CHAT... yet</div>
                </div>
                <div className="w-full md:w-[516px] h-48 p-2 bg-stone-600/80 rounded-[28px] flex flex-col justify-start items-start gap-3 md:gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-3 md:gap-4">
                    <div className="self-stretch text-center justify-center text-white text-base font-medium leading-5">Did you know with the free PL8CHAT <br className='md:hidden' /> app you can:</div>
                    <div className="flex flex-col justify-start items-center">
                      {Statements.map((item, index) => (
                        <div key={index} className="self-stretch inline-flex justify-start items-end gap-1">
                          <div className="flex justify-start items-center gap-1">
                            <CheckHero />
                            <div className="justify-center text-white text-sm font-light leading-[22px]">{item.statement}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='w-full flex justify-center items-center gap-2'>
                    <AppleAppStoreWhite className='hidden md:flex' />
                    <AppleAppStoreWhiteMobile className='md:hidden' />
                    <GooglePlayStoreWhite className='hidden md:flex' />
                    <GooglePlayStoreWhiteMobile className='md:hidden' />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='w-full flex flex-col justify-center items-center'>
              <div className="self-stretch text-center text-white text-[40px] md:text-6xl font-medium leading-10 md:leading-[60px]">
                <br />The license plate is a <br />username. Use it
              </div>
              <div className="self-stretch text-center text-white text-[16px] md:text-base font-medium leading-snug tracking-tight py-[14px]">
                There’s a million reason to connect with a car. <br />What’s yours?
              </div>

              <form className="w-full md:w-auto h-[58px] md:h-[54px] bg-stone-600/80 rounded-[28px] inline-flex justify-start items-center md:gap-2">
                <div className="flex justify-between items-center md:gap-10 w-full pr-2 pl-1">
                  <div className="flex flex-row items-center gap-2">
                    <Search />
                    <input
                      className="w-[136px] md:w-[152px] text-white text-base focus:ring-0 font-normal leading-relaxed border-none bg-transparent uppercase placeholder:normal-case placeholder:text-[#E5E7EB] pl-0"
                      type="text"
                      placeholder="Type plate #"
                      maxLength={7}
                    />
                  </div>
                  <StateInput onSelect={setSelectedState} />
                  <Button variant="search" onClick={() => setIsSearched(true)} className={`md:translate-x-[1px]`}>
                    Search
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Optionally, keep the "Get the free app" button visible in both states */}
      <div className={`relative z-10 w-48 h-10 pt-2 pb-3 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-start gap-3 ${isSearched ? 'hidden' : ''}`}>
        <div className={`justify-center text-gray-100 text-[15px] font-medium leading-normal `}>
          Get the free app
        </div>
      </div>
    </div>
  )
}
