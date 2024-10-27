'use client'

import { Disclosure, Menu, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Flydown from './flydown'
import Link from 'next/link'
import { useState } from 'react'
import { DivideIcon } from '@heroicons/react/20/solid'

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
  { name: 'About us', href: '/about', current: false },
  { name: 'Contact', href: '#', current: false },
]

function ChevronDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        stroke='white'
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
  const [isFlydownOpen, setFlydownOpen] = useState(false)

  const toggleFlydown = () => {
    setFlydownOpen(!isFlydownOpen)
  }

  const closeFlydown = () => {
    setFlydownOpen(false)
  }

  return (
    <Disclosure as="nav" className="bg-darkGreen relative">
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
                  <Link href={'/'}>
                    <img
                      alt="Your Company"
                      src="/assets/images/PL8CHAT.png"
                      className="h-10 lg:h-12 w-auto"
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
                          onClick={item.name === 'Products' ? toggleFlydown : closeFlydown}
                          aria-current={isActive ? 'page' : undefined}
                          className={classNames(
                            isActive ? 'text-lightGreen' : 'text-gray-300 hover:text-white',
                            'rounded-md px-3 py-3 text-md lg:text-lg font-medium'
                          )}
                        >
                          {item.name === 'Products' ? (
                            <div>
                              {item.name}
                              <ChevronDownIcon
                                className={`ml-2 h-4 w-4 inline-block transition ${isFlydownOpen ? 'rotate-180' : ''}`}
                              />
                            </div>
                          ) : (
                            <span>{item.name}</span> // Default rendering for other items
                          )}

                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right-side items are hidden on mobile */}
              <div className="sm:flex sm:items-center sm:pr-0">
                <div className='hidden lg:flex space-x-4'>
                  <div className='py-2'>
                    Call us: 1(310)PL8-CHAT
                  </div>
                  <button type="button" className="relative rounded-md bg-white p-1 text-darkGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    Talk to Sales
                  </button>
                  <button>Sign in</button>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="lg:hidden relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <div className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                          <div>Call us: 1(310)PL8-CHAT</div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Talk to Sales
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign in
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          {/* Flydown Component */}
          {isFlydownOpen && <Flydown isOpen={isFlydownOpen} onClose={() => setFlydownOpen(false)} />}

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
