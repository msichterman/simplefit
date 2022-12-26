import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    authorId: z.string().optional().nullable(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutCreateManyInputObjectSchema = Schema;
