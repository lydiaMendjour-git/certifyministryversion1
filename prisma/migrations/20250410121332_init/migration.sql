-- CreateTable
CREATE TABLE "Diplome" (
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

    CONSTRAINT "Diplome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diplome_diplomaHash_key" ON "Diplome"("diplomaHash");
