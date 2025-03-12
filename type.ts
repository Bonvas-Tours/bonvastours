import { Location, TourPackage, TourPackageOption } from "@prisma/client"

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

export interface TourPackageProps extends TourPackage {
  location: Location;
  startDate: string;
  endDate: string;
  tourPackageOptions: TourPackageOption[];
}

export interface TourPackageDetailsProps extends TourPackageProps {}

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


export interface City {
    geonameId: number;
    name: string;
}

export interface Country {
    cca2: string;
    name: {
        common: string;
    };
}
