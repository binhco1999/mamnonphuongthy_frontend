import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const navigation = [
    { name: 'Trang chủ', href: '/', current: true },
    { name: 'Sự kiện', href: '/news', current: false },
    { name: 'Tuyển dụng', href: '/recruit', current: false },
    { name: 'Liên hệ', href: '/contact', current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

function Header() {
    return (
        <Disclosure as="nav" className="bg-pink-700 sticky top-0 z-50 ">
            {({ open }) => (
                <Fragment>
                    <div className="mx-auto max-w-7xl px-2 ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Mở trang chính</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <AcademicCapIcon className="block h-6 w-6 lg:h-7 lg:w-7 text-white mr-1" />
                                </div>
                                <Link className="inline-flex justify-center items-center" to={'/'}>
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">
                                        MẦM NON PHƯƠNG THY
                                    </h3>
                                </Link>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 text-sm sm:text-sm md:text-base lg:text-lg font-semibold">
                                        {navigation.map((item) => (
                                            <Link
                                                onClick={() => {
                                                    if (item.current) {
                                                        return;
                                                    } else {
                                                        navigation.forEach((value) => {
                                                            value.current = false;
                                                        });
                                                        item.current = true;
                                                    }
                                                }}
                                                to={item.href}
                                                key={item.name}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-slate-50 text-pink-700'
                                                        : 'text-slate-50 hover:bg-slate-50 transition hover:text-pink-700',
                                                    'px-3 py-2 rounded-md text-sm font-medium',
                                                )}
                                                aria-current={item.current}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-pink-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-800">
                                            <span className="sr-only">Open user menu</span>
                                            <UserIcon
                                                className="block h-6 w-6 text-white rounded rounded-full"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700',
                                                        )}
                                                    >
                                                        Đang phát triển ...
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    onClick={() => {
                                        if (item.current) {
                                            return;
                                        } else {
                                            navigation.forEach((value) => {
                                                value.current = false;
                                            });
                                            item.current = true;
                                        }
                                    }}
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-slate-50 text-pink-700'
                                            : 'text-slate-50 hover:bg-slate-50 hover:text-pink-700',
                                        'block px-3 py-2 rounded-md text-base font-medium',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Fragment>
            )}
        </Disclosure>
    );
}

export default Header;
