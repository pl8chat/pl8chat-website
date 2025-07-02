'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useModal } from '@/components/modalContext';

export default function HeroBusiness() {
  const { open } = useModal();

  return (
    <div className='pt-20'>
      <div className="text-center justify-start text-[#002823] text-[50px] font-medium leading-[65px]">Connect your parking community<br/>with PL8CHAT® for business</div>
      <div className='flex justify-center pt-[50px] pb-5'>
        <div className="w-[1392px] h-[700px] pl-24 pr-28 pt-44 pb-36 rounded-3xl inline-flex flex-col justify-start items-start gap-10 bg-[linear-gradient(to_left,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0.6)_100%),url('/assets/images/parkedCars.png')] bg-cover bg-center bg-no-repeat">
          <div className="w-[768px] flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="justify-start text-white text-6xl font-medium leading-[58px]">It's all done<br />through <br />license plates.</div>
              <div className="self-stretch justify-start text-white text-xl font-normal leading-relaxed tracking-tight">Connect with drivers, vehicles and<br />businesses all through license plates.</div>
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4'>
            <Link href={'/business/pricing'} className='flex justify-center'>
              <Button variant='hero' onClick={open}>
                Talk to sales
              </Button>
            </Link>
            <Link href={'#'} className='flex justify-center'>
              <Button variant='hero2' className={`flex justify-center items-center`}>
                Join for free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}