'use client'

export default function Hero() {
  return (
    <div className="bg-darkGreen pl-5 lg:pl-10 pt-10 lg:pt-20">
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 text-white">
        <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
          Smart and <br /> Social Parking
        </h1>
        <p className="mt-8 max-w-lg text-xl/7 font-medium sm:text-2xl/8">
          PL8CHAT transforms parking environments into safe and connected vehicle communities
        </p>
        <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
          <button className="text-black bg-white p-4 text-xl rounded-md">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  )
}