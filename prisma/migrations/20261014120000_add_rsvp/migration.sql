-- CreateTable
CREATE TABLE "RsvpEvent" (
    "slug" TEXT NOT NULL,
    "priorityCapacity" INTEGER NOT NULL DEFAULT 20,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RsvpEvent_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Rsvp" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventSlug" TEXT NOT NULL,
    "passNumber" INTEGER NOT NULL,
    "priority" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "partySize" INTEGER NOT NULL DEFAULT 1,
    "marketingConsent" BOOLEAN NOT NULL DEFAULT false,
    "consentText" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "checkedInAt" TIMESTAMP(3),

    CONSTRAINT "Rsvp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rsvp_eventSlug_passNumber_key" ON "Rsvp"("eventSlug", "passNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Rsvp_eventSlug_email_key" ON "Rsvp"("eventSlug", "email");

-- CreateIndex
CREATE INDEX "Rsvp_eventSlug_createdAt_idx" ON "Rsvp"("eventSlug", "createdAt");

-- AddForeignKey
ALTER TABLE "Rsvp" ADD CONSTRAINT "Rsvp_eventSlug_fkey" FOREIGN KEY ("eventSlug") REFERENCES "RsvpEvent"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
