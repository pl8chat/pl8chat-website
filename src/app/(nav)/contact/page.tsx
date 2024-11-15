'use client'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/button'

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
        <div className="h-[882px] pl-36 pb-12 pt-16 bg-white flex-col justify-start items-center gap-8 flex-1 inline-flex">
          <div className="h-[630px] flex-col justify-start items-center gap-8 flex max-w-1/2">
            <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
                <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Talk to sales</div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 text-gray-600 text-sm font-normal leading-tight">Tell us a little bit about yourself and your parking enviroment and we’ll get in touch shortly</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[514px] flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch h-[514px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[386px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch h-6 text-gray-700 text-sm font-semibold leading-normal">First name</div>
                      <div className="h-10 relative bg-white rounded-md shadow shadow-inner"></div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch h-6 text-gray-900 text-sm font-semibold leading-normal">Last name</div>
                      <div className="h-10 relative bg-white rounded-md shadow shadow-inner"></div>
                    </div>
                  </div>
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch h-6 text-gray-900 text-sm font-semibold leading-normal">Work email</div>
                    <div className="h-10 relative bg-white rounded-md shadow shadow-inner"></div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch h-6 text-gray-900 text-sm font-semibold leading-normal">Industry</div>
                      <div className="self-stretch h-[42px] px-[13px] py-[9px] bg-white rounded-md shadow border border-gray-300 justify-start items-center gap-1 inline-flex">
                        <div className="grow shrink basis-0 text-gray-900 text-sm font-normal leading-tight">Select one</div>
                        <div className="w-5 h-5 relative"></div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch h-6 text-gray-900 text-sm font-semibold leading-normal">Parking size</div>
                      <div className="self-stretch h-[42px] px-[13px] py-[9px] bg-white rounded-md shadow border border-gray-300 justify-start items-center gap-1 inline-flex">
                        <div className="grow shrink basis-0 text-gray-900 text-sm font-normal leading-tight">Select one</div>
                        <div className="w-5 h-5 relative"></div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[108px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch h-6 text-gray-900 text-sm font-semibold leading-normal">Message</div>
                    <div className="h-20 pl-[562px] pr-0.5 pt-[66px] pb-0.5 bg-white rounded-md shadow border border-gray-300 justify-end items-center inline-flex">
                      <div className="w-3 h-3 relative flex-col justify-start items-start flex"></div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0"><span className="text-gray-600 text-sm font-normal leading-tight">By submitting my personal data, I consent to PL8CHAT collecting, processing and storing my information in accordance with the</span><span className="text-[#00695c] text-sm font-normal leading-tight"> </span><span className="text-[#00695c] text-sm font-normal underline leading-tight">PL8CHAT Privacy Policy.</span><span className="text-[#00695c] text-sm font-normal leading-tight"> </span></div>
                </div>
                <div className="h-10 pt-[11px] pb-3 bg-[#00695c] rounded-md shadow justify-center items-center inline-flex w-full">
                  <Button variant='signUp' className='' >Talk to sales</Button>
                  <div className="w-[100.45px] h-[17px] text-center text-white text-sm font-semibold leading-tight">Talk to sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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