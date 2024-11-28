export interface Testimonial {
  id: number
  name: string
  role: string
  region?: string
  rating: number
  image: string
  review: string
}

export interface TourPackageProps {
  id: string
  slug: string
  title: string
  location: string
  region: string
  price: number
  startDate: string
  duration: string
  imageUrls: string[]
}

export interface TourFiltersProps {
  month?: string
  destination?: string
  search?: string
}

export interface TourPackageDetailsProps extends TourPackageProps{
  rating: number
  reviews: number
  description: string
  startDate: string
  endDate: string
  inclusions: string[]
  exclusions: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
  gallery: string[]
  pricing: {
    adult: number
    couple: number
    childWithBed: number
    childWithoutBed: number
  }
  mapUrl: string
}