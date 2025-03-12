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
