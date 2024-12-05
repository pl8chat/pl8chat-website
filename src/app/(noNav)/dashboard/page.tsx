'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  Cog6ToothIcon,
  FolderIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Pl8CHATGray from '@/components/svgs/PL8CHATGray';
import Dashboardicon from '@/components/svgs/dashboardIcon';
import Messagesicon from '@/components/svgs/messagesIcon';
import speakerphone from '@/components/svgs/speakerphone';
import UserGroup from '@/components/svgs/userGroup';
import Members from '@/components/svgs/members';
import Key from '@/components/svgs/key';
import OfficeBuilding from '@/components/svgs/officeBuilding';
import QuestionMark from '@/components/svgs/questionMark';
import Chat from '@/components/svgs/chat';
import SpeakerphoneWhite from '@/components/svgs/speakerphoneWhite';
import MessagesWhite from '@/components/svgs/messagesWhite';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

interface Settings {
  id: number;
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

interface UserNavigationItem {
  name: string;
  href: string;
}

interface parkingCommunity {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  link: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', icon: Dashboardicon, current: true },
  { name: 'Messages', href: '#', icon: Messagesicon, current: false },
  { name: 'Announcements', href: '#', icon: speakerphone, current: false },
  { name: 'Group chats', href: '#', icon: UserGroup, current: false },
];

const settings: Settings[] = [
  { id: 1, name: 'Members', href: '#', icon: Members, current: false },
  { id: 2, name: 'Admins', href: '#', icon: Key, current: false },
  { id: 3, name: 'Business profile', href: '#', icon: OfficeBuilding, current: false },
];

const userNavigation: UserNavigationItem[] = [
  { name: 'My settings', href: '#' },
  { name: 'Sign out', href: '/' },
];

const parkingCommunity: parkingCommunity[] = [
  { icon: Chat, title: 'Send a “PL8CHAT”', description: 'Start a chat-className conversation with a vehicle simply by entering the license plate number', link: 'Chat now', href: '#' },
  { icon: SpeakerphoneWhite, title: 'Reach all vehicles', description: 'Help and inform everyone in your parking community at once by sending an announcement', link: 'Post an announcement', href: '#' },
  { icon: MessagesWhite, title: 'Group chats', description: 'View insights and data in real time and help your customers stay connected via parking related communication', link: 'Create a group chat now', href: '#' },
]

function classNames(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* mobile */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-[#034b48] text-white'
                                  : 'text-gray-700 hover:bg-[#034b48] hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold text-indigo-200">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {settings.map((setting) => (
                          <li key={setting.name}>
                            <a
                              href={setting.href}
                              className={classNames(
                                setting.current
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold',
                              )}
                            >
                              <setting.icon
                                aria-hidden="true"
                                className={classNames(
                                  setting.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              <span className="truncate">{setting.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[200px] lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 px-2 pb-4">
            <div className="flex h-16 shrink-0 items-center translate-x-1">
              <Link href={`/`}>
                <Pl8CHATGray />
              </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-10">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name} className='flex justify-center'>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-[#034b48] text-white'
                              : 'text-gray-700',
                            'group flex gap-x-3 rounded-md py-2 px-3 text-sm font-semibold items-center h-10 w-[184px]',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                              'h-6 w-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className=''>
                  <div className="text-gray-500 text-xs font-medium leading-none pl-3">Community settings</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1 flex flex-col justify-center">
                    {settings.map((setting) => (
                      <li key={setting.name} className='px-3'>
                        <Link
                          href={setting.href}
                          className={classNames(
                            setting.current
                              ? 'bg-indigo-700 text-white'
                              : 'text-gray-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold items-center',
                          )}
                        >
                          <setting.icon
                            aria-hidden="true"
                            className={classNames(
                              setting.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                              'h-6 w-6 shrink-0',
                            )}
                          />
                          <span className="truncate">{setting.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto px-2">
                  <Link
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 items-center"
                  >
                    <QuestionMark />
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-[200px]">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white pl-[60px] pr-6 shadow-sm sm:gap-x-6 sm:px-6 lg:pl-[60px] lg:pr-6">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

            <div className="flex flex-1 justify-between gap-x-4 self-stretch lg:gap-x-6">
              <div className='flex items-center text-gray-700 text-base font-semibold leading-normal'>
                Home
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm font-semibold text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none w-[160px]"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-3 py-1 text-sm text-gray-700 hover:bg-[#034b48] hover:text-white focus:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <div>
            {/* Your content */}
            <div className='flex flex-col'>
              <div className="h-[193px] px-[60px] py-6 bg-white flex-col justify-start items-start gap-14 inline-flex">
                <div className="self-stretch h-14 flex-col justify-start items-start gap-1 flex">
                  <div className="text-gray-500 text-sm font-normal leading-tight">Blu Laguna Niguel</div>
                  <div className="text-[#034b48] text-xl font-semibold leading-loose">Welcome, Tom</div>
                </div>
                <div className="self-stretch h-[33px] flex-col justify-start items-end gap-5 flex">
                  <div><span className="text-gray-700 text-xs font-normal leading-3">Enjoying PL8CHAT? </span><span className="text-[#034b48] text-xs font-normal leading-3 hover:cursor-pointer">Tell a friend or business</span></div>
                  <div className="self-stretch h-px bg-gray-300" />
                </div>
              </div>

              {/* divider */}
              <div className='px-[60px]'>
                <div className="h-px bg-gray-300 mb-6" />
              </div>

              <div className='flex flex-col gap-9 pb-20'>
                <div className="h-7 px-[60px] flex-col justify-start items-start inline-flex">
                  <div className="text-gray-700 text-xl font-bold leading-7">Connect with your parking community</div>
                </div>
                <div className="h-[204px] px-[60px] flex-col justify-start items-center gap-10 inline-flex">
                  <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    {parkingCommunity.map((item, index) => (
                      <div key={index} className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                        <div className="w-9 h-9 bg-[#034b48] rounded-md justify-center items-center inline-flex">
                          <item.icon />
                        </div>
                        <div className="self-stretch h-[104px] flex-col justify-start items-start gap-2 flex">
                          <div className="self-stretch text-gray-900 text-lg font-medium leading-normal">{item.title}</div>
                          <div className="self-stretch text-gray-500 text-base font-normal leading-normal">{item.description}</div>
                        </div>
                        <div className="justify-start items-center inline-flex">
                          <Link href={item.href} className="text-[#034b48] text-base font-medium leading-normal">{item.link} →</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-3 flex-col justify-center items-center gap-5 inline-flex w-full">
              <div><span className="text-gray-700 text-xs font-normal leading-3">Questions or need help? Call us:</span><span className="text-[#034b48] text-xs font-normal leading-3"> 1(310)PL8-CHAT </span><span className="text-gray-700 text-xs font-normal leading-3">or </span><Link href={'#'} className="text-[#034b48] text-xs font-normal underline leading-3">Contact us</Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
