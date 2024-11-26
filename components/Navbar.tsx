import Link from 'next/link'
import { navItems, socialIcons } from '@/content'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

function Navbar() {
    return (
        <header className="bg-white text-neutral-500">
            <nav className="section_container !py-0">
                <div className="flex-between h-16">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <SocialLinks />
                    <div className="md:hidden">
                        <button className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
