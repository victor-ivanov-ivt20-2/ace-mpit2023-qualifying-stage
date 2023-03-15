-- AlterTable
ALTER TABLE "User" ADD COLUMN     "BusnessmanId" TEXT;

-- CreateTable
CREATE TABLE "Busnessman" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "inn" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Busnessman_pkey" PRIMARY KEY ("id")
);
