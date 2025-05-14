'use client'
import { useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'
import HeroText from './svgs/HeroTextLogo';
import { Input } from './ui/input';
import Success from './success';
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
  const [isModalOpen, setModalOpen] = useState<boolean>(false); // State for modal open/close
  const [email, setEmail] = useState<string>('') // State for email input
  const [emailTouched, setEmailTouched] = useState<boolean>(false); // State for email input touch
  const [validEmail, setValidEmail] = useState<boolean>(true); // State for email validation
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);  // State for submission status

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsSubmitted(false);  // Reset submission status on window close or refresh
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
          setModalOpen(true); // Open the modal on successful submission
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
          <div className="pl-[5px] inline-flex flex-col justify-center items-center gap-[50px] pt-[50px] md:pt-[72px]">
            <div className="w-[350px] md:w-[905px] text-center justify-center text-black text-[33px] md:text-[50px] font-medium leading-[34px] md:leading-[60px]">We’re a new kind of auto club. Built on<br />communication and community. </div>
            <form ref={form} action="/submit" onSubmit={handleFormSubmit} noValidate>
              <div className="w-full flex flex-col items-center justify-center md:justify-start md:items-start gap-2 md:flex-row md:w-[478px]">
                <div className="w-[350px] md:w-80 inline-flex flex-col justify-start items-start gap-2.5">
                  <div className='flex flex-col w-full md:w-auto md:flex-row gap-2'>
                    <div>
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
                        className={`placeholder:text-emerald-950 ${emailTouched || !validEmail ? 'border-red-500 focus:border-red-500' : 'border-emerald-950 focus:border-emerald-950'}`}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <div className='flex flex-col md:hidden leading-[18px] text-[11px]'>
                        {emailTouched && validEmail && (
                          <div className='pt-[10px] text-red-500'>
                            This field is required
                          </div>
                        )}{!validEmail && (
                          <div className='pt-[10px] text-red-500'>
                            A valid email is required
                          </div>
                        )}
                      </div>
                    </div>
                    <button data-state="Default" data-type="Primary" className="w-full md:w-[150px] h-12 px-5 py-3 bg-emerald-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-emerald-950 flex justify-center items-center overflow-hidden">
                      <div className="justify-start text-white text-base font-medium leading-normal tracking-tight">Join waitlist</div>
                    </button>
                  </div>
                  <div className='hidden md:flex flex-col'>
                    {emailTouched && validEmail && (
                      <div className='pt-[10px] text-red-500'>
                        This field is required
                      </div>
                    )}{!validEmail && (
                      <div className='pt-[10px] text-red-500'>
                        A valid email is required
                      </div>
                    )}
                  </div>
                  <div className="inline-flex justify-start items-center gap-2.5 overflow-hidden">
                    <div className="flex-1 justify-start text-emerald-950 text-[11px] md:text-xs font-normal leading-[15px] md:leading-[18px]">By submitting my personal data I agree to receive marketing emails from PL8CHAT.</div>
                  </div>
                </div>
                {/* <button data-state="Default" data-type="Primary" className="w-36 h-12 px-5 py-3 bg-emerald-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-emerald-950 flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-white text-base font-medium leading-normal tracking-tight">Join waitlist</div>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}