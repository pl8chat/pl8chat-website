import FreePlanForm from "@/components/freePlanForm"
import Link from 'next/link'
import Image from 'next/image'

export default function FreePlan() {
 return (
    <div className="fixed z-50 h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="absolute top-[11.88px] left-[11.88px] w-20 h-20 z-50">
        <Link href='/'>
          <Image
            src='/assets/images/logoGreen.png'
            fill
            alt='logoGreen'
            className=""
          />
        </Link>
      </div>
      <FreePlanForm />
    </div>
  );
}