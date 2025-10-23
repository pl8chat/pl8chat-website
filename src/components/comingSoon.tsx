import Pl8chatWhite from '@/svgs/Pl8chatWhite.svg';

export default function ComingSoon() {
  return (
    <div className="relative h-screen pb-10 inline-flex flex-col justify-center items-center bg-[url('/assets/images/tempBg.jpg')] bg-cover bg-no-repeat bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="z-10 w-[1440px] px-14 inline-flex justify-start items-center gap-16">
        <Pl8chatWhite className="absolute top-4 left-[60px]" />
      </div>

      <div className="relative z-10 w-[768px] h-[656px] flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-center justify-start text-white text-7xl font-medium leading-[66px]">
              <br />A new line of vehicle<br />communication.
            </div>
            <div className="self-stretch text-center justify-start">
              <span className="text-white text-xl font-normal leading-snug tracking-tight">
                coming soon | info@pl8chat.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}