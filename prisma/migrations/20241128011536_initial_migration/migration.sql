-- CreateTable
CREATE TABLE "url" (
    "id" SERIAL NOT NULL,
    "originalUrl" VARCHAR(191) NOT NULL,
    "shortUrl" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    "visits" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortUrl_key" ON "url"("shortUrl");
