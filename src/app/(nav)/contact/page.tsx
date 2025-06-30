import Link from 'next/link';
import ContactSalesCard from '@/components/contactSalesCard';
import NewsletterSubscription from '@/components/newsletterSubscription';

interface ContactCardProps {
  title: string;
  email: string;
  phone: string;
  mailto: string;
}

const ContactCards: ContactCardProps[] = [
  {
    title: 'General inquiries',
    email: 'info@pl8chat.com',
    phone: '+1 (310) PL8 CHAT',
    mailto: 'mailto:info@pl8chat.com'
  },
  {
    title: 'Consumer support',
    email: 'help@pl8chat.com',
    phone: '',
    mailto: 'mailto:help@pl8chat.com'
  },
  {
    title: 'Business support',
    email: 'info@pl8chat.com',
    phone: '+1 (424) PL8 CHAT',
    mailto: 'mailto:info@pl8chat.com'
  },
];

export default function Contact() {

  return (
    <div className='flex flex-col justify-center items-center pb-32'>
      <div className="self-stretch pt-[50px] pb-6 w-full bg-white inline-flex flex-col justify-center items-center gap-20 overflow-hidden">
        <div className="flex flex-col justify-start items-center gap-6">
          <div className="w-[1700px] h-14 text-center justify-center text-gray-900 text-5xl font-semibold leading-[60px]">Contact us</div>
          <div className="w-[700px] justify-start text-gray-900 text-xl font-medium leading-tight">Questions? Comments? Something else? We’d love to hear from you.</div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-wrap gap-6 md:w-[1027px]">
            {ContactCards.map((card, index) => (
              <div key={index} className="w-[496px] h-[185px] bg-[#E8F4F0] rounded-3xl p-10 flex flex-col justify-between">
                <div className='flex flex-col gap-3'>
                  <div className="text-gray-900 text-xl font-semibold">{card.title}</div>
                  <div className='flex flex-col gap-2'>
                    <Link href={card.mailto}>
                      <div className="text-emerald-900 text-base font-semibold">
                        {card.email}
                      </div>
                    </Link>
                    {card.phone && (
                      <div className="text-gray-900 text-sm font-normal">
                        {card.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <ContactSalesCard />
          </div>
        </div>
      </div>
      <div className="w-[1027px] flex-1 p-10 bg-gray-100 rounded-3xl inline-flex justify-between items-start gap-12">
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="w-96 h-7 justify-center text-gray-900 text-xl font-semibold leading-7">Join our newsletter</div>
          <div className="w-96 justify-start text-gray-900 text-base font-normal leading-[24PX]">Subscribe to receive news, product update<br />s and much more.</div>
        </div>
        <NewsletterSubscription />
      </div>
    </div>
  )
}