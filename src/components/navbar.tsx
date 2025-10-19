'use client'
import { Disclosure, Menu } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavbarLogoSVG from '@/svgs/navbarLogo.svg'
import NavbarMobileLogoSVG from '@/svgs/navbarMobileLogo.svg'
import Pl8chatWhite from '@/svgs/Pl8chatWhite.svg'
import Pl8ChatWhiteMobile from '@/svgs/Pl8chatWhiteMobile.svg'
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
      <Disclosure as="nav" className={`fixed z-30 w-full transition-colors duration-150`}>
        {({ open }) => (
          <>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-[60px] py-2 md:pt-4 md:py-0 h-[58px] md:h-[70px] flex items-center">
              <div className="md:hidden w-full flex justify-between items-center">
                {/* Mobile menu button */}
                <div className="flex items-center">
                  <Link href="/" passHref>
                    <Pl8ChatWhiteMobile />
                  </Link>
                </div>
                 <div className="flex justify-start items-center gap-3.5">
                  <Link href={'#'}>
                    <Button variant="navBarTransparent">Sign in</Button>
                  </Link>
                  <Link href={'#'}>
                    <Button variant="navBar">Sign up</Button>
                  </Link>
                </div>
              </div>

              {/* Left side Logo */}
              <div className="hidden md:w-[1440px] mx-auto md:flex justify-between items-center gap-16">
                <Link href="/" passHref className=''>
                  <Pl8chatWhite />
                </Link>
                <div className="flex justify-start items-center gap-3.5">
                  <Link href={'#'}>
                    <Button variant="navBarTransparent">Sign in</Button>
                  </Link>
                  <Link href={'#'}>
                    <Button variant="navBar">Sign up</Button>
                  </Link>
                </div>
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
