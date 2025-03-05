'use client'
import Link from 'next/link'

export default function DeleteAccount() {
  return (
    <div className="bg-white w-full h-[540px] md:h-[675px] pt-6 md:pt-[184px] flex-col justify-start items-start gap-4 inline-flex px-4 md:px-[140px]">
      <div className="self-stretch text-[#034b48] text-xl md:text-3xl font-semibold leading-[50px] md:leading-[100px]">Delete your account</div>
      <div><span className="text-black text-sm font-semibold leading-[25px]">How to delete your account on PL8CHAT<br /></span><span className="text-black text-sm font-normal leading-[25px]">You can delete your account directly within the app. <br /></span><span className="text-black text-sm font-semibold leading-[25px]"><br />Steps to delete your account<br /></span><span className="text-black text-sm font-normal leading-[25px]">1-Open the PL8CHAT app<br />2-Go to Settings<br />3-At the very bottom select DELETE ACCOUNT<br /><br />Once you confirm deletion, your account and all associated data will be permanently removed.<br /><br /></span><span className="text-black text-sm font-semibold leading-[25px]">Need help? <br /></span><span className="text-black text-sm font-normal leading-[25px]">If you need any assistance or wish to delete your account directly through us, you can contact us<br />anytime at </span><Link href={`mailto:help@pl8chat.com`} className="text-[#034b48] text-sm font-semibold leading-[25px]">help@pl8chat.com. <br /></Link><span className="text-[#034b48] text-sm font-semibold leading-[25px]"><br /></span></div>
    </div>
  )
}