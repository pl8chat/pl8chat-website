'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutComponent() {
  return (
    <div className="pl-[100px] pt-20 justify-center items-start inline-flex flex-col bg-white w-full gap-20">
      <div className="grow shrink basis-0 justify-start items-start gap-[49px] flex w-full mt-20">
        <div className="flex-col basis-6/12 justify-start items-start gap-8 inline-flex">
          <div className="self-stretch text-[#034b48] text-[65px] font-semibold leading-[72px]">We’ll never stop asking, “What else can a license <br />plate do?”</div>
          <div className="self-stretch text-gray-500 text-2xl font-normal leading-8">We believe the license plate is an underutilized code<br />that’s been neglected for too long and we’re here to <br />do something about it. <br /></div>
        </div>
        <div className="basis-5/12 size-full h-[743px] relative text-black -top-24">
          <Image
            src={`/assets/images/aboutImage.png`}
            fill
            alt='licence plates'
            className='absolute'
          />
        </div>
      </div>
      <div className="w-[856px] flex-col justify-start items-start gap-8 flex -mt-64 pb-[82px]">
        <div className="self-stretch text-[#034b48] text-[65px] font-semibold leading-[72px]">Our Mission</div>
        <div><span className="text-gray-500 text-2xl h-[320px] font-normal leading-8">PL8CHAT is a technology company transforming license <br />plates into the universal line of vehicle communication.<br /><br />Through license plate innovation and simple human <br />interactions we can create a safe, accountable and <br />convenient parking and driving life for all.<br /><br />Join us on our mission to get </span><Link href={``} className="text-[#034b48] text-2xl font-normal leading-8">Every Car Connected™</Link><span className="text-gray-500 text-2xl font-normal leading-8">.<br /><br /></span></div>
      </div>
    </div>
  )
}