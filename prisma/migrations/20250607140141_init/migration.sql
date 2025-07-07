-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('DELUXE', 'OCEAN_VIEW', 'EXECUTIVE', 'PRESIDENTIAL', 'JUNIOR', 'FAMILY');

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "checkInDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkoutDate" TIMESTAMP(3) NOT NULL,
    "roomType" "RoomType" NOT NULL,
    "adult" TEXT NOT NULL,
    "childeren" TEXT NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);
