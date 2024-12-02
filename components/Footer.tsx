import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer
            className="relative bg-cover bg-center text-white py-12"
            style={{ backgroundImage: "url('/slide1.jpg')", backgroundPosition: "bottom" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/95"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Explore Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            {['Home', 'Tour Packages', 'IWaSA', 'Swiftnano', 'About Us', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Intellectual Property Rights'].map((item) => (
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
                            <li>
                                <Link href="https://facebook.com" className="flex items-center hover:underline">
                                    <Facebook className="w-5 h-5 mr-2" /> Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com" className="flex items-center hover:underline">
                                    <Instagram className="w-5 h-5 mr-2" /> Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com" className="flex items-center hover:underline">
                                    <Twitter className="w-5 h-5 mr-2" /> Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com" className="flex items-center hover:underline">
                                    <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Get in Touch Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2">
                            <li>Email: info@bonvastours.com</li>
                            <li>Phone: +233 26 1671 686</li>
                            <li>Location KNUST, Ayigya Ecoscent Street</li>
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
