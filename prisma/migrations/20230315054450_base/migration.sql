-- CreateEnum
CREATE TYPE "RentType" AS ENUM ('apartment', 'house', 'hotel');

-- CreateEnum
CREATE TYPE "PlaceType" AS ENUM ('entirely', 'rooms', 'bed');

-- CreateEnum
CREATE TYPE "RentTime" AS ENUM ('day', 'month');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tenantId" TEXT;

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phone" DECIMAL(11,0) NOT NULL,
    "firstname" TEXT NOT NULL,
    "secondname" TEXT,
    "lastname" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantsProperty" (
    "id" SERIAL NOT NULL,
    "tenantId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    "placeType" "PlaceType" NOT NULL,
    "rentTime" "RentTime" NOT NULL,
    "price" DECIMAL(9,2) NOT NULL,
    "rentTypeId" INTEGER NOT NULL,
    "rentType" "RentType" NOT NULL,

    CONSTRAINT "TenantsProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Россия',
    "region" TEXT NOT NULL DEFAULT 'Республика саха (Якутия)',
    "city" TEXT NOT NULL,
    "district" TEXT,
    "street" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "floor" SMALLINT NOT NULL,
    "rooms" SMALLINT NOT NULL,
    "apartmentNumber" SMALLINT NOT NULL,
    "size" INTEGER NOT NULL,
    "apartmentType" VARCHAR(25),

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "floor" SMALLINT NOT NULL,
    "rooms" SMALLINT NOT NULL,
    "beds" SMALLINT NOT NULL,
    "apartmentNumber" SMALLINT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House" (
    "id" SERIAL NOT NULL,
    "floorNumbers" SMALLINT NOT NULL,
    "rooms" SMALLINT NOT NULL,
    "houseType" VARCHAR(25),
    "houseSize" INTEGER NOT NULL,
    "landSize" INTEGER NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_userId_key" ON "Tenant"("userId");

-- AddForeignKey
ALTER TABLE "TenantsProperty" ADD CONSTRAINT "TenantsProperty_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
