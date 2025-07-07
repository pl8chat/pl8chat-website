'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useModal } from '@/components/modalContext';

export default function HeroBusiness() {
  const { open } = useModal();

  return (
    <div className='pt-[56px] md:pt-20'>
      <div className="text-center justify-start text-[#002823] text-2xl md:text-[50px] font-medium leading-[34px] md:leading-[65px]">Connect your parking <br className='md:hidden' /> community <br className='hidden md:block' />with <br className='md:hidden' /> PL8CHAT® for business</div>
      <div className='flex justify-center px-4 pt-[50px] pb-4 md:pb-5'>
        <div className="w-full md:w-[1400px] h-[500px] md:h-[700px] px-[18px] md:px-[109px] pt-[130px] md:pt-[180px] pb-36 rounded-3xl inline-flex flex-col justify-start items-start gap-[30px] md:gap-10 bg-[linear-gradient(to_left,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.6)_100%),url('/assets/images/parkedCars.png')] md:bg-[linear-gradient(to_left,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0.6)_100%),url('/assets/images/parkedCars.png')] bg-cover bg-center bg-no-repeat">
          <div className="md:w-[768px] flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="md:hidden justify-start text-white text-4xl font-medium leading-[40px]">It's all done<br />through <br />license plates.</div>
              <div className="hidden md:flex justify-start text-white text-6xl font-medium leading-[58px]">Smart and<br />social parking</div>
              <div className="md:hidden w-[300px] self-stretch justify-start text-white text-[18px] font-normal leading-[26px] tracking-tight">Turn your parking environment <br /> into a connected vehicle <br /> community</div>
              <div className="hidden md:flex self-stretch justify-start text-white text-[22px] font-normal leading-[26px] tracking-tight">Manage parking in real time and <br /> communicate with vehicles through <br /> license plate messaging.</div>
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4'>
            <Link href={'#'} className='flex justify-center'>
              <Button variant='hero' onClick={open} className={`flex justify-center items-center`}>
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