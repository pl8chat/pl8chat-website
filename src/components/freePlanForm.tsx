'use client'
import { EyeIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import BackArrow from './backArrow'
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
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className={step >= 3 ? 'w-full h-screen' : ''}>
      {step === 1 && (
        <div className='flex flex-col gap-8'>
          <div className="w-[460px] h-16 flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-center text-gray-900 text-3xl leading-9 font-semibold">Sign up for a free plan</div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-gray-600 text-sm font-normal leading-tight">Create an account or</div>
                <div className="justify-start items-center flex">
                  <div className="text-[#00695c] text-sm font-medium underline leading-tight">Sign in</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[460px] h-[282px] flex-col justify-start items-start gap-6 inline-flex">
            <Input variant='default' label='Business email' id='email' name='email' type='email' />
            <Input variant='default' label='Password' id='password' name='password' type='password' />
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="grow shrink basis-0"><span className="text-gray-600 text-sm font-normal leading-tight">By creating an account, you agree to our </span><span className="text-[#00695c] text-sm font-normal underline leading-tight">Terms</span><span className="text-gray-600 text-sm font-normal leading-tight">, and have read and acknowledged our </span><span className="text-[#00695c] text-sm font-normal underline leading-tight">Privacy Statement</span><span className="text-gray-600 text-sm font-normal leading-tight">. </span></div>
            </div>
            <div className='h-[42px] w-full'>
              <Button variant='signUp' onClick={handleNext} className={`w-full`}>Sign up</Button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className='max-w-sm flex flex-col gap-8'>
          <div className="w-96 h-[84px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Check your email</div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="grow shrink basis-0"><span className="text-gray-600 text-sm font-normal leading-tight">We’ve sent an email to </span><span className="text-gray-600 text-sm font-bold leading-tight">michael@pl8chat.com</span><span className="text-gray-600 text-sm font-normal leading-tight"> with a link to activate your account.</span></div>
              </div>
            </div>
          </div>
          <div className="w-96 h-[141px] flex-col justify-start items-start gap-8 inline-flex">
            <div className='self-stretch justify-start items-start gap-1 inline-flex'>
              {emails.map((item, index) => (
                <div key={index} onClick={handleNext} className="grow shrink basis-0 h-12 justify-start items-center gap-3 flex">
                  <div className='w-12 h-12 py-1.5 justify-center items-center flex'>
                    <Image
                      src={item.src}
                      alt={item.altText}
                      width={48}
                      height={48}
                      className="relative"
                    />
                  </div>
                  <Link href='#' className="text-[#00695c] text-sm font-medium underline leading-tight">Open {item.text}</Link>
                </div>
              ))}
            </div>
            <div className="self-stretch justify-center items-center gap-2 inline-flex"></div>
            <div className="self-stretch h-11 flex-col justify-center items-start gap-1 flex">
              <div className="self-stretch text-gray-600 text-sm font-normal leading-tight">Didn’t get an email? Check your spam folder!</div>
              <div className="justify-start items-center inline-flex">
                <div onClick={handlePrevious} className="text-[#00695c] text-sm font-medium underline leading-tight cursor-pointer">Re-enter your email and try again</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className=''>
          <div className="flex w-full h-screen">
            {/* Left Column */}
            <div className="flex-1 gap-8 flex flex-col items-center justify-center relative">
              <div className="w-[460px] h-9 flex-col justify-start items-start gap-3 inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Tell us about yourself</div>
                </div>
              </div>
              <div className="w-[460px] h-[336px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <Input variant='default' label='First name' id='firstName' name='firstName' type='text' />
                  <Input variant='default' label='Last name' id='lastName' name='lastName' type='text' />
                </div>
                <div className="self-stretch h-[90px] flex-col justify-start items-start gap-1 flex">
                  <div className='w-full'>
                    <Select>
                      <SelectTrigger label='Your role/position'>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="admin">Admin / manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[460px] text-gray-600 text-sm font-normal leading-tight">You can change this later in settings</div>
                </div>
                <Input label="Phone Number" variant="phone" id="phone" name="phone" type='number' />
                <div className='h-10 w-full'>
                  <Button variant='signUp' onClick={handleNext} className={`w-full`}>Next</Button>
                </div>
              </div>
              <div className='flex flex-col justify-center w-full items-center absolute bottom-0 px-6 pb-6 pt-4'>
                <ProgressBar progress={33} onBack={handlePrevious} number='1/3' />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 bg-pl8Green flex items-center justify-center">
              <Image
                src={'/assets/images/PL8CHAT.png'}
                alt="PL8CHAT Logo"
                width={304}
                height={97}
              />
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className=''>
          <div className="flex w-full h-screen">
            {/* Left Column */}
            <div className="flex-1 gap-8 flex flex-col items-center justify-center bg-[#F6F6F4] relative">
              <div className="w-[460px] h-9 flex-col justify-start items-start gap-3 inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Tell us about your business</div>
                </div>
              </div>
              <div className="w-[460px] h-[336px] flex-col justify-start items-start gap-6 inline-flex">
                <div>
                  <Input variant='default' label='Business name' id='firstName' name='firstName' type='text' />
                  <div className="w-[460px] text-gray-600 pt-1 text-sm font-normal leading-tight">You can change this later in settings</div>
                </div>
                <div className='w-full'>
                  <Select>
                    <SelectTrigger label='Industry'>
                      <SelectValue placeholder="Select one" className='' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Residential - Apartment</SelectItem>
                      <SelectItem value="hoa">Residential - HOA</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className='w-full'>
                    <Select>
                      <SelectTrigger label='Parking size'>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<25">Under 25 spaces</SelectItem>
                        <SelectItem value="25-100">25 - 100</SelectItem>
                        <SelectItem value="100+">100+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='w-full'>
                    <Select>
                      <SelectTrigger label='EV charging'>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="own">Yes - we own</SelectItem>
                        <SelectItem value="thirdParty">Yes - third party</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className='h-10 w-full'>
                  <Button variant='signUp' onClick={handleNext} className={`w-full`}>Next</Button>
                </div>
              </div>
              <div className='flex flex-col justify-center w-full items-center absolute bottom-0 px-6 pb-6 pt-4'>
                <ProgressBar progress={66} onBack={handlePrevious} number='2/3' />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 bg-pl8Green flex items-center justify-center">
              <Image
                src={'/assets/images/PL8CHAT.png'}
                alt="PL8CHAT Logo"
                width={304}
                height={97}
              />
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className=''>
          <div className="flex w-full h-screen">
            {/* Left Column */}
            <div className="flex-1 gap-8 flex flex-col items-center justify-center bg-[#F6F6F4] relative">
              <div className="h-16 flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-center text-gray-900 text-3xl font-semibold leading-9">What’s your business address?</div>
                <div onClick={handleNext} className="w-[460px] cursor-pointer"><span className="text-gray-600 text-sm font-normal leading-tight">Don’t have a physical address? </span><span className="text-[#00695c] text-sm font-normal underline leading-tight">Skip this step</span></div>
              </div>
              <div className="w-[460px] h-[336px] flex-col justify-start items-start gap-6 inline-flex">
                <Input variant='default' label='Address line 1 (Street address or post office box)' id='address1' name='address1' type='text' />
                <Input variant='default' label='Address line 2' id='address2' name='address2' type='text' />
                <div className="self-stretch gap-2 grid grid-cols-2">
                  <Input
                    variant='default'
                    label='City'
                    id='firstName'
                    name='firstName'
                    type='text'
                    className='col-span-1' />
                  <div className='col-span-1'>
                    <Select>
                      <SelectTrigger label='State'>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        <SelectItem value="AR">Arkansas</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="CO">Colorado</SelectItem>
                        <SelectItem value="CT">Connecticut</SelectItem>
                        <SelectItem value="DE">Delaware</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                        <SelectItem value="HI">Hawaii</SelectItem>
                        <SelectItem value="ID">Idaho</SelectItem>
                        <SelectItem value="IL">Illinois</SelectItem>
                        <SelectItem value="IN">Indiana</SelectItem>
                        <SelectItem value="IA">Iowa</SelectItem>
                        <SelectItem value="KS">Kansas</SelectItem>
                        <SelectItem value="KY">Kentucky</SelectItem>
                        <SelectItem value="LA">Louisiana</SelectItem>
                        <SelectItem value="ME">Maine</SelectItem>
                        <SelectItem value="MD">Maryland</SelectItem>
                        <SelectItem value="MA">Massachusetts</SelectItem>
                        <SelectItem value="MI">Michigan</SelectItem>
                        <SelectItem value="MN">Minnesota</SelectItem>
                        <SelectItem value="MS">Mississippi</SelectItem>
                        <SelectItem value="MO">Missouri</SelectItem>
                        <SelectItem value="MT">Montana</SelectItem>
                        <SelectItem value="NE">Nebraska</SelectItem>
                        <SelectItem value="NV">Nevada</SelectItem>
                        <SelectItem value="NH">New Hampshire</SelectItem>
                        <SelectItem value="NJ">New Jersey</SelectItem>
                        <SelectItem value="NM">New Mexico</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="NC">North Carolina</SelectItem>
                        <SelectItem value="ND">North Dakota</SelectItem>
                        <SelectItem value="OH">Ohio</SelectItem>
                        <SelectItem value="OK">Oklahoma</SelectItem>
                        <SelectItem value="OR">Oregon</SelectItem>
                        <SelectItem value="PA">Pennsylvania</SelectItem>
                        <SelectItem value="RI">Rhode Island</SelectItem>
                        <SelectItem value="SC">South Carolina</SelectItem>
                        <SelectItem value="SD">South Dakota</SelectItem>
                        <SelectItem value="TN">Tennessee</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="UT">Utah</SelectItem>
                        <SelectItem value="VT">Vermont</SelectItem>
                        <SelectItem value="VA">Virginia</SelectItem>
                        <SelectItem value="WA">Washington</SelectItem>
                        <SelectItem value="WV">West Virginia</SelectItem>
                        <SelectItem value="WI">Wisconsin</SelectItem>
                        <SelectItem value="WY">Wyoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="self-stretchgap-2 grid grid-cols-2 gap-2">
                  <Input
                    variant="default"
                    label="Zip/Postal code"
                    id="zip"
                    name="zip"
                    type="text"
                    className="col-span-1" />
                  <div className="col-span-1">
                    <Select>
                      <SelectTrigger label="Country">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USA">United States of America</SelectItem>
                        <SelectItem value="CAN">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className='h-10 w-full'>
                  <Button variant='signUp' onClick={handleNext} className={`w-full`}>Next</Button>
                </div>
              </div>
              <div className='flex flex-col justify-center w-full items-center absolute bottom-0 px-6 pb-6 pt-4'>
                <ProgressBar progress={100} onBack={handlePrevious} number='3/3' />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 bg-pl8Green flex items-center justify-center">
              <Image
                src={'/assets/images/PL8CHAT.png'}
                alt="PL8CHAT Logo"
                width={304}
                height={97}
              />
            </div>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className='flex w-full h-screen justify-center items-center'>
          <div className='flex flex-col gap-8'>
            <div className="w-96 h-[84px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
                <div className="text-center text-gray-900 text-3xl font-semibold leading-9">You’re ready to go!</div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 text-gray-600 text-sm font-normal leading-tight">Your account was successfully created. Click below to start managing your parking community.</div>
                </div>
              </div>
            </div>
            <Button variant='signUp' onClick={handlePrevious}>Sign In</Button>
          </div>
        </div>
      )}
    </div>
  );
}