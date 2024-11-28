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