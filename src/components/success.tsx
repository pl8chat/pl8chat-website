'use client'
import { useState, useEffect, forwardRef } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import CheckMark from './svgs/SuccessAlert'

type SuccessProps = {
  message: string,
  onClose: () => void,
  visible: boolean,
  ref: any
}

const Success = forwardRef<HTMLDivElement, SuccessProps>(
  ({ message, onClose, visible }, ref) => {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
      if (visible !== show) {
        setShow(visible);
      }
    }, [visible]);

    return (
      <div ref={ref} className={show ? '' : 'hidden'}>
        {/* <div className='flex justify-center'>
          <div className="rounded-md bg-green-50 p-4 z-10 absolute max-w-3/4 -top-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{message}</p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                    onClick={() => {
                      setShow(false)
                      onClose()
                    }}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-[350px] px-6 py-2 bg-white rounded-lg shadow-md inline-flex justify-start items-start gap-2">
          <div className="w-6 h-6 relative overflow-hidden">
            <CheckMark />
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-emerald-950 text-base font-semibold font-['Inter'] leading-snug">Success!</div>
            <div className="justify-start text-emerald-950 text-xs font-normal font-['Inter'] leading-normal">This email has been added to our mailing list.</div>
          </div>
        </div>
      </div>
    );
  }
);

export default Success;