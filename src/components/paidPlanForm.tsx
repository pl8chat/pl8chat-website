'use client'
import { EyeIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import ProgressBar from './progressBar';
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import BackArrow from './backArrow'

type SelectKeys = "role" | "industry" | "parkingSize" | "evCharging" | "state" | "country";


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

const acceptedCreditCards = [
  {
    src: '/assets/images/visa.jpg',
  },
  {
    src: '/assets/images/mastercard.jpg',
  },
  {
    src: '/assets/images/amex.jpg',
  },
  {
    src: '/assets/images/jcb.jpg',
  },
]

export default function PaidPlanForm() {
  const [step, setStep] = useState(4);
  const [isChecked, setIsChecked] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [values, setValues] = useState<Record<SelectKeys, string | undefined>>({
    role: undefined,
    industry: undefined,
    parkingSize: undefined,
    evCharging: undefined,
    state: undefined,
    country: undefined,
  });

  const handleValueChange = (key: SelectKeys, value: string) => {

    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const getTextColor = (key: SelectKeys) => (values[key] ? "text-black" : "text-gray-400");

  return (
    <div className={step >= 3 ? 'w-full h-screen' : ''}>
      {step === 1 && (
        <div className='flex flex-col gap-6'>
          <div className="w-[384px] h-[72px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Sign up</div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-gray-900 text-sm font-normal leading-tight">Create an account or</div>
                <div className="h-5 justify-start items-center inline-flex">
                  <div className="text-[#004c3d] text-sm font-normal underline leading-tight">Sign in</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[384px] h-[298px] flex-col justify-start items-start gap-4 inline-flex">
            <Input variant='default' label='Business email' id='email' name='email' type='email' />
            <div className='relative w-full'>
              <Input variant='default' label='Password' id='password' name='password' type='password' className='w-full' />
              <Image
                src={`/assets/images/eyeOff.png`}
                alt='Eye Icon'
                width={20}
                height={20}
                className='absolute right-[13px] top-9'
              />
            </div>
            <div className="h-[60px] justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0"><span className="text-gray-900 text-sm font-normal leading-tight">By creating an account, you agree to our </span><Link href={`/terms`}><span className="text-[#004c3d] text-sm font-normal underline leading-tight">Terms of Service</span>
              </Link><span className="text-gray-900 text-sm font-normal leading-tight"> and have read and acknowledge our </span><Link href={`/privacy`}><span className="text-[#004c3d] text-sm font-normal underline leading-tight">Privacy Policy.</span></Link></div>
            </div>
            <div className='w-full mt-4'>
              <Button variant='signUp' onClick={handleNext} className={`w-full`}>Sign up</Button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className='max-w-sm flex flex-col gap-8'>
          <div className="w-96 h-[84px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="h-[92px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Check your email</div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="grow shrink basis-0"><span className="text-gray-900 text-sm font-normal leading-tight">We’ve sent an email to </span><span className="text-gray-900 text-sm font-bold leading-tight">michael@pl8chat.com </span><span className="text-gray-900 text-sm font-normal leading-tight">with a link to activate your account, </span></div>
              </div>
            </div>
          </div>
          <div className="w-[460px] h-12 justify-start items-start gap-1 inline-flex">
            {emails.map((item) => (
              <div className="grow shrink basis-0 h-12 justify-start items-center gap-3 flex">
                <div className="w-12 h-12 py-1.5 justify-center items-center flex">
                  <Image
                    src={item.src}
                    alt={item.altText}
                    width={48}
                    height={48}
                    className="relative"
                  />
                </div>
                <div onClick={handleNext} className="text-[#004c3d] text-sm font-normal underline leading-tight">Open Gmail</div>
              </div>
            ))}
          </div>
          <div className="h-[70px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-900 text-sm font-normal leading-tight">Didn’t get an email? Check your spam folder! </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[42px] py-[9px] rounded-md justify-start items-center inline-flex">
                <div onClick={handlePrevious} className="cursor-pointer text-[#004c3d] text-sm font-normal underline leading-tight">Re-enter your email and try again</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className=''>
          <div className="flex w-full h-screen">
            {/* Left Column */}
            <div className="basis-1/2 gap-6 flex flex-col items-center justify-center relative">
              <div className="w-96 h-9 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch h-9 flex-col justify-start items-start gap-4 flex">
                    <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Tell us about yourself</div>
                  </div>
                </div>
              </div>
              <div className="w-[384px] h-[286] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <Input variant='default' label='First name' id='firstName' name='firstName' type='text' />
                  <Input variant='default' label='Last name' id='lastName' name='lastName' type='text' />
                </div>
                <div className="self-stretch h-[90px] flex-col justify-start items-start gap-1 flex">
                  <div className='w-full'>
                    <Select
                      value={values.role || ""}
                      onValueChange={(value) => handleValueChange("role", value)}
                    >
                      <SelectTrigger label="Your role/position" className={getTextColor("role")}>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent className=''>
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="admin">Admin / manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[460px] text-gray-500 text-sm font-normal leading-tight">You can change this later in settings</div>
                </div>
                <div className='w-full relative'>
                  <span className={`absolute left-[21px] top-[35px] pr-[13px] rounded z-10 ${phoneNumber ? 'text-pl8Green' : 'text-gray-400'}`}>+ 1</span>
                  <Input value={phoneNumber} onChange={handlePhoneNumberChange} label="Phone Number" variant="phone" id="phone" name="phone" type='number' />
                </div>
              </div>
              <div className='h-10 w-[384px]'>
                <Button variant='signUp' onClick={handleNext} className={`w-full`}>Continue</Button>
              </div>
              <div className='flex flex-col justify-center w-full items-center absolute bottom-0 px-6 pb-6 pt-4'>
                <ProgressBar progress={33} onBack={handlePrevious} number='1/3' />
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
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="flex w-full h-screen">
          {/* Left Column */}
          <div className="flex-1 w-[414px] gap-6 flex flex-col items-center justify-center bg-[#F6F6F4] relative">
            <div className="w-96 h-9 flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-9 flex-col justify-start items-start gap-4 flex">
                  <div className="text-center text-nowrap text-gray-900 text-3xl font-semibold leading-9">Tell us about your business</div>
                </div>
              </div>
            </div>
            <div className="w-[384px] h-[336px] flex-col justify-start items-start gap-6 inline-flex">
              <div>
                <Input variant='default' label='Business Name' id='firstName' name='firstName' type='text' />
                <div className="w-[384px] text-gray-500 pt-1 text-sm font-normal leading-tight">You can change this later in settings</div>
              </div>
              <div className='w-full'>
                <Select
                  value={values.industry || ""}
                  onValueChange={(value) => handleValueChange("industry", value)}
                >
                  <SelectTrigger label='Industry' className={getTextColor("industry")}>
                    <SelectValue placeholder="Select one" />
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
                  <Select
                    value={values.parkingSize || ""}
                    onValueChange={(value) => handleValueChange("parkingSize", value)}
                  >
                    <SelectTrigger label='Parking size' className={getTextColor("parkingSize")}>
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
                  <Select
                    value={values.evCharging || ""}
                    onValueChange={(value) => handleValueChange("evCharging", value)}
                  >
                    <SelectTrigger label='EV charging' className={getTextColor("evCharging")}>
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
                <Button variant='signUp' onClick={handleNext} className={`w-full`}>Continue</Button>
              </div>
            </div>
            <div className='flex flex-col justify-center w-full items-center absolute bottom-0 px-6 pb-6 pt-4'>
              <ProgressBar progress={66} onBack={handlePrevious} number='2/3' />
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
                    <Select
                      value={values.state || ""}
                      onValueChange={(value) => handleValueChange("state", value)}
                    >
                      <SelectTrigger label='State' className={getTextColor("state")}>
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
                    <Select
                      value={values.country || ""}
                      onValueChange={(value) => handleValueChange("country", value)}
                    >
                      <SelectTrigger label="Country" className={getTextColor("country")}>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USA">United States of America</SelectItem>
                        <SelectItem value="CAN">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button variant='signUp' onClick={handleNext}>Next</Button>
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
        <div className="flex w-full h-screen">
          {/* Left Column - max-w-[850px] h-[1044px] pl-24 */}
          <div className="basis-1/2 pt-12 pb-10 bg-[#f6f6f4] justify-center items-start gap-[164px] inline-flex">
            <div className="self-stretch grow shrink basis-0 pr-8 flex flex-col justify-start items-end gap-6">
              <div className="w-[621px] h-[124px] px-[125px] pb-[57px]"></div>
              <div className="w-[512px] justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-center gap-2 flex cursor-pointer" onClick={handlePrevious}>
                  <BackArrow />
                  <div className="text-right text-gray-900 text-sm font-medium leading-tight">Back</div>
                </div>
              </div>
              <div className="w-[512px] justify-center items-center gap-12 inline-flex">
                <div className="grow shrink basis-0 text-gray-900 text-3xl font-semibold leading-9">Payment details</div>
              </div>
              <div className="w-[512px] justify-start items-center gap-5 inline-flex flex-col">
                <Input variant='checkout' label='Email' id='email' name='emailPayment' type='text' />
                <Input variant='checkout' label='Name on card' id='name' name='name' placeholder='Full name on card' type='text' />
                <div className='relative w-full'>
                  <Input variant='checkout' label='Card number' id='cardNumber' name='cardNumber' placeholder='1234 1234 1234 1234' type='text' />
                  <div className="w-[120px] self-stretch pr-2 py-2.5 justify-start items-center inline-flex absolute right-0 bottom-1">
                    {acceptedCreditCards.map((card, index) => (
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="self-stretch pr-1 justify-start items-center inline-flex">
                          <div className="h-4 flex-col justify-start items-start inline-flex">
                            <div className="w-6 h-4 flex-col justify-center items-center flex">
                              <div className="w-6 h-4 relative">
                                <Image
                                  src={card.src}
                                  alt="Credit Card"
                                  width={24}
                                  height={24}
                                  className="relative"
                                />
                                <div className="w-[23.50px] h-[15.50px] left-[0.25px] top-[0.25px] absolute">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='grid grid-cols-7 gap-4'>
                  <div className='col-span-5'>
                    <Input variant='checkout' label='Expiration date (MM/YY)' id='expiration' name='expiration' placeholder='MM/YY' type='text' />
                  </div>
                  <div className='col-span-2' >
                    <Input variant='checkout' label='CVC' id='cvc' name='cvc' placeholder='123' type='text' />
                  </div>
                </div>
                <div className="w-[512px] flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="w-4 h-5 justify-center items-center flex">
                      <Checkbox
                        defaultChecked
                        onCheckedChange={(checked) => setIsChecked(checked === true)}
                      />
                    </div>
                    <div className="grow shrink basis-0 h-5 justify-start items-center flex">
                      <div className="grow shrink basis-0 text-gray-900 text-sm font-medium leading-tight">
                        My billing address is the same as my contact address
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${isChecked ? 'hidden' : ''} flex flex-col gap-5`}>
                  <Input variant='checkout' label='Billing address' id='billingAddress' name='billingAddress' type='text' />
                  <div className='grid grid-cols-9 gap-4'>
                    <div className='col-span-3'>
                      <Input variant='checkout' label='City' id='city' name='city' type='text' />
                    </div>
                    <div className='col-span-3'>
                      <Input variant='checkout' label='State/Province' id='state' name='state' type='text' />
                    </div>
                    <div className='col-span-3'>
                      <Input variant='checkout' label='Postal code' id='postalCode' name='postalCode' type='text' />
                    </div>
                  </div>
                </div>
                {/* {isChecked && (
                  <>
                    <Input variant='checkout' label='Billing address' id='billingAddress' name='billingAddress' type='text' />
                    <div className='grid grid-cols-9 gap-4'>
                      <div className='col-span-3'>
                        <Input variant='checkout' label='City' id='city' name='city' type='text' />
                      </div>
                      <div className='col-span-3'>
                        <Input variant='checkout' label='State/Province' id='state' name='state' type='text' />
                      </div>
                      <div className='col-span-3'>
                        <Input variant='checkout' label='Postal code' id='postalCode' name='postalCode' type='text' />
                      </div>
                    </div>
                  </>
                )} */}

              </div>
              <div className="w-[512px]"></div>
            </div>
          </div>

          {/* Right Column - max-w-[850px] h-[1044px] */}
          <div className="basis-1/2 bg-[#f6f6f4] flex-col justify-start items-start gap-8 inline-flex">
            <div className="px-14 pt-[190px] pb-[197px] justify-start items-center gap-2.5 inline-flex">
              <div className="p-12 bg-[#f6f6f4] rounded-xl border border-[#b9b9b9] flex-col justify-center items-center gap-3 inline-flex w-[471px]">
                <div className='flex w-full'>
                  <div className="w-[374px] justify-center items-center gap-12 inline-flex">
                    <div className="grow shrink basis-0 text-gray-900 text-3xl font-semibold leading-9">Purchase summary</div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start flex">
                  <div className="w-[375px] pt-4 pb-6 justify-start items-center gap-3 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-gray-900 text-sm font-medium leading-tight">Premium plan</div>
                      <div className="text-gray-900 text-sm font-normal leading-tight">A single license for business use</div>
                    </div>
                    <div className="grow shrink basis-0 h-[52px] py-4 justify-end items-center gap-3 flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-gray-900 text-sm font-normal leading-tight">$120.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-gray-200"></div>
                  <div className="w-[375px] justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-[52px] py-4 justify-start items-center gap-3 flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-gray-900 text-sm font-medium leading-tight">Subtotal</div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[52px] py-4 justify-end items-center gap-3 flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-gray-900 text-sm font-medium leading-tight">$120.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[66px] px-2.5 pb-6 flex-col justify-start items-start gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-1 w-[141px]">
                      <Input variant='promoCode' id='promoCode' name='promoCode' type='text' placeholder='Add promo code' className='w-[150px]' />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-gray-200"></div>
                  <div className="self-stretch h-[246px] flex-col justify-start items-start gap-8 flex">
                    <div className="h-[172px] flex-col justify-start items-start gap-6 flex">
                      <div className="self-stretch justify-end items-start inline-flex w-[375px]">
                        <div className="grow shrink basis-0 h-[52px] py-4 justify-start items-center gap-3 flex">
                          <div className="flex-col justify-start items-start inline-flex">
                            <div className="text-gray-900 text-sm font-medium leading-tight">Total due today</div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 h-[52px] py-4 justify-end items-center gap-3 flex">
                          <div className="flex-col justify-start items-start inline-flex">
                            <div className="text-gray-900 text-sm font-medium leading-tight">$120.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                          <div className="self-stretch"><span className="text-gray-500 text-sm font-normal leading-normal">By clicking subscribe, you agree to all of this and that anlk jlkjlkjlkj  ljlk jlklkjllkjlkjld this and and thats blah blah  blah blah and our </span>
                            <Link href={`/terms`}>
                              <span className="text-pl8Green text-sm font-normal underline leading-normal">Terms of service</span>
                            </Link>
                            <span className="text-gray-500 text-sm font-normal leading-normal"> and our </span>
                            <Link href={`/privacy`}>
                              <span className="text-pl8Green text-sm font-normal underline leading-normal">Privacy policy</span>
                            </Link>
                            <span className="text-gray-500 text-sm font-normal leading-normal"> </span></div>
                        </div>
                      </div>
                    </div>
                    <Button variant='signUp' onClick={handleNext}>Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 7 && (
        <div className='flex w-full h-screen justify-center items-center'>
          <div className="w-96 h-[206px] flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch h-[206px] flex-col justify-start items-start gap-6 flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Payment successful</div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="grow shrink basis-0"><span className="text-gray-600 text-sm font-normal leading-tight">Your account was successfully created and a receipt has been emailed to </span><span className="text-gray-600 text-sm font-bold] leading-tight">michael@pl8chat.com. <br /></span><span className="text-gray-600 text-sm font-normal leading-tight"><br />Click below to start managing your parking community</span></div>
              </div>
              <Link href='/' className='w-full'>
                <Button variant='checkout' className={`w-full`}>Sign in</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {step === 8 && (
        <div className='flex w-full h-screen justify-center items-center'>
          <div className="w-96 h-[206px] flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch h-[206px] flex-col justify-start items-start gap-6 flex">
              <div className="text-center text-gray-900 text-3xl font-semibold leading-9">Account updated </div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="grow shrink basis-0"><span className="text-gray-600 text-sm font-normal leading-tight">Your account was successfully updated and a receipt has been emailed to </span><span className="text-gray-600 text-sm font-bold leading-tight">michael@pl8chat.com. <br /></span><span className="text-gray-600 text-sm font-normal leading-tight"><br />Click below to start managing your parking community</span></div>
              </div>
              <Link href='/' className='w-full'>
                <Button variant='signUp' className={`w-full`}>Sign in</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}