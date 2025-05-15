import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import MailingListSubForm from './mailingListSubForm';
import Success from './success';

type ImageModalrProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MailingListModal({ isOpen, onClose }: ImageModalrProps) {
    useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 1000) // 1 second = 1000 ms

      return () => clearTimeout(timer) // Clear timeout if the component unmounts or isOpen changes
    }
  }, [isOpen, onClose])
  
    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0" />
                    {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> */}
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0" onClick={() => handleClose()}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                {/* X button */}
                                {/* <div className="absolute right-5 top-[30px] md:right-9 md:top-[34px] sm:block z-20">
                                    <button
                                        type="button"
                                        className="rounded-md p-2 text-black focus:outline-none"
                                        onClick={handleClose}
                                    >
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div> */}
                                <div>
                                    {/* Content */}
                                    <Success
                                        message="Success!"
                                        onClose={handleClose}
                                        visible={isOpen}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
