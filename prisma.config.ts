import { config as loadEnv } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

loadEnv({ path: '.env.local' });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    // Migrations need a direct (unpooled) connection: Neon's pooled endpoint
    // (PgBouncer, transaction mode) doesn't reliably hold the session-level
    // advisory lock `prisma migrate deploy` requires. The app itself still
    // uses the pooled DATABASE_URL at runtime via lib/db.ts.
    url: env('DIRECT_DATABASE_URL'),
  },
});
