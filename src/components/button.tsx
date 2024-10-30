import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'
import localFont from 'next/font/local'

const barlow = localFont({
  src: "../app/fonts/Barlow-Medium.woff",
  variable: "--font-barlow-medium",
  weight: "100 900",
})

const inter = localFont({
  src: '../app/fonts/Inter-Regular.woff',
  variable: '--font-montserrat-regular',
  weight: '400',
})

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-8 h-[3.25rem] gap-3',
    'rounded-md bg-white shadow-md hover:bg-tGreen',
    'whitespace-nowrap text-[1.1rem] font-bold text-black',
    `data-[disabled]:opacity-40 ${barlow.className}`,
  ),
  secondary: clsx(
    'inline-flex items-center justify-center py-1 px-3 gap-3',
    'rounded-md shadow-md hover:bg-tGreen',
    'whitespace-nowrap text-md font-bold text-black',
    `data-[disabled]:opacity-40 ${inter.className}`,
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)]',
    'rounded-lg border border-transparent shadow ring-1 ring-black/10',
    'whitespace-nowrap text-sm font-bold text-gray-950',
    'data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40',
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
