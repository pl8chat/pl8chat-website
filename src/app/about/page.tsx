'use client'

export default function About() {
  return (
    <div className="py-10 lg:py-20 lg:pb-80 bg-darkGreen h-full">
      <div className="text-center text-white">
        <div className="font-bold text-6xl">
          About Us
        </div>
        <div className="pt-10 text-3xl max-w-3xl mx-auto space-y-10">
          <div>
            PL8CHAT is technology company transforming license
            plates into a universal line of vehicle communication.
          </div>
          <div>
            We believe through license plate innovation and simple
            human interactions we can create a safe, accountable &
            convenient vehicle life for everyone.
          </div>
        </div>
      </div>
    </div>
  )
}