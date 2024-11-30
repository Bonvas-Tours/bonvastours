'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { navItems } from '@/content';
import SocialLinks from './SocialLinks';

function NavbarClient() {
    const [navToggle, setNavToggle] = useState(false);

    return (
        <>
            {/* Mobile version */}
            <div className="md:hidden">
                <button
                    className="text-neutral-500 hover:text-primary cursor-pointer focus:outline-none"
                    onClick={() => setNavToggle(!navToggle)}
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {navToggle && (
                <div className="fixed z-20">
                    <div
                        className="w-full fixed inset-0 bg-neutral-800/70"
                        onClick={() => setNavToggle(false)}
                    ></div>
                    <div className="fixed top-0 bottom-0 left-0 w-[75%] md:w-[50%] bg-white z-30">
                        <IoClose
                            className="text-2xl absolute right-3 mt-4 cursor-pointer"
                            onClick={() => setNavToggle(false)}
                        />
                        <nav className="mt-14">
                            <ul className="flex flex-col">
                                {navItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className="text-neutral-500 hover:text-primary transition-all duration-300 text-sm font-medium border-b-[1px]"
                                    >
                                        <Link
                                            href={item.href}
                                            className="w-full block px-5 py-3"
                                            onClick={() => setNavToggle(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <div className='mt-5'>
                                    <SocialLinks />
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavbarClient;
