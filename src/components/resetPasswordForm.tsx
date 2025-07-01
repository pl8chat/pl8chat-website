'use client'
import { EyeIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'
import GreenCheck from './svgs/checkGreen'
import Link from 'next/link'
import Image from 'next/image'
import EyeOff from './svgs/eyeOff'
import EyeOn from './svgs/eyeOn'
import { Divide } from 'lucide-react'

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

export default function ResetPasswordForm() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('');
  const [emailEntered, setEmailEntered] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);


  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  return (
    <div>
      {step === 1 && (
        <div className='flex flex-col gap-6'>
          <div className="w-[384px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="h-[92px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Reset your password</div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="text-gray-900 text-sm font-normal leading-tight">Enter your email address to receive a link to reset your password.</div>
              </div>
            </div>
          </div>
          <Input
            variant='default'
            label='Email'
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
          <div className='w-full'>
            <div className='pb-2'>
              <Button variant='signUp' onClick={handleNext} className={`w-full`}>Submit</Button>
            </div>
            <div className="w-full h-[42px] px-[17px] py-[9px] rounded-md justify-center items-center inline-flex">
              <Link href={`/signin`} className="text-[#034b48] text-sm font-normal underline leading-tight">Back to sign in</Link>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className='max-w-sm flex flex-col gap-6'>
          <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Check your email</div>
              <div className="text-gray-900 text-sm font-normal leading-tight">You’ll receive a link to reset your password. If you don’t see one, check your spam folder.</div>
            </div>
          </div>
          <div className="w-[460px] h-12 justify-start items-start gap-1 inline-flex">
            {emails.map((item) => (
              <div className="grow shrink basis-0 h-12 justify-start items-center gap-3 flex cursor-pointer">
                <div className="w-12 h-12 py-1.5 justify-center items-center flex">
                  <Image
                    src={item.src}
                    alt={item.altText}
                    width={48}
                    height={48}
                    className="relative"
                  />
                </div>
                <div onClick={handleNext} className="text-darkGreen text-sm font-normal underline leading-tight">Open Gmail</div>
              </div>
            ))}
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className='w-full'>
              <div className='pb-2'>
                <Button variant='signUp' onClick={handleNext} className={`w-full`}>Sign in</Button>
              </div>
              <div className="w-full h-[42px] px-[17px] py-[9px] rounded-md justify-center items-center inline-flex">
                <Link href={`/signin`} className="text-[#034b48] text-sm font-normal underline leading-tight">Try again</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className='max-w-sm flex flex-col gap-6'>
          <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Change Password</div>
            </div>
          </div>
          <div className='relative'>
            <Input variant='default' label='New password' id='password' name='password' type='password' />
            <div className='absolute right-[13px] top-10'>
              <EyeOn />
            </div>
          </div>
          <div className='relative'>
            <Input variant='default' label='Confirm password' id='confirmPassword' name='confirmPassword' type='password' />
            <div className='absolute right-[13px] top-10'>
              <EyeOff />
            </div>
          </div>
          <Button variant='signUp' onClick={handleNext} className={`w-full`}>Submit</Button>
        </div>
      )}

      {step === 4 && (
        <div className='flex flex-col w-full h-screen justify-center items-center gap-6'>
          <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-12 h-12 p-3 rounded-3xl border-2 border-[#034b48] justify-center items-center inline-flex">
                <GreenCheck />
              </div>
              <div className="h-16 flex-col justify-start items-start gap-2 flex">
                <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Success!</div>
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-gray-900 text-xs font-normal leading-tight h-5 flex items-center">Your password has been successfully changed.</div>
                </div>
              </div>
          </div>
          <Link href={`/signin`} className='w-[384px]'>
            <Button variant='signUp' onClick={handlePrevious} className={`w-full`}>Sign In</Button>
          </Link>
        </div>
      )}
    </div>
  );
}