'use client'

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import ProductsFlydown from './productsFlydown'
import CompanyFlydown from './companyFlydown'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

type SVGProps = React.SVGAttributes<SVGSVGElement>;

const navigation: NavigationItem[] = [
  { name: 'Products', href: '#', current: true },
  { name: 'Pricing', href: '#', current: false },
  { name: 'For Individuals', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
]

function ChevronDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        stroke='currentColor'
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarFinal() {
  const pathname = usePathname()
  const [isProductFlydownOpen, setProductFlydownOpen] = useState(false)
  const [isCompanyFlydownOpen, setCompanyFlydownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isFlydownOpen = isProductFlydownOpen || isCompanyFlydownOpen

  const toggleProductFlydown = () => {
    setProductFlydownOpen(!isProductFlydownOpen)
    setCompanyFlydownOpen(false)
  }

  const toggleCompanyFlydown = () => {
    setCompanyFlydownOpen(!isCompanyFlydownOpen)
    setProductFlydownOpen(false)
  }

  const closeProductFlydown = () => {
    setProductFlydownOpen(false)
  }

  const closeCompanyFlydown = () => {
    setCompanyFlydownOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Disclosure as="nav" className={`fixed w-full transition-colors duration-250 ${isScrolled || isFlydownOpen ? 'bg-white' : 'bg-darkGreen'}`}>
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
                      src="/assets/images/PL8CHAT.png"
                      className="h-10 lg:h-12 w-auto transition duration-250"
                      style={{
                        filter: isScrolled || isFlydownOpen ? 'brightness(0) invert(0)' : 'none',
                      }}
                      width={120}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex -space-x-1 xl:space-x-4 text-nowrap">
                    {navigation.map((item) => {
                      const isActive = item.href === pathname;
                      return (
                        <button
                          key={item.name}
                          onClick={() => {
                            if (item.name === 'Products') {
                              toggleProductFlydown();
                            } else if (item.name === 'Company') {
                              toggleCompanyFlydown();
                            } else {
                              closeProductFlydown();
                              closeCompanyFlydown();
                            }
                          }}
                          aria-current={isActive ? 'page' : undefined}
                          className={classNames(
                            isActive ? (isScrolled || isFlydownOpen ? 'text-darkGreen hover:text-darkGreen' : 'text-lightGreen') : (isScrolled || isFlydownOpen ? 'text-black hover:text-darkGreen' : 'text-gray-300 hover:text-white'),
                            'rounded-md px-3 py-3 text-md lg:text-lg font-medium'
                          )}
                        >
                          {item.name === 'Products' || item.name === 'Company' ? (
                            <div className={`${isProductFlydownOpen && item.name === 'Products' ? 'text-darkGreen' : ''} ${isCompanyFlydownOpen && item.name === 'Company' ? 'text-darkGreen' : ''}`}>
                              {item.name}
                              <ChevronDownIcon
                                className={`ml-2 h-4 w-4 inline-block transition ${isProductFlydownOpen && item.name === 'Products' ? 'rotate-180' : 
                                  isCompanyFlydownOpen && item.name === 'Company' ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          ) : (
                            <span>{item.name}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right-side items (shown on larger screens) */}
              <div className="sm:flex sm:items-center sm:pr-0">
                <div className={`hidden lg:flex space-x-4 ${isScrolled || isFlydownOpen ? 'text-black' : 'text-white'}`}>
                  <div className='py-2'>
                    Call us: 1 (310) PL8-CHAT
                  </div>
                  <button
                    type="button"
                    className={`relative rounded-md p-1 ${isScrolled || isFlydownOpen ? 'text-white bg-darkGreen' : 'text-black bg-white'}`}
                  >
                    Talk to Sales
                  </button>
                  <button className={`${isScrolled || isFlydownOpen ? 'text-black hover:text-darkGreen' : 'text-white'}`}>
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Flydown Component */}
          <ProductsFlydown isOpen={isProductFlydownOpen} onClose={() => setProductFlydownOpen(false)} />
          <CompanyFlydown isOpen={isCompanyFlydownOpen} onClose={() => setCompanyFlydownOpen(false)} />

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
  )
}
