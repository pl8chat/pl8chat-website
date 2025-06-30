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
    <div className="self-stretch flex flex-col justify-start items-center gap-14 py-20">
      <div className="self-stretch px-28 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch justify-start text-emerald-950 text-4xl font-medium leading-[48px]">Hear why everyone’s<br />loving PL8CHAT</div>
      </div>
      <div className="self-stretch px-28 pb-2.5 inline-flex justify-start items-center gap-6">
        {reviews.map((review, index) => {
          const bgColors = ['bg-[#D7EDE9]', 'bg-[#E8F4F0]', 'bg-[#DDEFF0]'];
          const bgColor = bgColors[index % bgColors.length];

          return (
            <div
              key={index}
              className={`self-stretch h-64 px-6 pt-10 pb-5 ${bgColor} rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] inline-flex flex-col justify-start items-start`}
            >
              <div className="self-stretch flex-1 justify-start text-gray-900 text-[22px] font-normal leading-[26px]">
                {review.review}
              </div>
              <div className="justify-start text-gray-900 text-[22px] font-semibold leading-loose">
                {review.name}
              </div>
              <div className="justify-start text-gray-900 text-base font-normal leading-loose">
                {review.location}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}