/*
  Warnings:

  - You are about to drop the column `addressId` on the `Request` table. All the data in the column will be lost.
  - Added the required column `address` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "addressId",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(9,2) NOT NULL;
