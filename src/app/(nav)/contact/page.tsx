import Link from 'next/link';

const contactInfo = [
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
  {
    title: 'Colaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345'
  },
]

interface ContactCardProps {
  title: string;
  email: string;
  phone: string;
}

const ContactCards: ContactCardProps[] = [
  {
    title: 'General inquiries',
    email: 'info@pl8chat.com',
    phone: '+1 (310) PL8 CHAT'
  },
  {
    title: 'Consumer support',
    email: 'help@pl8chat.com',
    phone: ''
  },
  {
    title: 'Business support',
    email: 'info@pl8chat.com',
    phone: '+1 (424) PL8 CHAT'
  },
];

export default function Contact() {
  return (
    <div className="self-stretch pt-[44px] w-full h-[882px] bg-white inline-flex flex-col justify-center items-center gap-20 overflow-hidden">
      <div className="flex flex-col justify-start items-center gap-6">
        <div className="w-[1700px] h-14 text-center justify-center text-gray-900 text-5xl font-semibold leading-[60px]">Contact us</div>
        <div className="w-[700px] justify-start text-gray-900 text-xl font-medium leading-tight">Questions? Comments? Something else? We’d love to hear from you.</div>
      </div>
      <div className="h-[596px] flex flex-col justify-start items-center gap-5">
        <div className="flex flex-wrap gap-6">
          {ContactCards.map((card, index) => (
            <div key={index} className="w-full md:w-[calc(50%-12px)] h-[185px] bg-emerald-50 rounded-3xl p-6 flex flex-col justify-between">
              <div className='flex flex-col gap-3'>
                <div className="text-gray-900 text-xl font-semibold">{card.title}</div>
                <div>
                  <div className="text-emerald-900 text-base font-semibold">
                    {card.email}
                  </div>
                  {card.phone && (
                    <div className="text-gray-900 text-sm font-normal">
                      {card.phone}
                    </div>
                  )}
                </div>
              </div>
              <div>


              </div>
            </div>
          ))}
        </div>
        <div className="w-[1012px] flex-1 inline-flex justify-start items-center gap-5">
          <div className="w-[496px] self-stretch p-10 bg-emerald-50 rounded-3xl inline-flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-7 justify-center text-gray-900 text-xl font-semibold leading-7">Talk to sales</div>
              <div className="self-stretch justify-center text-gray-900 text-base font-normal leading-normal">Have a parking community you want to connect?</div>
            </div>
            <div data-state="Default" data-type="Primary" className="w-36 h-11 px-4 py-3 bg-emerald-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center overflow-hidden">
              <div className="justify-start text-white text-sm font-medium leading-normal">Contact sales</div>
            </div>
          </div>
        </div>
        <div className="w-[1027px] flex-1 p-10 bg-gray-100 rounded-3xl inline-flex justify-start items-start gap-12">
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="w-96 h-7 justify-center text-gray-900 text-xl font-semibold leading-7">Join our newsletter</div>
            <div className="w-96 justify-start text-gray-900 text-base font-normal leading-normal">Subscribe to receive news, product update<br />s and much more.</div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="inline-flex justify-start items-start gap-2">
              <div className="w-72 inline-flex flex-col justify-start items-start">
                <div className="self-stretch h-11 px-5 py-2 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2 overflow-hidden">
                  <div className="flex-1 justify-start text-gray-500 text-sm font-normal leading-tight">Email address*</div>
                </div>
              </div>
              <div data-state="Default" data-type="Primary" className="w-36 h-11 px-4 py-3 bg-emerald-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center overflow-hidden">
                <div className="justify-start text-white text-sm font-medium leading-normal">Subscribe</div>
              </div>
            </div>
            <div className="self-stretch py-2.5 inline-flex justify-start items-center gap-2.5">
              <div className="w-96 justify-start text-emerald-950 text-xs font-normal leading-none">By submitting my personal data I agree to receive marketing emails from PL8CHAT.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}