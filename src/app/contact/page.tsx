'use client'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className='bg-[#d1d5dc] md:bg-[#f3f4f2]'>
      <div className="px-4 h-[445px] md:pl-[140px] pt-6 md:pt-[184px] justify-start items-start inline-flex flex-col gap-4 pb-[16px] w-full">
        <div className="text-[#034b48] text-xl md:text-[45px] font-semibold leading-[50px] md:leading-[100px]">Let's connect</div>
        {/* Mobile */}
        <div className='md:hidden'>
          <div className="md:w-[1058px] md:h-[440px]"><span className="text-black text-sm font-normal leading-[25px]">Questions? Comments? Something else? We’ love to hear from you.<br /></span><Link href={'mailto:info@pl8chat.com'} className="text-[#034b48] text-sm font-semibold leading-[25px]">info@pl8chat.com</Link><span className="text-black text-base font-normal leading-[25px]">.<br /></span><span className="text-[#034b48] text-base font-semibold leading-[25px]"><br /></span><span className="text-black text-sm font-normal leading-[25px]"></span></div>
        </div>
        {/* Desktop */}
        <div className='hidden md:block'>
          <div className="md:w-[1058px] h-[440px]"><span className="text-black text-xl font-normal leading-10">Questions? Comments? Something else? We’ love to hear from you.<br /></span><Link href={'mailto:info@pl8chat.com'} className="text-[#034b48] text-base font-semibold leading-10">info@pl8chat.com</Link><span className="text-black text-base font-normal leading-10">.<br /></span><span className="text-[#034b48] text-base font-semibold leading-10"><br /></span><span className="text-black text-base font-normal leading-10"><br /><br /><br /><br /><br /><br /><br /></span></div>
        </div>
      </div>
    </div>
  )
}