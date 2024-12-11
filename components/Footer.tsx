import { NAVITEMS, socialIcons } from '@/content'
import Link from 'next/link'



export function Footer() {
    return (
        <footer
            className="relative bg-cover bg-center text-white py-12"
            style={{ backgroundImage: "url('/footer.jpg')", backgroundPosition: "bottom" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Explore Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            {NAVITEMS.map((item) => (
                                <li key={item.name}>
                                    <Link href={`${item.href}`} className="hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {['Terms & Conditions', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="hover:underline">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect with Us Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                        <ul className="space-y-2">
                            {socialIcons.map(({ Icon, href, name }) => (
                                <li key={name}>
                                    <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                                        <Icon className="w-5 h-5" />
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Get in Touch Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2">
                            <li>Email: info@bonvastours.com</li>
                            <li>Phone: +233 26 1671 686</li>
                            <li>Location KNUST, Ayigya Ecocent Street</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                    <p>&copy; {new Date().getFullYear()} Bonvas Tours. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
