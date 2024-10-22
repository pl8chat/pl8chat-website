'use client'
import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

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
          setEmailTouched(false);
          setIsSubmitted(true);  // Update submission status to true on success
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
              </div>
            </div>
            {emailTouched && !isValidEmail(email) && (
              <span className="text-red-500 text-xs mt-1 absolute">Invalid email</span>
            )}
          </div>
          <div className='absolute bottom-5 left-8 lg:left-11 lg:bottom-8 text-gray-600 pt-5 mt-7 text-[8.5px] md:text-[11px] w-full'>
            By clicking subscribe you agree to receive marketing emails from PL8CHAT
          </div>
        </form>
      )}
    </div>
  )
}
