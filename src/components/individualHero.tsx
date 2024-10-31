'use client'

export default function IndividualHero() {
  return (
    <div>
      <div className={`bg-darkGreen pl-5 pt-10 lg:pt-28 lg:pl-10`}>
        <div className="pb-16 pt-32 sm:pb-32 sm:pt-24 md:pb-12 md:pt-36 text-tGreen">
          <h1 className={`font-display text-balance font-medium tracking-tight text-tGreen text-6xl xs: sm:text-[7.5rem] max-w-[10ch] sm:max-w-none`}>
            Your car has a username. Use it.
          </h1>
          <h2 className="mt-8 max-w-[37ch] text-lg/7 font-medium sm:text-3xl/8">
            PL8CHAT is a new line of communication connecting
            vehicles and parking communities.
          </h2>
          <div
            className="mt-9 lg:mt-11 inline-block"
          >
            BUTTON
          </div>
        </div>
      </div>
    </div>
  )
}