'use client'
import { Disclosure, Menu } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavbarLogoSVG from '@/svgs/navbarLogo.svg'
import NavbarMobileLogoSVG from '@/svgs/navbarMobileLogo.svg'
import HamburgerIconSVG from '../svgs/Hamburger.svg'
import XIconSVG from '@/svgs/xIcon.svg'
import { useModal } from '@/components/modalContext'

type NavigationItems = {
  name: string;
  href: string;
  current: boolean;
}

type NavigationItemsBusiness = {
  name: string;
  href: string;
  current: boolean;
}

type SVGProps = React.SVGAttributes<SVGSVGElement>;

const navigation: NavigationItems[] = [
  { name: 'For business', href: '/business', current: false },
  { name: 'FAQ', href: '/#faq', current: false },
  { name: 'Contact us', href: '/contact', current: false },
]

const navigationBusiness: NavigationItemsBusiness[] = [
  { name: 'View plans', href: '/business/plans', current: false },
  { name: 'FAQ', href: '/business#faq', current: false },
  { name: 'Contact us', href: '/business/contact', current: false },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { open: openModal } = useModal();
  const pathname = usePathname();
  const [isProductFlydownOpen, setProductFlydownOpen] = useState(false);
  const [isCompanyFlydownOpen, setCompanyFlydownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Checks to see if the user has scrolled
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Disclosure as="nav" className={`fixed z-30 w-full transition-colors duration-150 bg-white`}>
        {({ open }) => (
          <>
            {pathname.includes('/business') ? (
              // business site
              <div className="h-[44px] w-full self-stretch px-20 inline-flex justify-center md:justify-end items-center gap-2 bg-[#034B48] md:-translate-x-0.5">
                <div className="text-xs text-black font-medium leading-normal text-right">
                  <span className="text-[#FFFFFF] text-[11px] md:text-[13px] font-normal leading-6">Already a PL8CHAT customer?{` `}
                    <Link href={'https://account.pl8chat.com/login'} className="text-[#FFFFFF] text-[11px] md:text-[13px] font-normal underline leading-6">Log in</Link>
                  </span>
                </div>
              </div>
            ) : (
              // consumer site
              <div>
                <div className="h-[44px] w-full self-stretch px-4 md:px-20 flex justify-center md:justify-end items-center bg-[#B8D5D0] md:bg-[#D7EDE9]">
                  <div className="text-xs text-black font-medium leading-normal text-center flex flex-row justify-center items-center">
                    <div className="text-black text-[11px] md:text-[13px] font-normal leading-normal whitespace-nowrap">
                      Connect your parking with
                      <Link href={'/business'}>
                        <span className="text-black text-[11px] md:text-[13px] font-normal leading-normal"> <span className='underline'>PL8CHAT for Business</span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-[92px] py-2 h-[58px] md:h-[70px] flex items-center">
              <div className="md:hidden w-full flex justify-between items-center">
                {/* Mobile menu button */}
                <div className="flex items-center">
                  <Link href="/" passHref>
                    <NavbarMobileLogoSVG />
                  </Link>
                </div>
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                    <XIconSVG aria-hidden="true" />
                  ) : (
                    // <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                    <HamburgerIconSVG aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Left side Logo */}
              <div className="hidden md:flex flex-1 items-center justify-center sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <Link href="/" passHref className='-translate-x-3.5'>
                    <NavbarLogoSVG />
                  </Link>
                </div>

                {/* Navbar text */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex -space-x-1 xl:space-x-4 text-nowrap">
                    {(pathname.includes('/business') ? navigationBusiness : navigation).map((item) => {
                      const isActive = item.href === pathname;
                      return (
                        <Link href={item.href} key={item.name}>
                          <button
                            aria-current={isActive ? 'page' : undefined}
                            className={'rounded-md px-3 py-3 text-md lg:text-base font-medium text-black'}
                          >
                            {item.name}
                          </button>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right-side items (shown on larger screens) */}
                {pathname.includes('/business') ? (
                  // business site
                  <div className="sm:flex sm:items-center text-sm font-normal">
                    <div className="hidden lg:flex lg:items-center gap-8 translate-x-3.5">
                      <div className={`text-black leading-[24px] text-sm`}>
                        Call us: 1(310)PL8-CHAT
                      </div>
                      <div className='flex flex-row gap-4'>
                        <Button variant="talkToSalesInverse" onClick={openModal}>
                          Talk to sales
                        </Button>
                        <Link href={`/business/plans`}>
                          <Button variant="getStarted">
                            Get started
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  // consumer site
                  <div className="sm:flex sm:items-center text-sm font-normal">
                    <div className="hidden lg:flex lg:items-center gap-8 translate-x-3.5">
                      <Link href={`https://account.pl8chat.com/login`} className={'py-2 text-black'}>
                        <Button variant="SignIn">
                          Sign in
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu */}
            <Disclosure.Panel className="sm:hidden h-screen">
              <div className="space-y-1 px-4 pt-2 flex flex-col pb-6 font-medium">
                {pathname.includes('/business') ? (
                  <div>
                    {navigationBusiness.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames('flex items-center h-[46px] px-4 text-sm lg:text-lg border-b-[0.5px] border-[#D1D5DB]')}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                ) : (
                  <div>
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames('flex items-center h-[46px] px-4 text-sm lg:text-lg border-b-[0.5px] border-[#D1D5DB]')}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                )}
                <div className={`text-black leading-[24px] text-sm px-4 py-3 border-b-[0.5px] border-[#D1D5DB]`}>
                  Call us: 1(310)PL8-CHAT
                </div>
              </div>
              <div className='px-4 '>
                <Link href={`https://account.pl8chat.com/login`} className={'py-2 text-black'}>
                  <Button variant="SignIn">
                    Sign In
                  </Button>
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
