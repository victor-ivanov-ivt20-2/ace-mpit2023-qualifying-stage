/*
  Warnings:

  - You are about to drop the column `BusnessmanId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "BusnessmanId",
ADD COLUMN     "busnessmanId" TEXT;
