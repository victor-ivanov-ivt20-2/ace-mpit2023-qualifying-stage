/*
  Warnings:

  - You are about to drop the column `People` on the `Request` table. All the data in the column will be lost.
  - Added the required column `people` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Tenant_userId_key";

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "People",
ADD COLUMN     "people" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Information" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "secondname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passport" TEXT,
    "inn" TEXT,

    CONSTRAINT "Information_pkey" PRIMARY KEY ("id")
);
