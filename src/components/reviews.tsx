'use client'
import { usePathname } from 'next/navigation'

interface Reviews {
  name: string
  location: string
  review: string
}

const reviews: Reviews[] = [
  {
    name: 'Marco P',
    location: 'Brooklyn, New York',
    review: '“I got a message my tire was low. I had no idea. It might’ve saved me from a blowout or an accident!"',
  },
  {
    name: 'Ben G',
    location: 'Los Angeles, California',
    review: '“Someone messaged me saying my lights were on. If not for PL8CHAT, my battery would’ve died.”',
  },
  {
    name: 'Mona M',
    location: 'Los Angeles, California',
    review: '“PL8CHAT is so much faster and easier than leaving a note on someone’s windshield.”',
  }
]


const businessReviews: Reviews[] = [
  {
    name: 'Tyler W',
    location: 'Property Manager, Los Angeles',
    review: '“I love that my residents can help each other out with simple messages like ‘your tire’s low’ or ‘your lights are on.’”',
  },
  {
    name: 'Mike R',
    location: 'Business owner, Orange County',
    review: '“I can’t believe this didn’t exist until now. It’s such a simple but smart idea. Every business needs PL8CHAT!”',
  },
  {
    name: 'Mona M',
    location: 'Aapartment resident, Orange County',
    review: '“PL8CHAT is so much faster and easier than leaving a note on someone’s windshield.”',
  }
]

export default function Reviews() {
  const pathname = usePathname()
  const isBusinessPage = pathname === '/business'
  const reviewsToDisplay = isBusinessPage ? businessReviews : reviews

  return (
    <div className="max-w-[1440px] mx-auto self-stretch flex flex-col justify-start items-center md:gap-[60px] pb-10 md:py-[60px]">
      <div className="self-stretch md:px-28 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch justify-start pt-10 md:pt-0 pl-[34px] md:pl-0 pr-[24px] pb-[30px] md:pb-0 text-[#002823] text-[24px] md:text-[60px] font-medium leading-[34px] md:leading-[48px]">
          {isBusinessPage ?
            <div>
              Hear why businesses<br />love PL8CHAT
            </div> : <div>
              What drivers are<br />saying
            </div>}
        </div>
      </div>
      <div className="w-full px-4 md:px-28 pb-2.5 flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6">
        {reviewsToDisplay.map((review, index) => {
          const bgColors = ['bg-[#D7EDE9]', 'bg-[#E8F4F0]', 'bg-[#DDEFF0]']
          const bgColor = bgColors[index % bgColors.length]

          const baseClasses = `w-full md:flex-1 h-56 md:h-64 px-6 pt-10 pb-5 ${bgColor} rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px]`
          const businessLayout = 'flex flex-col justify-between'
          const consumerLayout = 'inline-flex flex-col justify-start items-start'

          return (
            <div
              key={index}
              className={`${baseClasses} ${isBusinessPage ? businessLayout : consumerLayout}`}
            >
              <div className={`${isBusinessPage ? '' : 'self-stretch flex-1 justify-start'} font-normal leading-[26px] text-gray-900 text-lg md:text-[22px]`}>
                {review.review}
              </div>
              <div className={`${isBusinessPage ? '' : 'justify-start'}`}>
                <div className="text-gray-900 text-lg text-[22px] font-semibold leading-loose">
                  {review.name}
                </div>
                <div className="text-gray-900 text-sm md:text-base font-normal leading-loose">
                  {review.location}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}