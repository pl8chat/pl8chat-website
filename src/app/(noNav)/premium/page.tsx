import PaidPlanForm from "@/components/paidPlanForm"
import Link from 'next/link'
import Image from 'next/image'
import Pl8chatGreen from '@/svgs/pl8chatGreen.svg'

export default function FreePlan() {
  return (
    <div className="fixed h-screen w-full bg-[#F6F6F4] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 z-50 px-8 py-[15px] h-[58px]">
        <Link href="/">
          <Pl8chatGreen />
        </Link>
      </div>
      <PaidPlanForm />
    </div>
  );
}