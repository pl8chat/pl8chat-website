import { Button } from '@/components/ui/button';

export default function Hero({ }) {
  return (
    <div className='flex justify-center pt-[50px] pb-6'>
      <div className="w-[1392px] h-[700px] pl-24 pr-28 pt-44 pb-36 rounded-3xl inline-flex flex-col justify-start items-start gap-7 bg-[linear-gradient(to_left,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0.6)_100%),url('/assets/images/HeroBg.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-[768px] flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-white text-6xl font-medium leading-[58px]">Keep your car<br />safe and <br />connected.</div>
            <div className="self-stretch justify-start text-white text-xl font-normal leading-relaxed tracking-tight">Connect with drivers, vehicles and<br />businesses all through license plates.</div>
          </div>
        </div>
        <div data-state="Default" data-type="Primary" className="w-36 h-11 px-4 py-3 bg-white rounded-2xl inline-flex justify-center items-center overflow-hidden">
          <div className="justify-start text-emerald-950 text-base font-semibold leading-normal">Get PL8CHAT</div>
        </div>
      </div>
    </div>
  )
} 