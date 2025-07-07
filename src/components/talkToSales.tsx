'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { Button } from "./ui/button"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import TalkToSalesEmailSVG from './svgs/talkToSalesEmail';
import TalkToSalesPhoneSVG from './svgs/talkToSalesPhone';
import { useModal } from './modalContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

interface TalkToSalesPoints {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const points: TalkToSalesPoints[] = [
  { icon: TalkToSalesPhoneSVG, text: '+1 (424) PL8-CHAT' },
  { icon: TalkToSalesEmailSVG, text: 'sales@pl8chat.com' },
];

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export default function TalkToSales() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    message: ''
  });
  const [emailTouched, setEmailTouched] = useState<boolean>(false); // State for email input touch
  const [validEmail, setValidEmail] = useState<boolean>(true); // State for email validation
  const [errors, setErrors] = useState<{ fullName?: string; workEmail?: string; }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);  // State for submission status
  const form = useRef<HTMLFormElement>(null);
  const buttonClickedRef = useRef(false);
  const { close } = useModal();

  const handleBlur = () => {
    if (buttonClickedRef.current) {
      buttonClickedRef.current = false;
      return;
    }

    setEmailTouched(true);

    if (!isValidEmail(formData.workEmail)) {
      setValidEmail(false);
      setErrors((prev) => ({
        ...prev,
        workEmail: 'Enter a valid email address',
      }));
    } else {
      setValidEmail(true);
      setErrors((prev) => ({
        ...prev,
        workEmail: undefined,
      }));
    }
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

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.workEmail.trim()) newErrors.workEmail = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate();
    const isEmailFormatValid = isValidEmail(formData.workEmail);

    if (!isValid || !isEmailFormatValid) {
      if (!isEmailFormatValid) {
        setErrors((prev) => ({
          ...prev,
          workEmail: 'Enter a valid email address',
        }));
      }
      return;
    }

    if (!isValidEmail(formData.workEmail)) {
      setValidEmail(false);
      setEmailTouched(false);
      console.log("Invalid email, form not sent.");
      return;
    }

    // Sends email to Michael
    // if (form.current !== null) {
    //   emailjs.sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
    //     .then((result) => {
    //       console.log(result.text);
    //       setIsSubmitted(true);
    //       setFormData({
    //         fullName: '',
    //         workEmail: '',
    //         message: '',
    //       });
    //       setEmailTouched(false);
    //       setValidEmail(true);
    //       setErrors({});
    //     })
    //     .catch((error) => {
    //       console.log("Error sending the form:", error.text);
    //     });
    // } else {
    //   console.error("Form reference is null.");
    // }
  };

  return (
    <div className="w-full h-auto md:h-[778px] pt-4 md:p-[140px] bg-white rounded-[25px] flex flex-col md:flex-row justify-start items-start gap-[10px] md:gap-28 overflow-hidden">
      <button
        onClick={close}
        className="sm:hidden absolute top-2.5 right-2.5 z-10 p-2 rounded-md text-gray-700 hover:text-black focus:outline-none focus:ring-none"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <div className="md:flex-1 inline-flex flex-col justify-start items-start gap-3 md:gap-6">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div className="self-stretch text-center md:text-start justify-center text-gray-900 text-2xl md:text-4xl font-medium leading-[60px]">Talk to sales </div>
          <div className="self-stretch justify-start text-gray-900 text-xs md:text-sm font-normal leading-5">Speak to a member of our sales team by reaching out to us directly or filling out the contact form.</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-[10px] md:gap-4">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="inline-flex justify-start items-center gap-5">
                  <Icon className="w-4 h-4 text-gray-600" />
                  <div className="w-36 justify-start text-gray-600 text-xs md:text-[15px] font-normal leading-tight">
                    {point.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={handleFormSubmit}>
        <div>

        </div>
        <div className="w-[316px] md:w-[479px] min-h-[497px] px-10 py-8 bg-[#E8F4F0] rounded-[25px] inline-flex flex-col justify-start items-center gap-4">
          <div className="md:w-[400px] flex-1 flex flex-col justify-start items-start gap-1">
            <div className="w-[284px] md:w-auto flex flex-col justify-start items-start gap-2.5">
              <Input
                variant={errors.fullName ? 'errorState' : 'talkToSales'}
                name='fullName'
                placeholder='Full name*'
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                error={errors.fullName}
                className=''
              />
              <Input
                variant={(errors.workEmail || (emailTouched && !validEmail)) ? 'errorState' : 'talkToSales'}
                name='workEmail'
                placeholder='Work email*'
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                error={errors.workEmail}
                onBlur={handleBlur}
              />
              <Textarea
                variant='talkToSales'
                name='message'
                placeholder='Type message here...'
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>
          <div className='w-[284px] md:w-[400px] flex justify-center'>
            <Button type='submit' variant='talkToSales' className={`w-full`}>
              <div className="justify-start text-white text-sm font-medium leading-normal">Submit</div>
            </Button>
          </div>
          {/* <div className="w-96 px-36 py-3.5 bg-emerald-900 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-2.5">
            <div className="w-24 h-4 text-center justify-center text-white text-sm font-medium leading-tight">Submit</div>
          </div> */}
          <div className="w-[284px] md:w-[400px] justify-start leading-[18px] text-xs"><span className="text-gray-900 font-normal leading-none">By submitting my data, I consent to PL8CHAT collecting, processing and storing my information in accordance with our</span><span className="text-emerald-900 font-normal leading-none"> </span><Link href={'https://www.pl8chat.com/privacy'} className="text-emerald-900 font-normal underline leading-none">Privacy Policy</Link><span className="text-emerald-900 font-normal underline leading-none">. </span></div>
        </div>
      </form>
    </div>
  )
}