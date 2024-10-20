'use client'

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'About us', href: '/about', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname()


  return (
    <Disclosure as="nav" className="bg-darkGreen fixed w-full">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 text-white" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-lelft sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'}>
                    <img
                      alt="PL8CHAT Text Logo"
                      src="/assets/images/PL8CHAT.png"
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {/* <div className="flex -space-x-1 xl:space-x-4 text-nowrap">
                    {navigation.map((item) => {
                      const isActive = item.href === pathname; // Declare isActive here
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isActive ? 'page' : undefined}
                          className={classNames(
                            isActive ? 'bg-white text-darkGreen' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-3 text-md lg:text-lg font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}

                  </div> */}
                </div>
              </div>

              {/* Right-side items are hidden on mobile */}
              <div className="sm:flex sm:items-center sm:pr-0">
                <div className='hidden sm:flex space-x-4 text-md lg:text-lg text-white'>
                  {navigation.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='py-2 hover:text-gray-300'>
                        {item.name}
                      </Link>
                    )
                  })}
                </div>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="lg:hidden relative ml-3">
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
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden flex justify-end">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames('block rounded-md px-3 py-2 text-base font-medium text-white')}
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
