import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroBackup({ }) {
  return (
    <div className='flex justify-center px-4 md:px-0  pt-[32px] md:pt-[50px] pb-4 md:pb-5'>
      <div
        className="w-full md:w-[1400px] h-[500px] md:h-[700px] pl-[18px] md:pl-[90px] md:pr-28 pt-[130px] md:pt-[180px] md:pb-[145px] rounded-3xl inline-flex flex-col justify-start items-start gap-7 bg-[linear-gradient(to_left,_rgba(0,0,0,0)_10%,_rgba(0,0,0,0.6)_70%,_rgba(0,0,0,0.6)_100%),url('/assets/images/HeroBg.png')] md:bg-[linear-gradient(to_left,_rgba(0,0,0,0)_10%,_rgba(0,0,0,0.6)_55%,_rgba(0,0,0,0.7)_90%),url('/assets/images/HeroBg.png')] bg-cover bg-no-repeat bg-[position:0%_0%,-18.25rem_0rem] md:bg-[position:0%_0%,_center_-12.5rem]"
      >
        <div className="w-[288px] md:w-[768px] flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-white text-[36px] md:text-6xl font-medium leading-[40px] md:leading-[58px]">Your car has<br />a username.<br />Use it.</div>
            <div className="self-stretch text-nowrap justify-start text-white text-[18px] md:text-[22px] font-normal leading-[24px] md:leading-[26px] tracking-normal">Keep your car safe <span className='hidden md:inline'>and</span><span className='md:hidden'>&</span> connected, <br /> and help other drivers with <br className='md:hidden' /> license <br className='hidden md:flex' /> plate communication.</div>
          </div>
        </div>
        <Link href={'https://apps.apple.com/us/app/pl8chat/id6474788258?platform=iphone'} className=''>
          <Button variant='hero' className={`text-nowrap flex justify-center items-center`}>
            Get the app
          </Button>
        </Link>
        {/* <div data-state="Default" data-type="Primary" className="w-36 h-11 px-4 py-3 bg-white rounded-2xl inline-flex justify-center items-center overflow-hidden">
          <div className="justify-start text-emerald-950 text-base font-semibold leading-normal">Get PL8CHAT</div>
        </div> */}
      </div>
    </div>
  )
} 