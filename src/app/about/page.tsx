'use client'

export default function About() {
  return (
    <div className="py-10 lg:py-20 lg:pb-80 bg-[#034b48] h-full">
      <div className={`text-center text-white`}>
        <div className={`font-bold text-6xl pt-24`}>
          About us
        </div>
        <div className="pt-10 px-4 lg:px-0 text-xl lg:text-3xl max-w-3xl mx-auto space-y-10 text-start">
          <div>
            PL8CHAT is technology company transforming license
            plates into the universal line of vehicle communication.
          </div>
          <div>
            We believe through license plate innovation and simple
            human interactions we can create a safe, accountable
            connected & convenient vehicle and parking life for all.
          </div>
        </div>
      </div>
    </div>
  )
}