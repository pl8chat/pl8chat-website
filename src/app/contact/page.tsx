'use client'
import Link from 'next/link'
import { TopPaddingLayout } from "@/components/layouts/topPaddingLayout";

export default function Contact() {
  return (
    <TopPaddingLayout>
      <div className='bg-[#f3f4f2]'>
        <div className="px-4 md:pl-[140px] pt-6 md:pt-[184px] justify-start items-start inline-flex flex-col gap-4 w-full">
          <div className="text-[#034b48] text-xl md:text-[45px] font-semibold leading-[50px] md:leading-[100px]">Let's connect</div>
          <div className="w-[352px] md:w-[1058px] justify-start"><span className="text-neutral-700 text-xl font-normal leading-normal">Questions? Comments? Something else? We’ love to hear from you. </span><span className="text-[#034B48] text-xl font-semibold leading-normal">info@pl8chat.com<br /></span><span className="text-neutral-700 text-xl font-normal leading-normal"><br /></span><span className="text-[#034B48] text-xl font-semibold underline leading-normal"><br /><br /><br /><br /><br /><br /><br /><br /><br /></span><span className="text-[#034B48] text-xl font-semibold leading-normal"><br /><br /><br /><br /></span><span className="text-[#034B48] text-xl font-semibold leading-10"><br /></span></div>
        </div>
      </div>
    </TopPaddingLayout>
  )
}