'use client'
import { useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'
import HeroText from './svgs/HeroTextLogo';
import HeroTextMobile from './svgs/HeroTextLogoMobile';
import { Input } from './ui/input';
import MailingListModal from './mailingListModal'
import { TopPaddingLayout } from './layouts/topPaddingLayout';
import emailjs from '@emailjs/browser'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

const templateID = process.env.templateID
const serviceID = process.env.serviceID
const publicKey = process.env.publicKey

export default function Hero() {
  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false); // State for modal open/close
  const [email, setEmail] = useState<string>('') // State for email input
  const [emailTouched, setEmailTouched] = useState<boolean>(false); // State for email input touch
  const [validEmail, setValidEmail] = useState<boolean>(true); // State for email validation
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);  // State for submission status
  const buttonClickedRef = useRef(false);

  const handleBlur = () => {
    if (buttonClickedRef.current) {
      // Reset and skip blur logic
      buttonClickedRef.current = false;
      return;
    }
    setEmailTouched(true); 
  };

  const handleButtonMouseDown = () => {
    buttonClickedRef.current = true;
  };


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
          setEmailTouched(false);
          setEmail('');
          setModalOpen(true);
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
      <div className='flex flex-col items-center justify-center h-[100vh] w-full bg-[#E8F4F0] z-30 px-4'>
        <div className='flex-col justify-center items-center'>
          <div className='flex justify-center'>
            <div className='hidden md:flex'>
              <HeroText />
            </div>
            <div className='md:hidden'>
              <HeroTextMobile />
            </div>
          </div>
          {/* <div className="pl-[5px] inline-flex flex-col justify-center items-center gap-[50px] pt-[50px] md:pt-[72px]">
            <div className="w-[350px] md:w-[905px] text-center justify-center text-[#002823] text-[37px] md:text-[50px] font-medium leading-[34px] md:leading-[60px]">We’re a new kind of auto club. Built on<br />communication and community. </div>
            <form ref={form} onSubmit={handleFormSubmit} noValidate className='md:-translate-x-5'>
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
                        onBlur={handleBlur}
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
                    <button onMouseDown={handleButtonMouseDown} data-state="Default" data-type="Primary" className="w-full md:w-[150px] h-12 px-5 py-3 bg-emerald-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-emerald-950 flex justify-center items-center overflow-hidden">
                      <div className="justify-start text-white text-base font-medium leading-normal tracking-tight">Join waitlist</div>
                    </button>
                  </div>
                  <div className='relative w-full'>
                    <div className={`hidden text-xs ${emailTouched && validEmail ? 'md:flex flex-col' : ''} ${!validEmail ? 'md:flex flex-col' : ''} absolute`}>
                      {emailTouched && validEmail && (
                        <div className='text-red-500'>
                          This field is required
                        </div>
                      )}{!validEmail && (
                        <div className='text-red-500'>
                          A valid email is required
                        </div>
                      )}
                    </div>
                    <div className='relative'>
                      <div className={`inline-flex justify-start items-center gap-2.5 overflow-hidden absolute ${emailTouched && validEmail ? 'top-5' : ''} ${!validEmail ? 'top-5' : ''}`}>
                        <div className="md:w-[370px] flex-1 justify-start text-emerald-950 text-[11px] md:text-xs font-normal leading-[15px] md:leading-[18px]">By submitting my personal data I agree to receive marketing emails from PL8CHAT.</div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </form>
          </div> */}
          <div className='text-2xl md:text-[36px] font-regular text-black text-center pt-5'>
            coming soon
          </div>
        </div>
      </div>
      <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}