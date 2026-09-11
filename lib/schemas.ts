import { z } from 'zod';

export const PACKAGE_ICON_KEYS = ['scroll', 'usersThree', 'bank', 'firstAidKit', 'checkCircle'] as const;
export type PackageIconKey = (typeof PACKAGE_ICON_KEYS)[number];

export const OfferSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  featured: z.boolean().default(false),
  badge: z.string().optional(),
  priceWas: z.string().optional(),
  price: z.string().min(1),
  priceNote: z.string().optional(),
  priceCompareText: z.string().optional(),
  features: z.array(z.string().min(1)).min(1),
  ctaLabel: z.string().min(1),
  ctaPlan: z.string().min(1),
  micro: z.string().optional(),
});
export type Offer = z.infer<typeof OfferSchema>;

export const PackagePartSchema = z.object({
  icon: z.enum(PACKAGE_ICON_KEYS),
  title: z.string().min(1),
  copy: z.string().min(1),
});
export type PackagePart = z.infer<typeof PackagePartSchema>;

export const StepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});
export type Step = z.infer<typeof StepSchema>;

export const EventStatusSchema = z.enum(['DRAFT', 'UPCOMING', 'PAST']);

const EventFieldsSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase, alphanumeric, hyphen-separated')
    .optional(),
  status: EventStatusSchema.default('DRAFT'),

  title: z.string().min(1),
  eventDate: z.coerce.date().optional().nullable(),
  location: z.string().optional().nullable(),
  partnerName: z.string().optional().nullable(),
  partnerLogoUrl: z.string().optional().nullable(),

  heroEyebrow: z.string().optional().nullable(),
  heroHeadline: z.string().min(1),
  heroHeadlineAccent: z.string().optional().nullable(),
  heroSubcopy: z.string().optional().nullable(),
  heroBadges: z.array(z.string()).default([]),
  trustBarItems: z.array(z.string()).default([]),

  offers: z.array(OfferSchema).default([]),
  packageParts: z.array(PackagePartSchema).default([]),
  howItWorks: z.array(StepSchema).default([]),

  helpPhone: z.string().optional().nullable(),
  helpEmail: z.string().optional().nullable(),

  metaTitle: z.string().optional().nullable(),
  metaDescription: z.string().optional().nullable(),
  ogImageUrl: z.string().optional().nullable(),
});

export const EventCreateSchema = EventFieldsSchema;
export const EventUpdateSchema = EventFieldsSchema.partial({ title: true, heroHeadline: true });

export const LoginSchema = z.object({
  password: z.string().min(1),
});

export const MediaTypeSchema = z.enum(['IMAGE', 'VIDEO']);

export const MediaCreateSchema = z.object({
  eventId: z.string().min(1),
  type: MediaTypeSchema,
  url: z.string().url(),
  thumbnailUrl: z.string().url().optional().nullable(),
  publicId: z.string().min(1),
  caption: z.string().optional().nullable(),
});

export const MediaUpdateSchema = z.object({
  caption: z.string().optional().nullable(),
  order: z.number().int().optional(),
});
