export default function About() {
  return (
    <div className="py-10 pb-[4.75rem] lg:py-20 lg:pb-[24.5rem] bg-darkGreen h-full">
      <div className={`text-center text-white`}>
        <div className={`font-bold text-6xl pt-32 pb-2`}>
          About us
        </div>
        <div className="pt-10 px-4 pb-28 lg:px-0 text-lg/7 md:text-3xl max-w-[44ch] mx-auto space-y-10 text-start test">
          <div>
            PL8CHAT is a technology company transforming license
            plates into the universal line of vehicle communication.
          </div>
          <div>
            We believe through license plate innovation and simple
            human interactions we can create a safe, accountable,
            connected & convenient parking and driving life for all.
          </div>
        </div>
      </div>
    </div>
  )
}