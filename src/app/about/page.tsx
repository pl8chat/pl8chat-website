'use client'
// keep this component for later
import AboutComponent from '@/components/about'
import Link from 'next/link'

export default function About() {
  return (
    <div className='bg-[#d1d5dc] md:bg-[#f3f4f2]'>
      <div className="px-4 md:pl-[140px] pt-6 md:pt-[184px] justify-start items-start inline-flex flex-col gap-4 pb-20 md:pb-[16px] w-full">
        <div className="text-[#034b48] text-xl md:text-[45px] font-semibold leading-[50px] md:leading-[100px]">About us</div>
        {/* Mobile */}
        <div className='md:hidden'>
          <div className='md:h-[440px]'><span className="text-black text-sm font-normal leading-[25px]">PL8CHAT is a technology company transforming license plates into the universal line of vehicle communication.<br /><br />We believe through license plate innovation and simple human interactions we can create a safe, accountable and convenient parking and driving life for all. <br /><br /> Join us on our mission to get </span><Link href={`#`} className="text-[#034b48] text-sm font-semibold leading-[25px]">Every Car Connected™</Link></div>
        </div>
        {/* Desktop */}
        <div className='hidden md:block'>
          <div className='md:h-[440px]'><span className="text-black text-xl font-normal leading-10">PL8CHAT is a technology company transforming license <br />plates into the universal line of vehicle communication.<br /><br />We believe through license plate innovation and simple <br />human interactions we can create a safe, accountable <br />and convenient parking and driving life for all.<br /><br />Join us on our mission to get </span><Link href={`#`} className="text-[#034b48] text-xl font-semibold leading-10">Every Car Connected™</Link></div>
        </div>
      </div>
    </div>
  )
}