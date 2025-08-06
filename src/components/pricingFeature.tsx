import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function pricingFeature() {
  return (
    <div className="w-full flex justify-center pb-4 md:pb-6 px-4">
      <div className="md:w-[1400px] py-10 md:py-20 px-4 bg-[#034B48] rounded-[25px] inline-flex justify-center items-center gap-4">
        <div className="flex-1 inline-flex flex-col justify-start items-center gap-7">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch text-center justify-start text-white text-2xl md:text-4xl font-medium leading-[34px] md:leading-10">Need some help or have questions?</div>
          </div>
          <div className="flex flex-col justify-start items-center gap-10 w-full">
            <div className="md:w-[792px] text-center justify-start text-zinc-100 text-base md:text-[22px] font-normal leading-8">Talk to one of our specialists today and we’ll help <br className='hidden md:flex' />you find the right plan.</div>
            <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-center gap-2 md:gap-4">
              <Link href="#" className='w-full md:w-auto'>
                <Button variant='talkToExpert'>
                  Talk to <span className='md:hidden px-1'>an</span> expert
                </Button>
              </Link>
              <Link href={'/business#faq'}>
                <div className="justify-start text-[#58FF89] text-base font-medium leading-loose">Learn more</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
