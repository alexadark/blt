import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

import { FaChevronRight } from 'react-icons/fa';

export const CollapseSection = ({ children, className, ...props }) => {
  return (
    <section
      className={`px-6 py-5 bg-white border shadow-section border-grey2 transition duration-500  ease-out ${className}`}
      {...props}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center cursor-pointer focus:outline-none">
              <FaChevronRight
                color="lightBlue"
                size="49px"
                className={`${
                  open ? 'transform rotate-90' : ''
                } transition duration-500 mr-5`}
              />
              <h3 className="text-grey5 text-f-36">Title</h3>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-700 ease-out"
              enterFrom="opacity-0  transform -translate-y-4"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition duration-200 ease-out"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="transform opacity-0 -translate-y-4">
              <Disclosure.Panel static>{children}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </section>
  );
};
