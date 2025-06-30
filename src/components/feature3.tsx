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
    <div className="self-stretch pb-5 bg-white rounded-tl-3xl rounded-bl-3xl rounded-br-3xl inline-flex flex-col justify-start items-center">
      <Reviews />
      <div className="w-[1392px] rounded-3xl flex flex-col justify-start items-start">
        <div className="self-stretch py-20 bg-stone-200 rounded-3xl flex flex-col justify-start items-start gap-7">
          <div className="self-stretch flex flex-col justify-center items-center gap-14">
            <div className="self-stretch flex flex-col justify-start items-start gap-7">
              <div className="self-stretch text-center justify-start text-emerald-950 text-4xl font-medium leading-[48px]">PL8CHAT unites parking communities</div>
            </div>
            <div className="self-stretch px-24 inline-flex justify-start items-start gap-6">
              <div className="flex-1 h-[431px] px-12 pt-8 pb-12 bg-[#034B48] rounded-3xl inline-flex flex-col justify-start items-start gap-4">
                <div data-state="Default" data-type="Primary" className="w-44 h-8 px-4 py-3 bg-teal-700 rounded-[50px] inline-flex justify-center items-center overflow-hidden">
                  <div className="justify-start"><span className="text-neutral-100 text-xs font-bold leading-normal">PL8CHAT</span><span className="text-neutral-100 text-xs font-medium leading-normal"> for Parking</span></div>
                </div>
                <div className="text-center justify-start text-neutral-100 text-4xl font-medium leading-[48px]">Connect where you park</div>
                <div className="self-stretch flex-1 justify-start text-neutral-100 text-xl font-normal leading-[32px]">Did you know PL8CHAT works best when everyone parking in the same place uses it? Whether you live in an apartment or neighborhood, or park at school or work, ask your admin to join so everyone stays connected.</div>
                <div className="inline-flex justify-start items-center gap-4">
                  <div data-state="Default" data-type="Primary" className="w-36 h-11 px-4 py-3 bg-green-400 rounded-2xl flex justify-center items-center overflow-hidden">
                    <Link href={'#'} className="justify-start text-emerald-950 text-base font-semibold leading-normal">Learn more</Link>
                  </div>
                  <Link href={'#'} className="justify-start text-neutral-100 text-base font-medium leading-loose">Tell your admin</Link>
                </div>
              </div>
              <div className='relative w-[488px] h-[431px] rounded-3xl overflow-hidden'>
                <Image 
                  src={'/assets/images/parkedCars.png'}
                  fill
                  alt="Parked Cars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}