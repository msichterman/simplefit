import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    difficulty: z.literal(true).optional(),
    sets: z.literal(true).optional(),
    reps: z.literal(true).optional(),
    rest: z.literal(true).optional(),
    exampleLink: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const ExerciseMaxAggregateInputObjectSchema = Schema;
