import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import FreeAccountSVG from './svgs/freeAccount'
import SearchIconSVG from './svgs/searchIcon'
import ChatIconSVG from './svgs/chatIcon'
import { FC } from 'react'

interface Feature {
  name: string
  description: string
  href: string
  icon: FC<{ className?: string }>
}

const features: Feature[] = [
  {
    name: 'Create a free account',
    description:
      'Signing up is quick and easy. Every member verifies their identity and license plate to keep our community safe and trusted.',
    href: '#',
    icon: FreeAccountSVG,
  },
  {
    name: 'Search a license plate',
    description:
      'See a vehicle you want to reach? are Just type in the license plate info the and if they’re a member you can the view their profile and connect.',
    href: '#',
    icon: SearchIconSVG,
  },
  {
    name: 'Start "PL8chattting"',
    description:
      'Chat with the vehicle owner in real time to ask questions, offer help, and even prevent vehicle issues before they happen.',
    href: '#',
    icon: ChatIconSVG,
  },
]

const FeatureSection: FC = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className="self-stretch pt-20 pb-6 bg-emerald-50 inline-flex flex-col justify-start items-center gap-20 w-full">
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <div className="w-[813px] inline-flex justify-center items-start">
            <div className="inline-flex flex-col justify-start items-center gap-1">
              <div className="text-center justify-start text-emerald-950 text-4xl font-medium leading-[48px]">How to start connecting on PL8CHAT</div>
            </div>
            <div className="text-center justify-start text-emerald-950 text-4xl font-medium leading-10">®</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-center items-start gap-16">
              <div className="flex flex-row gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="w-96 py-1 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-7">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <feature.icon/>
                      </div>
                      <div className="self-stretch h-5 justify-center text-gray-900 text-xl font-semibold leading-7">
                        {feature.name}
                      </div>
                    </div>
                    <div className="self-stretch justify-start text-gray-900 text-xl font-normal leading-7">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1392px] px-28 py-20 bg-white rounded-3xl inline-flex justify-start items-center">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="justify-start text-emerald-950 text-4xl font-medium leading-[48px]">Search a license plate and <br />start connecting</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-10">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="self-stretch px-6 py-2.5 bg-gray-100 rounded-tl-3xl rounded-bl-3xl inline-flex justify-start items-start gap-2">
                  <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start">
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="justify-start"><span className="text-neutral-700 text-xl font-bold leading-loose tracking-tight">Quick </span><span className="text-gray-900 text-xl font-bold leading-loose tracking-tight">alerts</span></div>
                      <div className="w-5 h-4 outline outline-2 outline-offset-[-1px] outline-gray-900" />
                    </div>
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-gray-900 text-xl font-normal leading-loose tracking-tight">Tap to send a vehicle alert and help other drivers fast <br />without having to type a message.</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-28 px-6 py-2.5 rounded-3xl inline-flex justify-start items-start gap-2">
                  <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start">
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="justify-start text-gray-900 text-xl font-bold leading-loose">Chat convos</div>
                      <div className="w-5 h-4 outline outline-2 outline-offset-[-1px] outline-gray-900" />
                    </div>
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-gray-900 text-xl font-normal leading-loose tracking-tight">Chat with other drivers, share photos, and help make <br />parking and driving safer than ever.</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-6 py-2.5 rounded-3xl inline-flex justify-start items-start gap-2">
                  <div className="flex-1 inline-flex flex-col justify-center items-start">
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="justify-start text-gray-900 text-xl font-bold leading-loose tracking-tight">Emergency calls</div>
                      <div className="w-5 h-5 outline outline-2 outline-offset-[-1px] outline-gray-900" />
                    </div>
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-gray-900 text-xl font-normal leading-loose tracking-tight">Call the driver in emergencies when seconds matter, <br />like if their vehicle is about to be towed.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-5">
                <div className="w-36 h-11 bg-black" />
                <div className="w-36 h-11 bg-neutral-400" />
                <div className="w-5 h-7 bg-white" />
                <div className="w-3 h-4 bg-white" />
                <div className="w-2.5 h-4 bg-white" />
                <div className="w-2.5 h-4 bg-white" />
                <div className="w-2 h-4 bg-white" />
                <div className="w-1.5 h-3.5 bg-white" />
                <div className="w-2.5 h-3 bg-white" />
                <div className="w-1.5 h-3 bg-white" />
                <div className="w-2 h-3 bg-white" />
                <div className="w-1.5 h-2 bg-white" />
                <div className="w-[4.79px] h-1.5 bg-white" />
                <div className="w-2 h-1.5 bg-white" />
                <div className="w-1 h-1.5 bg-white" />
                <div className="w-px h-2 bg-white" />
                <div className="w-[4.79px] h-1.5 bg-white" />
                <div className="w-1 h-1.5 bg-white" />
                <div className="w-1 h-2 bg-white" />
                <div className="w-[4.79px] h-1.5 bg-white" />
                <div className="w-1 h-1.5 bg-white" />
                <div className="w-[2.98px] h-1.5 bg-white" />
                <div className="w-1 h-2 bg-white" />
                <div className="w-1 h-1.5 bg-white" />
                <div className="w-36 h-11 bg-black" />
                <div className="w-36 h-11 bg-neutral-400" />
                <div className="w-1.5 h-2 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-1 h-1.5 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-1 h-1.5 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-[0.80px] h-1.5 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-1 h-1.5 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-1.5 h-2 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-[4.80px] h-1.5 bg-white outline outline-[0.10px] outline-offset-[-0.05px] outline-white" />
                <div className="w-20 h-5 bg-white" />
                <div className="w-3.5 h-7 bg-gradient-to-bl from-sky-500 via-sky-500 to-cyan-400" />
                <div className="w-2.5 h-2.5 bg-gradient-to-l from-yellow-400 via-yellow-500 to-amber-500" />
                <div className="w-4 h-3.5 bg-gradient-to-bl from-red-500 to-pink-700" />
                <div className="w-4 h-3.5 bg-gradient-to-br from-green-500 via-green-500 to-emerald-500" />
              </div>
            </div>
          </div>
          <div className="w-[508px] h-[675px] relative">
            <img className="w-[508px] h-[675px] left-0 top-0 absolute rounded-3xl" src="https://placehold.co/508x675" />
            <img className="w-64 h-[573px] left-[120px] top-[60px] absolute" src="https://placehold.co/265x573" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection;

