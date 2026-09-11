import { PrismaClient } from '../generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.event.upsert({
    where: { slug: 'issc' },
    update: { isCurrent: true },
    create: {
      slug: 'issc',
      status: 'PAST',
      isCurrent: true,
      title: 'ISSC Exclusive Event Offer',
      location: null,
      partnerName: 'ISSC',
      partnerLogoUrl: '/Images/Nour Logo.png',

      heroEyebrow: '✦ Welcome, ISSC Guest — Exclusive Event Offer',
      heroHeadline: 'Your Will.',
      // Note: the original page's third headline segment ("Complete It Today.")
      // is folded into the accent here since the schema only supports two segments.
      heroHeadlineAccent: 'Your Vault.',
      heroSubcopy:
        "Don't just leave a Will. Leave a complete plan. Because you're here with us today, your full estate protection package is **$275** instead of $350 — available only while you're at this event.",
      heroBadges: ['Update From Your Phone', 'Private & Secure', 'You Control Who Sees What'],
      trustBarItems: ['Scholar Verified', 'Licensed Canadian Lawyers', 'Ontario Compliant', 'Bank-Level Encryption'],

      offers: [
        {
          name: 'Vault Subscription',
          tagline: 'Start today, organize your assets, and create a basic Will template when ready.',
          featured: true,
          badge: 'Saturday Only',
          priceWas: '$8/mo',
          price: '$7.99',
          priceNote: '/month',
          features: [
            'Basic Will Template (Free)',
            'Private secure Vault — all 4 branches',
            'Unlimited updates any time',
            '1 bonus month for Saturday attendees',
          ],
          ctaLabel: 'Claim Subscription — $7.99/mo →',
          ctaPlan: 'bridge',
          micro: 'Cancel anytime.',
        },
        {
          name: 'Premium Individual',
          tagline:
            'A dedicated expert reviews your case, start to finish — everything drafted, scholar-reviewed, and finalized by licensed Canadian lawyers.',
          featured: false,
          price: '$275',
          priceCompareText: 'instead of $350',
          features: [
            'Islamic Last Will & Testament',
            'PoAs & Minor Guardianship',
            'Scholar & Legal Review',
            '12 months Vault included',
          ],
          ctaLabel: 'Get Protected — $275 →',
          ctaPlan: 'full',
        },
        {
          name: 'Premium Family',
          tagline: 'Comprehensive protection for both you and your spouse. Two full applications.',
          featured: false,
          price: '$500',
          priceCompareText: 'instead of $700',
          features: [
            '2x Islamic Wills & PoAs',
            'Minor Guardianship designations',
            'Full Expert & Legal Review',
            '12 months Vault for both',
          ],
          ctaLabel: 'Get Family Plan — $500 →',
          ctaPlan: 'family',
        },
      ],

      packageParts: [
        {
          icon: 'scroll',
          title: 'The Islamic Last Will',
          copy: 'Distribute your wealth according to Shariah, honour charitable intentions, and legally map your final wishes.',
        },
        {
          icon: 'usersThree',
          title: 'Minor Guardianship',
          copy: 'Ensure your minor children are raised by the people you trust who share your Islamic values.',
        },
        {
          icon: 'bank',
          title: 'PoA for Property',
          copy: 'Designate a trusted person to manage your finances, bank accounts, and business if you become medically incapacitated.',
        },
        {
          icon: 'firstAidKit',
          title: 'PoA for Personal Care',
          copy: 'Legally appoint someone to make critical medical, healthcare, and life-support decisions on your behalf if you cannot.',
        },
      ],

      howItWorks: [
        { title: 'Create', description: 'Complete your guided application' },
        { title: 'Review', description: 'Move through the review process' },
        { title: 'Finalize', description: 'Your documents are drafted and finalized by Canadian lawyers' },
      ],

      helpPhone: '+1 (877) 416-9455',
      helpEmail: 'info@themuslimwill.com',

      metaTitle: 'Exclusive Event Offer — ISSC Guests | Muslim Will',
      metaDescription:
        "You're at the Muslim Will table today. Complete your Islamic Will, Vault, and Powers of Attorney with an exclusive event rate — guided, scholar-reviewed, and lawyer-finalized.",
    },
  });

  console.log('Seeded ISSC event.');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
