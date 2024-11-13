'use client'
import { Input } from '@/components/ui/input'
import { EyeIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Button } from './button'
import ProgressBar from './progressBar';
import Link from 'next/link'
import Image from 'next/image'

const emails = [
  {
    src: '/assets/images/gmailLogo.png',
    text: 'Gmail',
    altText: 'Gmail Logo'
  },
  {
    src: '/assets/images/outlookLogo.png',
    text: 'Outlook',
    altText: 'Outlook Logo'
  }
]

export default function FreePlanForm() {
  const [step, setStep] = useState(1); // Track the current step

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className={step >= 3 ? 'w-full h-screen' : ''}>
      {step === 1 && (
        <div className='flex flex-col'>
          <div className="w-96 h-16 flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-center text-gray-900 text-3xl leading-9">Sign up for a free plan</div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-gray-600 text-sm font-normal leading-tight">Create an account or</div>
                <div className="justify-start items-center flex">
                  <div className="text-[#00695c] text-sm font-medium underline leading-tight">Sign in</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-[266px] flex-col justify-start items-start gap-6 inline-flex">
            <Input variant='default' label='Email' type='email' />
            <Input variant='default' label='Password' type='password' />

            <div className="self-stretch justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="w-4 h-4 relative bg-white rounded border border-gray-300"></div>
                <div className="text-gray-900 text-sm font-normal leading-tight">Remember me</div>
              </div>
              <div className="justify-start items-center flex">
                <div className="text-right text-[#00695c] text-sm font-medium leading-tight">Forgot your password?</div>
              </div>
            </div>
            <Button variant='signUp' onClick={handleNext}>Continue</Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className='max-w-sm'>
          <div className="flex flex-col gap-1 items-start pb-4">
            <div className="text-3xl font-semibold text-offBlack" >
              Check your email
            </div>
            <div className="text-accentGrey text-sm">
              We've sent an email to <span className="text-pl8Green underline underline-offset-3">michael@pl9chat.com</span> with a link to actiavte your account.
            </div>
          </div>

          <div className='flex gap-x-16 pt-4'>
            {emails.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.src}
                  alt={item.altText}
                  width={48}
                  height={48}
                  className="rounded-md"
                />
                <Link href='#' className="text-pl8Green underline underline-offset-2 text-sm">Open {item.text}</Link>
              </div>
            ))}
          </div>

          <div className='pt-10'>
            <div className='text-accentGrey'>
              Didn't get an email? Check your spam folder!
            </div>
            <Link href='#' onClick={handleNext} className='text-pl8Green underline underline-offset-2'>
              Re-enter your email and try again
            </Link>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <div className="flex w-full h-screen">
            {/* Left Column */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-white">
              <div className="flex text-3xl font-semibold text-offBlack pb-4">
                Tell us about yourself
              </div>

              <div className="grid grid-cols-6 gap-y-4 gap-x-4 w-full max-w-md">
                <div className="col-span-3">
                  <Input
                    variant="default"
                    label="First Name"
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                  />
                </div>

                <div className="col-span-3">
                  <Input
                    variant="second"
                    label="Last Name"
                    id="last-name"
                    name="last-name"
                    type="text"
                  />
                </div>

                <div className='col-span-6'>
                  PLACEHOLDER
                </div>

                <div className='col-span-6'>
                  <Input
                    variant="default"
                    label="Phone number"
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder='+1 (555) 987-6543'
                  />
                </div>

                <Button variant='signUp' className='col-span-6' onClick={handleNext} >Next</Button>
              </div>
              <ProgressBar progress={33} />
            </div>

            {/* Right Column */}
            <div className="flex-1 bg-pl8Green p-8 flex items-center justify-center">
              <Image
                src={'/assets/images/PL8CHAT.png'}
                alt="PL8CHAT Logo"
                width={303}
                height={200}
              />
            </div>
          </div>
          <div>
            <ProgressBar progress={33} />
          </div>
        </div>
      )}

    </div>
  );
}