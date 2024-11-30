
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Bonvas Tours Ltd. | Explore the Rich Heritage of Ghana and Africa',
  description: 'Bonvas Tours Ltd. offers unforgettable travel experiences in Ghana and Africa. Discover vibrant cultures, breathtaking landscapes, and sustainable tourism with our tech-driven, customer-focused services.',
  keywords: [
    'Bonvas Tours',
    'tourism in Ghana',
    'Africa travel',
    'sustainable tourism',
    'Ghana tours',
    'African heritage',
    'cultural travel',
    'eco-friendly travel',
    'best tour operators in Ghana',
    'travel and hospitality in Africa',
    'Africa tour services',
  ],
  author: 'Bonvas Tours Ltd.',
  robots: 'index, follow',

  // Open Graph Meta Tags for better social media preview
  openGraph: {
    title: 'Bonvas Tours Ltd. | Discover the Spirit of Africa',
    description: 'Experience the joy of tourism in Ghana and Africa with Bonvas Tours. Offering customized travel packages, sustainable tourism practices, and memorable adventures.',
    url: 'https://www.bonvastours.com',
    site_name: 'Bonvas Tours Ltd.',
    images: [
      {
        url: '/slide1.jpg',
        width: 800,
        height: 600,
        alt: 'Bonvas Tours Logo',
      },
      {
        url: '/slide1.jpg',
        width: 1200,
        height: 630,
        alt: 'Discover Africa with Bonvas Tours',
      },
    ],
    type: 'website',
  },

  // Twitter Card Meta Tags
  twitter: {
    card: '/slide1.jpg',
    site: '@bonvastours', // Twitter handle for the company
    title: 'Bonvas Tours Ltd. | Explore the Spirit of Africa',
    description: 'Bonvas Tours Ltd. offers premium, sustainable travel experiences in Ghana and Africa. Book your adventure today and experience the best of African culture and landscapes.',
    image: '/slide1.jpg', // Replace with an image URL
  },

  // Additional SEO meta tags
  metaTags: [
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'og:image',
      content: '/slide1.jpg',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:locale',
      content: 'en_US',
    },
    {
      name: 'og:site_name',
      content: 'Bonvas Tours Ltd.',
    },
    {
      name: 'og:url',
      content: 'https://www.bonvastours.com', // Replace with your actual URL
    },
  ],

  // Structured Data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Bonvas Tours Ltd.",
    "description": "Bonvas Tours Ltd. offers unforgettable travel experiences in Ghana and Africa, focusing on cultural immersion, eco-tourism, and adventure.",
    "url": "https://www.bonvastours.com", // Replace with your actual URL
    "logo": "/slide1.jpg", // Replace with your logo image URL
    "sameAs": [
      "https://www.facebook.com/BonvasTours",
      "https://twitter.com/BonvasTours",
      "https://www.instagram.com/BonvasTours", // Add other social media profiles here
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ecocent Road, Ayigya",
      "addressLocality": "Kumasi",
      "addressCountry": "Ghana",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233 26 1671 686",
      "contactType": "Customer Service",
      "areaServed": "GH",
      "availableLanguage": "English",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
