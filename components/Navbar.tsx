import Link from 'next/link';
import { navItems } from '@/content';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import MobileMenu from './MobileMenu';

function Navbar() {
    return (
        <header className=" text-neutral-500">
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
                    <div className="hidden md:block">
                        <SocialLinks />
                    </div>

                    {/* Client Component for Mobile Navbar */}
                    <MobileMenu />
                </div>
            </nav>

        </header>
    );
}

export default Navbar;
