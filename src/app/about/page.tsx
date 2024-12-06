'use client'
// keep this component for later
import AboutComponent from '@/components/about'
import Link from 'next/link'

export default function About() {
  return (
    <div className='bg-white'>
      <div className=" pl-[100px] pt-20 justify-center items-center gap-[177px] inline-flex pb-[250px] w-full">
        <div className="grow shrink basis-0 justify-start items-center gap-[49px] flex">
          <div className="w-[856px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch text-[#034b48] text-[65px] font-semibold leading-[72px]"><br />About us</div>
            <div><span className="text-gray-500 text-2xl font-normal leading-8">PL8CHAT is a technology company transforming license <br/>plates into the universal line of vehicle communication.<br/><br/>We believe through license plate innovation and simple <br/>human interactions we can create a safe, accountable <br/>and convenient parking and driving life for all.<br/><br/>Join us on our mission to get </span><Link href={`#`} className="text-[#034b48] text-2xl font-normal leading-8">Every Car Connected™</Link><span className="text-gray-500 text-2xl font-normal leading-8">.<br/><br/></span></div>
          </div>
        </div>
      </div>
    </div>
  )
}