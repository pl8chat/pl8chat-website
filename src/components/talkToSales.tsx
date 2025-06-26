import React, { useState } from 'react'
import Link from 'next/link';
import { Button } from "./ui/button"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import TalkToSalesEmailSVG from './svgs/talkToSalesEmail';
import TalkToSalesPhoneSVG from './svgs/talkToSalesPhone';

interface TalkToSalesPoints {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const points: TalkToSalesPoints[] = [
  { icon: TalkToSalesPhoneSVG, text: '+1 (424) PL8-CHAT' },
  { icon: TalkToSalesEmailSVG, text: 'sales@pl8chat.com' },
];

export default function TalkToSales() {
  return (
    <div className="w-full h-[778px] p-[140px] bg-white rounded-3xl inline-flex justify-start items-start gap-28 overflow-hidden">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-center text-gray-900 text-4xl font-medium leading-[60px]">Talk to sales </div>
          <div className="self-stretch justify-start text-gray-900 text-sm font-normal leading-5">Speak to a member of our sales team by reaching out to us directly or filling out the contact form.</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="inline-flex justify-start items-center gap-5">
                  <Icon className="w-4 h-4 text-gray-600" />
                  <div className="w-36 justify-start text-gray-600 text-[15px] font-normal leading-tight">
                    {point.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <form action="submit">
        <div className="w-[479px] min-h-[497px] px-10 py-8 bg-emerald-50 rounded-3xl inline-flex flex-col justify-start items-center gap-4">
          <div className="w-96 flex-1 flex flex-col justify-start items-start gap-1">
            <div className="flex flex-col justify-start items-start gap-2.5 w-full">
              <Input variant='talkToSales' name='fullName' placeholder='Full name*' />
              <Input variant='talkToSales' name='workEmail' placeholder='Work email*' />
              <Textarea variant='talkToSales' name='message' placeholder='Type message here...' rows={4} />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <Button variant='talkToSales'>
              <div className="justify-start text-white text-sm font-medium leading-normal">Submit</div>
            </Button>
          </div>
          {/* <div className="w-96 px-36 py-3.5 bg-emerald-900 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-2.5">
            <div className="w-24 h-4 text-center justify-center text-white text-sm font-medium leading-tight">Submit</div>
          </div> */}
          <div className="w-[400px] justify-start leading-[18px] text-xs"><span className="text-gray-900 font-normal leading-none">By submitting my data, I consent to PL8CHAT collecting, processing and storing my information in accordance with our</span><span className="text-emerald-900 font-normal leading-none"> </span><Link href={'https://www.pl8chat.com/privacy'} className="text-emerald-900 font-normal underline leading-none">Privacy Policy</Link><span className="text-emerald-900 font-normal underline leading-none">. </span></div>
        </div>
      </form>
    </div>
  )
}