"use server";

import { MONTHS } from "@/content";
import { Prisma } from "@/lib/prisma";
import { TourPackageProps } from "@/type";
import { Prisma as PrismaClient } from "@prisma/client";

interface TourPackageFilter {
  limit?: number | undefined;
  searchOptions?: {
    destination?: string | undefined;
    month?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
  };
}

const defaultFilter: TourPackageFilter = {
  limit: undefined,
};

export const getTourPackages = async ({
  limit,
  searchOptions,
}: TourPackageFilter = defaultFilter) => {
  const options: PrismaClient.TourPackageFindManyArgs = {
    take: limit,
    where: {},
    include: {
      location: true,
      tourPackageOptions: true,
    },
  };

  if (searchOptions) {
    let { destination, month, startDate, endDate } = searchOptions;

    if (destination) {
      let [country, city] = destination.split(",");

      country = country.trim();

      if (city) {
        city = city.trim();
      }

      if (country && city) {
        options.where!.location = {
          country,
          city,
        };
      } else {
        options.where!.location = { country };
      }
    }

    if (month) {
      const monthIndex = MONTHS.findIndex(
        (m) => m.toLowerCase() == month?.toLowerCase(),
      );

      if (monthIndex) {
        const year = new Date().getFullYear();

        startDate = new Date(`${year}-${month}-01`);
        endDate = new Date(year, monthIndex + 1, 0);
      }
    }

    options.where!.tourPackageOptions = {
      some: {},
    };

    if (startDate && endDate) {
      options.where!.tourPackageOptions.some! = {
        startDate: { gte: startDate },
        endDate: { lte: endDate },
      };
    } else {
      if (startDate) {
        options.where!.tourPackageOptions.some!.startDate = {
          equals: startDate,
        };
      }

      if (endDate) {
        options.where!.tourPackageOptions.some!.endDate = { equals: endDate };
      }
    }
  }

  const packages = await Prisma.tourPackage.findMany(options);

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

        let label: string;

        if (country && city) {
          label = `${country}, ${city}`;
        } else {
          label = `${country}`;
        }

        return { country, city, label };
      }
      return { country: "", city: "", label: "" }; // Avoid 'null' values
    })
    .filter(({ label }) => label != "");

  return fmttedLocations;
};
