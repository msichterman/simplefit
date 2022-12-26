import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateManyAuthorInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutCreateManyAuthorInputObjectSchema = Schema;
