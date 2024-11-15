'use client'
import { Button } from '@/components/button'
import ContactForm from '@/components/contactForm'

const contactInfo = [
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
]

export default function Contact() {
  return (
    <div className="pt-[108px] ">
      <div className="text-center text-[#353535] text-[56px] font-semibold leading-9 pb-[56px]">Contact Us</div>
      <div className="flex">
        <ContactForm />
        <div className="h-[882px] pr-36 pb-12 pt-16 bg-white flex-col justify-start items-center gap-2.5 flex-1 inline-flex">
          <div className="h-[492px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
                <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Get in touch</div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 text-gray-600 text-sm font-normal leading-tight">Tell us a little bit about yourself and your parking enviroment and we’ll get in touch shortly</div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 grid grid-cols-2">
              {contactInfo.map((info) => (
                <div className="h-[172px] pl-10 pr-[40.33px] py-10 bg-gray-50 rounded-2xl flex-col justify-center items-start gap-3 inline-flex grid-span-1">
                  <div className="w-[117px] h-7 text-gray-900 text-base font-semibold leading-7">{info.title}</div>
                  <div className="self-stretch grow shrink basis-0 pt-[3px] flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-52 h-[17px] text-[#00695c] text-sm font-semibold leading-normal">{info.email}</div>
                    <div className="w-[148px] h-6 text-gray-600 text-sm font-normal leading-normal">{info.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}