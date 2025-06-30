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
  hero: clsx(
    'rounded-md px-4 py-[13px] text-md font-medium shadow-sm', 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', 'focus-visible:outline-white'
  ),
  homeHero: clsx(
    'w-[158px] h-[60px] px-[21px] py-[13px] bg-pl8Green rounded-md border border-[#083937] justify-center items-center inline-flex text-[#034b48] text-lg font-medium leading-normal'
  ),
  navBar: clsx(
    'h-[42px] px-4 py-[13px] rounded-md justify-center items-center inline-flex text-[#034b48] text-sm font-medium leading-normal'
  ),
  signUp: clsx(
    'self-stretch h-[42px] px-[17px] py-[9px] bg-[#034b48] rounded-md shadow justify-center items-center inline-flex text-white text-sm font-medium leading-tight'
  ),
  checkout: clsx(
    'self-stretch h-[35px] px-[17px] py-[9px] bg-pl8Green rounded-md shadow justify-center items-center inline-flex text-white text-sm font-medium leading-tight'
  ),
  SignIn: clsx(
    'flex items-center justify-center w-[122px] h-[42px] px-[16px] py-[13px] text-white text-sm font-medium leading-6 rounded-[14px] bg-[#002823]'
  ),
  contact: clsx(
    'self-stretch w-[143px] h-[46px] px-[17px] py-[9px] bg-[#002823] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  newsLetter: clsx(
    'self-stretch w-[125px] h-[46px] px-[17px] py-[9px] bg-[#002823] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  newsLetterSuccess: clsx(
    'self-stretch w-[143px] h-[46px] px-[17px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  talkToSales: clsx(
    'self-stretch w-96 h-[46px] px-[17px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  ),
  talktoSalesBusiness: clsx(
    'self-stretch w-[140px] h-[46px] px-[17px] py-[9px] rounded-[14px] shadow justify-center items-center inline-flex text-[#034B48] text-[15px] font-medium leading-[24px] bg-[#58FF89]'
  ),
  seePlans: clsx(
    'self-stretch w-[150px] h-[46px] px-[17px] py-[9px] bg-[#034B48] rounded-[14px] shadow justify-center items-center inline-flex text-white text-sm font-medium leading-[24px]'
  )
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
