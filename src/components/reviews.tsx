interface Reviews {
  name: string
  location: string
  review: string
}

const reviews: Reviews[] = [
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

export default function Reviews() {
  return (
    <div className="self-stretch flex flex-col justify-start items-center md:gap-14 pb-10 md:py-20">
      <div className="self-stretch md:px-28 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch justify-start pt-10 pl-[34px] pr-[24px] pb-[30px] text-[#002823] text-[24px] md:text-[40px] font-medium leading-[34px] md:leading-[48px]">Hear why everyone’s<br />loving PL8CHAT</div>
      </div>
      <div className="self-stretch px-4 md:px-28 pb-2.5 flex flex-col md:flex-row justify-start items-center gap-6">
        {reviews.map((review, index) => {
          const bgColors = ['bg-[#D7EDE9]', 'bg-[#E8F4F0]', 'bg-[#DDEFF0]'];
          const bgColor = bgColors[index % bgColors.length];

          return (
            <div
              key={index}
              className={`self-stretch h-56 md:h-64 px-6 pt-10 pb-5 ${bgColor} rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] inline-flex flex-col justify-start items-start`}
            >
              <div className="self-stretch flex-1 justify-start text-gray-900 text-lg md:text-[22px] font-normal leading-[26px]">
                {review.review}
              </div>
              <div className="justify-start text-gray-900 text-lg text-[22px] font-semibold leading-loose">
                {review.name}
              </div>
              <div className="justify-start text-gray-900 text-sm md:text-base font-normal leading-loose">
                {review.location}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}