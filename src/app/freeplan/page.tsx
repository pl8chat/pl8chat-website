import FreePlanForm from "@/components/freePlanForm"
import Image from 'next/image'

export default function FreePlan() {
  return (
    <div className="fixed z-40 h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="absolute top-10 left-10 w-20 h-20">
        <Image 
          src='/assets/images/logoGreen.jpg'
          fill
          alt='logoGreen'
          className=""
        />
      </div>
        <FreePlanForm />
    </div>
  );
}