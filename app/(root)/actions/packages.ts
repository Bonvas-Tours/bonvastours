"use server";

import { Prisma } from "@/lib/prisma";
import { TourPackageProps } from "@/type";

export const getTourPackages = async (
  limit: number | undefined = undefined,
) => {
  const packages = await Prisma.tourPackage.findMany({
    take: limit,
    include: {
      location: true,
      tourPackageOptions: true,
    },
  });

  const fmttedPackages = packages.map((pkg) => ({
    ...pkg,
    dailyPrice: parseFloat(pkg.dailyPrice.toString()),
  }));

  return fmttedPackages as unknown as TourPackageProps[];
};

export const getDestinations = async () => {
  const locations = await Prisma.location.findMany();

  const uniqueLocations = new Set();

  const fmttedLocations = locations
    .map(({ country, city }) => {
      const combination = `${country}-${city}`;
      if (!uniqueLocations.has(combination)) {
        uniqueLocations.add(combination);
        return { country, city, label: `${country}, ${city}` };
      }
      return { country: "", city: "", label: "" }; // Avoid 'null' values
    })
    .filter(({ label }) => label != "");

  return fmttedLocations;
};
