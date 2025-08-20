'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useModal } from '@/components/modalContext';

export default function HeroBusiness() {
  const { open } = useModal();

  return (
    <div className='pt-[56px] md:pt-20'>
      <div className="text-center justify-start text-[#002823] text-[32px] md:text-[50px] font-medium leading-[34px] md:leading-[65px]">Connect your <br className='md:hidden' />parking <br className='hidden md:inline' /> with <br className='md:hidden' /> PL8CHAT<span className='text-xl md:text-[35px] relative -top-1 md:-top-2.5'>®</span> for business</div>
      <div className='flex justify-center px-4 pt-[32px] md:pt-[50px] pb-4 md:pb-5'>
        <div className="w-full md:w-[1400px] h-[500px] md:h-[700px] px-[18px] md:px-[109px] pt-[130px] md:pt-[180px] pb-36 rounded-3xl inline-flex flex-col justify-start items-start gap-[30px] md:gap-10 bg-[linear-gradient(to_left,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.6)_100%),url('/assets/images/parkedCars.png')] md:bg-[linear-gradient(to_left,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0.6)_100%),url('/assets/images/parkedCars2.png')] bg-no-repeat bg-[length:320%] md:bg-[length:100%] bg-[position:0%_0%,_center_-9rem] md:bg-center">
          <div className="md:w-[768px] flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="justify-start text-white text-4xl md:text-[50px] font-medium leading-[40px] md:leading-[58px]">Safer, <br /> Smarter, <br /> Parking</div>
              <div className="w-[300px] md:w-auto self-stretch justify-start text-white text-[18px] md:text-[22px] font-normal leading-[26px] tracking-tight">Add safety & accountability to your parking <br className='hidden md:inline' /> community with license <br className='md:hidden' /> plate communication.</div>
            </div>
          </div>
          <div className='flex flex-row justify-between gap-[6px] md:gap-4'>
            <Link href={'#'} className='flex justify-center'>
              <Button variant='hero' onClick={open} className={`flex justify-center items-center`}>
                Talk to sales
              </Button>
            </Link>
            <Link href={'/business/plans'} className='flex justify-center'>
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