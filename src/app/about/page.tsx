'use client'
// keep this component for later
import AboutComponent from '@/components/about'
import Link from 'next/link'

export default function About() {
  return (
    <div className='bg-[#faf4e8]'>
      <div className="pl-[140px] pt-[184px] justify-start items-start inline-flex flex-col gap-4 pb-[16px] w-full">
        <div className="text-[#034b48] text-[45px] font-semibold leading-[100px]">About us</div>
        <div className='h-[440px]'><span className="text-black text-2xl font-normal leading-10">PL8CHAT is a technology company transforming license <br />plates into the universal line of vehicle communication.<br /><br />We believe through license plate innovation and simple <br />human interactions we can create a safe, accountable <br />and convenient parking and driving life for all.<br /><br />Join us on our mission to get </span><Link href={`#`} className="text-[#034b48] text-2xl font-semibold leading-10">Every Car Connected™</Link><span className="text-gray-500 text-2xl font-normal leading-8">.<br /><br /></span></div>
      </div>
    </div>
  )
}