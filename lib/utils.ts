import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalizeTitle = (slug: string) => {
  return slug
    .split('-')                   // Split the slug into words based on the hyphen
    .map((word) => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter of each word
    )
    .join(' ');                   // Join the words back with a space
}

export function formatLocation(location: { country: string; city?: string; region: string }) {
  const { country, city, region } = location;
  
    // Check if region is not empty or undefined
    if (region.trim()) {
        return city ? `${country}, ${city}, ${region}` : `${country}, ${region}`;
    }
    // Fallback if region is empty
    return city ? `${country}, ${city}` : country;
}


export function calculateDuration(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const durationInMs = end.getTime() - start.getTime();
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));

    return durationInDays;
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}


export function interpretCurrency(currencyCode: string): string {
  const currencySymbols: Record<string, string> = {
    USD: '$',  // United States Dollar
    EUR: '€',  // Euro
    GBP: '£',  // British Pound
    JPY: '¥',  // Japanese Yen
    INR: '₹',  // Indian Rupee
    CNY: '¥',  // Chinese Yuan
    CAD: 'C$', // Canadian Dollar
    AUD: 'A$', // Australian Dollar
    ZAR: 'R',  // South African Rand
    GHS: '₵',  // Ghanaian Cedi
    NGN: '₦',  // Nigerian Naira
    BRL: 'R$', // Brazilian Real
    RUB: '₽',  // Russian Ruble
    KRW: '₩',  // South Korean Won
    MXN: 'Mex$', // Mexican Peso
    CHF: 'CHF', // Swiss Franc
  };

  return currencySymbols[currencyCode?.toUpperCase()] || currencyCode;
}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};


