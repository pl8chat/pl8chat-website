'use client'
import React, { useState, useRef, useEffect } from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

const poppins = localFont({
  src: '../app/fonts/Poppins-Regular.ttf',
  variable: '--font-geist-sans',
  weight: '100 200 300 400 500 600 700 800 900',
})

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

const ShapeIconGreen = () => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5365 11.172C22.5365 17.3421 17.4915 22.344 11.2683 22.344H0V11.172C0 5.00187 5.04497 0 11.2683 0C17.4915 0 22.5365 5.00187 22.5365 11.172ZM16.2764 11.172C16.2764 13.9143 14.0342 16.1373 11.2682 16.1373H7.82517V22.344H6.26014V11.172C6.26014 8.42972 8.50235 6.20667 11.2682 6.20667C14.0342 6.20667 16.2764 8.42972 16.2764 11.172Z" fill="#034B48" />
    </svg>

  )
}

const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const templateID2 = process.env.NEXT_PUBLIC_TEMPLATE_ID2
const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

export default function MailingListSubForm() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState<string>('')
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);  // State for submission status

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailTouched(true);
      console.log("Invalid email, form not sent.");
      return;
    }

    // Sends email to Michael
    if (form.current !== null) {
      emailjs.sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          console.log('isSubmitted: '+isSubmitted)
          setEmailTouched(false);
        })
        .catch((error) => {
          console.log("Error sending the form:", error.text);
        });
    } else {
      console.error("Form reference is null.");
    }

    // Sends email to the person who subscribed
    // if (form.current !== null) {
    //   emailjs.sendForm(`${serviceID}`, `${templateID2}`, form.current, `${publicKey}`)
    //     .then((result) => {
    //       console.log(result.text);
    //       setEmailTouched(false);
    //       setIsSubmitted(true);  // Update submission status to true on success
    //     })
    //     .catch((error) => {
    //       console.log("Error sending the form:", error.text);
    //     });
    // } else {
    //   console.error("Form reference is null.");
    // }

    setEmail(email.trim());
  };

  // Reset form state on window close
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

  return (
    <div>
      {isSubmitted ? (
<<<<<<< HEAD
        <div className="md:w-[457px] h-[162px] md:h-[197px] bg-white rounded-lg shadow flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-[54.34px] p-4 flex justify-center items-center">
            <div className="self-stretch flex justify-between items-center w-full">
              <div className="w-[22.54px] h-[22.34px] relative">
                <ShapeIconGreen />
              </div>
              <div className="text-center text-gray-900 text-sm font-semibold leading-tight">
                Thanks for subscribing!
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 relative">
                  <div className="w-5 h-5"></div>
                </div>
=======
        <div className="text-center p-5 lg:p-10 bg-white rounded-md">
          <h3 className="text-lg font-semibold leading-6 text-black">Thank you for subscribing!</h3>
          <p className="mt-2 text-lg leading-6 text-gray-600">
            We’ve added you to our mailing list. Stay tuned for updates and news.
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={handleFormSubmit} className='bg-white p-5 py-6 lg:p-5 lg:pb-14 rounded-md' noValidate>
          <div className="xl:mt-0 relative">
            <h3 className="text-xl font-semibold leading-6 text-black py-1">Join our mailing list</h3>
            <p className="mt-2 text-lg leading-6 text-gray-600">
              Stay up to date on our product launch and other important news
            </p>
            <div className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (email.length > 0) {
                    setEmailTouched(true);
                  }
                }}
                onBlur={() => setEmailTouched(true)}
                className={`w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:w-64 sm:text-sm sm:leading-6 xl:w-full ${emailTouched && !isValidEmail(email) ? 'ring-2 ring-red-500 focus:ring-red-500' : ''}`}
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-darkGreen px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkerGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
>>>>>>> 60691525586902505247a9e055ce610360e14092
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="self-stretch h-px bg-gray-200"></div>
          <div className="self-stretch p-4 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch flex-col justify-center items-center gap-3 flex">
                <div className="self-stretch md:h-10 flex-col justify-start items-center gap-2 flex">
                  <div className="md:hidden self-stretch text-gray-900 text-sm font-normal leading-tight">You’ve been successfully added to our mailing list and will be hearing from us soon.</div>
                  <div className="hidden md:block self-stretch text-gray-900 text-sm font-normal leading-tight">You’ve been successfully added to our mailing list and <br />will be hearing from us soon.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form ref={form} onSubmit={handleFormSubmit} action="/submit" className={`md:w-[457px] md:h-[261.34px] bg-white rounded-lg shadow flex-col justify-start items-start inline-flex`} noValidate>
          <div className="self-stretch h-[54.34px] p-4 flex justify-center items-center">
            <div className="self-stretch flex justify-between items-center w-full">
              <div className="w-[22.54px] h-[22.34px] relative">
                <ShapeIconGreen />
              </div>
              <div className="text-center text-gray-900 text-sm font-semibold leading-tight">
                Stay connected
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 relative">
                  <div className="w-5 h-5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-gray-200"></div>
          <div className="self-stretch md:h-[206px] p-4 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch md:h-[174px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch md:h-[110px] flex-col justify-center items-center gap-3 flex">
                <div className="self-stretch h-[60px] flex-col justify-start items-center gap-2 flex">
                  <div className="w-[292px] md:w-auto self-stretch text-gray-900 text-sm font-normal leading-tight h-[60px]">Join our mailing list to stay up to date on important news and product updates.<br /></div>
                </div>
                <div className="self-stretch md:h-[38px] flex-col justify-start items-center gap-2 flex relative">
                  <div className="self-stretch justify-start items-center gap-3 inline-flex flex-col md:flex-row">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className={`h-[38px] w-full px-[13px] py-[9px] text-sm text-gray-500 bg-white rounded-md border  focus:outline-none focus:ring-0 focus:border-[#00695c] ${emailTouched && !isValidEmail(email)
                        ? 'border-red-500'
                        : 'border-gray-300'
                        }`}
                    />
                    <div className="mt-0 sm:mt-0 sm:flex-shrink-0 w-full md:w-auto" >
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md bg-[#034b48] px-[17px] py-[9px] text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Subscribe
                      </button>
                    </div>
                    
                  </div>
                  {emailTouched && !isValidEmail(email) && (
                    <span className="text-red-500 text-xs mt-1 absolute left-3.5 -bottom-5">Invalid email</span>
                  )}
                </div>
                
              </div>
              <div className="self-stretch text-center text-[#00695c] md:pt-4 text-[10px] font-normal leading-normal"><br />By clicking subscribe you agree to receive marketing emails from PL8CHAT</div>
            </div>
=======
          <div className='absolute bottom-5 left-8 lg:left-11 lg:bottom-8 text-gray-600 pt-5 mt-7 text-[8.5px] md:text-[11px] w-full'>
            By clicking subscribe you agree to receive marketing emails from PL8CHAT
>>>>>>> 60691525586902505247a9e055ce610360e14092
          </div>
        </form>
      )}
    </div>
  )
}
