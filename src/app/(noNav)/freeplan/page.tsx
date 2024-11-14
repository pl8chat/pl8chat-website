import FreePlanForm from "@/components/freePlanForm"
import Link from 'next/link'
import Image from 'next/image'

export default function FreePlan() {
  return (
    <div className="fixed h-screen w-full bg-[#F6F6F4] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-2 left-7 z-50">
        <a href="/">
          <Image
            src="/assets/images/PL8CHATBlack.png"
            width={160}
            height={40}
            alt="logoGreen"
          />
        </a>
      </div>
      <FreePlanForm />
    </div>
  );
}