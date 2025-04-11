/*
  Warnings:

  - You are about to drop the `Diplome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Diplome";

-- CreateTable
CREATE TABLE "Diploma" (
    "id" SERIAL NOT NULL,
    "diplomaHash" TEXT NOT NULL,
    "etablissement" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "diplomaTitle" TEXT NOT NULL,
    "diplomaType" TEXT NOT NULL,
    "dateOfIssue" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Diploma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diploma_diplomaHash_key" ON "Diploma"("diplomaHash");
