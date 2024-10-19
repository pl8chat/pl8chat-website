'use client'
import React, { useState, useRef } from 'react'

const isValidEmail = (email: string): boolean => {
  // This regex checks for most common email patterns.
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

type MailingListSubFormProps = {
  switchToUnsub: () => void;
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
    <form ref={form} onSubmit={handleFormSubmit} className=' bg-white p-3 lg:p-10 rounded-md'>
      <div className=" xl:mt-0">
        <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <form className="mt-6 sm:flex sm:max-w-md">
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
            className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
          />
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </form>
  )
}