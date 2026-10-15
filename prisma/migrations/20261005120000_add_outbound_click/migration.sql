-- CreateTable
CREATE TABLE "OutboundClick" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "destination" TEXT NOT NULL,
    "sourcePage" TEXT,
    "linkText" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmContent" TEXT,
    "utmTerm" TEXT,
    "fbclid" TEXT,
    "landingPage" TEXT,
    "clarityUserId" TEXT,
    "device" TEXT,
    "country" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "OutboundClick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OutboundClick_createdAt_idx" ON "OutboundClick"("createdAt");
