import FreePlanForm from "@/components/freePlanForm"
import Link from 'next/link'
import Image from 'next/image'

export default function FreePlan() {
  return (
    <div className="relative h-screen w-screen bg-white flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-[11.88px] left-[11.88px] w-20 h-20 z-50">
        <a href="/">
          <Image
            src="/assets/images/logoGreen.png"
            fill
            alt="logoGreen"
          />
        </a>
      </div>
      <FreePlanForm />
    </div>
  );
}