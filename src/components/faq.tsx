'use client'
import { useState } from 'react'
import PlusIconSVG from './svgs/plusIcon'
import MinusIconSVG from './svgs/minusIcon'

const faqs = [
  {
    id: 1,
    question: 'Is PL8CHAT safe?',
    answer: `And this is where the answer will go once i finalize them all and that will be shortly and then we will have a full great answer wow great amazing!`,
  },
  {
    id: 2,
    question: 'What if someone says something rude or mean?',
    answer: `And this is where the answer will go once i finalize them all and that will be shortly and then we will have a full great answer wow great amazing!`,
  },
  {
    id: 3,
    question: 'Is my personal info public since I have my license plate?',
    answer: `And this is where the answer will go once i finalize them all and that will be shortly and then we will have a full great answer wow great amazing!`,
  },
  {
    id: 4,
    question: 'One about I want to use it but dont want peeps msg me',
    answer: `And this is where the answer will go once i finalize them all and that will be shortly and then we will have a full great answer wow great amazing!`,
  },
  {
    id: 5,
    question: 'The question?',
    answer: `And this is where the answer will go once i finalize them all and that will be shortly and then we will have a full great answer wow great amazing!`,
  },
  // More questions...
]

export default function FAQ({ }) {
  const [openIds, setOpenIds] = useState<number[]>([1]);

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
    <div className="self-stretch px-28 py-20 bg-[#034B48] inline-flex flex-col justify-start items-center gap-20">
      <div className="self-stretch text-center justify-start text-neutral-100 text-4xl font-medium leading-[48px]">Frequently asked questions</div>
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className={`w-full pt-6 flex flex-col gap-4 ${index < faqs.length - 1
              ? `${openIds.includes(faq.id) ? 'pb-4' : 'pb-2'} border-b border-gray-200`
              : ''
            }`}
          >
            <button onClick={() => handleAccordion(faq.id)} className='flex w-full items-start justify-between text-left text-gray-100'>
              <span className="text-[28px] font-semibold leading-7">{faq.question}</span>
              <span className="ml-6 flex h-7 items-center">
                {openIds.includes(faq.id) ? (
                  <MinusIconSVG />
                ) : (
                  <PlusIconSVG />
                )}
              </span>
            </button>
            <div className={`${openIds.includes(faq.id) ? 'accordionOpen accordion' : 'accordion'}`}>
              <div className={`pr-[120px] text-gray-100 text-[22px] font-light leading-[30px] tracking-tight accordionInner`}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 