'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import StateInput from '@/components/stateInput'
import Link from 'next/link'
import Search from '@/svgs/search.svg'

export default function Hero() {
  const [selectedState, setSelectedState] = useState('')

  return (
    <div className="relative self-stretch bg-[url('/assets/images/HeroBgMobile.jpg')] md:bg-[url('/assets/images/HeroBg.jpg')] bg-cover bg-[position:84%center] md:bg-center bg-no-repeat flex flex-col justify-center items-center gap-7 w-full h-screen">
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 w-[358px] md:w-[768px] h-[656px] flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-center text-white text-4xl md:text-6xl font-medium leading-10 md:leading-[60px]">
              <br />The license plate is a <br />username. Use it
            </div>
            <div className="self-stretch text-center text-white text-[15px] md:text-base font-medium leading-snug tracking-tight">
              There’s a million reason to connect with a car. <br />What’s yours?
            </div>
          </div>
          <form className="h-[50px] md:h-[54px] pl-4 pr-2 py-2 bg-stone-600/80 rounded-3xl inline-flex justify-start items-center gap-0 md:gap-2">
            <div className="flex-1 flex justify-start items-center md:gap-10">
              <div className='flex flex-row items-center gap-2'>
                <Search />
                <input
                  className="w-[136px] md:w-[152px] text-[#E5E7EB] text-xs md:text-base focus:ring-0 font-normal leading-relaxed border-none bg-transparent uppercase placeholder:normal-case placeholder:text-[#E5E7EB] pl-0"
                  type="text"
                  placeholder="Type plate #"
                  maxLength={7}
                />
              </div>
              <StateInput onSelect={setSelectedState} />
              <Button variant="search">Search</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative z-10 w-48 h-10 pt-2 pb-3 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-start gap-3">
        <div className="justify-center text-gray-100 text-base font-semibold leading-normal">Get the free app</div>
      </div>
    </div>
  )
}
