import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VerificationTokenArgs> = z.object({}).strict();

export const VerificationTokenArgsObjectSchema = Schema;
