import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Plane, GraduationCap, Car, Map, Briefcase, Compass, Bus } from 'lucide-react'


export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Tour packages', href: '/tour-packages' },
  { name: 'IWASA', href: 'https://iwasa.bonvastours.com/' },
  { name: 'Swiftnano', href: 'https://www.rideswiftnano.com/' },
  { name: 'About', href: '/about' },
  // { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export const socialIcons = [
  { Icon: FaFacebookF, href: 'https://facebook.com/bonvastours' },
  { Icon: FaInstagram, href: 'https://instagram.com/bonvastours' },
  { Icon: FaLinkedinIn, href: 'https://linkedin.com/company/bonvastours' },
]

export const services = [

  {
    id: 1,
    title: 'Airline Reservation & Ticketing',
    desc: "At Bonvas Tours, we know that planning a trip can be exciting but also overwhelming. That’s why we’re here to make your journey as smooth and stress-free as possible.",
    image: '/airline-reservation.jpg',
    icon: Plane,
    variant: "dark" as const,

  },
  {
    id: 2,
    title: 'Internship, Work and Study Abroad',
    desc: "Unlock global opportunities with IWaS Abroad by Bonvas Tours. Whether you're an undergraduate, postgraduate, or recent graduate, our program is tailored to help you step onto the international stage and elevate your career.",
    image: '/study_abroad.jpg',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Car Rental',
    desc: "Need a car for city errands, intercity travels, or special events? Bonvas Car Rentals has you covered! Whether it’s a sleek sedan, a spacious SUV, or a versatile minivan, our fleet of well-maintained vehicles is ready to meet your transportation needs.",
    image: '/car_rentals.jpg',
    icon: Car,
  },
  {
    id: 4,
    title: 'All Year-Round Excursions and Tours',
    desc: "At Bonvas Tours, every season is travel season! We create unforgettable experiences for groups, schools, corporate teams, associations, families, and solo adventurers with our diverse range of tour packages.",
    image: '/all_year_round_excursion.jpg',
    icon: Map,
  },
  {
    id: 5,
    title: 'Ground Handling Services',
    desc: 'Planning an event in Africa and need a dependable partner on the ground? Bonvas Tours is your trusted representative for seamless travel and event coordination.',
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
    title: 'Swiftnano',
    desc: "Introducing Swiftnano, the next generation of Bonvas Campus Transport Services. What began as a bus rental service for universities and students has evolved into a hassle-free online booking system.",
    image: '/swiftnano.jpg',
    icon: Bus,
  }
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
    name: "Priscy Frimps",
    region: "Central Region",
    role: "",
    rating: 4,
    image: "/placeholder.svg",
    review: "had an amazing experience with Bonvas Tours! Their service was exceptional from start to finish. The team was professional, friendly, and attentive to every detail, ensuring a smooth and memorable trip."
  },
  {
    id: 2,
    name: "Mimi A.",
    role: "Administrator",
    rating: 5,
    image: "/placeholder.svg",
    review: "The tour exceeded all my expectations. The guides were knowledgeable and the itinerary was perfectly planned."
  },
  {
    id: 3,
    name: "Naana A.A.A",
    role: "Administrator",
    rating: 5,
    image: "/placeholder.svg",
    review: "Bonvas Tours provided an exceptional experience. Every detail was taken care of, making our trip truly memorable."
  },
  {
    id: 4,
    name: "NANA BONAH",
    role: "CEO of Bonvas Tours",
    rating: 5,
    image: "/placeholder.svg",
    review: "We strive to provide the best service to our clients, and their satisfaction is our top priority."
  },
  {
    id: 5,
    name: "Lydia Amobil",
    role: "Head of IWASA",
    rating: 5,
    image: "/placeholder.svg",
    review: "A wonderful experience from start to finish. The attention to detail was impressive."
  }
]
