'use client'
import React, { useState, useRef } from 'react'

const isValidEmail = (email: string): boolean => {
  // This regex checks for most common email patterns.
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export default function MailingListSubForm() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState<string>('')
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting')

    setEmail(email.trim())
    // try {
    //   // const res = await fetch('/api/mailingList/subscribe', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify({
    //   //     firstName,
    //   //     lastName,
    //   //     email,
    //   //   })
    //   // });

    //   if (res.ok) {
    //     console.log("Request was successful");
    //     const data = await res.json(); // If the server returns JSON data
    //     console.log(data);
    //     setSuccess(true); // Assuming you want to set success to true on a successful request
    //   } else {
    //     console.error("Error with request:", res.status, res.statusText);
    //     setSuccess(false); // Assuming you want to set success to false on an unsuccessful request
    //   }
    // } catch (error) {
    //   console.error("There was an error with the fetch:", error);
    //   setSuccess(false); // Assuming you want to set success to false if there's an error with the fetch
    // }
  }

  return (
    <form ref={form} onSubmit={handleFormSubmit} className=' bg-white p-3 lg:p-10 rounded-md' noValidate>
      <div className=" xl:mt-0 relative">
        <h3 className="text-lg font-semibold leading-6 text-black">Join our mailing list</h3>
        <p className="mt-2 text-lg leading-6 text-gray-600">
          Stay up to date on our product launch and other important news
        </p>
        <div className="mt-6 sm:flex sm:max-w-md">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(e) => {{
              setEmail(e.target.value)
              if (email.length > 0) {
                setEmailTouched(true);
              }
            }}}
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
        {/* Move the error message outside the label */}
        {emailTouched && !isValidEmail(email) && (
          <span className="text-red-500 text-xs mt-1 absolute">Invalid email</span>
        )}
      </div>
      <div className='text-gray-600 pt-5 mt-7 text-[8.5px] md:text-[11px] w-full'>
        By clicking subscribe you agree to receive marketing emails from PL8CHAT
      </div>
    </form>
    
  )
}