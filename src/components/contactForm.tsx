'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

type ContactFormProps = {
  isModal?: boolean
}

export default function ContactForm({ isModal }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  return (
    <div className={`${isModal ? 'pb-0 px-10' : 'pl-24 pr-10 pb-12'} h-[882px] pt-16 bg-white flex-col justify-start items-center gap-8 flex-1 inline-flex`}>
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
          <form ref={form} className="self-stretch h-[514px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-[386px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <Input variant='contact' label='First name' name='firstName'/>
                <Input variant='contact' label='Last name' name='lastName'/>
              </div>
              <Input
                variant='contact'
                label='Work email' />
              <div className="self-stretch justify-start items-center gap-4 flex">
                <div className='flex-1'>
                  <Select>
                    <SelectTrigger variant='contact' label='Industry' className=''>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hoa">Residential - HOA</SelectItem>
                      <SelectItem value="apartment">Residential - Apartment</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="public">Public lot/garage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex-1'>
                  <Select>
                    <SelectTrigger variant='contact' label='Parking size' className=''>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (1-25 spaces)</SelectItem>
                      <SelectItem value="medium">Medium ( 25-100)</SelectItem>
                      <SelectItem value="large">Large (over 100)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Textarea variant='message' label='Message' className='h-20' name='message'/>
            </div>
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="grow shrink basis-0"><span className="text-gray-600 text-sm font-normal leading-tight">By submitting my personal data, I consent to PL8CHAT collecting, processing and storing my information in accordance with the</span><span className="text-[#00695c] text-sm font-normal leading-tight"> </span><span className="text-[#00695c] text-sm font-normal underline leading-tight">PL8CHAT Privacy Policy.</span><span className="text-[#00695c] text-sm font-normal leading-tight"> </span></div>
            </div>
            <div className="h-10 pb-3 bg-[#00695c] rounded-md shadow justify-center items-center inline-flex w-full">
              <Button variant='signUp' className='w-full' >Talk to sales</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}