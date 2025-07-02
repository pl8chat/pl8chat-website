'use client'
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Modal from './modal'
import Contact from './contactForm'
import { Button } from './ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavbarLogoSVG from './svgs/navbarLogo'
import { useModal } from '@/components/modalContext'
import path from 'path'

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
  { name: 'FAQ', href: '#faq', current: false },
  { name: 'Contact us', href: '/contact', current: false },
]

const navigationBusiness: NavigationItemsBusiness[] = [
  { name: 'View plans', href: '/business/pricing', current: false },
  { name: 'FAQ', href: '#faq', current: false },
  { name: 'Contact us', href: '/contact', current: false },
]

const navbarColors: Record<string, string> = {
  '/': 'bg-[#034b48]',
  '/pricing': 'bg-lightGrey',
  '/individuals': 'bg-tGreen',
  '/about': '',
  default: 'bg-[#034b48]',
};

const textColors: Record<string, string> = {
  '/': 'text-white hover:text-tGreen',
  '/pricing': 'text-offBlack hover:text-darkGreen',
  '/individuals': 'text-offBlack hover:text-darkGreen',
  default: 'text-white hover:text-tGreen',
};

const logoSrc: Record<string, string> = {
  '/': '/assets/images/PL8CHATWhite.png',
  '/pricing': '/assets/images/PL8CHATBlack.png',
  '/individuals': '/assets/images/PL8CHATBlack.png',
  '/about': '/assets/images/PL8CHATWhite.png',
  default: '/assets/images/PL8CHATWhite.png',
}

const navBarButtonColors: Record<string, string> = {
  '/': 'bg-pl8Green hover:bg-tGreen text-034b48',
  '/pricing': 'bg-[#034b48] hover:bg-darkerGreen text-white',
  '/individuals': 'bg-[#034b48] hover:bg-darkerGreen text-white',
  '/about': 'bg-white hover:bg-tGreen',
  '/contact': 'bg-white hover:bg-darkerGreen hover:bg-tGreen text-offBlack',
  default: 'bg-pl8Green hover:bg-tGreen text-034b48',
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarFinal() {
  const { open: openModal } = useModal();
  const pathname = usePathname();
  const [isProductFlydownOpen, setProductFlydownOpen] = useState(false);
  const [isCompanyFlydownOpen, setCompanyFlydownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isFlydownOpen = isProductFlydownOpen || isCompanyFlydownOpen;

  const getTextColor = (isButton: boolean = false): string => {
    if (isScrolled || isFlydownOpen) {
      return isButton ? 'text-white hover:text-darkGreen' : 'text-offBlack hover:text-darkGreen';
    }
    return isButton
      ? 'text-white hover:text-tGreen'
      : textColors[pathname] || textColors.default;
  };

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
              <div className="h-[44px] w-full self-stretch px-20 inline-flex justify-end items-center gap-2 bg-[#034B48]">
                <div className="text-xs text-black font-medium leading-normal text-right">
                  <span className="text-[#FFFFFF] text-xs font-normal leading-6">Already a PL8CHAT customer?{` `}
                    <Link href={'https://pl8-chat-admin-v2.vercel.app/login'} className="text-[#FFFFFF] text-xs font-semibold leading-6">Log in</Link>
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-[44px] w-full self-stretch px-20 inline-flex justify-end items-center gap-2 bg-[#E8F4F0]">
                <div className="text-xs text-black font-medium leading-normal text-right">
                  <span className="text-black text-xs font-medium leading-normal">Have a parking community you want to connect? Explore </span>
                  <Link href={'/business'}>
                    <span className="text-black text-xs font-bold leading-normal">PL8CHAT for Business.</span>
                  </Link>
                </div>
              </div>
            )}
            <div className="mx-auto px-2 sm:px-6 lg:px-[92px] py-2 h-[70px] flex items-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Left side Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <Link href="/" passHref className='-translate-x-3.5'>
                    <NavbarLogoSVG />
                  </Link>
                </div>

                {/* Navbar text */}
                <div className="hidden sm:ml-6 sm:block md:translate-x-[4.25rem]">
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
                  <div className="sm:flex sm:items-center text-sm font-normal">
                    <div className="hidden lg:flex lg:items-center gap-8 translate-x-3.5">
                      <div className={`text-black leading-[24px] text-sm`}>
                        Call us: 1(310)PL8-CHAT
                      </div>
                      <div className='flex flex-row gap-4'>
                        <Button variant="talkToSalesInverse" onClick={openModal}>
                          Talk to sales
                        </Button>
                        <Link href={`/business/pricing`}>
                          <Button variant="getStarted">
                            Get started
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="sm:flex sm:items-center text-sm font-normal">
                    <div className="hidden lg:flex lg:items-center gap-8 translate-x-3.5">
                      <div className={`text-black leading-[24px] text-sm`}>
                        Call us: 1(310)PL8-CHAT
                      </div>
                      <Link href={`https://pl8-chat-admin-v2.vercel.app/login`}
                        className={'py-2 text-black'}>
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
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(getTextColor(), 'rounded-md px-3 py-3 text-md lg:text-lg font-[550]')}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
