export interface Testimonial {
  id: number
  name: string
  role: string
  region?: string
  rating: number
  image: string
  review: string
}

export interface TourFiltersProps {
  month?: string
  destination?: string
  search?: string
}

export interface TourPackageProps {
  slug: string;
  title: string;
  location: {
    country: string;
    city?: string; // Optional since it can be empty
    region: string;
  };
  startDate: string;
  endDate: string;
  imageUrl: string;
}

export interface TourPackageDetailsProps extends TourPackageProps {
  id: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  description: string;
  inclusions: Array<{
    category: string;
    items: string[];
  }>;
  exclusions: string[];
  itinerary: Array<{
    id: number | string;
    day: string | number; 
    title: string;
    description: string;
  }>;
  gallery: string[];
  tourOptions: Array<{
    startDate?: string;
    endDate?: string;
    prices: {
      adult: number;
      couple: number;
    };
  }>;
  mapUrl: string; 
  status: string;
}

export interface TourOptionWithQuantityProp {
  startDate: string; 
  endDate: string;   
  prices: {
    adult: number;  
    couple: number;
  };
  quantities: {
    adult: number;   
    couple: number;  
  };
}

export interface GalleryItem {
   id: string
   title: string
   slug: string
    category: "tour" | "event"
    gallery: string[]
}