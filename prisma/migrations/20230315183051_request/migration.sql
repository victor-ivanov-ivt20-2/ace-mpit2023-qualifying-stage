-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    "People" INTEGER NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "finish_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
