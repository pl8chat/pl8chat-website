'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import PlusIconSVG from '@/svgs/plusIcon.svg'
import MinusIconSVG from '@/svgs/minusIcon.svg'

const faqs = [
  {
    id: 1,
    question: 'Is PL8CHAT safe?',
    answer: `Yes. We take your safety seriously. All users must verify their identity, and license plates are confirmed to match registered vehicles. `,
  },
  {
    id: 2,
    question: 'Is PL8CHAT safe?',
    answer: `Yes. We take your safety seriously. All users must verify their identity, and license plates are confirmed to match registered vehicles. `,
  },
  {
    id: 3,
    question: 'Is PL8CHAT safe?',
    answer: `Yes. We take your safety seriously. All users must verify their identity, and license plates are confirmed to match registered vehicles. `,
  },
  {
    id: 4,
    question: 'Is PL8CHAT safe?',
    answer: `Yes. We take your safety seriously. All users must verify their identity, and license plates are confirmed to match registered vehicles. `,
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
  const [openIds, setOpenIds] = useState<number[]>([]);
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
    <div className="self-stretch px-[34px] md:px-[114px] py-10 md:py-20 bg-white inline-flex flex-col justify-start items-center gap-0 md:gap-20" id="faq">
      <div className="self-stretch md:text-center justify-start text-[#002823] text-[40px] md:text-[60px] font-medium leading-[40px] md:leading-[48px]">Frequently asked <br className='md:hidden' /> questions</div>
      <div className="max-w-[966px] w-full md:mx-auto self-stretch flex flex-col justify-start items-start md:items-center">
        {(pathname === '/business' ? faqBusiness : faqs).map((faq, index, arr) => (
          <div
            key={faq.id}
            className={`w-full ${index == 0 ? 'pt-[20px]' : 'pt-[10px]'} pt-6 flex flex-col gap-2 md:gap-4 ${index < arr.length - 1 ? `${openIds.includes(faq.id) ? 'pb-4' : 'pb-[2px]'} border-b border-[#002823]` : ''
              }`}
          >
            <button onClick={() => handleAccordion(faq.id)} className="flex w-full items-center justify-between text-left text-[#002823]">
              <span className="text-[22px] md:text-[26px] font-medium leading-7 ">{faq.question}</span>
              <span className="ml-4 flex h-7 items-center">
                {openIds.includes(faq.id) ? <MinusIconSVG /> : <PlusIconSVG />}
              </span>
            </button>
            <div className={`${openIds.includes(faq.id) ? 'accordionOpen accordion' : 'accordion'}`}>
              <div className="w-full  text-[#002823] text-base md:text-[22px] font-light leading-[24px] md:leading-[30px] tracking-[0.14px] md:tracking-[0.22px] accordionInner">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 