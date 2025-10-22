import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from '../link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-3.5 py-2.5',
    'rounded-md bg-white hover:bg-tGreen',
    'whitespace-nowrap text-[1.1rem] font-bold text-black',
    `data-[disabled]:opacity-40 `,
  ),
  secondary: clsx(
    'inline-flex items-center justify-center px-6 py-2.5',
    'whitespace-nowrap text-[1.1rem] font-bold text-black rounded-md',
    `data-[disabled]:opacity-40 `
  ),
  homeHero: clsx(
    'w-[158px] h-[60px] px-[21px] py-[13px] bg-pl8Green rounded-md border border-[#083937] justify-center items-center inline-flex text-[#034b48] text-lg font-medium leading-normal'
  ),
  search: clsx(
    'h-[42px] w-[64px] md:w-[80px] px-4 py-[13px] rounded-[28px] justify-center items-center inline-flex text-[#E5E7EB] text-[14px] md:text-[15px] font-medium leading-[24px] bg-[#1F9687] hover:bg-[#00695C] border border-[#1F9687] hover:border-[#00695C]'
  ),
  navBar: clsx(
    'h-[40px] w-20 md:w-[112px] px-4 py-[13px] rounded-[25px] justify-center items-center inline-flex text-[#404040] text-[13px] md:text-[15px] font-medium leading-[24px] bg-white hover:bg-[#E5E7EB] text-nowrap'
  ),
  navBarTransparent: clsx(
    'h-[40px] w-20 md:w-[112px] px-4 py-[13px] rounded-[25px] justify-center items-center inline-flex text-white text-[13px] md:text-[15px] font-medium leading-[24px] border border-[#ECECEF]'
  ),
  navBarProducts: clsx(
    'h-[42px] px-4 py-[13px] rounded-md justify-center items-center inline-flex text-[#034b48] text-sm font-medium leading-normal'
  ),
  signUp: clsx(
    'self-stretch w-[100px] h-[42px] px-[16px] py-[9px] bg-[#FFFFFF] rounded-[25px] shadow justify-center items-center inline-flex text-[#404040] text-sm font-medium leading-tight'
  ),
  checkout: clsx(
    'self-stretch h-[35px] px-[17px] py-[9px] bg-pl8Green rounded-md shadow justify-center items-center inline-flex text-white text-sm font-medium leading-tight'
  ),
  SignIn: clsx(
    'flex items-center justify-center w-[122px] h-[42px] px-[16px] py-[13px] text-white text-sm font-medium leading-6 rounded-[14px] bg-[#034B48] hover:bg-[#002823]'
  ),
  contact: clsx(
    'self-stretch w-[143px] h-[42px] md:h-[46px] px-[17px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  newsLetter: clsx(
    'self-stretch w-full h-[46px] px-[17px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  newsLetterSuccess: clsx(
    'self-stretch w-full h-[46px] px-[17px] py-[9px] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px] cursor-no-drop',
    '[background:linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),var(--PL8CHAT-Dark-green,#034B48)]'
  ),
  talkToSales: clsx(
    'self-stretch w-96 h-[46px] px-[17px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  talkToSalesInverse: clsx(
    'self-stretch w-[122px] h-[42px] px-[21px] py-[13px] bg-none hover:bg-[#E8F4F0] rounded-[14px] border border-[#034B48] justify-center items-center flex text-[#034B48] text-[15px] leading-[24px] whitespace-nowrap'
  ),
  getStarted: clsx(
    'self-stretch w-[122px] h-[42px] px-[16px] py-[13px] bg-[#034B48] hover:bg-[#002823] rounded-[14px] justify-center items-center inline-flex font-medium text-white text-[15px] leading-[24px]'
  ),
  talkToSalesBusiness: clsx(
    'self-stretch w-[121px] md:w-[140px] h-[38px] text-nowrap md:h-[46px] px-[17px] py-[9px] rounded-[14px] shadow justify-center items-center inline-flex text-[#034B48] text-[15px] font-medium leading-[24px] bg-[#58FF89] hover:bg-[#38E06B]'
  ),
  talkToExpert: clsx(
    'self-stretch w-full md:w-[140px] h-[38px] text-nowrap md:h-[46px] px-[17px] py-[9px] rounded-[14px] shadow justify-center items-center inline-flex text-[#034B48] text-[15px] font-medium leading-[24px] bg-[#58FF89] hover:bg-[#38E06B]'
  ),
  seePlans: clsx(
    'self-stretch w-[125px] md:w-[150px] h-[40px] md:h-[46px] px-[17px] py-[9px] bg-[#034B48] hover:bg-[#002823] rounded-[14px] shadow justify-center items-center inline-flex text-white text-[15px] font-medium leading-[24px]'
  ),
  pricing: clsx(
    'self-stretch w-full h-[40px] md:h-[46px] px-[11px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  hero: clsx(
    'rounded-[15px] w-[120px] md:w-[140px] h-[38px] md:h-[46px] px-4 py-[13px] bg-white hover:bg-[#E8F4F0] text-[12px] md:text-[15px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
  ),
  hero2: clsx(
    'rounded-[15px] w-[125px] md:w-[140px] h-[38px] md:h-[46px] px-4 py-[13px] bg-none text-[12px] md:text-[15px] text-white border font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
    | React.ComponentPropsWithoutRef<typeof Link>
    | (Headless.ButtonProps & { href?: undefined })
  )

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
