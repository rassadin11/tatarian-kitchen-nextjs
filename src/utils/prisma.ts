import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg';
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPostgresAdapter({ connectionString });
export const prisma = new PrismaClient({ adapter });
