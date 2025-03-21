
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';
import TopLoader from '@/components/TopLoader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://www.bonvastours.com'),
  title: {
    default: 'Bonvas Tours Ltd. | Explore the Rich Heritage of Ghana and Africa',
    template: '%s | Bonvas Tours Ltd.'
  },
  description: 'Bonvas Tours Ltd. offers unforgettable travel experiences in Ghana and Africa. Discover vibrant cultures, breathtaking landscapes, and sustainable tourism with our tech-driven, customer-focused services.',
  keywords: ['Bonvas Tours', 'tourism in Ghana', 'Africa travel', 'sustainable tourism', 'Ghana tours', 'African heritage', 'Detty December', 'Orange December', 'December in Ghana', 'Zember Ghana', 'tour packages in Ghana', 'cultural travel', 'eco-friendly travel', 'best tour operators in Ghana', 'travel and hospitality in Africa', 'Africa tour services'],
  authors: [{ name: 'Bonvas Tours Ltd.' }],
  creator: 'Bonvas Tours Ltd.',
  publisher: 'Bonvas Tours Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Bonvas Tours Ltd. | Discover the Spirit of Africa',
    description: 'Experience the joy of tourism in Ghana and Africa with Bonvas Tours. Offering customized travel packages, sustainable tourism practices, and memorable adventures.',
    url: 'https://www.bonvastours.com',
    siteName: 'Bonvas Tours Ltd.',
    images: [
      {
        url: '/slide1.jpg',
        width: 800,
        height: 600,
        alt: 'Bonvas Tours Logo',
      },
      {
        url: '/slides/slide3.jpg',
        width: 1200,
        height: 630,
        alt: 'Discover Africa with Bonvas Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bonvastours',
    title: 'Bonvas Tours Ltd. | Explore the Spirit of Africa',
    description: 'Bonvas Tours Ltd. offers premium, sustainable travel experiences in Ghana and Africa. Book your adventure today and experience the best of African culture and landscapes.',
    images: ['/slide1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.bonvastours.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.variable}>
        <TopLoader />
        {children}
        <Toaster position="top-right" richColors />
        <SpeedInsights />
      </body>
    </html>
  );
}
