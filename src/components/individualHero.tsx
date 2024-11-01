'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function IndividualHero() {
  return (
    <div className={`bg-tGreen pl-5 pt-10 lg:pt-0 lg:pl-10`}>
      <div className="pb-16 pt-32 sm:pb-32 sm:pt-24 md:pb-[1.65rem] md:pt-[136px] text-darkGreen">
        <h1 className={`font-display text-balance font-medium tracking-tight text-6xl sm:text-[7.5rem] max-w-[10ch]`}>
          Your car has a username. Use it.
        </h1>
        <h2 className="mt-8 max-w-[40ch] text-lg/7 font-medium sm:text-3xl/8">
          Now you can send & receive helpful messages
          and vehicle alerts through your license plate.
        </h2>
        <div
          className="mt-9 lg:mt-11 inline-block"
        >
          <div className='flex space-x-2 items-center scale-[.9] -translate-x-5'>
            <Link href="#">
              <Image
                src='/assets/images/AppleAppStoreButton.svg'
                height={50}
                width={200}
                alt='App Store Button'
                className=''
              />
            </Link>
            <Link href="#">
              <Image
                src='/assets/images/GooglePlayButton.png'
                height={90}
                width={225}
                alt='Google Play Button'
                className=''
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}