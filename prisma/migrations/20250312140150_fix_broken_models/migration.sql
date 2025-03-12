/*
  Warnings:

  - You are about to drop the column `tourPackageId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `TourPackageOption` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `TourPackageOption` table. All the data in the column will be lost.
  - Added the required column `adultPrice` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childrenPrice` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `couplePrice` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationDays` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TourPackageOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_tourPackageId_fkey";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "tourPackageId";

-- AlterTable
ALTER TABLE "TourPackage" ADD COLUMN     "locationId" INTEGER;

-- AlterTable
ALTER TABLE "TourPackageOption" DROP COLUMN "name",
DROP COLUMN "price",
ADD COLUMN     "adultPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "childrenPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "couplePrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "durationDays" INTEGER NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "TourPackage" ADD CONSTRAINT "TourPackage_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
