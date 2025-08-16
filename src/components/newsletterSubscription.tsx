'use client';

import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export default function NewsletterSubscription() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterTouched, setNewsletterTouched] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterTouched(true);

    if (!newsletterEmail.trim()) {
      setNewsletterError('Email is required');
      return;
    }

    if (!isValidEmail(newsletterEmail)) {
      setNewsletterError('Invalid email format');
      return;
    }

    if (form.current !== null) {
      emailjs.sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setNewsletterError('');
          setNewsletterEmail('');
          setNewsletterTouched(false);
        })
        .catch((error) => {
          console.log("Error sending the form:", error.text);
        });
    } else {
      console.error("Form reference is null.");
    }
  };


  return (
    <form ref={form} onSubmit={handleNewsletterSubmit} className="w-full max-w-[413px]">
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <Input
          variant={!isValidEmail(newsletterEmail) && newsletterTouched ? 'errorState' : 'newsletter'}
          className="flex-1 min-w-[280px] max-w-[380px]"
          placeholder='Email address*'
          value={newsletterEmail}
          name='email'
          onChange={(e) => setNewsletterEmail(e.target.value)}
          onBlur={() => {
            setNewsletterTouched(true);
            if (!newsletterEmail.trim()) {
              setNewsletterError('Email is required');
            } else if (!isValidEmail(newsletterEmail)) {
              setNewsletterError('Invalid email format');
            } else {
              setNewsletterError('');
            }
          }}
          error={newsletterTouched && !isValidEmail(newsletterEmail) ? newsletterError : undefined}
        />
        {isSubmitted ? (
          <Button
            type="button"
            variant="newsLetterSuccess"
          >
            <div className="justify-start text-white text-sm font-medium leading-normal">
              Success
            </div>
          </Button>
        ) : (
          <Button
            type="submit"
            variant="newsLetter"
          >
            <div className="justify-start text-white text-sm font-medium leading-normal">
              Subscribe
            </div>
          </Button>
        )}
      </div>
      <div className="self-stretch py-2.5 inline-flex justify-start items-center gap-2.5">
        <div className="text-emerald-950 text-xs font-normal leading-[18px]">
          By submitting my personal data I agree to receive marketing emails <br className='hidden md:flex' /> from PL8CHAT.
        </div>
      </div>
    </form>
  );
}
