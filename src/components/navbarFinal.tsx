'use client'

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import ProductsFlydown from './productsFlydown'
import CompanyFlydown from './companyFlydown'
import Modal from './modal'
import Contact from './contactForm'
import { Button } from './ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Logo from './svgs/logoSVG'
import LogoBlack from './svgs/logoBlack'

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
  const pathname = usePathname();
  const [isProductFlydownOpen, setProductFlydownOpen] = useState(false);
  const [isCompanyFlydownOpen, setCompanyFlydownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
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

  const getNavbarButtonColor = () => {
    if (isFlydownOpen || isScrolled) return 'bg-darkGreen hover:bg-darkerGreen text-white';
    return navBarButtonColors[pathname] || navbarColors.default;
  }

  const getTextColor = (isButton: boolean = false): string => {
    if (isScrolled || isFlydownOpen) {
      return isButton ? 'text-white hover:text-darkGreen' : 'text-offBlack hover:text-darkGreen';
    }
    return isButton
      ? 'text-white hover:text-tGreen'
      : textColors[pathname] || textColors.default;
  };

  const getLogoSrc = () => {
    if (isFlydownOpen || isScrolled) return '/assets/images/PL8CHATBlack.png';
    return logoSrc[pathname] || logoSrc.default;
  }

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
      <Disclosure as="nav" className={`fixed z-30 w-full transition-colors duration-150 ${isScrolled || isFlydownOpen ? 'bg-white' : `${getNavbarBackgroundColor()}`}`}>
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8 py-2 h-[58px] flex items-center">

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
                <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                  <div className="flex items-center">
                    <Link href="/" passHref>
                      {isScrolled || isFlydownOpen || pathname === '/pricing' || pathname === '/individuals' ? <LogoBlack /> : <Logo />}
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex -space-x-1 xl:space-x-4 text-nowrap">
                      {navigation.map((item) => {
                        const isActive = item.href === pathname;
                        return (
                          <Link href={item.href} key={item.name}>
                            <button
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
                              className={classNames(getTextColor(), 'rounded-md px-3 py-3 text-md lg:text-base font-medium')}
                            >
                              {item.name === 'Products' || item.name === 'Company' ? (
                                <div>
                                  {item.name}
                                  <ChevronDownIcon
                                    className={`ml-0.5 h-4 w-4 inline-block transition duration-150 ${isProductFlydownOpen && item.name === 'Products' ? 'rotate-180' :
                                      isCompanyFlydownOpen && item.name === 'Company' ? 'rotate-180' : ''}`}
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
                <div className="sm:flex sm:items-center text-sm font-normal">
                  <div className="hidden lg:flex lg:items-center gap-4">
                    <div className={getTextColor().replace(/hover:\S+/g, '')}>
                      Call us: 1(310)PL8-CHAT
                    </div>
                    <Button
                      variant="navBar"
                      className={classNames(
                        getNavbarButtonColor()
                      )}
                      onClick={() => setModalOpen(true)}
                      href="#"
                    >
                      Talk to sales
                    </Button>
                    <button
                      className={classNames(
                        getTextColor(),
                        'py-2'
                      )}
                    >
                      Sign in
                    </button>
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
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} component={<Contact isModal={true} />} />
    </div>
  );
}
