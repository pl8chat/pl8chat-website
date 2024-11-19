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
    'rounded-md px-4 py-[13px] text-lg font-medium shadow-sm', 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', 'focus-visible:outline-white'
  ),
  signUp: clsx(
    'self-stretch h-[42px] px-[17px] py-[9px] bg-[#00695c] rounded-md shadow justify-center items-center inline-flex text-white text-sm font-medium leading-tight'
  ),
  checkout: clsx(
    'self-stretch h-[35px] px-[17px] py-[9px] bg-[#00695c] rounded-md shadow justify-center items-center inline-flex text-white text-sm font-medium leading-tight'
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
