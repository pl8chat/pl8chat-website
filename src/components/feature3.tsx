'use client'
import Link from 'next/link'
import Image from 'next/image'
import Reviews from './reviews'

interface ReviewPosts {
  name: string
  location: string
  review: string
}

const reviews: ReviewPosts[] = [
  {
    name: 'Ashley',
    location: 'Los Angeles',
    review: 'I love how the app lets me yell and harrass drivers and be rude insult them all the time! its great!!',
  },
  {
    name: 'Ashley',
    location: 'Los Angeles',
    review: 'I love how the app lets me yell and harrass drivers and be rude insult them all the time! its great!!',
  },
  {
    name: 'Ashley',
    location: 'Los Angeles',
    review: 'I love how the app lets me yell and harrass drivers and be rude insult them all the time! its great!!',
  }
]

export default function Feature3() {
  return (
    <div className="md:pb-5 bg-white rounded-tl-[25px] rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-start items-center">
      <Reviews />
      <div className="w-full max-w-[1400px] rounded-[25px] flex flex-col justify-start items-start">
        <div className="w-full overflow-x-hidden">
          <div className="pt-10 pb-4 md:py-20 bg-stone-200 md:rounded-3xl flex flex-col justify-start items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-14">
              <div className="self-stretch flex flex-col justify-start items-start gap-7">
                <div className="self-stretch text-center justify-start text-[#002823] text-[24px] md:text-[40px] font-medium leading-[34px] md:leading-[48px]">
                  PL8CHAT unites parking <span className="md:hidden"> <br /> </span> communities
                </div>
              </div>
              <div className="self-stretch md:px-24 flex flex-col md:flex-row justify-center items-start gap-2 md:gap-6 px-4">
                <div className="w-full max-w-[700px] h-[355px] md:h-[431px] px-4 md:px-12 py-8 md:pt-8 md:pb-12 bg-[#034B48] rounded-tl-[25px] rounded-tr-[25px] md:rounded-tr-[0px] md:rounded-bl-[25px] inline-flex flex-col justify-start items-start gap-[6px] md:gap-4">
                  <div data-state="Default" data-type="Primary" className="w-[117px] md:w-44 h-8 px-4 py-3 bg-[#1C7470] rounded-[50px] inline-flex justify-center items-center overflow-hidden">
                    <div className="flex justify-center items-center text-nowrap">
                      <span className="text-neutral-100 text-[9px] md:text-xs font-bold">PL8CHAT</span>&nbsp;<span className="text-neutral-100 text-[9px] md:text-xs font-medium leading-normal">for Parking</span>
                    </div>
                  </div>
                  <div className="text-center justify-start text-neutral-100 text-xl md:text-4xl font-medium leading-[48px]">
                    Connect where you park
                  </div>
                  <div className="self-stretch flex-1 justify-start text-neutral-100 text-sm md:text-[22px] font-normal leading-[26px] md:leading-[32px]">
                    Did you know PL8CHAT works best when everyone parking in the same place uses it? Whether you live in an apartment or neighborhood, or park at school or work, ask your admin to join so everyone stays connected.
                  </div>
                  <div className="inline-flex justify-start items-center gap-4 pt-2.5">
                    <div data-state="Default" data-type="Primary" className="w-[120px] md:w-[140px] h-[38px] md:h-11 px-4 py-3 bg-[#58FF89] hover:bg-[#38E06B] rounded-2xl flex justify-center items-center overflow-hidden">
                      <Link href={'/business'} className="justify-start text-[#002823] text-[14px] md:text-base font-semibold leading-normal">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-[488px] max-w-[488px] min-h-[268px] md:h-[431px] rounded-bl-[25px] rounded-br-[25px] md:rounded-tr-[25px]  md:rounded-br-[25px] md:rounded-bl-[0px] overflow-hidden">
                  <Image
                    src={'/assets/images/parkedCars.png'}
                    fill
                    alt="Parked Cars"
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}