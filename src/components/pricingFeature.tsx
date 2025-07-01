import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function pricingFeature() {
  return (
    <div className="w-full flex justify-center pb-6">
      <div className="w-[1400px] h-[378px] bg-[#034B48] rounded-[25px] inline-flex justify-center items-center gap-4">
        <div className="flex-1 inline-flex flex-col justify-start items-center gap-7">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch text-center justify-start text-white text-4xl font-medium leading-10">Need some help or have questions?</div>
          </div>
          <div className="flex flex-col justify-start items-center gap-10">
            <div className="w-[792px] text-center justify-start text-zinc-100 text-[22px] font-normal leading-8">Talk to one of our specialists today and we’ll help<br />you find the right plan.</div>
            <div className="inline-flex justify-start items-center gap-4">
              <Link href="#">
                <Button variant='talkToSalesBusiness'>
                  Talk to expert
                </Button>
              </Link>
              <div className="justify-start text-[#58FF89] text-base font-medium leading-loose">Learn more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
