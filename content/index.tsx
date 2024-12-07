import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { Plane, GraduationCap, Car, Map, Briefcase, Compass, Bus, UserCheck, Globe } from "lucide-react";
import { IconType } from 'react-icons';

export const NAVITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Tour packages', href: '/tour-packages' },
  { name: 'IWASA', href: 'https://iwasa.bonvastours.com/' },
  { name: 'Swiftnano', href: 'https://www.rideswiftnano.com/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

type Slide = {
  id: number;
  image: string;
  alt?: string;
};

export const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/slides/slide1.jpg',

  },
  // {
  //   id: 2,
  //   image: '/slides/slide2.jpg',

  // },
  {
    id: 3,
    image: '/slides/slide3.jpg',

  },
  {
    id: 4,
    image: '/slides/slide4.jpg',

  },
  {
    id: 5,
    image: '/slides/slide5.jpg',

  },
]

type SocialIcon = {
  Icon: IconType;
  href: string;
  name: string;
};

export const socialIcons: SocialIcon[] = [
  { Icon: FaFacebookF, href: 'https://facebook.com/bonvastours', name: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com/bonvastours', name: 'Instagram' },
  { Icon: FaLinkedinIn, href: 'https://linkedin.com/company/bonvastours', name: 'LinkedIn' },
  { Icon: FaTiktok, href: 'https://www.tiktok.com/@bonvas.tours', name: 'TikTok' },
]



export const DESTINATIONS = [
  "Ghana",
  "Paris, France",
  "London, UK",
  "Rome, Italy",
  "Tokyo, Japan",
  "New York, USA",
  "Sydney, Australia",
  "Dubai, UAE",
  "Cape Town, South Africa",
  "Rio de Janeiro, Brazil",
  "Bangkok, Thailand",
  "Barcelona, Spain",
  "Bali, Indonesia",
  "Istanbul, Turkey",
  "Santorini, Greece",
  "Cairo, Egypt",
  "Lima, Peru",
  "Mexico City, Mexico",
  "Beijing, China"
];

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const SERVICES = [
  {
    id: 1,
    title: 'Flight Ticketing & Hotel Reservations',
    desc: "Global Reservations Made Simple. We provide seamless airline ticketing and hotel booking services, leveraging our partnerships with Amadeus and IATA. With competitive prices and various payment options, including flexible installment plans, you can book now and pay over time. Our team ensures you receive the best value with every booking, handling everything from emergency trips to long-awaited vacations.",
    image: '/airline-reservation.jpg',
    icon: Plane,
    variant: "dark" as const,
  },
  {
    id: 2,
    title: 'Internship, Work, and Study Abroad (IWASA)',
    desc: "International Opportunities for Aspiring Professionals. Unlock global opportunities with IWaS Abroad by Bonvas Tours. Whether you're an undergraduate, postgraduate, or recent graduate, our program is tailored to help you step onto the international stage and elevate your career.",
    image: '/study_abroad.jpg',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Car Rental',
    desc: "Your Reliable Travel Companion on the Road. Bonvas Tours offers a fleet of well-maintained vehicles, including SUVs, sedans, minivans, and buses for self-drive or chauffeur-driven rentals. Whether for city tours, intercity travel, or event transportation, our flexible car rental options ensure convenience and reliability. Enjoy the freedom to explore at your own pace with Bonvas Tours Car Rentals.",
    image: '/car_rentals.jpg',
    icon: Car,
  },
  {
    id: 4,
    title: 'All-Year-Round Excursions and Tour',
    desc: "Explore Ghana and Beyond Throughout the Year. Our year-round excursion packages cater to groups, educational institutions, corporate bodies, families, and individuals. From serene eco-tours to exhilarating city explorations, we create unique experiences with customizable options. Packages include transportation, accommodations, meals, attractions, and tour guides to ensure a seamless and enjoyable experience.",
    image: '/all_year_round_excursion.jpg',
    icon: Map,
  },
  {
    id: 5,
    title: 'Ground Handling Services',
    desc: 'Comprehensive Support for International Events. Planning an event in Africa and need a dependable partner on the ground? Bonvas Tours is your trusted representative for seamless travel and event coordination.',
    image: '/ground_handling.jpg',
    icon: Briefcase,
  },
  {
    id: 6,
    title: 'Tour Guiding',
    desc: 'Discover the heart of Ghana and beyond with Bonvas Tours’ expert tour guides by your side. Our team of highly-trained, professional guides is passionate about sharing the rich culture, history, and hidden gems of the region.',
    image: '/tour_guiding.jpg',
    icon: Compass,
  },
  {
    id: 7,
    title: 'Swiftnano (Campus Transport Services)',
    desc: "Swiftnano offers convenient and reliable transportation for students and educational institutions. Through our online booking system, users can easily check bus availability, choose their preferred seats, and confirm bookings from their devices. We aim to reduce the transportation hassles for students while ensuring affordable and accessible transport solutions.",
    image: '/swiftnano.jpg',
    icon: Bus,
  },
  {
    id: 8,
    title: 'Travel and Tour Consultations',
    desc: "Expert Guidance for Your Next Adventure. Our travel consultants are here to help you plan every detail of your journey. From documentation, visa mock, and tailored itineraries to destination recommendations, our consultations ensure you make the most out of your travel experience. Whether you’re seeking to relocate, study, have a romantic honeymoon, a corporate retreat, or a cultural immersion, we’ll help you every step of the way.",
    image: '/ground_handling.jpg',
    icon: UserCheck,
  },
  {
    id: 9,
    title: 'Visa Assistance Services (VAS)',
    desc: "Streamlined Visa Support for International Travel. Navigating the visa application process can be challenging. Bonvas Tours offers Visa Assistance Services (VAS) to simplify the process. Our experienced team helps clients gather the necessary documents, prepare applications, and navigate the requirements specific to each country, providing peace of mind as you embark on your journey.",
    image: '/swiftnano.jpg',
    icon: Globe,
  },
  {
    id: 10,
    title: 'Private and Public Trips',
    desc: "Personalized Tours for Every Occasion. Whether you’re planning a family getaway, an institutional tour, or a solo adventure, Bonvas Tours offers private and public trip options tailored to your preferences. Our tours span across Ghana and select international destinations, providing enriching experiences designed to match diverse travel styles and budgets.",
    image: '/tour_guiding.jpg',
    icon: Map,
  },
  {
    id: 11,
    title: 'MICE',
    desc: "Your Partner for Corporate and Incentive Travel. Bonvas Tours offers specialized travel arrangements for corporate meetings, incentive trips, conferences, and exhibitions. We handle all travel logistics, including transportation, accommodations, and event management, allowing companies to focus on their core goals. Our MICE services are crafted to ensure productivity, comfort, and a memorable experience for all attendees.",
    image: '/all_year_round_excursion.jpg',
    icon: Briefcase,
  },
]


export const events = [
  {
    image: "/tour/1.jpg",
    title: "Orange December",
    description: "A coastal Bliss and Cultural Carnival in Takoradi",
    date: "25 December, 2024",
    href: "#",
  },
  {
    image: "/event/1.jpg",
    title: "African Cancer Coalition Meeting",
    description:
      "It is almost impossible to read the news without coming across a lead story elections...",
    date: "30 December, 2024",
    href: "#",
  },
  {
    image: "/event/2.jpg",
    title: "Launching Swiftnano",
    description:
      "Swiftnano gives users the chance to check for availability of buses, book seats, and pay online.",
    date: "30 December, 2024",
    href: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Elliot Lassey",
    region: "Central Region",
    role: "CEO of Nexura",
    rating: 4,
    image: "/testimonial/1.jpg",
    review: "had an amazing experience with Bonvas Tours! Their service was exceptional from start to finish. The team was professional, friendly, and attentive to every detail, ensuring a smooth and memorable trip."
  },
  {
    id: 2,
    name: "Jonathan Banner",
    role: "Administrator at EcoBank",
    rating: 5,
    image: "/testimonial/2.jpg",
    review: "The tour exceeded all my expectations. The guides were knowledgeable and the itinerary was perfectly planned."
  },
  {
    id: 3,
    name: "Esther Mensah",
    role: "Lecture at KNUST",
    rating: 5,
    image: "/testimonial/3.jpg",
    review: "Bonvas Tours provided an exceptional experience. Every detail was taken care of, making our trip truly memorable."
  },
  {
    id: 4,
    name: "Divine Alexander",
    role: "Lecturer at UCC",
    rating: 5,
    image: "/testimonial/4.jpg",
    review: "We strive to provide the best service to our clients, and their satisfaction is our top priority."
  },
  {
    id: 5,
    name: "Lydia Amobil",
    role: "Head of IWASA",
    rating: 5,
    image: "/testimonial/5.jpg",
    review: "A wonderful experience from start to finish. The attention to detail was impressive."
  }
]

export const partners = [
  { src: "/partner/acs.png", alt: "America Cancer Society Logo" },
  { src: "/partner/Amadeus.png", alt: "Amedeus Logo" },
  { src: "/partner/bgg.png", alt: "Bonvas Group Global Logo" },
  { src: "/partner/gta.png", alt: "Ghana Toursim Authority Logo" },
  { src: "/partner/iwasa.png", alt: "IWASA Logo" },
  { src: "/partner/knust.png", alt: "Kwame Nkrumah University of Science and Technology Logo" },
  { src: "/partner/ksb.png", alt: "Kumasi School of Business Logo" },
  { src: "/partner/nccn.png", alt: "National Comprehensive Cancer Network Logo" },
  { src: "/partner/kstu.png", alt: "KsTu logo" },
  { src: "/partner/pi.png", alt: "Placement International logo" },

]