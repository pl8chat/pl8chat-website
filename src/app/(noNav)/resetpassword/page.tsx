import ResetPasswordForm from "@/components/resetPasswordForm"
import Link from 'next/link'
import GreenLogo from '@/components/svgs/logoGreen'

export default function Resetpassword() {
  return (
    <div className="fixed h-screen w-full bg-[#F6F6F4] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 z-50 px-8 py-[15px] h-[58px]">
        <Link href="/">
          <GreenLogo />
        </Link>
      </div>
      <ResetPasswordForm />
    </div>
  );
}