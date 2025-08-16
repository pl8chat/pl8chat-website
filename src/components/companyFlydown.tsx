import { PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react';
import Image from 'next/image';

type FlydownProps = {
  isOpen: boolean;
  onClose: () => void;
};

interface Solution {
  name: string;
  description: string;
  href: string;
  icon: string | React.ElementType;
}

interface CallToAction {
  name: string;
  href: string;
  icon: string | React.ElementType;
}

const solutions: Solution[] = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure",
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using",
    href: '#',
    icon: SquaresPlusIcon,
  },
];

const callsToAction: CallToAction[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
];

export default function CompanyFlydown({ isOpen, onClose }: FlydownProps) {
  const flydownRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={flydownRef}
      className={`absolute inset-x-0 top-full z-50 bg-white shadow-lg transition-all duration-300 ease-out ${isOpen ? 'accordionOpen accordion' : 'accordion'}`}
    >
      <div className='accordionInner'>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-5 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          {solutions.map((item) => (
            <div
              key={item.name}
              className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                {typeof item.icon === 'string' ? (
                  <Image src={item.icon} alt="placeholder" width={44} height={44} className="rounded-lg" />
                ) : (
                  <item.icon className="h-6 w-6 text-gray-700 group-hover:text-darkGreen" aria-hidden="true" />
                )}
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0"
                >
                  <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
