import SignInForm from "@/components/signInForm"
import Link from 'next/link'
import Image from 'next/image'
import GreenLogo from '@/components/svgs/logoGreen'
import { Sign } from "crypto";

export default function SignIn() {
  return (
    <div className="fixed h-screen w-full bg-[#F6F6F4] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 z-50 px-8 py-[15px] h-[58px]">
        <Link href="/">
          <GreenLogo />
        </Link>
      </div>
      <SignInForm />
    </div>
  );
}