import PaidPlanForm from "@/components/paidPlanForm"
import Link from 'next/link'
import Image from 'next/image'

export default function FreePlan() {
  return (
    <div className="fixed h-screen w-full bg-[#F6F6F4] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-1.5 left-7 z-50">
        <a href="/">
          <Image
            src="/assets/images/PL8CHATBlack.png"
            width={155}
            height={40}
            alt="logoGreen"
          />
        </a>
      </div>
      <PaidPlanForm />
    </div>
  );
}