'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import Image from 'next/image'
import EyeOff from './svgs/eyeOff'

export default function SignInForm() {
  return (
    <form className="flex w-full h-screen">
      {/* Left Column */}
      <div className="basis-1/2 gap-6 flex flex-col items-center justify-center relative">
        <div className="w-[384px] h-[72px] flex-col justify-start items-start gap-3 inline-flex">
          <div className="h-[72px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Sign in </div>
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="text-gray-900 text-sm font-normal leading-tight">Not a customer? </div>
              <div className="justify-start items-center flex">
                <Link href={`/pricing`} className="text-[#034b48] text-sm font-normal underline leading-tight">See our pricing plans</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[384px]  flex-col justify-start items-start gap-4 inline-flex">
          <Input variant='default' label='Email' id='email' name='email' type='email' />
          <div className='relative w-full'>
            <Input variant='default' label='Password' id='password' name='password' type='password' className='w-full' />
            <div className='absolute right-[13px] top-10'>
              <EyeOff />
            </div>
          </div>
          <div className="h-5 w-full justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <Checkbox />
              <div className="text-gray-900 text-sm font-normal leading-tight">Remember me</div>
            </div>
            <div className="justify-start items-center flex">
              <Link href={`/resetpassword`} className="text-right text-[#004c3d] text-sm font-normal underline leading-tight">Forgot your password?</Link>
            </div>
          </div>
          <div className='w-full pt-2'>
            <Button variant='signUp' className={`w-full`}>Continue</Button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="basis-1/2 bg-pl8Green flex items-center justify-center">
        <div className='w-full h-full relative'>
          <Image
            src={'/assets/images/signUpPic.jpg'}
            alt="PL8CHAT Logo"
            fill
          />
        </div>
      </div>
    </form>
  );
}