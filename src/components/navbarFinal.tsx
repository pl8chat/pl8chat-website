'use client'

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import ProductsFlydown from './productsFlydown'
import CompanyFlydown from './companyFlydown'
import { Button } from './button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

type SVGProps = React.SVGAttributes<SVGSVGElement>;

const navigation: NavigationItem[] = [
  { name: 'Products', href: '#', current: true },
  { name: 'Pricing', href: '/pricing', current: false },
  { name: 'For individuals', href: '/individuals', current: false },
  { name: 'Company', href: '#', current: false },
]

const inter = localFont({
  src: "../app/fonts/InterVariable.woff",
  variable: "--font-barlow-medium",
  weight: "100 200 300 400 500 600 700 800 900",
})

function ChevronDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        stroke='currentColor'
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const navbarColors: Record<string, string> = {
  '/': 'bg-darkGreenTest',
  '/pricing': 'bg-lightGrey',
  '/individuals': 'bg-tGreen',
  '/about': '',
  default: 'bg-darkGreenTest',
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarFinal() {
  const pathname = usePathname();
  const [isProductFlydownOpen, setProductFlydownOpen] = useState(false);
  const [isCompanyFlydownOpen, setCompanyFlydownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const productFlydownRef = useRef<HTMLDivElement>(null);
  const companyFlydownRef = useRef<HTMLDivElement>(null);

  const isFlydownOpen = isProductFlydownOpen || isCompanyFlydownOpen;

  const toggleProductFlydown = () => {
    setProductFlydownOpen(!isProductFlydownOpen);
    setCompanyFlydownOpen(false); // Close the company flydown when toggling the product flydown
  };

  const toggleCompanyFlydown = () => {
    setCompanyFlydownOpen(!isCompanyFlydownOpen);
    setProductFlydownOpen(false); // Close the product flydown when toggling the company flydown
  };

  const closeFlydowns = () => {
    setProductFlydownOpen(false);
    setCompanyFlydownOpen(false);
  };

  const getNavbarBackgroundColor = () => {
    if (isFlydownOpen || isScrolled) return 'bg-white';
    return navbarColors[pathname] || navbarColors.default;
  };


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if click is outside both flydowns
      if (
        isFlydownOpen &&
        productFlydownRef.current &&
        !productFlydownRef.current.contains(event.target as Node) &&
        companyFlydownRef.current &&
        !companyFlydownRef.current.contains(event.target as Node)
      ) {
        closeFlydowns();
      }
    }

    // Use 'click' instead of 'mousedown' to avoid conflicts with button click events
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFlydownOpen]);

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
    <Disclosure as="nav" className={`fixed z-30 w-full transition-colors duration-150 ${isScrolled || isFlydownOpen ? 'bg-white' : `${getNavbarBackgroundColor()}`}`}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" passHref>
                    <Image
                      alt="Your Company"
                      src={`${isFlydownOpen || isScrolled ? '/assets/images/PL8CHATBlack.png' : '/assets/images/PL8CHATWhite.png'}`}
                      className="h-10 lg:h-11 w-auto transition duration-150"
                      width={240}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex -space-x-1 xl:space-x-4 text-nowrap">
                    {navigation.map((item) => {
                      const isActive = item.href === pathname;
                      return (
                        <Link href={item.href}>
                          <button
                            key={item.name}
                            onClick={() => {
                              if (item.name === 'Products') {
                                toggleProductFlydown();
                              } else if (item.name === 'Company') {
                                toggleCompanyFlydown();
                              } else {
                                closeFlydowns()
                              }
                            }}
                            aria-current={isActive ? 'page' : undefined}
                            className={classNames(
                              isActive ? (isScrolled || isFlydownOpen ? 'text-offBlack hover:text-darkGreenTest' : '') : (isScrolled || isFlydownOpen ? 'text-offBlack hover:text-darkGreenTest' : 'text-white hover:text-tGreen'),
                              `rounded-md px-3 py-3 text-md lg:text-lg font-semibold`
                            )}
                          >
                            {item.name === 'Products' || item.name === 'Company' ? (
                              <div>
                                {item.name}
                                <ChevronDownIcon
                                  className={`ml-0.5 h-4 w-4 inline-block transition duration-150 ${isProductFlydownOpen && item.name === 'Products' ? 'rotate-180' :
                                    isCompanyFlydownOpen && item.name === 'Company' ? 'rotate-180' : ''} ${inter.className}`}
                                />
                              </div>
                            ) : (
                              <span>{item.name}</span>
                            )}
                          </button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right-side items (shown on larger screens) */}
              <div className="sm:flex sm:items-center sm:pr-2 text-md font-semibold">
                <div className={`hidden lg:flex lg:items-center space-x-3 ${isScrolled || isFlydownOpen ? 'text-offBlack' : 'text-white'}`}>
                  <div className="py-2">Call us: 1(310)PL8-CHAT</div>
                  <Button
                    variant='secondary'
                    className={`${isScrolled || isFlydownOpen ? 'text-white bg-darkGreenTest hover:bg-darkerGreen' : 'text-offBlack bg-white hover:bg-tGreen'} py-2 scale-[.85]`}
                    href="#"
                  >
                    Talk to sales
                  </Button>
                  <button className={`${isScrolled || isFlydownOpen ? 'text-offBlack hover:text-darkGreen' : 'text-white hover:text-tGreen'} py-2`}>
                    Sign in
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Flydown Components with refs */}
          <div ref={productFlydownRef}>
            <ProductsFlydown isOpen={isProductFlydownOpen} onClose={closeFlydowns} />
          </div>
          <div ref={companyFlydownRef}>
            <CompanyFlydown isOpen={isCompanyFlydownOpen} onClose={closeFlydowns} />
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
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
