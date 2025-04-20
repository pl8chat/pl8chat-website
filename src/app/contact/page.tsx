'use client'
import Link from 'next/link'
import { TopPaddingLayout } from "@/components/layouts/topPaddingLayout";

export default function Contact() {
  return (
    <TopPaddingLayout>
      <div className='bg-[#f3f4f2]'>
        <div className="px-4 md:pl-[140px] pt-6 md:pt-[184px] justify-start items-start inline-flex flex-col gap-4 w-full">
          <div className="text-[#034b48] text-xl md:text-[45px] font-semibold leading-[50px] md:leading-[100px]">Let's connect</div>
          {/* Mobile */}
          <div className='block md:hidden'>
            <div className="h-[438px] flex-col justify-start items-center gap-4 inline-flex">
              <div className="w-[352px]"><span className="text-[#353535] text-sm font-normal leading-[25px]">Questions? Comments? Something else? <br />We’d love to hear from you.<br /></span><Link href={'mailto:info@pl8chat.com'} className="text-[#034b48] text-sm font-semibold leading-[25px]">info@pl8chat.com<br /><br /></Link><span className="text-[#353535] text-sm font-normal leading-[25px]">To learn more about user safety <br /></span><Link href={'/usersafety'} className="text-[#034b48] text-sm font-semibold underline leading-[25px]">click here<br /></Link><span className="text-[#034b48] text-sm font-semibold leading-[25px]"><br /><br /><br /><br /><br /><br /></span></div>
            </div>
          </div>

          {/* Desktop */}
          <div className='hidden md:block'>
            {/* <div className="md:w-[1058px] h-[440px]"><span className="text-black text-xl font-normal leading-10">Questions? Comments? Something else? We’ love to hear from you. </span><Link href={'mailto:info@pl8chat.com'} className="text-[#034b48] text-base font-semibold leading-10">info@pl8chat.com</Link><span className="text-black text-base font-normal leading-10">.<br /></span><span className="text-[#034b48] text-base font-semibold leading-10"><br /></span><span className="text-black text-base font-normal leading-10"></span></div> */}
            <div className="w-[1058px]"><span className="text-[#353535] text-xl font-normal leading-[25px]">Questions? Comments? Something else? We’d love to hear from you. </span><Link href={'mailto:info@pl8chat.com'} className="text-[#034b48] text-xl font-semibold leading-[25px]">info@pl8chat.com<br /></Link><span className="text-[#353535] text-xl font-normal leading-[25px]"><br />To learn more about user safety </span><Link href={'/usersafety'} className="text-[#034b48] text-xl font-semibold underline leading-[25px]">click here<br /></Link><span className="text-[#034b48] text-xl font-semibold leading-[25px]"><br /><br /><br /><br /></span><span className="text-[#034b48] text-xl font-semibold leading-10"><br /></span></div>
          </div>
        </div>
      </div>
    </TopPaddingLayout>
  )
}