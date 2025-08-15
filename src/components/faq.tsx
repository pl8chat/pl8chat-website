'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import PlusIconSVG from '@/svgs/plusIcon.svg'
import MinusIconSVG from '@/svgs/minusIcon.svg'

const faqs = [
  {
    id: 1,
    question: 'Is PL8CHAT safe?',
    answer: `Yes. We take your safety seriously. All users must verify their identity, and license plates are confirmed to match registered vehicles. You always control your visibility and privacy. PL8CHAT was built to promote help and kindness. Any misuse is not tolerated.`,
  },
  {
    id: 2,
    question: 'What if someone says something rude or inappropriate?',
    answer: `We are a zero tolerance environment for unwanted communication. You can report anyone quickly, and those who misuse the app are suspended or banned. PL8CHAT is meant to help drivers, not harass them, and we’re constantly building tools to support that.`,
  },
  {
    id: 3,
    question: 'If my license plate is on PL8CHAT, is my info public?',
    answer: `No. PL8CHAT never shares your personal or private information. Only your license plate (if you’ve added a vehicle) and optional display name are visible on the app. No one can use your plate to find out who you are or access private information.`,
  },
  {
    id: 4,
    question: 'Can I use PL8CHAT if I don’t have a car?',
    answer: `Yes. You can sign up now and add a vehicle later. Many users join to help others or stay connected. You can still send alerts, messages, and support the community even without adding your own car right away.`,
  },
  {
    id: 5,
    question: 'Can I use PL8CHAT without people messaging me?',
    answer: `You’re in control. You can turn off private messages and only allow quick alerts. PL8CHAT is designed for helpful, purposeful connections, and we’ll keep adding meaningful features to give you the best experience.`,
  },
  // More questions...
]

const faqBusiness = [
  {
    id: 1,
    question: 'Is my business searchable on PL8CHAT?',
    answer: `Yes. When you sign up, your business name and address both become searchable, allowing drivers to find your location and contact you directly if needed.`,
  },
  {
    id: 2,
    question: 'Can I manage multiple locations in one account?',
    answer: `Yes. PL8CHAT offers a multi-location product for businesses with multiple sites. You can manage all locations under a single account, with separate profiles for each address. Just head to our Plans page to sign up for the multi-location option and get started.`,
  },
  {
    id: 3,
    question: 'Does PL8CHAT make my parking community safer?',
    answer: `Absolutely. License plate connectivity creates a safer, more accountable environment for your parking customers and your business. It encourages better behavior, promotes responsibility, and our PL8CHAT placards help deter issues like vandalism or misuse.`,
  },
  {
    id: 4,
    question: 'Is it easy to set up a PL8CHAT for my business?',
    answer: `Yes. PL8CHAT is fully software-based with no equipment required. You can sign up on your own in minutes by adding your business name and address and verifying your email.`,
  },
  {
    id: 5,
    question: 'How do I introduce PL8CHAT to my parking customers?',
    answer: `We make it simple. You’ll get message templates to email your parkers, plus placards with a QR code so anyone who parks can easily learn about PL8CHAT and join.`,
  },
  // More questions...
]

export default function FAQ({ }) {
  const [openIds, setOpenIds] = useState<number[]>([1]);
  const pathname = usePathname();

  const handleAccordion = (id: number) => {
    setOpenIds((prevOpenIds) => {
      if (prevOpenIds.includes(id)) {
        // If the ID is already in the array, remove it
        return prevOpenIds.filter(openId => openId !== id);
      } else {
        // Otherwise, add the ID to the array
        return [...prevOpenIds, id];
      }
    });
  };

  return (
    <div className="jself-stretch px-[34px] md:px-[114px] py-10 md:py-20 bg-[#034B48] inline-flex flex-col justify-start items-center gap-5 md:gap-20" id="faq">
      <div className="max-w-[1400px] self-stretch md:text-center justify-start text-neutral-100 text-[24px] md:text-[40px] font-medium leading-[34px] md:leading-[48px]">Frequently asked <br className='md:hidden' /> questions</div>
      <div className="self-stretch flex flex-col justify-start items-start">
        {(pathname === '/business' ? faqBusiness : faqs).map((faq, index, arr) => (
          <div
            key={faq.id}
            className={`w-full pt-6 flex flex-col gap-4 ${index < arr.length - 1 ? `${openIds.includes(faq.id) ? 'pb-4' : 'pb-2'} border-b border-gray-200` : ''
              }`}
          >
            <button onClick={() => handleAccordion(faq.id)} className="flex w-full items-center justify-between text-left text-gray-100">
              <span className="text-[18px] md:text-[28px] font-medium leading-7 ">{faq.question}</span>
              <span className="ml-4 flex h-7 items-center">
                {openIds.includes(faq.id) ? <MinusIconSVG /> : <PlusIconSVG />}
              </span>
            </button>
            <div className={`${openIds.includes(faq.id) ? 'accordionOpen accordion' : 'accordion'}`}>
              <div className="w-[290px] md:w-[990px] md:pr-[120px] text-gray-100 text-sm md:text-[22px] font-light leading-[24px] md:leading-[30px] tracking-[0.14px] md:tracking-[0.22px] accordionInner">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 