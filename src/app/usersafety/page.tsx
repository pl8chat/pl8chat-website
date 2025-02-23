'use client'
import Link from 'next/link'

export default function Usersafety() {
  return (
    <div className='bg-white pl-0 md:pl-[140px] pt-6 md:pt-[184px]'>
      <div className="md:h-auto flex-col justify-start items-start gap-4 inline-flex px-4">
        <div className="self-stretch text-[#034b48] text-xl md:text-[45px] font-semibold leading-[50px] md:leading-[100px]">User safety</div>
        <div className="max-w-[897px]"><span className="text-black text-sm md:text-xl  font-semibold leading-[25px]">Our Commitment to Safety<br /></span><span className="text-black text-sm md:text-xl  md:text-xl  font-normal leading-[25px]">We’re a license plate connectivity platform that connects people and vehicles to reduce parking and driving frustrations, enhance accountability, and improve safety both on and off the road. Since our mission is to promote safety within the automotive community, it’s essential that we uphold that same value in how we design, monitor, and maintain safety within our own product.<br /></span><span className="text-black text-sm md:text-xl  font-semibold leading-[25px]"><br />Age Requirement<br /></span><span className="text-black text-sm md:text-xl  font-normal leading-[25px]">Our app is not intended for children. Users must be 17 or older to create an account. To add a license plate, users must be licensed drivers and registered vehicle owners. Because our platform facilitates real-world vehicle interactions, it is not suitable for individuals under 17.<br /><br /></span><span className="text-black text-sm md:text-xl  font-semibold leading-[25px]">Protecting Minors and Children<br /></span><span className="text-black text-sm md:text-xl  font-normal leading-[25px]">We take safety and privacy seriously. Underage users are strictly prohibited. If an account is found to belong to a minor, it will be removed. <br /><br /></span><span className="text-black text-sm md:text-xl  font-bold leading-[25px]">Zero Tolerance for Misconduct<br /></span><span className="text-black text-sm md:text-xl  font-normal leading-[25px]">We enforces a zero-tolerance policy for inappropriate behavior or misconduct. Users can block others discreetly, and we provide direct access to PL8CHAT support within the app and on our website for reporting concerns or unsafe interactions.<br /><br /><br /><br /></span><span className="text-black text-sm md:text-xl  font-semibold leading-[25px]">Contact Us<br /></span><span className="text-black text-sm md:text-xl  font-normal leading-[25px]">If you have any questions or concerns about user safety please contact us at:<br />+1(310) PL8-CHAT<br /></span><Link href={'mailto:info@pl8chat.com'} className="text-[#034b48] text-sm md:text-xl  font-semibold leading-[25px]">info@pl8chat.com<br /><br /></Link></div>
      </div>
    </div>
  )
}