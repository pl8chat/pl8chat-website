'use client'
import Image from 'next/image'

export default function AboutComponent() {
  return (
    <div className="pl-[100px] pt-20 justify-center items-start inline-flex flex-col bg-white w-full gap-20">
      <div className="grow shrink basis-0 justify-start items-start gap-[49px] flex w-full mt-20">
        <div className="flex-col basis-6/12 justify-start items-start gap-8 inline-flex">
          <div className="self-stretch text-[#034b48] text-[65px] font-semibold leading-[72px]">We’ll never stop asking, “What else can a license <br />plate do?”</div>
          <div className="self-stretch text-gray-500 text-2xl font-normal leading-loose">We believe the license plate is an underutilized code<br />that’s been neglected for too long and we’re here to <br />do something about it. <br /></div>
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
      <div className="w-[856px] h-[457px] flex-col justify-start items-start gap-8 flex -mt-64">
        <div className="self-stretch text-[#034b48] text-[65px] font-semibold leading-[72px]">Our Mission</div>
        <div className="self-stretch text-gray-500 text-2xl font-normal leading-loose">We believe the license plate is an underutilized code<br />that’s been neglected for too long and we’re here to <br />do something about it. <br /></div>
      </div>
    </div>
  )
}