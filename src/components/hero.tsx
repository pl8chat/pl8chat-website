'use client'
import { useState, useRef } from 'react'
import { Button } from './ui/button'
import HeroText from './svgs/HeroTextLogo';
import { Input } from './ui/input';
import MailingListModal from './mailingListModal'
import { TopPaddingLayout } from './layouts/topPaddingLayout';
import emailjs from '@emailjs/browser'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

export default function Hero() {
  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('')
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(true); // State for email validation
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);  // State for submission status


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setValidEmail(false);
      setEmailTouched(false);
      console.log("Invalid email, form not sent.");
      return;
    }

    // Sends email to Michael
    if (form.current !== null) {
      emailjs.sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          console.log('isSubmitted: ' + isSubmitted)
          setEmailTouched(false);
        })
        .catch((error) => {
          console.log("Error sending the form:", error.text);
        });
    } else {
      console.error("Form reference is null.");
    }

    setEmail(email.trim());
  };

  return (
    <div className=''>
      {/* Side by side w/ image */}
      {/* <div className='w-full md:flex h-[741px] bg-[#f3f4f2] hidden'>
        <div className='basis-1/2'>
          <div className="h-[560px] md:h-[751px] w-full px-4 md:pl-8 pt-[56px] lg:pt-32 md:pb-[120px] flex-col justify-start items-start gap-4 md:gap-10 inline-flex">
            <div className="w-full max-w-[822px] pt-16">
              <div className="w-full justify-start text-[#363636] text-8xl font-medium leading-[90px]">
                The Voice <br />of Cars
              </div>
            </div>
            <div className="w-full max-w-[798px] justify-start text-neutral-700 text-3xl font-normal leading-9">
              We’re a vehicle connectivity platform <br />transforming license plates into a new <br />line of communication.
            </div>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
          </div>
          <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
        <div className='basis-1/2 bg-[#f3f4f2] relative'>
          <Image
            src={'/assets/images/License Plate.png'}
            alt='License Plate'
            fill
            objectFit='cover'
            className="absolute top-0 left-0 w-full h-full"
          />
           <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black/60 to-transparent" />
        </div>
      </div>
      <div className="md:hidden flex bg-[#f3f4f2] w-full relative h-[654px]">
        <div className="absolute inset-0 bg-[url('/assets/images/License%20Plate%202.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className='pt-[91px]'>  
          <div className="relative w-full px-4 pt-[56px] pb-[120px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-80 text-white text-5xl font-medium leading-[50px]">
              The Voice <br />of Cars
            </div>
            <div className="w-80 text-white text-xl font-medium leading-7">
              We’re a vehicle connectivity <br />
              <span className="leading-loose">
                platform transforming license plates into a new line of communication.
              </span>
            </div>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>Learn more</Button>
            <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      </div> */}
      <div className='mx-auto w-full h-screen flex justify-center items-center bg-[#E8F4F0]'>
        <div className='flex-col justify-center'>
          <div className='flex justify-center'>
            <HeroText />
          </div>
          <div className="pl-[5px] inline-flex flex-col justify-center items-center gap-[50px] pt-[72px]">
            <div className="text-center justify-center text-black text-[50px] font-medium leading-[60px]">We’re a new kind of auto club. Built on<br />communication and community. </div>
            <form ref={form} action="/submit" onSubmit={handleFormSubmit} noValidate>
              <div className="w-[478px] inline-flex justify-start items-start gap-2">
                <div className="w-80 inline-flex flex-col justify-start items-start gap-2.5">
                  <div className='flex flex-col'>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      variant={'hero'}
                      autoComplete="email"    
                      value={email}
                      onBlur={() => {
                        setEmailTouched(true);
                      }}
                      placeholder='Enter email address'
                      className={`placeholder:text-emerald-950 ${emailTouched || !validEmail ? 'border-red-500' : 'border-emerald-950'}`}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    {emailTouched && validEmail && (
                      <div className='pt-[10px] text-[#EF4444]'>
                        This field is required
                      </div>
                    )}{!validEmail && (
                      <div className='pt-[10px] text-[#EF4444]'>
                        A valid email is required
                      </div>
                    )}
                  </div>
                  <div className="w-80 inline-flex justify-start items-center gap-2.5 overflow-hidden">
                    <div className="flex-1 justify-start text-emerald-950 text-xs font-normal leading-[18px]">By submitting my personal data I agree to receive marketing emails from PL8CHAT.</div>
                  </div>
                </div>
                <button data-state="Default" data-type="Primary" className="w-36 h-12 px-5 py-3 bg-emerald-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-emerald-950 flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-white text-base font-medium leading-normal tracking-tight">Join waitlist</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}